/**
 * Validate DSA coding banks (Phase 6).
 * Run: node scripts/check-coding-dsa.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "data", "coding");
const dsa = [
  "arrays", "strings", "hashing", "linked-list", "stack", "queue",
  "trees", "heaps", "graphs", "dynamic-programming", "greedy", "recursion",
];

let errors = 0;
let total = 0;
for (const slug of dsa) {
  const file = path.join(root, `${slug}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  if (data.slug !== slug || data.sections.length !== 3) {
    console.error("meta", slug);
    errors++;
  }
  const levels = ["easy", "intermediate", "hard"];
  const counts = [3, 3, 2];
  data.sections.forEach((sec, i) => {
    if (sec.level !== levels[i] || sec.problems.length !== counts[i]) {
      console.error(slug, sec.level, sec.problems.length);
      errors++;
    }
    sec.problems.forEach((p, j) => {
      const id = `${slug}-${levels[i]}-${String(j + 1).padStart(2, "0")}`;
      if (p.id !== id) {
        console.error("id", p.id, id);
        errors++;
      }
      for (const lang of ["java", "python"]) {
        if (!p.starter?.[lang] || !p.solution?.[lang]) {
          console.error("lang", p.id, lang);
          errors++;
        }
      }
      total++;
    });
  });
}

if (errors || total !== 96) {
  console.error("check-coding-dsa FAILED", { errors, total });
  process.exit(1);
}
console.log("check-coding-dsa: ok —", dsa.length, "topics × 8 =", total);
