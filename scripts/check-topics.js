/**
 * Phase 0 self-check: topic catalog counts.
 * Run: node scripts/check-topics.js
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data", "topics.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

const topics = data.topics;
const mcq = topics.filter((t) => t.hasMcq);
const coding = topics.filter((t) => t.hasCoding);
const sql = coding.filter((t) => t.slug === "sql");
const dsaCoding = coding.filter((t) => t.slug !== "sql");

console.assert(topics.length === 32, `expected 32 topics, got ${topics.length}`);
console.assert(mcq.length === 32, `expected 32 MCQ topics, got ${mcq.length}`);
console.assert(coding.length === 13, `expected 13 coding topics, got ${coding.length}`);
console.assert(dsaCoding.length === 12, `expected 12 DSA coding topics, got ${dsaCoding.length}`);
console.assert(sql.length === 1, "sql must be coding");
console.assert(
  JSON.stringify(data.mcqSectionSizes) === JSON.stringify([20, 20, 10]),
  "mcq sections"
);
console.assert(
  JSON.stringify(data.codingSectionSizesDefault) === JSON.stringify([3, 3, 2]),
  "coding default sections"
);
console.assert(
  JSON.stringify(data.codingSectionSizesSql) === JSON.stringify([10, 10, 5]),
  "sql sections"
);

const slugs = new Set();
for (const t of topics) {
  console.assert(!slugs.has(t.slug), `duplicate slug ${t.slug}`);
  slugs.add(t.slug);
}

console.log("check-topics: ok");
console.log(`  topics=${topics.length} mcq=${mcq.length} coding=${coding.length}`);
