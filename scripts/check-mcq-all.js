/**
 * Validate all MCQ banks against topics.json (Phase 5 complete).
 * Run: node scripts/check-mcq-all.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, "data", "topics.json"), "utf8")
);
const mcqDir = path.join(root, "data", "mcq");
const expected = catalog.topics.filter((t) => t.hasMcq).map((t) => t.slug);

let errors = 0;
for (const slug of expected) {
  const file = path.join(mcqDir, `${slug}.json`);
  if (!fs.existsSync(file)) {
    console.error("MISSING", slug);
    errors++;
    continue;
  }
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  if (data.slug !== slug || data.sections.length !== 3) {
    console.error("meta", slug);
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
        console.error("id", q.id);
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
  console.error("check-mcq-all FAILED", errors);
  process.exit(1);
}
console.log(
  "check-mcq-all: ok —",
  expected.length,
  "topics × 50 =",
  expected.length * 50
);
