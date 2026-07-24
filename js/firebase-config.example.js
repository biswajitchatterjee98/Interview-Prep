/**
 * Example only — copy to firebase-config.js and fill from Firebase Console.
 * Do not put production secrets that must stay private in the repo.
 * Firebase *web* apiKey is a public browser key; restrict it in Google Cloud.
 */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

function isFirebaseConfigured() {
  return Boolean(
    FIREBASE_CONFIG &&
      FIREBASE_CONFIG.apiKey &&
      !String(FIREBASE_CONFIG.apiKey).startsWith("YOUR_")
  );
}
