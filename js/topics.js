/** Load topic catalog and group by band. */
const BAND_ORDER = ["DSA", "CS Core", "Backend", "AI Stack", "Ops", "Soft"];

async function loadTopics() {
  const response = await fetch("data/topics.json");
  if (!response.ok) throw new Error("Failed to load topics.json");
  return response.json();
}

function topicsByBand(topics, predicate) {
  const filtered = topics.filter(predicate);
  const groups = [];
  for (const band of BAND_ORDER) {
    const items = filtered.filter((t) => t.band === band);
    if (items.length) groups.push({ band, topics: items });
  }
  return groups;
}

function renderTopicGroups(container, groups, hrefForTopic) {
  if (!groups.length) {
    container.innerHTML = `<div class="placeholder">No topics available.</div>`;
    return;
  }
  container.innerHTML = groups
    .map((group) => {
      const cards = group.topics
        .map((t) => {
          const href = hrefForTopic(t);
          return `<a class="topic-card" href="${href}">
            <span class="topic-card-title">${escapeHtml(t.title)}</span>
            <span class="topic-card-meta">${escapeHtml(t.slug)}</span>
          </a>`;
        })
        .join("");
      return `<section class="band-block">
        <h2 class="band-title">${escapeHtml(group.band)}</h2>
        <div class="topic-grid">${cards}</div>
      </section>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function loadStudyMeta() {
  const response = await fetch("data/study-meta.json");
  if (!response.ok) throw new Error("Failed to load study-meta.json");
  return response.json();
}

function ringDash(pct, radius) {
  const circumference = 2 * Math.PI * radius;
  const filled = (Math.max(0, Math.min(100, pct)) / 100) * circumference;
  return { filled, gap: circumference };
}

/** Circular progress: done/total in the ring, completed + left beside it. */
function renderTracker({ done, total, unit }) {
  const safeTotal = Math.max(0, Number(total) || 0);
  const safeDone = Math.min(Math.max(0, Number(done) || 0), safeTotal);
  const left = Math.max(0, safeTotal - safeDone);
  const pct = safeTotal ? Math.round((safeDone / safeTotal) * 100) : 0;
  const unitText = unit || "sections";
  const { filled, gap } = ringDash(pct, 15.5);
  const state = safeDone <= 0 ? "is-new" : safeDone >= safeTotal ? "is-complete" : "is-active";
  return `<div class="ring-tracker ${state}" role="img" aria-label="${safeDone} of ${safeTotal} ${unitText} completed, ${left} left">
    <div class="ring" aria-hidden="true">
      <svg viewBox="0 0 36 36">
        <circle class="ring-bg" cx="18" cy="18" r="15.5" fill="none" />
        <circle class="ring-fg" cx="18" cy="18" r="15.5" fill="none"
          stroke-dasharray="${filled.toFixed(2)} ${gap.toFixed(2)}"
          transform="rotate(-90 18 18)" />
      </svg>
      <div class="ring-value"><strong>${safeDone}</strong><span>/${safeTotal}</span></div>
    </div>
    <div class="ring-copy">
      <span class="ring-label">${escapeHtml(unitText)}</span>
      <span class="ring-meta"><strong>${safeDone}</strong> done · <strong>${left}</strong> left</span>
    </div>
  </div>`;
}

/** Tiny ring for topic cards / sidebar (always shows done/total). */
function renderRingMini(done, total, opts) {
  const safeTotal = Math.max(0, Number(total) || 0);
  const safeDone = Math.min(Math.max(0, Number(done) || 0), safeTotal);
  const pct = safeTotal ? Math.round((safeDone / safeTotal) * 100) : 0;
  const { filled, gap } = ringDash(pct, 14);
  const state = safeDone <= 0 ? "is-new" : safeDone >= safeTotal && safeTotal > 0 ? "is-complete" : "is-active";
  const label = `${safeDone}/${safeTotal || 0}`;
  const noun = (opts && opts.unit) || "done";
  return `<span class="ring-mini ${state}" title="${safeDone} of ${safeTotal} ${noun}" aria-label="${safeDone} of ${safeTotal} ${noun}">
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle class="ring-bg" cx="16" cy="16" r="14" fill="none" />
      <circle class="ring-fg" cx="16" cy="16" r="14" fill="none"
        stroke-dasharray="${filled.toFixed(2)} ${gap.toFixed(2)}"
        transform="rotate(-90 16 16)" />
    </svg>
    <span class="ring-mini-label">${escapeHtml(label)}</span>
  </span>`;
}

function bindLogout(buttonId) {
  const button = document.getElementById(buttonId || "logoutBtn");
  if (!button) return;
  button.addEventListener("click", () => {
    logout();
    location.replace("index.html");
  });
}
