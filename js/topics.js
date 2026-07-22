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

function bindLogout(buttonId) {
  const button = document.getElementById(buttonId || "logoutBtn");
  if (!button) return;
  button.addEventListener("click", () => {
    logout();
    location.replace("index.html");
  });
}
