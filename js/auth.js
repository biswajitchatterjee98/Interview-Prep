/** Client-only demo auth. Not security — gates local study UI. */
const AUTH_KEY = "sweAuth";
const AUTH_USER = "Biswajit";
const AUTH_PASS = "820440";

function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

function login(username, password) {
  const userOk = username.trim() === AUTH_USER;
  const passOk = password === AUTH_PASS;
  if (!userOk || !passOk) return false;
  sessionStorage.setItem(AUTH_KEY, "1");
  return true;
}

function logout() {
  sessionStorage.removeItem(AUTH_KEY);
}

/** Redirect to login when session is missing. Call on protected pages. */
function requireAuth() {
  if (isAuthenticated()) return;
  const next = encodeURIComponent(location.pathname.split("/").pop() || "hub.html");
  location.replace(`index.html?next=${next}`);
}
