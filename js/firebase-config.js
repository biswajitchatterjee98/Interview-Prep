/**
 * Firebase web config for Interview-Prep (Spark).
 * Auth: Email/Password · Data: Firestore · Rules: firestore.rules
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
