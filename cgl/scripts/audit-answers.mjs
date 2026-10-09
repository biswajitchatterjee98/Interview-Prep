/**
 * Audit MCQ answers with computational checks (high-confidence only).
 * Run: node cgl/scripts/audit-answers.mjs [--fix]
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

function inferCorrect(q) {
  const stem = q.text;
  const opts = q.options;
  const intOpts = opts.map(parseIntOpt);
  const allInt = intOpts.every((n) => !Number.isNaN(n));

  if (allInt && /divisible by\s*11/i.test(stem)) {
    const hits = intOpts.map((n, i) => (n % 11 === 0 ? i : -1)).filter((i) => i >= 0);
    if (hits.length === 1) {
      return {
        index: hits[0],
        reason: `${opts[hits[0]]} is divisible by 11 (${intOpts[hits[0]]} ÷ 11 = ${intOpts[hits[0]] / 11}).`,
      };
    }
  }

  if (allInt && /divisible by\s*9/i.test(stem)) {
    const hits = intOpts.map((n, i) => (digitSum(n) % 9 === 0 ? i : -1)).filter((i) => i >= 0);
    if (hits.length === 1) {
      return { index: hits[0], reason: `Digit sum of ${opts[hits[0]]} is divisible by 9.` };
    }
  }

  if (allInt && /divisible by\s*3/i.test(stem) && !/11|9/.test(stem)) {
    const hits = intOpts.map((n, i) => (digitSum(n) % 3 === 0 ? i : -1)).filter((i) => i >= 0);
    if (hits.length === 1) {
      return { index: hits[0], reason: `Digit sum of ${opts[hits[0]]} is divisible by 3.` };
    }
  }

  const pctOf = stem.match(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/i);
  if (pctOf && allInt) {
    const val = (Number(pctOf[1]) * Number(pctOf[2])) / 100;
    if (Number.isInteger(val)) {
      const hits = intOpts.map((n, i) => (n === val ? i : -1)).filter((i) => i >= 0);
      if (hits.length === 1) {
        return { index: hits[0], reason: `${pctOf[1]}% of ${pctOf[2]} = ${val}.` };
      }
    }
  }

  const hcfTwo = stem.match(/HCF of (\d+) and (\d+)/i);
  if (hcfTwo && allInt && !stem.includes("/")) {
    const h = gcd(Number(hcfTwo[1]), Number(hcfTwo[2]));
    const idx = intOpts.indexOf(h);
    if (idx >= 0) return { index: idx, reason: `HCF(${hcfTwo[1]}, ${hcfTwo[2]}) = ${h}.` };
  }

  const lcmTwo = stem.match(/LCM of (\d+) and (\d+)/i);
  if (lcmTwo && allInt && !stem.includes(",") && !/three/i.test(stem)) {
    const l = lcm(Number(lcmTwo[1]), Number(lcmTwo[2]));
    const idx = intOpts.indexOf(l);
    if (idx >= 0) return { index: idx, reason: `LCM(${lcmTwo[1]}, ${lcmTwo[2]}) = ${l}.` };
  }

  const lcmThree = stem.match(/LCM of (\d+),\s*(\d+) and (\d+)/i);
  if (lcmThree && allInt) {
    const l = lcmMany([Number(lcmThree[1]), Number(lcmThree[2]), Number(lcmThree[3])]);
    const idx = intOpts.indexOf(l);
    if (idx >= 0) return { index: idx, reason: `LCM(${lcmThree[1]}, ${lcmThree[2]}, ${lcmThree[3]}) = ${l}.` };
  }

  const otherNum = stem.match(/one number is (\d+).*other (?:number )?is/i);
  const lcmHcf = stem.match(/LCM (?:of two numbers )?is (\d+) and their HCF is (\d+)/i);
  if (otherNum && lcmHcf && allInt) {
    const n1 = Number(otherNum[1]);
    const L = Number(lcmHcf[1]);
    const H = Number(lcmHcf[2]);
    const n2 = (L * H) / n1;
    if (Number.isInteger(n2)) {
      const idx = intOpts.indexOf(n2);
      if (idx >= 0) return { index: idx, reason: `Other number = LCM×HCF÷${n1} = ${n2}.` };
    }
  }

  const si = stem.match(/(?:simple interest|SI) on ₹?(\d+).*?(\d+(?:\.\d+)?)\s*%.*?(\d+)\s*years?/i);
  if (si && allInt) {
    const val = (Number(si[1]) * Number(si[2]) * Number(si[3])) / 100;
    const idx = intOpts.indexOf(val);
    if (idx >= 0) return { index: idx, reason: `SI = ${si[1]}×${si[2]}×${si[3]}/100 = ${val}.` };
  }

  const remLcm = stem.match(/LCM of ([\d,\s]+) is (\d+).*remainder of (\d+)/i);
  if (remLcm && allInt) {
    const nums = remLcm[1].split(/,|\s+and\s+/).map((x) => Number(x.trim())).filter(Boolean);
    if (nums.length >= 2) {
      const l = lcmMany(nums);
      const val = l + Number(remLcm[3]);
      const idx = intOpts.indexOf(val);
      if (idx >= 0) return { index: idx, reason: `LCM(${nums.join(",")}) + ${remLcm[3]} = ${val}.` };
    }
  }

  const remLess = stem.match(/remainder is (\d+) less than the divisor/i);
  if (remLess && stem.match(/20, 25, 35 and 40/)) {
    const val = lcmMany([20, 25, 35, 40]) - 6;
    const idx = intOpts.indexOf(val);
    if (idx >= 0) return { index: idx, reason: `LCM(20,25,35,40) − 6 = ${val}.` };
  }

  return null;
}

function replaceInQuizFile(filePath, q, newAnswer, newWhy) {
  let src = fs.readFileSync(filePath, "utf8");
  const search = `Q("${q.text.slice(0, 40)}`;
  const idx = src.indexOf(search);
  if (idx < 0) return false;
  let depth = 0;
  let close = -1;
  for (let i = idx; i < src.length && i < idx + 5000; i++) {
    if (src[i] === "(") depth++;
    if (src[i] === ")") {
      depth--;
      if (depth === 0) {
        close = i;
        break;
      }
    }
  }
  if (close < 0) return false;
  const block = src.slice(idx, close + 1);
  if (!block.includes(`answer: ${q.answer}`)) return false;
  const newBlock = block
    .replace(/answer:\s*\d+/, `answer: ${newAnswer}`)
    .replace(/why:\s*"[^"]*"/, `why: ${JSON.stringify(newWhy)}`);
  fs.writeFileSync(filePath, src.slice(0, idx) + newBlock + src.slice(close + 1));
  return true;
}

function patchMocks(mismatches) {
  let mocks = fs.readFileSync(path.join(cglRoot, "mocks.js"), "utf8");
  let n = 0;
  for (const m of mismatches) {
    const snippet = m.q.text.slice(0, 50).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(text: "${snippet}[^"]*", options: \\[[^\\]]+\\], answer: )${m.q.answer}`);
    if (re.test(mocks)) {
      mocks = mocks.replace(re, `$1${m.index}`);
      n++;
    }
  }
  if (n) fs.writeFileSync(path.join(cglRoot, "mocks.js"), mocks);
  return n;
}

const bank = loadBank();
const mismatches = [];

for (const [topic, items] of Object.entries(bank)) {
  for (const q of items) {
    const inferred = inferCorrect(q);
    if (inferred && inferred.index !== q.answer) {
      mismatches.push({ topic, q, index: inferred.index, reason: inferred.reason });
    }
  }
}

console.log("High-confidence mismatches:", mismatches.length);
for (const m of mismatches) {
  console.log(`\n[${m.topic}] ${m.q.text.slice(0, 90)}`);
  console.log(`  marked: ${m.q.answer}) ${m.q.options[m.q.answer]}`);
  console.log(`  should: ${m.index}) ${m.q.options[m.index]} — ${m.reason}`);
}

if (!process.argv.includes("--fix")) {
  process.exit(mismatches.length ? 1 : 0);
}

let fixed = 0;
for (const m of mismatches) {
  const why = `SSC CGL Tier-1 pattern. ${m.reason}`;
  for (const file of ["quizzes.js", "quizzes-more.js"]) {
    if (replaceInQuizFile(path.join(cglRoot, file), m.q, m.index, why)) fixed++;
  }
  m.q.answer = m.index;
}

const mockN = patchMocks(mismatches);
console.log("\nPatched quiz blocks:", fixed, "| mocks:", mockN);
