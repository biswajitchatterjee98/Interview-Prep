/** Persist quiz/coding attempts in localStorage. */
const ATTEMPT_PREFIX = "sweAttempt:";

function attemptKey(kind, slug, sectionId) {
  return `${ATTEMPT_PREFIX}${kind}:${slug}:${sectionId}`;
}

function saveAttempt(kind, slug, sectionId, payload) {
  const previous = loadAttempt(kind, slug, sectionId) || {};
  const body = {
    ...previous,
    kind,
    slug,
    sectionId,
    updatedAt: new Date().toISOString(),
    ...payload,
  };
  localStorage.setItem(attemptKey(kind, slug, sectionId), JSON.stringify(body));
  return body;
}

function loadAttempt(kind, slug, sectionId) {
  const raw = localStorage.getItem(attemptKey(kind, slug, sectionId));
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function clearAttempt(kind, slug, sectionId) {
  localStorage.removeItem(attemptKey(kind, slug, sectionId));
}

/** Status for a finished or in-progress MCQ section. */
function mcqSectionStatus(slug, sectionId, questionCount) {
  const attempt = loadAttempt("mcq", slug, sectionId);
  if (!attempt) return { state: "new", label: "Not started", score: null };
  const answers = attempt.answers || {};
  const answered = Object.keys(answers).length;
  if (attempt.submitted) {
    const correct = attempt.scoreCorrect != null ? attempt.scoreCorrect : null;
    return {
      state: "done",
      label: correct != null ? `Completed · ${correct}/${questionCount}` : "Completed",
      score: correct,
      answered,
    };
  }
  if (answered > 0) {
    return {
      state: "draft",
      label: `In progress · ${answered}/${questionCount}`,
      score: null,
      answered,
    };
  }
  return { state: "new", label: "Not started", score: null };
}

/* —— Study bank (reveal = studied) —— */
const STUDY_PREFIX = "sweStudy:";

function studyKey(slug) {
  return STUDY_PREFIX + slug;
}

function loadStudyProgress(slug) {
  const raw = localStorage.getItem(studyKey(slug));
  if (!raw) return { revealed: {} };
  try {
    const data = JSON.parse(raw);
    return { revealed: data.revealed && typeof data.revealed === "object" ? data.revealed : {} };
  } catch {
    return { revealed: {} };
  }
}

function markStudyRevealed(slug, questionNumber) {
  const current = loadStudyProgress(slug);
  const key = String(questionNumber);
  if (current.revealed[key]) return current;
  current.revealed[key] = true;
  localStorage.setItem(
    studyKey(slug),
    JSON.stringify({ revealed: current.revealed, updatedAt: new Date().toISOString() })
  );
  return current;
}

function studyTopicProgress(slug, total) {
  const revealed = Object.keys(loadStudyProgress(slug).revealed).length;
  const done = Math.min(revealed, total);
  const left = Math.max(0, total - done);
  const state = done <= 0 ? "new" : done >= total ? "done" : "draft";
  return { done, total, left, state };
}

function summarizeStudyProgress(studyMeta) {
  let done = 0;
  let total = 0;
  let topicsDone = 0;
  for (const topic of studyMeta.topics) {
    const progress = studyTopicProgress(topic.slug, topic.count);
    done += progress.done;
    total += topic.count;
    if (progress.state === "done") topicsDone++;
  }
  return { done, total, left: Math.max(0, total - done), topicsDone, topicsTotal: studyMeta.topics.length };
}

function summarizeMcqSections(catalog) {
  const sizes = catalog.mcqSectionSizes || [20, 20, 10];
  let done = 0;
  let total = 0;
  for (const topic of catalog.topics) {
    if (!topic.hasMcq) continue;
    for (let i = 0; i < sizes.length; i++) {
      total++;
      if (mcqSectionStatus(topic.slug, i + 1, sizes[i]).state === "done") done++;
    }
  }
  return { done, total, left: Math.max(0, total - done) };
}

/** Coding section complete when every problem in that section is submitted. */
function codingSectionComplete(slug, sectionId, problemCount) {
  const attempt = loadAttempt("coding", slug, sectionId);
  if (!attempt || !attempt.code || problemCount <= 0) return false;
  let submitted = 0;
  for (const draft of Object.values(attempt.code)) {
    if (draft && draft.submitted) submitted++;
  }
  return submitted >= problemCount;
}

function codingTopicProblemProgress(slug, catalog) {
  const sizes =
    slug === "sql"
      ? catalog.codingSectionSizesSql || [10, 10, 5]
      : catalog.codingSectionSizesDefault || [3, 3, 2];
  let done = 0;
  let total = 0;
  let sectionsDone = 0;
  for (let i = 0; i < sizes.length; i++) {
    const n = sizes[i];
    total += n;
    const attempt = loadAttempt("coding", slug, i + 1);
    let submitted = 0;
    if (attempt && attempt.code) {
      for (const draft of Object.values(attempt.code)) {
        if (draft && draft.submitted) submitted++;
      }
    }
    done += Math.min(submitted, n);
    if (submitted >= n && n > 0) sectionsDone++;
  }
  return {
    done,
    total,
    left: Math.max(0, total - done),
    sectionsDone,
    sectionsTotal: sizes.length,
  };
}

function summarizeCodingSections(catalog) {
  let done = 0;
  let total = 0;
  for (const topic of catalog.topics) {
    if (!topic.hasCoding) continue;
    const sizes =
      topic.slug === "sql"
        ? catalog.codingSectionSizesSql || [10, 10, 5]
        : catalog.codingSectionSizesDefault || [3, 3, 2];
    for (let i = 0; i < sizes.length; i++) {
      total++;
      if (codingSectionComplete(topic.slug, i + 1, sizes[i])) done++;
    }
  }
  return { done, total, left: Math.max(0, total - done) };
}

function summarizeTestSections(catalog) {
  const mcq = summarizeMcqSections(catalog);
  const coding = summarizeCodingSections(catalog);
  return {
    done: mcq.done + coding.done,
    total: mcq.total + coding.total,
    left: mcq.left + coding.left,
    mcq,
    coding,
  };
}

function mcqTopicSectionProgress(slug, catalog) {
  const sizes = catalog.mcqSectionSizes || [20, 20, 10];
  let done = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (mcqSectionStatus(slug, i + 1, sizes[i]).state === "done") done++;
  }
  return { done, total: sizes.length, left: Math.max(0, sizes.length - done) };
}
