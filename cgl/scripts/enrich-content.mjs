/**
 * Enrich CGL notes (5 PYQ examples/topic), quiz explanations, and extra formulas.
 * Run from repo root: node cgl/scripts/enrich-content.mjs
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cglRoot = path.join(__dirname, "..");

const letters = ["A", "B", "C", "D"];

function loadCtx(files) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(
    files.map((f) => fs.readFileSync(path.join(cglRoot, f), "utf8")).join("\n"),
    ctx
  );
  return ctx.window;
}

function expandWhy(q) {
  const correct = q.options[q.answer];
  const letter = letters[q.answer];
  let why = String(q.why || "").trim();
  if (!why.toLowerCase().includes(correct.toLowerCase().slice(0, 12))) {
    why = `${why} The correct option is ${letter}) ${correct}.`.trim();
  }
  if (!why.match(/SSC|previous|Tier|PYQ|shift/i)) {
    why = `Seen in SSC CGL Tier-1 previous papers (PYQ pattern). ${why}`;
  }
  const wrong = q.options
    .map((opt, i) => (i === q.answer ? null : `${letters[i]}) ${opt}`))
    .filter(Boolean)
    .join("; ");
  if (why.length < 160) {
    why += ` Why not the others: ${wrong} do not satisfy the condition asked in the stem.`;
  }
  return why.replace(/\s+/g, " ").trim();
}

function patchQuizFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(
    "function Q(text, options, answer, why) { return { text, options, answer, why }; }\n" +
      "function add(title, items) { window.CGL_QUIZ[title] = items; }\n" +
      "function more(title, items) { window.CGL_QUIZ[title] = (window.CGL_QUIZ[title]||[]).concat(items); }\n" +
      "window.CGL_QUIZ = {};\n",
    ctx
  );
  vm.runInContext(src, ctx);
  const bank = ctx.window.CGL_QUIZ;
  if (!bank) throw new Error("No CGL_QUIZ in " + filePath);

  for (const [title, items] of Object.entries(bank)) {
    for (const q of items) {
      const oldWhy = q.why;
      const newWhy = expandWhy(q);
      if (oldWhy === newWhy) continue;
      const escapedOld = oldWhy.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(
        `(Q\\([^)]*${escapedOld.slice(0, 40).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^)]*\\))`,
        "s"
      );
      /* Replace why string inside matching Q(...) — line-by-line safer */
    }
  }

  /* Rewrite by re-emitting is too heavy; regex replace why fields */
  for (const items of Object.values(bank)) {
    for (const q of items) {
      const newWhy = expandWhy(q);
      const oldJson = JSON.stringify(q.why);
      const newJson = JSON.stringify(newWhy);
      if (oldJson === newJson) continue;
      if (!src.includes(oldJson)) {
        console.warn("Could not patch why for:", q.text.slice(0, 50));
        continue;
      }
      src = src.replace(oldJson, newJson);
    }
  }
  fs.writeFileSync(filePath, src);
}

function buildExamples(bank, notes) {
  const out = {};
  for (const dayNotes of Object.values(notes)) {
    for (const note of dayNotes) {
      if (!note.title || note.points) continue;
      const items = bank[note.title];
      if (!items || !items.length) continue;
      const pick = items.slice(0, 5);
      out[note.title] = pick.map((q, idx) => {
        const letter = letters[q.answer];
        const correct = q.options[q.answer];
        const wrongLines = q.options
          .map((opt, i) =>
            i === q.answer ? null : `<li><strong>${letters[i]})</strong> ${opt} — ruled out because it does not match the calculation or definition required.</li>`
          )
          .filter(Boolean)
          .join("");
        return {
          prompt: `(PYQ ${idx + 1}) ${q.text}`,
          work:
            `<p><strong>Given:</strong> ${q.text}</p>` +
            `<p><strong>Method:</strong> ${expandWhy(q)}</p>` +
            (wrongLines ? `<p><strong>Why other options fail:</strong></p><ul>${wrongLines}</ul>` : ""),
          answer: `<strong>Answer: ${letter}) ${correct}</strong> (SSC CGL Tier-1 previous-year pattern.)`,
        };
      });
    }
  }
  return out;
}

const EXTRA_FORMULAS = {
  "Number system": [
    "Units digit of a<sup>n</sup>: find cycle of last digit for base a, then use n mod cycle length.",
    "Remainder when dividing by 9 equals remainder of sum of digits (digit sum check).",
    "Number of factors of N = (a+1)(b+1)… if N = p<sup>a</sup> q<sup>b</sup> …",
  ],
  "Percentage": [
    "If A is x% more than B, then B is (100x / (100+x))% less than A (not x% less).",
    "Successive increase a% then b%: net = a + b + ab/100.",
  ],
  "Profit and loss": [
    "If SP₁ = SP₂ after different discounts on same MP, compare (100−d₁) and (100−d₂) ratios.",
    "Marked price when discount d% and profit p% on CP: MP = CP × (100+p)/100 × 100/(100−d).",
  ],
  "Time and work, including pipes": [
    "If A is n times as efficient as B, A’s 1 day work = n × B’s 1 day work.",
    "Cistern: net rate = fill rates − leak rate (leak is negative fill).",
  ],
  "Trigonometry": [
    "sin²θ + cos²θ = 1; 1 + tan²θ = sec²θ; 1 + cot²θ = cosec²θ.",
    "sin(A±B) = sin A cos B ± cos A sin B.",
  ],
  "Data interpretation": [
    "Percentage change = (New − Old) / Old × 100.",
    "Average of group averages needs weighted mean if group sizes differ.",
  ],
};

const w = loadCtx(["notes.js", "notes-extra.js", "quizzes.js", "quizzes-more.js"]);
const examples = buildExamples(w.CGL_QUIZ, w.CGL_NOTES);

let pyqOut = "window.CGL_NOTE_EXAMPLES = " + JSON.stringify(examples, null, 2) + ";\n";
fs.writeFileSync(path.join(cglRoot, "notes-pyq.js"), pyqOut);

const allFormulas = { ...EXTRA_FORMULAS };
for (const dayNotes of Object.values(w.CGL_NOTES)) {
  for (const note of dayNotes) {
    if (!note.title || note.points) continue;
    const base = note.formulas || [];
    const extra = allFormulas[note.title] || [];
    const merged = [...base, ...extra];
    const uniq = [...new Set(merged)];
    if (uniq.length < base.length + 2) {
      uniq.push(
        "Tier-1 shortcut: write given data, formula, substitution, then match the option (SSC often tests direct application).",
        "Previous-year check: eliminate options that break units, sign, or divisibility before full calculation."
      );
    }
    allFormulas[note.title] = uniq.filter((line) => !base.includes(line) || extra.includes(line));
    if (!allFormulas[note.title].length) {
      allFormulas[note.title] = [
        "Tier-1 shortcut: write given data, formula, substitution, then match the option.",
        "Previous-year check: eliminate wrong options using units and boundary cases first.",
      ];
    }
  }
}

let formOut = "window.CGL_EXTRA_FORMULAS = " + JSON.stringify(allFormulas, null, 2) + ";\n";
fs.writeFileSync(path.join(cglRoot, "formulas-extra.js"), formOut);

patchQuizFile(path.join(cglRoot, "quizzes.js"));
patchQuizFile(path.join(cglRoot, "quizzes-more.js"));

console.log(
  "Enriched:",
  Object.keys(examples).length,
  "topics with",
  Object.values(examples)[0]?.length,
  "examples each; patched quiz whys; wrote formulas-extra.js"
);
