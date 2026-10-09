/**
 * Sync local progress (study + attempts) to Firestore for the signed-in user.
 * Doc: users/{uid}  fields: study, attempts, updatedAt
 */

const CLOUD_PUSH_MS = 400;
const PULL_FRESH_MS = 12000;
const PROGRESS_UID_KEY = "sweProgressUid";
const PULL_STAMP_KEY = "sweProgressPulledAt";
const CGL_PROGRESS_KEY = "cgl-tier1-2026";
let cloudPushTimer = null;
let cloudPullInFlight = null;
/** Cloud `updatedAt` from the last successful pull/push — used to detect writes from other devices. */
let lastSeenCloudUpdatedAt = null;

function currentUid() {
  try {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  } catch {
    return null;
  }
}

function userProgressRef(uid) {
  return firebase.firestore().collection("users").doc(uid);
}

function clearLocalProgress() {
  const toRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (
      key &&
      (key.startsWith(STUDY_PREFIX) || key.startsWith(ATTEMPT_PREFIX) || key === CGL_PROGRESS_KEY)
    ) {
      toRemove.push(key);
    }
  }
  for (const key of toRemove) localStorage.removeItem(key);
  lastSeenCloudUpdatedAt = null;
  try {
    sessionStorage.removeItem(PULL_STAMP_KEY);
  } catch {
    /* ignore */
  }
}

function bindProgressToUser(uid) {
  const previous = localStorage.getItem(PROGRESS_UID_KEY);
  if (previous && previous !== uid) {
    clearLocalProgress();
  }
  localStorage.setItem(PROGRESS_UID_KEY, uid);
}

function collectLocalProgress() {
  const study = {};
  const attempts = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key) continue;
    const raw = localStorage.getItem(key);
    if (!raw) continue;
    try {
      if (key.startsWith(STUDY_PREFIX)) {
        study[key.slice(STUDY_PREFIX.length)] = JSON.parse(raw);
      } else if (key.startsWith(ATTEMPT_PREFIX)) {
        attempts[key.slice(ATTEMPT_PREFIX.length)] = JSON.parse(raw);
      }
    } catch {
      /* skip bad JSON */
    }
  }
  let cglTier1 = null;
  try {
    const raw = localStorage.getItem(CGL_PROGRESS_KEY);
    if (raw) cglTier1 = JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { study, attempts, cglTier1, updatedAt: new Date().toISOString() };
}

function applyLocalProgress(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return;
  const study = snapshot.study || {};
  const attempts = snapshot.attempts || {};
  for (const [slug, data] of Object.entries(study)) {
    localStorage.setItem(studyKey(slug), JSON.stringify(data));
  }
  for (const [id, data] of Object.entries(attempts)) {
    localStorage.setItem(ATTEMPT_PREFIX + id, JSON.stringify(data));
  }
  if (snapshot.cglTier1 && typeof snapshot.cglTier1 === "object") {
    localStorage.setItem(CGL_PROGRESS_KEY, JSON.stringify(snapshot.cglTier1));
  }
}

/** Union study reveals; prefer newer attempt by updatedAt. */
function mergeProgress(localSnap, cloudSnap) {
  const local = localSnap || { study: {}, attempts: {} };
  const cloud = cloudSnap || { study: {}, attempts: {} };
  const study = { ...(cloud.study || {}) };
  for (const [slug, localData] of Object.entries(local.study || {})) {
    const cloudData = study[slug];
    if (!cloudData) {
      study[slug] = localData;
      continue;
    }
    study[slug] = {
      revealed: {
        ...(cloudData.revealed || {}),
        ...(localData.revealed || {}),
      },
      updatedAt: newerIso(localData.updatedAt, cloudData.updatedAt),
    };
  }
  const attempts = { ...(cloud.attempts || {}) };
  for (const [id, localData] of Object.entries(local.attempts || {})) {
    const cloudData = attempts[id];
    if (!cloudData) {
      attempts[id] = localData;
      continue;
    }
    attempts[id] =
      Date.parse(localData.updatedAt || 0) >= Date.parse(cloudData.updatedAt || 0)
        ? localData
        : cloudData;
  }
  const cglTier1 = mergeCglProgress(local.cglTier1, cloud.cglTier1);
  return {
    study,
    attempts,
    cglTier1,
    updatedAt: newerIso(local.updatedAt, cloud.updatedAt) || new Date().toISOString(),
  };
}

function mergeCglProgress(localCgl, cloudCgl) {
  if (!localCgl && !cloudCgl) return null;
  if (!cloudCgl) return localCgl;
  if (!localCgl) return cloudCgl;
  const localTs = Date.parse(localCgl.updatedAt || 0) || 0;
  const cloudTs = Date.parse(cloudCgl.updatedAt || 0) || 0;
  return localTs >= cloudTs ? localCgl : cloudCgl;
}

function newerIso(a, b) {
  const ta = Date.parse(a || 0) || 0;
  const tb = Date.parse(b || 0) || 0;
  if (!ta && !tb) return undefined;
  return ta >= tb ? a : b;
}

function markPullFresh(uid) {
  try {
    sessionStorage.setItem(PULL_STAMP_KEY, `${uid}:${Date.now()}`);
  } catch {
    /* ignore */
  }
}

function isPullFresh(uid) {
  try {
    const raw = sessionStorage.getItem(PULL_STAMP_KEY) || "";
    const [stampUid, stamp] = raw.split(":");
    return stampUid === uid && Date.now() - Number(stamp || 0) < PULL_FRESH_MS;
  } catch {
    return false;
  }
}

/** Pull cloud progress. Pass `{ force: true }` after login so a new session always refreshes. */
async function pullCloudProgress(options) {
  const uid = currentUid();
  if (!uid) return null;
  if (cloudPullInFlight) return cloudPullInFlight;
  const force = options && options.force;
  // Skip repeat pulls on hub → study → SWE within a few seconds (login already synced).
  if (!force && isPullFresh(uid)) return collectLocalProgress();

  cloudPullInFlight = (async () => {
    bindProgressToUser(uid);
    const ref = userProgressRef(uid);
    const doc = await ref.get();
    const local = collectLocalProgress();
    if (!doc.exists) {
      if (Object.keys(local.study).length || Object.keys(local.attempts).length) {
        const snap = { ...local, updatedAt: new Date().toISOString() };
        await ref.set(snap);
        lastSeenCloudUpdatedAt = snap.updatedAt;
        markPullFresh(uid);
        return snap;
      }
      lastSeenCloudUpdatedAt = null;
      markPullFresh(uid);
      return local;
    }
    const cloud = doc.data() || {};
    const merged = mergeProgress(local, {
      study: cloud.study || {},
      attempts: cloud.attempts || {},
      cglTier1: cloud.cglTier1 || null,
      updatedAt: cloud.updatedAt,
    });
    applyLocalProgress(merged);
    const snap = { ...merged, updatedAt: new Date().toISOString() };
    await ref.set(snap);
    lastSeenCloudUpdatedAt = snap.updatedAt;
    markPullFresh(uid);
    return snap;
  })();

  try {
    return await cloudPullInFlight;
  } finally {
    cloudPullInFlight = null;
  }
}

async function pushCloudProgress() {
  const uid = currentUid();
  if (!uid) return null;
  const ref = userProgressRef(uid);
  const doc = await ref.get();
  if (doc.exists) {
    const cloud = doc.data() || {};
    const cloudTs = Date.parse(cloud.updatedAt || 0) || 0;
    const seenTs = Date.parse(lastSeenCloudUpdatedAt || 0) || 0;
    // Another device wrote since our last sync — merge before replacing.
    if (cloudTs > seenTs) {
      const merged = mergeProgress(collectLocalProgress(), {
        study: cloud.study || {},
        attempts: cloud.attempts || {},
        cglTier1: cloud.cglTier1 || null,
        updatedAt: cloud.updatedAt,
      });
      applyLocalProgress(merged);
    }
  }
  // Local is source of truth after optional merge so clears/deletes still stick.
  const snap = { ...collectLocalProgress(), updatedAt: new Date().toISOString() };
  await ref.set(snap);
  lastSeenCloudUpdatedAt = snap.updatedAt;
  return snap;
}

function scheduleCloudPush() {
  if (!currentUid()) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(() => {
    pushCloudProgress().catch((err) => console.error("Cloud push failed", err));
  }, CLOUD_PUSH_MS);
}

/** Debounced push by default; pass `{ immediate: true }` for clears/deletes. */
function notifyProgressChanged(options) {
  if (options && options.immediate) {
    clearTimeout(cloudPushTimer);
    if (!currentUid()) return;
    pushCloudProgress().catch((err) => console.error("Cloud push failed", err));
    return;
  }
  scheduleCloudPush();
}
