/** Role selection — config in data/roles.json; active role in sessionStorage. */
const ROLE_SESSION_KEY = "sweRole";
const ROLE_LAST_KEY = "sweLastRole";

async function loadRoles() {
  const response = await fetch("data/roles.json");
  if (!response.ok) throw new Error("Could not load roles.");
  const data = await response.json();
  if (!data.roles || !Array.isArray(data.roles)) {
    throw new Error("Invalid roles config.");
  }
  return data;
}

function getSelectedRole() {
  try {
    return sessionStorage.getItem(ROLE_SESSION_KEY) || "";
  } catch {
    return "";
  }
}

function getLastRole() {
  try {
    return localStorage.getItem(ROLE_LAST_KEY) || "";
  } catch {
    return "";
  }
}

function setSelectedRole(roleId) {
  if (!roleId) return;
  try {
    sessionStorage.setItem(ROLE_SESSION_KEY, roleId);
    localStorage.setItem(ROLE_LAST_KEY, roleId);
  } catch {
    /* ignore */
  }
}

function clearSelectedRole() {
  try {
    sessionStorage.removeItem(ROLE_SESSION_KEY);
  } catch {
    /* ignore */
  }
}

/** Append ?role= or &role= for downstream pages (filtering later). */
function withRole(href) {
  const role = getSelectedRole();
  if (!role) return href;
  const hashIdx = href.indexOf("#");
  const hash = hashIdx >= 0 ? href.slice(hashIdx) : "";
  const base = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const qIdx = base.indexOf("?");
  if (qIdx >= 0) {
    const params = new URLSearchParams(base.slice(qIdx + 1));
    if (!params.has("role")) params.set("role", role);
    return base.slice(0, qIdx) + "?" + params.toString() + hash;
  }
  return base + "?role=" + encodeURIComponent(role) + hash;
}

function hubHref() {
  return withRole("hub.html");
}

/** After auth: hub needs a role chosen this session; else role picker. */
function requireRole() {
  return requireAuth().then((user) => {
    if (!user) return null;
    if (!getSelectedRole()) {
      location.replace("roles.html");
      return null;
    }
    return user;
  });
}
