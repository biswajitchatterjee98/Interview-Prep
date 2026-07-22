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
