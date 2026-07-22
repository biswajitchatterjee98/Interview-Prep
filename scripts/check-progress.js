/** Self-check for progress summary helpers (Node, mocked localStorage). */
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
};

const context = { localStorage, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "../js/storage.js"), "utf8"), context);

const {
  saveAttempt,
  markStudyRevealed,
  studyTopicProgress,
  summarizeStudyProgress,
  summarizeMcqSections,
  summarizeCodingSections,
  summarizeTestSections,
  mcqTopicSectionProgress,
  mcqTopicQuestionProgress,
  codingTopicProblemProgress,
} = context;

const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/topics.json"), "utf8"));
const studyMeta = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/study-meta.json"), "utf8"));

assert.strictEqual(studyMeta.topics.length, 32);
assert.strictEqual(studyMeta.total, 1080);

let study = summarizeStudyProgress(studyMeta);
assert.strictEqual(study.done, 0);
assert.strictEqual(study.total, 1080);
assert.strictEqual(study.left, 1080);

markStudyRevealed("arrays", 1);
markStudyRevealed("arrays", 2);
const arraysProg = studyTopicProgress("arrays", 30);
assert.strictEqual(arraysProg.done, 2);
assert.strictEqual(arraysProg.left, 28);
assert.strictEqual(arraysProg.state, "draft");

study = summarizeStudyProgress(studyMeta);
assert.strictEqual(study.done, 2);
assert.strictEqual(study.left, 1078);

let mcq = summarizeMcqSections(catalog);
assert.strictEqual(mcq.total, 32 * 3);
assert.strictEqual(mcq.done, 0);

saveAttempt("mcq", "arrays", 1, {
  answers: { q1: 0 },
  submitted: true,
  scoreCorrect: 18,
  scoreTotal: 20,
});
mcq = summarizeMcqSections(catalog);
assert.strictEqual(mcq.done, 1);
assert.strictEqual(mcqTopicSectionProgress("arrays", catalog).done, 1);
assert.strictEqual(mcqTopicQuestionProgress("arrays", catalog).done, 20);
assert.strictEqual(mcqTopicQuestionProgress("arrays", catalog).total, 50);

let coding = summarizeCodingSections(catalog);
assert.strictEqual(coding.total, 12 * 3 + 3); // 12 DSA × 3 + SQL × 3
assert.strictEqual(coding.done, 0);

saveAttempt("coding", "arrays", 1, {
  code: {
    p1: { submitted: true },
    p2: { submitted: true },
    p3: { submitted: true },
  },
});
coding = summarizeCodingSections(catalog);
assert.strictEqual(coding.done, 1);
assert.strictEqual(codingTopicProblemProgress("arrays", catalog).sectionsDone, 1);
assert.strictEqual(codingTopicProblemProgress("arrays", catalog).done, 3);

const test = summarizeTestSections(catalog);
assert.strictEqual(test.done, mcq.done + coding.done);
assert.strictEqual(test.total, mcq.total + coding.total);

console.log("check-progress: ok");
