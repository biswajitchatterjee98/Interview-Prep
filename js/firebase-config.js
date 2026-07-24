/**
 * Firebase web config (client-side).
 *
 * The apiKey here is a *browser* key — Firebase expects it in frontend code.
 * Real protection is: Firestore rules + Auth + API key HTTP-referrer restrictions
 * in Google Cloud Console (not by hiding this file).
 *
 * If GitHub secret scanning alerts on apiKey: close as false positive / allowed,
 * after restricting the key to your domains (see README note in chat / console).
 */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkt0llInARBRNyyW8gGRnOOBjuirhNtWs",
  authDomain: "interview-prep-56e63.firebaseapp.com",
  projectId: "interview-prep-56e63",
  storageBucket: "interview-prep-56e63.firebasestorage.app",
  messagingSenderId: "445501242552",
  appId: "1:445501242552:web:e3083ccb317f93bc17884d",
  measurementId: "G-QXYFP0MNVG",
};

function isFirebaseConfigured() {
  return Boolean(
    FIREBASE_CONFIG &&
      FIREBASE_CONFIG.apiKey &&
      !String(FIREBASE_CONFIG.apiKey).startsWith("YOUR_")
  );
}
