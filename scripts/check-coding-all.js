/**
 * Validate all coding banks (DSA + SQL).
 * Run: node scripts/check-coding-all.js
 */
const { execFileSync } = require("child_process");
const path = require("path");

const dir = __dirname;
execFileSync("node", [path.join(dir, "check-coding-dsa.js")], { stdio: "inherit" });
execFileSync("node", [path.join(dir, "check-coding-sql.js")], { stdio: "inherit" });
console.log("check-coding-all: ok — 12×8 DSA + 25 SQL = 121 problems");
