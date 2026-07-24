/** Firebase Auth — email/password, session restored across devices via Firebase. */

function initFirebaseApp() {
  if (typeof firebase === "undefined") {
    throw new Error("Firebase SDK not loaded");
  }
  if (!isFirebaseConfigured()) return null;
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  return firebase.app();
}

function waitForAuthUser() {
  initFirebaseApp();
  if (!isFirebaseConfigured()) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    const auth = firebase.auth();
    const existing = auth.currentUser;
    if (existing) {
      resolve(existing);
      return;
    }
    const unsub = auth.onAuthStateChanged((user) => {
      unsub();
      resolve(user || null);
    });
  });
}

function isAuthenticated() {
  try {
    return Boolean(isFirebaseConfigured() && firebase.auth().currentUser);
  } catch {
    return false;
  }
}

async function login(email, password) {
  initFirebaseApp();
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured yet. Add your keys to js/firebase-config.js");
  }
  const cred = await firebase.auth().signInWithEmailAndPassword(String(email).trim(), password);
  if (typeof pullCloudProgress === "function") {
    await pullCloudProgress();
  }
  return cred.user;
}

async function register(email, password) {
  initFirebaseApp();
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured yet. Add your keys to js/firebase-config.js");
  }
  const cred = await firebase
    .auth()
    .createUserWithEmailAndPassword(String(email).trim(), password);
  if (typeof pushCloudProgress === "function") {
    await pushCloudProgress();
  }
  return cred.user;
}

async function logout() {
  if (!isFirebaseConfigured()) return;
  initFirebaseApp();
  await firebase.auth().signOut();
}

/** Protect a page: wait for Firebase session, pull cloud progress, else redirect to login. */
function requireAuth() {
  if (!isFirebaseConfigured()) {
    const next = encodeURIComponent(location.pathname.split("/").pop() || "hub.html");
    location.replace(`index.html?next=${next}&setup=1`);
    return Promise.resolve(null);
  }
  initFirebaseApp();
  return waitForAuthUser().then(async (user) => {
    if (!user) {
      const next = encodeURIComponent(location.pathname.split("/").pop() || "hub.html");
      location.replace(`index.html?next=${next}`);
      return null;
    }
    if (typeof pullCloudProgress === "function") {
      try {
        await pullCloudProgress();
      } catch (err) {
        console.error("Cloud pull failed", err);
      }
    }
    return user;
  });
}

function authErrorMessage(err) {
  const code = err && err.code;
  if (code === "auth/invalid-email") return "Enter a valid email address.";
  if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential") {
    return "Invalid email or password.";
  }
  if (code === "auth/email-already-in-use") return "That email already has an account. Sign in instead.";
  if (code === "auth/weak-password") return "Password should be at least 6 characters.";
  if (code === "auth/too-many-requests") return "Too many attempts. Try again later.";
  if (err && err.message && err.message.includes("not configured")) return err.message;
  return "Could not sign in. Check your connection and try again.";
}
