/**
 * Validate CS-core MCQ banks (Phase 4).
 * Run: node scripts/check-mcq-cs.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "data", "mcq");
const topics = [
  "operating-systems",
  "computer-networks",
  "dbms",
  "sql",
  "oops",
];

let errors = 0;
for (const slug of topics) {
  const file = path.join(root, `${slug}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  if (data.slug !== slug) {
    console.error("slug", slug);
    errors++;
  }
  if (data.sections.length !== 3) {
    console.error("sections", slug);
    errors++;
  }
  data.sections.forEach((sec, i) => {
    const expect = [20, 20, 10][i];
    if (sec.questions.length !== expect) {
      console.error(slug, "s" + (i + 1), sec.questions.length);
      errors++;
    }
    sec.questions.forEach((q, j) => {
      const id = `${slug}-s${i + 1}-q${String(j + 1).padStart(2, "0")}`;
      if (q.id !== id) {
        console.error("id", q.id, id);
        errors++;
      }
      if (!q.options || q.options.length !== 4 || new Set(q.options).size !== 4) {
        console.error("opts", q.id);
        errors++;
      }
      if (![0, 1, 2, 3].includes(q.correctIndex)) {
        console.error("ci", q.id);
        errors++;
      }
    });
  });
}

if (errors) {
  console.error("check-mcq-cs FAILED", errors);
  process.exit(1);
}
console.log("check-mcq-cs: ok —", topics.length, "topics × 50 =", topics.length * 50);
