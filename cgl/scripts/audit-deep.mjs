/**
 * Deep audit: flag questions where marked answer fails a recomputed check.
 * Output: cgl/scripts/audit-report.json
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cglRoot = path.join(__dirname, "..");

function loadBank() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(
    "function Q(t,o,a,y){return {text:t,options:o,answer:a,why:y};}\n" +
      "function add(t,i){window.CGL_QUIZ[t]=i;}\n" +
      "function more(t,i){window.CGL_QUIZ[t]=(window.CGL_QUIZ[t]||[]).concat(i);}\n" +
      "window.CGL_QUIZ={};\n",
    ctx
  );
  vm.runInContext(fs.readFileSync(path.join(cglRoot, "quizzes.js"), "utf8"), ctx);
  vm.runInContext(fs.readFileSync(path.join(cglRoot, "quizzes-more.js"), "utf8"), ctx);
  return ctx.window.CGL_QUIZ;
}

function parseIntOpt(s) {
  const t = String(s).replace(/,/g, "").replace(/₹/g, "").trim();
  const m = t.match(/^-?\d+$/);
  return m ? Number(m[0]) : NaN;
}

function digitSum(n) {
  return String(Math.abs(n))
    .split("")
    .reduce((s, d) => s + Number(d), 0);
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function lcmMany(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}

function checks(q) {
  const stem = q.text;
  const opts = q.options;
  const intOpts = opts.map(parseIntOpt);
  const allInt = intOpts.every((n) => !Number.isNaN(n));
  const out = [];

  if (allInt && /divisible by\s*11/i.test(stem)) {
    const hits = intOpts.filter((n) => n % 11 === 0);
    if (hits.length === 1 && intOpts[q.answer] !== hits[0]) {
      out.push({ rule: "div11", expected: hits[0] });
    }
  }

  if (allInt && /divisible by\s*9/i.test(stem)) {
    const hits = intOpts.filter((n) => digitSum(n) % 9 === 0);
    if (hits.length === 1 && intOpts[q.answer] !== hits[0]) {
      out.push({ rule: "div9", expected: hits[0] });
    }
  }

  const pctOf = stem.match(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/i);
  if (pctOf && allInt) {
    const val = (Number(pctOf[1]) * Number(pctOf[2])) / 100;
    if (Number.isInteger(val) && intOpts[q.answer] !== val) {
      const inOpts = intOpts.includes(val);
      if (inOpts) out.push({ rule: "pct", expected: val });
    }
  }

  const lcmThree = stem.match(/LCM of (\d+),\s*(\d+) and (\d+)/i);
  if (lcmThree && allInt && !/ratio/i.test(stem)) {
    const l = lcmMany([Number(lcmThree[1]), Number(lcmThree[2]), Number(lcmThree[3])]);
    if (intOpts.includes(l) && intOpts[q.answer] !== l) {
      out.push({ rule: "lcm3", expected: l });
    }
  }

  const prodHcf = stem.match(/LCM is (\d+) and their HCF is (\d+).*one number is (\d+)/i);
  if (prodHcf && allInt) {
    const n2 = (Number(prodHcf[1]) * Number(prodHcf[2])) / Number(prodHcf[3]);
    if (Number.isInteger(n2) && intOpts.includes(n2) && intOpts[q.answer] !== n2) {
      out.push({ rule: "lcm*hcf", expected: n2 });
    }
  }

  const other = stem.match(/other number = LCM × HCF \/ (\d+)/i);
  if (other && allInt) {
    const m = stem.match(/LCM of two numbers is (\d+) and their HCF is (\d+)/i);
    if (m) {
      const n2 = (Number(m[1]) * Number(m[2])) / Number(other[1]);
      if (Number.isInteger(n2) && intOpts.includes(n2) && intOpts[q.answer] !== n2) {
        out.push({ rule: "formula", expected: n2 });
      }
    }
  }

  return out;
}

const bank = loadBank();
const report = [];

for (const [topic, items] of Object.entries(bank)) {
  for (const q of items) {
    const failed = checks(q);
    if (failed.length) {
      report.push({
        topic,
        text: q.text,
        marked: q.options[q.answer],
        answerIndex: q.answer,
        failed,
      });
    }
  }
}

const outPath = path.join(__dirname, "audit-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log("Deep audit issues:", report.length, "->", outPath);
report.slice(0, 20).forEach((r) => {
  console.log("-", r.topic, r.text.slice(0, 60), "marked", r.marked, "expected", r.failed[0].expected);
});
