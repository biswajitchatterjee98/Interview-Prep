/**
 * Validate DSA MCQ banks (Phase 2).
 * Run: node scripts/check-mcq-dsa.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "data", "mcq");
const dsa = [
  "arrays", "strings", "hashing", "complexity", "linked-list", "stack", "queue",
  "trees", "heaps", "graphs", "dynamic-programming", "greedy", "recursion",
];

let errors = 0;
for (const slug of dsa) {
  const file = path.join(root, `${slug}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  console.assert(data.slug === slug, slug);
  console.assert(data.sections.length === 3, slug + " sections");
  data.sections.forEach((sec, i) => {
    const expect = [20, 20, 10][i];
    if (sec.questions.length !== expect) {
      console.error(slug, "s" + (i + 1), sec.questions.length);
      errors++;
    }
    sec.questions.forEach((q, j) => {
      const id = `${slug}-s${i + 1}-q${String(j + 1).padStart(2, "0")}`;
      if (q.id !== id) { console.error("id", q.id, id); errors++; }
      if (!q.options || q.options.length !== 4) { errors++; }
      if (![0, 1, 2, 3].includes(q.correctIndex)) { errors++; }
      if (new Set(q.options).size !== 4) { console.error("dup opts", q.id); errors++; }
    });
  });
}

if (errors) {
  console.error("check-mcq-dsa FAILED", errors);
  process.exit(1);
}
console.log("check-mcq-dsa: ok —", dsa.length, "topics × 50 =", dsa.length * 50);
