/** Coding bank loader + language helpers. */
async function loadCodingBank(slug) {
  const response = await fetch(`data/coding/${encodeURIComponent(slug)}.json`);
  if (!response.ok) {
    const err = new Error(`Coding bank not found for ${slug}`);
    err.code = "MISSING";
    throw err;
  }
  return response.json();
}

async function codingBankExists(slug) {
  try {
    const response = await fetch(`data/coding/${encodeURIComponent(slug)}.json`);
    return response.ok;
  } catch {
    return false;
  }
}

function isSqlTopic(slug) {
  return slug === "sql";
}

function codingLanguages(slug) {
  return isSqlTopic(slug) ? ["sql"] : ["java", "python"];
}

function defaultLanguage(slug) {
  return isSqlTopic(slug) ? "sql" : "java";
}

function findCodingSection(bank, sectionId) {
  return bank.sections.find((s) => s.id === Number(sectionId));
}

function findCodingProblem(section, problemId) {
  return section.problems.find((p) => p.id === problemId);
}

function starterFor(problem, language) {
  return (problem.starter && problem.starter[language]) || "";
}

function solutionFor(problem, language) {
  return (problem.solution && problem.solution[language]) || "";
}

/** Merge one problem attempt into the section attempt record. */
function saveCodingDraft(slug, sectionId, problemId, draft) {
  const previous = loadAttempt("coding", slug, sectionId) || {};
  const code = { ...(previous.code || {}) };
  code[problemId] = {
    ...(code[problemId] || {}),
    ...draft,
    updatedAt: new Date().toISOString(),
  };
  return saveAttempt("coding", slug, sectionId, { code, submitted: previous.submitted || false });
}

function loadCodingDraft(slug, sectionId, problemId) {
  const attempt = loadAttempt("coding", slug, sectionId);
  if (!attempt || !attempt.code) return null;
  return attempt.code[problemId] || null;
}

function codingProblemStatus(slug, sectionId, problemId) {
  const draft = loadCodingDraft(slug, sectionId, problemId);
  if (!draft) return { state: "new", label: "Not started" };
  if (draft.submitted) return { state: "done", label: "Submitted" };
  if (draft.source && String(draft.source).trim()) {
    return { state: "draft", label: "In progress" };
  }
  return { state: "new", label: "Not started" };
}

function codingSectionProgress(slug, section) {
  let done = 0;
  let draft = 0;
  for (const p of section.problems) {
    const st = codingProblemStatus(slug, section.id, p.id).state;
    if (st === "done") done++;
    else if (st === "draft") draft++;
  }
  return { done, draft, total: section.problems.length };
}
