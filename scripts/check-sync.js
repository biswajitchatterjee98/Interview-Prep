/** Self-check for cloud progress merge (no Firebase network). */
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const store = new Map();
const localStorage = {
  getItem(key) {
    return store.has(key) ? store.get(key) : null;
  },
  setItem(key, value) {
    store.set(key, String(value));
  },
  removeItem(key) {
    store.delete(key);
  },
  get length() {
    return store.size;
  },
  key(i) {
    return [...store.keys()][i] || null;
  },
};

const context = {
  localStorage,
  console,
  firebase: {
    apps: [{}],
    auth: () => ({ currentUser: { uid: "u1" } }),
    firestore: () => ({
      collection: () => ({
        doc: () => ({
          get: async () => ({ exists: false, data: () => null }),
          set: async () => {},
        }),
      }),
    }),
  },
};

vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "../js/storage.js"), "utf8"), context);
vm.runInContext(
  fs.readFileSync(path.join(__dirname, "../js/sync.js"), "utf8") +
    "\nthis.mergeProgress=mergeProgress;this.collectLocalProgress=collectLocalProgress;this.applyLocalProgress=applyLocalProgress;this.clearLocalProgress=clearLocalProgress;",
  context
);

const { mergeProgress, collectLocalProgress, applyLocalProgress, clearLocalProgress } = context;
const STUDY_PREFIX = "sweStudy:";
const ATTEMPT_PREFIX = "sweAttempt:";

const merged = mergeProgress(
  {
    study: { arrays: { revealed: { "1": true }, updatedAt: "2026-01-01T00:00:00.000Z" } },
    attempts: {
      "mcq:arrays:1": { submitted: false, answers: { q1: 0 }, updatedAt: "2026-01-02T00:00:00.000Z" },
    },
  },
  {
    study: { arrays: { revealed: { "2": true }, updatedAt: "2026-01-01T12:00:00.000Z" } },
    attempts: {
      "mcq:arrays:1": { submitted: true, answers: { q1: 1 }, updatedAt: "2026-01-01T00:00:00.000Z" },
    },
  }
);

assert.strictEqual(JSON.stringify(merged.study.arrays.revealed), JSON.stringify({ "1": true, "2": true }));
assert.strictEqual(merged.attempts["mcq:arrays:1"].submitted, false); // newer local draft wins by updatedAt

applyLocalProgress(merged);
assert.ok(localStorage.getItem(STUDY_PREFIX + "arrays"));
assert.ok(localStorage.getItem(ATTEMPT_PREFIX + "mcq:arrays:1"));

const collected = collectLocalProgress();
assert.ok(collected.study.arrays);
assert.ok(collected.attempts["mcq:arrays:1"]);

clearLocalProgress();
assert.strictEqual(localStorage.getItem(STUDY_PREFIX + "arrays"), null);
assert.strictEqual(localStorage.getItem(ATTEMPT_PREFIX + "mcq:arrays:1"), null);

// Post-login return URL must keep query (and optional hash).
function safeNext(next) {
  const match = String(next || "hub.html").match(/^([a-z0-9.-]+\.html)(\?[^#]*)?(#.*)?$/i);
  return match ? match[1] + (match[2] || "") + (match[3] || "") : "hub.html";
}
assert.strictEqual(safeNext("mcq.html?topic=arrays&section=1"), "mcq.html?topic=arrays&section=1");
assert.strictEqual(safeNext("SWE.html#arrays"), "SWE.html#arrays");
assert.strictEqual(safeNext("javascript:alert(1)"), "hub.html");

console.log("check-sync: ok");
