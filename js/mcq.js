/** MCQ bank loader + section grading helpers. */
async function loadMcqBank(slug) {
  const response = await fetch(`data/mcq/${encodeURIComponent(slug)}.json`);
  if (!response.ok) {
    const err = new Error(`MCQ bank not found for ${slug}`);
    err.code = "MISSING";
    throw err;
  }
  return response.json();
}

async function mcqBankExists(slug) {
  try {
    const response = await fetch(`data/mcq/${encodeURIComponent(slug)}.json`);
    return response.ok;
  } catch {
    return false;
  }
}

function gradeMcqSection(questions, answersById) {
  return questions.map((q) => {
    const chosen = answersById[q.id];
    const answered = chosen !== undefined && chosen !== null && chosen !== "";
    const chosenIndex = answered ? Number(chosen) : null;
    const correct = answered && chosenIndex === q.correctIndex;
    return {
      id: q.id,
      stem: q.stem,
      options: q.options,
      correctIndex: q.correctIndex,
      chosenIndex,
      correct,
      unanswered: !answered,
      explanation: q.explanation || "",
    };
  });
}

function scoreSummary(results) {
  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const unanswered = results.filter((r) => r.unanswered).length;
  return { total, correct, unanswered, wrong: total - correct - unanswered };
}

function countAnswered(answersById, questions) {
  return questions.reduce((n, q) => (answersById[q.id] != null ? n + 1 : n), 0);
}
