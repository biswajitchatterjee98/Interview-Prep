/**
 * Sync local progress (study + attempts) to Firestore for the signed-in user.
 * Doc: users/{uid}  fields: study, attempts, updatedAt
 */

const CLOUD_PUSH_MS = 700;
const PROGRESS_UID_KEY = "sweProgressUid";
let cloudPushTimer = null;
let cloudPullInFlight = null;

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
    if (key && (key.startsWith(STUDY_PREFIX) || key.startsWith(ATTEMPT_PREFIX))) {
      toRemove.push(key);
    }
  }
  for (const key of toRemove) localStorage.removeItem(key);
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
  return { study, attempts, updatedAt: new Date().toISOString() };
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
  return {
    study,
    attempts,
    updatedAt: newerIso(local.updatedAt, cloud.updatedAt) || new Date().toISOString(),
  };
}

function newerIso(a, b) {
  const ta = Date.parse(a || 0) || 0;
  const tb = Date.parse(b || 0) || 0;
  if (!ta && !tb) return undefined;
  return ta >= tb ? a : b;
}

async function pullCloudProgress() {
  const uid = currentUid();
  if (!uid) return null;
  if (cloudPullInFlight) return cloudPullInFlight;

  cloudPullInFlight = (async () => {
    bindProgressToUser(uid);
    const ref = userProgressRef(uid);
    const doc = await ref.get();
    const local = collectLocalProgress();
    if (!doc.exists) {
      if (Object.keys(local.study).length || Object.keys(local.attempts).length) {
        await ref.set(local);
      }
      return local;
    }
    const cloud = doc.data() || {};
    const merged = mergeProgress(local, {
      study: cloud.study || {},
      attempts: cloud.attempts || {},
      updatedAt: cloud.updatedAt,
    });
    applyLocalProgress(merged);
    await ref.set(merged);
    return merged;
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
  const snap = collectLocalProgress();
  // Full replace — merge:true would resurrect deleted attempts.
  await userProgressRef(uid).set(snap);
  return snap;
}

function scheduleCloudPush() {
  if (!currentUid()) return;
  clearTimeout(cloudPushTimer);
  cloudPushTimer = setTimeout(() => {
    pushCloudProgress().catch((err) => console.error("Cloud push failed", err));
  }, CLOUD_PUSH_MS);
}

function notifyProgressChanged() {
  scheduleCloudPush();
}
