/**
 * Validate SQL coding bank (Phase 7).
 * Run: node scripts/check-coding-sql.js
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data", "coding", "sql.json");
const data = JSON.parse(fs.readFileSync(file, "utf8"));

let errors = 0;
if (data.slug !== "sql" || data.sections.length !== 3) {
  console.error("meta");
  errors++;
}

const levels = ["easy", "intermediate", "hard"];
const counts = [10, 10, 5];
let total = 0;

data.sections.forEach((sec, i) => {
  if (sec.level !== levels[i] || sec.problems.length !== counts[i]) {
    console.error(sec.level, sec.problems.length);
    errors++;
  }
  sec.problems.forEach((p, j) => {
    const id = `sql-${levels[i]}-${String(j + 1).padStart(2, "0")}`;
    if (p.id !== id) {
      console.error("id", p.id, id);
      errors++;
    }
    if (!p.starter?.sql || !p.solution?.sql || p.solution.sql.length < 20) {
      console.error("sql fields", p.id);
      errors++;
    }
    total++;
  });
});

if (errors || total !== 25) {
  console.error("check-coding-sql FAILED", { errors, total });
  process.exit(1);
}
console.log("check-coding-sql: ok — 25 problems (10+10+5)");
