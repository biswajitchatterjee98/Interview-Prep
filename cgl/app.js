const storeKey = "cgl-tier1-2026";

function load() {
  try {
    return JSON.parse(localStorage.getItem(storeKey)) || {};
  } catch {
    return {};
  }
}

function save(state) {
  const payload = { ...state, updatedAt: new Date().toISOString() };
  localStorage.setItem(storeKey, JSON.stringify(payload));
  if (typeof notifyProgressChanged === "function") notifyProgressChanged();
}

let state = load();

function reloadCglState() {
  state = load();
}
let currentId = Number(sessionStorage.getItem("cgl-day")) || 1;
let mode = "read";
let qIndex = 0;
let answers = [];
let revealed = false;
let locked = [];
let paperIndex = 0;
let mockSetId = 1;
let secondsLeft = 0;
let timerId = null;

function mockSets() {
  return (window.CGL_MOCKS && window.CGL_MOCKS.sets) || [];
}

function activeMockPapers() {
  const sets = mockSets();
  const set = sets.find((item) => item.id === mockSetId) || sets[0];
  return set ? set.papers : [];
}

function mockSetState() {
  if (!state[8]) state[8] = { sets: {} };
  if (!state[8].sets) {
    const legacy = state[8].papers ? { 1: { papers: state[8].papers, marks: state[8].marks, at: state[8].at } } : {};
    state[8] = { sets: legacy };
    save(state);
  }
  return state[8].sets;
}

function mockRunState() {
  const sets = mockSetState();
  if (!sets[String(mockSetId)]) sets[String(mockSetId)] = { papers: [] };
  return sets[String(mockSetId)];
}

const nav = document.getElementById("day-nav");
const main = document.getElementById("main");
const overall = document.getElementById("overall");

function dayById(id) {
  return window.CGL.days.find((day) => day.id === id);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function scoreOf(questions, picked) {
  let right = 0;
  let wrong = 0;
  let blank = 0;
  questions.forEach((item, index) => {
    if (picked[index] == null) blank += 1;
    else if (picked[index] === item.answer) right += 1;
    else wrong += 1;
  });
  const marks = right * 2 - wrong * 0.5;
  return { right, wrong, blank, marks };
}

function topicQuizProgress(dayId, topicTitle) {
  const dayState = state[dayId];
  if (!dayState || !dayState.topics || !dayState.topics[topicTitle]) return null;
  const entry = dayState.topics[topicTitle];
  const bank = window.CGL_QUIZ && window.CGL_QUIZ[topicTitle];
  const total = bank ? bank.length : 0;
  const answered = entry.answers ? entry.answers.filter((a) => a != null).length : 0;
  return {
    marks: entry.marks,
    answered,
    total,
    done: total > 0 && answered >= total,
  };
}

function dayTrackSummary(day) {
  const source = (window.CGL_NOTES && window.CGL_NOTES[day.id]) || day.notes || [];
  const topics = source.filter((n) => n.title && !n.points);
  let quizzesDone = 0;
  let quizMarks = 0;
  topics.forEach((n) => {
    const p = topicQuizProgress(day.id, n.title);
    if (p && p.done) quizzesDone += 1;
    if (p && p.marks != null) quizMarks += p.marks;
  });
  const dayTest = state[day.id] && state[day.id].dayTestMarks != null;
  return { topics: topics.length, quizzesDone, dayTest, quizMarks };
}

function renderOverall() {
  let daysWithProgress = 0;
  let totalMarks = 0;
  let topicsDone = 0;
  let topicsTotal = 0;
  window.CGL.days.forEach((day) => {
    if (day.mock) return;
    const track = dayTrackSummary(day);
    topicsTotal += track.topics;
    topicsDone += track.quizzesDone;
    if (track.quizzesDone > 0 || track.dayTest || (state[day.id] && state[day.id].marks != null)) {
      daysWithProgress += 1;
      totalMarks += track.quizMarks + (state[day.id] && state[day.id].dayTestMarks ? state[day.id].dayTestMarks : 0);
    }
  });
  if (!daysWithProgress && !topicsDone) {
    overall.textContent = "Track: start a topic quiz or day test to save progress";
    return;
  }
  overall.textContent =
    "Track: " +
    topicsDone +
    "/" +
    topicsTotal +
    " topic quizzes · " +
    daysWithProgress +
    " days touched · " +
    trim(totalMarks) +
    " marks";
}

function trim(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function renderNav() {
  nav.innerHTML = "";
  window.CGL.days.forEach((day) => {
    const button = document.createElement("button");
    button.className = "day-chip";
    if (day.id === currentId) button.classList.add("active");
    const track = day.mock ? null : dayTrackSummary(day);
    if (day.mock && state[day.id] && state[day.id].marks != null) button.classList.add("done");
    else if (track && track.topics > 0 && track.quizzesDone >= track.topics && track.dayTest) {
      button.classList.add("done");
    } else if (track && (track.quizzesDone > 0 || track.dayTest)) {
      button.classList.add("active-partial");
    }
    button.innerHTML = "<strong>Day " + day.id + "</strong><small>" + day.date + "</small>";
    button.addEventListener("click", () => openDay(day.id));
    nav.appendChild(button);
  });
}

function openDay(id, fromHistory) {
  stopTimer();
  currentId = id;
  sessionStorage.setItem("cgl-day", String(id));
  mode = "read";
  qIndex = 0;
  paperIndex = 0;
  revealed = false;
  const day = dayById(id);
  answers = day.mock ? [] : new Array(day.questions.length).fill(null);
  locked = [];
  renderNav();
  renderOverall();
  render();
  window.scrollTo(0, 0);
  if (!fromHistory) history.pushState({ view: "day", day: id }, "");
}

function backBar(label) {
  return '<div class="backbar"><button type="button" class="btn ghost" id="back">' + label + "</button></div>";
}

function bindBack() {
  const button = document.getElementById("back");
  if (!button) return;
  button.addEventListener("click", () => {
    if (history.state && history.state.view && history.state.view !== "day") history.back();
    else openDay(currentId);
  });
}

function render() {
  const day = dayById(currentId);
  if (mode === "read") renderRead(day);
  else if (mode === "quiz") renderQuiz(day);
  else if (mode === "result") renderResult(day);
  else if (mode === "section") renderSection(day);
  else if (mode === "mock-result") renderMockResult(day);
}

function renderRead(day) {
  if (day.mock) {
    const analysis = (window.CGL_MOCKS && window.CGL_MOCKS.analysis) || "";
    const cards = mockSets()
      .map((set) => {
        const saved = mockSetState()[String(set.id)];
        const done = saved && saved.marks != null;
        const score = done ? trim(saved.marks) + " / 200" : "Not attempted";
        return (
          "<section class=\"note mock-set\"><h3>" +
          escapeHtml(set.title) +
          "</h3><p>" +
          escapeHtml(set.subtitle) +
          "</p><p class=\"q-meta\">Last score: " +
          score +
          "</p><div class=\"actions\"><button class=\"btn\" data-mock=\"" +
          set.id +
          "\">Start " +
          (done ? "again" : "set " + set.id) +
          "</button></div></section>"
        );
      })
      .join("");
    main.innerHTML =
      panelStart(day) +
      (analysis ? "<section class=\"note\"><h3>10-year paper analysis</h3><p>" + escapeHtml(analysis) + "</p></section>" : "") +
      "<p class=\"lead\">Sections run in exam order: Reasoning → General Awareness → Quantitative Aptitude → English. Each section has 25 questions and 15 minutes. When time ends, the section submits automatically; you can also submit early.</p>" +
      cards +
      "</article>";
    main.querySelectorAll("[data-mock]").forEach((button) => {
      button.addEventListener("click", () => startMock(Number(button.getAttribute("data-mock"))));
    });
    return;
  }
  const source = (window.CGL_NOTES && window.CGL_NOTES[day.id]) || day.notes;
  const track = dayTrackSummary(day);
  const notes = source.map(noteHtml).join("");
  main.innerHTML =
    panelStart(day) +
    "<section class=\"note day-track\"><h3>Your track (Day " +
    day.id +
    ")</h3><p>Topic quizzes completed: <strong>" +
    track.quizzesDone +
    "</strong> / " +
    track.topics +
    ". Day test: <strong>" +
    (track.dayTest ? "done" : "not yet") +
    "</strong>. Marks from topic quizzes today: <strong>" +
    trim(track.quizMarks) +
    "</strong>.</p></section>" +
    notes +
    "<section class=\"note\"><h3>Day test</h3><p>Thirty questions from the topics of this day. Each one is marked as soon as you answer: green if it is right, red if it is wrong, with the right option shown in green.</p><div class=\"actions\"><button class=\"btn\" id=\"day-test\">Start 30-question day test</button></div></section></article>";
  main.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => startTopic(day, button.getAttribute("data-topic")));
  });
  const dayTest = document.getElementById("day-test");
  if (dayTest) dayTest.addEventListener("click", () => startDayQuiz(day));
}

function noteHtml(note) {
  if (note.points) {
    return (
      "<section class=\"note\"><h3>" +
      escapeHtml(note.title) +
      "</h3><ul>" +
      note.points.map((point) => "<li>" + point + "</li>").join("") +
      "</ul></section>"
    );
  }
  const extraForm =
    window.CGL_EXTRA_FORMULAS && window.CGL_EXTRA_FORMULAS[note.title]
      ? window.CGL_EXTRA_FORMULAS[note.title]
      : [];
  const allFormulas = [...(note.formulas || []), ...extraForm];
  const formulas = allFormulas.map((line) => "<li>" + line + "</li>").join("");
  const exampleList =
    (window.CGL_NOTE_EXAMPLES && window.CGL_NOTE_EXAMPLES[note.title]) || note.examples || [];
  const examples = exampleList
    .map(
      (example, index) =>
        "<div class=\"example\"><h4>Worked example " +
        (index + 1) +
        " (PYQ)</h4><p class=\"prompt\">" +
        escapeHtml(example.prompt.replace(/^\(PYQ \d+\)\s*/, "")) +
        "</p><div class=\"example-work\">" +
        example.work +
        "</div><p class=\"answer\">" +
        example.answer +
        "</p></div>"
    )
    .join("");
  const progress = topicQuizProgress(currentId, note.title);
  const trackLine = progress
    ? "<p class=\"q-meta topic-track\">Quiz track: " +
      (progress.done ? "Completed" : progress.answered + "/" + progress.total + " answered") +
      (progress.marks != null ? " · " + trim(progress.marks) + " marks" : "") +
      "</p>"
    : "<p class=\"q-meta topic-track\">Quiz track: not started</p>";
  return (
    "<section class=\"note\"><h3>" +
    escapeHtml(note.title) +
    "</h3>" +
    note.body.map((paragraph) => "<p>" + paragraph + "</p>").join("") +
    (formulas ? "<h4>Rules and formulas</h4><ul class=\"formulas\">" + formulas + "</ul>" : "") +
    examples +
    trackLine +
    topicButton(note) +
    "</section>"
  );
}

function topicButton(note) {
  const bank = window.CGL_QUIZ && window.CGL_QUIZ[note.title];
  const count = bank ? bank.length : 0;
  if (!count) return "";
  return (
    "<div class=\"actions\"><button class=\"btn\" data-topic=\"" +
    escapeHtml(note.title) +
    "\">Practice " +
    count +
    " previous questions</button></div>"
  );
}

function panelStart(day) {
  return (
    "<article class=\"panel\"><p class=\"kicker\">Day " +
    day.id +
    " · " +
    day.date +
    "</p><h2>" +
    escapeHtml(day.title) +
    "</h2><p class=\"lead\">" +
    escapeHtml(day.lead) +
    "</p>"
  );
}

let quizTitle = "";
let quizQuestions = [];

function startTopic(day, title) {
  const bank = window.CGL_QUIZ && window.CGL_QUIZ[title];
  if (!bank || !bank.length) return;
  quizTitle = title;
  quizQuestions = bank;
  answers = new Array(bank.length).fill(null);
  locked = new Array(bank.length).fill(false);
  qIndex = 0;
  revealed = false;
  mode = "quiz";
  currentId = day.id;
  render();
  window.scrollTo(0, 0);
  history.pushState({ view: "quiz", day: day.id }, "");
}

function startDayQuiz(day) {
  const bank = window.CGL_DAY && window.CGL_DAY[day.id];
  if (!bank || !bank.length) return;
  quizTitle = "Day " + day.id + " test";
  quizQuestions = bank;
  answers = new Array(bank.length).fill(null);
  locked = new Array(bank.length).fill(false);
  qIndex = 0;
  mode = "quiz";
  currentId = day.id;
  render();
  window.scrollTo(0, 0);
  history.pushState({ view: "quiz", day: day.id }, "");
}

function renderQuiz(day) {
  const item = quizQuestions[qIndex];
  const picked = answers[qIndex];
  main.innerHTML =
    backBar("Back to Day " + day.id) +
    "<article class=\"panel\">" +
    quizHead(quizQuestions.length, quizTitle) +
    palette(quizQuestions, false) +
    stemBlock(item, picked, false) +
    "<div class=\"actions\">" +
    "<button class=\"btn ghost\" id=\"prev\"" +
    (qIndex === 0 ? " disabled" : "") +
    ">Previous</button>" +
    (qIndex < quizQuestions.length - 1
      ? "<button class=\"btn\" id=\"next\">Next</button>"
      : "<button class=\"btn\" id=\"finish\">Submit quiz</button>") +
    "</div></article>";
  bindBack();
  bindOptions();
  document.getElementById("prev").addEventListener("click", () => {
    qIndex -= 1;
    render();
  });
  const next = document.getElementById("next");
  if (next) next.addEventListener("click", () => { qIndex += 1; render(); });
  const finish = document.getElementById("finish");
  if (finish) {
    finish.addEventListener("click", () => {
      const result = scoreOf(quizQuestions, answers);
      if (!state[day.id]) state[day.id] = { topics: {} };
      if (!state[day.id].topics) state[day.id].topics = {};
      state[day.id].topics[quizTitle] = {
        answers: answers.slice(),
        marks: result.marks,
        right: result.right,
        wrong: result.wrong,
        at: Date.now(),
      };
      const topicMarks = Object.values(state[day.id].topics).reduce((sum, item) => sum + item.marks, 0);
      state[day.id].marks = topicMarks;
      if (quizTitle.indexOf("Day ") === 0 && quizTitle.indexOf("test") !== -1) {
        state[day.id].dayTestMarks = result.marks;
      }
      save(state);
      mode = "result";
      renderNav();
      renderOverall();
      render();
    });
  }
}

function renderResult(day) {
  const result = scoreOf(quizQuestions, answers);
  const max = quizQuestions.length * 2;
  const review = quizQuestions
    .map((item, index) => {
      const picked = answers[index];
      const ok = picked === item.answer;
      const your = picked == null ? "Left blank" : item.options[picked];
      return (
        "<details><summary>" +
        (index + 1) +
        ". " +
        (ok ? "Right" : "<span class=\"miss\">Wrong or blank</span>") +
        "</summary><p>" +
        escapeHtml(item.text) +
        "</p><p>Your answer: " +
        escapeHtml(your) +
        "</p><p><strong>Correct:</strong> " +
        escapeHtml(["A", "B", "C", "D"][item.answer] + ") " + item.options[item.answer]) +
        "</p><p><strong>Explanation:</strong> " +
        escapeHtml(item.why) +
        "</p></details>"
      );
    })
    .join("");
  main.innerHTML =
    backBar("Back to Day " + day.id) +
    "<article class=\"panel\"><p class=\"kicker\">Day " +
    day.id +
    " · " +
    escapeHtml(quizTitle) +
    "</p><h2>" +
    trim(result.marks) +
    " / " +
    max +
    "</h2><div class=\"result-grid\">" +
    stat(result.right, "Right") +
    stat(result.wrong, "Wrong") +
    stat(result.blank, "Blank") +
    stat(trim(result.marks), "Marks") +
    "</div><div class=\"actions\"><button class=\"btn\" id=\"again\">Read notes again</button></div><div class=\"review\">" +
    review +
    "</div></article>";
  document.getElementById("again").addEventListener("click", () => openDay(day.id));
  bindBack();
}

function startMock(setId) {
  mockSetId = setId || 1;
  const papers = activeMockPapers();
  if (!papers.length) return;
  paperIndex = 0;
  answers = new Array(papers[0].questions.length).fill(null);
  locked = new Array(papers[0].questions.length).fill(false);
  qIndex = 0;
  secondsLeft = papers[0].minutes * 60;
  mode = "section";
  const run = mockRunState();
  run.papers = [];
  run.marks = null;
  beginTimer();
  render();
  history.pushState({ view: "mock", day: 8, mockSet: mockSetId }, "");
}

function beginTimer() {
  stopTimer();
  timerId = setInterval(() => {
    secondsLeft -= 1;
    const clock = document.getElementById("clock");
    if (clock) {
      clock.textContent = formatTime(secondsLeft);
      if (secondsLeft <= 60) clock.classList.add("warn");
    }
    if (secondsLeft <= 0) submitSection();
  }, 1000);
}

function renderSection(day) {
  const paper = activeMockPapers()[paperIndex];
  if (!paper) return;
  const item = paper.questions[qIndex];
  main.innerHTML =
    backBar("Leave test") +
    "<article class=\"panel\"><div class=\"timer\"><p class=\"q-meta\">Section " +
    (paperIndex + 1) +
    " of 4 · " +
    escapeHtml(paper.name) +
    "</p><p class=\"clock\" id=\"clock\">" +
    formatTime(secondsLeft) +
    "</p></div>" +
    quizHead(paper.questions.length, paper.name) +
    palette(paper.questions, false) +
    stemBlock(item, answers[qIndex], false) +
    "<div class=\"actions\">" +
    "<button class=\"btn ghost\" id=\"prev\"" +
    (qIndex === 0 ? " disabled" : "") +
    ">Previous</button>" +
    (qIndex < paper.questions.length - 1
      ? "<button class=\"btn\" id=\"next\">Next</button>"
      : "<button class=\"btn\" id=\"finish\">Submit section</button>") +
    "</div></article>";
  bindBack();
  bindOptions();
  document.getElementById("prev").addEventListener("click", () => {
    qIndex -= 1;
    render();
  });
  const next = document.getElementById("next");
  if (next) {
    next.addEventListener("click", () => {
      qIndex += 1;
      render();
    });
  }
  const finish = document.getElementById("finish");
  if (finish) finish.addEventListener("click", submitSection);
}

function submitSection() {
  stopTimer();
  const papers = activeMockPapers();
  const paper = papers[paperIndex];
  const result = scoreOf(paper.questions, answers);
  const run = mockRunState();
  run.papers[paperIndex] = {
    name: paper.name,
    answers: answers.slice(),
    marks: result.marks
  };
  save(state);
  if (paperIndex < papers.length - 1) {
    paperIndex += 1;
    answers = new Array(papers[paperIndex].questions.length).fill(null);
    locked = new Array(papers[paperIndex].questions.length).fill(false);
    qIndex = 0;
    secondsLeft = papers[paperIndex].minutes * 60;
    mode = "section";
    beginTimer();
    render();
    return;
  }
  const total = run.papers.reduce((sum, item) => sum + item.marks, 0);
  run.marks = total;
  run.at = Date.now();
  const best = Object.values(mockSetState()).reduce((max, item) => {
    if (item.marks == null) return max;
    return Math.max(max, item.marks);
  }, 0);
  state[8].marks = best;
  state[8].at = Date.now();
  save(state);
  mode = "mock-result";
  renderNav();
  renderOverall();
  render();
}

function renderMockResult() {
  const papers = activeMockPapers();
  const run = mockRunState();
  const rows = run.papers
    .map((paper, index) => {
      const max = papers[index].questions.length * 2;
      return stat(trim(paper.marks) + " / " + max, paper.name);
    })
    .join("");
  const review = papers
    .map((paper, pIndex) => {
      const picked = run.papers[pIndex].answers;
      return (
        "<h3>" +
        escapeHtml(paper.name) +
        "</h3>" +
        paper.questions
          .map((item, index) => {
            const choice = picked[index];
            const ok = choice === item.answer;
            const your = choice == null ? "Left blank" : item.options[choice];
            return (
              "<details><summary>" +
              (index + 1) +
              ". " +
              (ok ? "Right" : "<span class=\"miss\">Wrong or blank</span>") +
              "</summary><p>" +
              escapeHtml(item.text) +
              "</p><p>Your answer: " +
              escapeHtml(your) +
              "</p><p>Answer: " +
              escapeHtml(item.options[item.answer]) +
              "</p><p>" +
              escapeHtml(item.why) +
              "</p></details>"
            );
          })
          .join("")
      );
    })
    .join("");
  main.innerHTML =
    backBar("Back to Day 8") +
    "<article class=\"panel\"><p class=\"kicker\">8 Oct · mock set " +
    mockSetId +
    "</p><h2>" +
    trim(run.marks) +
    " / 200</h2><div class=\"result-grid\">" +
    rows +
    "</div><p class=\"lead\">Use the misses below on the morning of 9 Oct. Do not start a new topic. Try another set if you have time.</p><div class=\"actions\"><button class=\"btn ghost\" id=\"home\">Back to mock sets</button></div><div class=\"review\">" +
    review +
    "</div></article>";
  document.getElementById("home").addEventListener("click", () => openDay(8));
  bindBack();
}

function quizHead(total, label) {
  return "<p class=\"q-meta\">" + label + " · Question " + (qIndex + 1) + " of " + total + "</p>";
}

function palette(questions) {
  return (
    "<div class=\"palette\">" +
    questions
      .map((item, index) => {
        let cls = index === qIndex ? " now" : "";
        if (locked[index]) cls += answers[index] === item.answer ? " correct" : " incorrect";
        else if (answers[index] != null) cls += " answered";
        return "<button class=\"dot" + cls + "\" data-jump=\"" + index + "\">" + (index + 1) + "</button>";
      })
      .join("") +
    "</div>"
  );
}

function explanationBlock(item, picked, open) {
  if (!open) return "";
  const letters = ["A", "B", "C", "D"];
  const correct = item.options[item.answer];
  const correctLine =
    "<p><strong>Correct answer:</strong> " +
    letters[item.answer] +
    ") " +
    escapeHtml(correct) +
    "</p>";
  const your =
    picked == null
      ? "<p><strong>Your answer:</strong> Left blank</p>"
      : "<p><strong>Your answer:</strong> " +
        letters[picked] +
        ") " +
        escapeHtml(item.options[picked]) +
        (picked === item.answer ? " ✓" : " ✗") +
        "</p>";
  const others = item.options
    .map((opt, i) =>
      i === item.answer
        ? null
        : "<li>" + letters[i] + ") " + escapeHtml(opt) + " — incorrect for this question.</li>"
    )
    .filter(Boolean)
    .join("");
  return (
    "<div class=\"why\">" +
    "<p><strong" +
    (picked === item.answer ? "" : " class=\"miss\"") +
    ">" +
    (picked === item.answer ? "Correct." : "Incorrect.") +
    "</strong></p>" +
    your +
    correctLine +
    "<p><strong>Explanation:</strong> " +
    escapeHtml(item.why) +
    "</p>" +
    (others ? "<p><strong>Other options:</strong></p><ul class=\"why-opts\">" + others + "</ul>" : "") +
    "</div>"
  );
}

function stemBlock(item, picked) {
  const letters = ["A", "B", "C", "D"];
  const open = locked[qIndex];
  const options = item.options
    .map((option, index) => {
      let cls = "";
      if (open && index === item.answer) cls = " right";
      else if (open && index === picked) cls = " wrong";
      else if (!open && picked === index) cls = " picked";
      const body = item.optionFigures ? item.optionFigures[index] : escapeHtml(option);
      return (
        "<button class=\"opt" +
        cls +
        "\" data-choice=\"" +
        index +
        "\"" +
        (open ? " disabled" : "") +
        "><span class=\"bubble\">" +
        letters[index] +
        "</span><span>" +
        body +
        "</span></button>"
      );
    })
    .join("");
  const figure = item.figure ? "<div class=\"figure\">" + item.figure + "</div>" : "";
  const why = explanationBlock(item, picked, open);
  return "<h2 class=\"stem\">" + escapeHtml(item.text) + "</h2>" + figure + "<div class=\"options\">" + options + "</div>" + why;
}

function bindOptions() {
  if (!locked[qIndex]) {
    main.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        answers[qIndex] = Number(button.getAttribute("data-choice"));
        locked[qIndex] = true;
        render();
      });
    });
  }
  main.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      qIndex = Number(button.getAttribute("data-jump"));
      render();
    });
  });
}

function stat(value, label) {
  return "<div class=\"stat\"><b>" + value + "</b><span>" + label + "</span></div>";
}

function formatTime(total) {
  const safe = Math.max(0, total);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return minutes + ":" + String(seconds).padStart(2, "0");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function bootCglApp() {
  openDay(currentId, true);
  history.replaceState({ view: "day", day: currentId }, "");
  window.addEventListener("popstate", (event) => {
    const next = event.state && event.state.day ? event.state.day : currentId;
    openDay(next, true);
  });
}
window.bootCglApp = bootCglApp;
