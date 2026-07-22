# Phase 0 — Scope lock

Status: **locked** for implementation. Change only if you explicitly reopen scope.

## Product flow

```text
login (index.html)
  → hub.html
       → Study → SWE.html
       → Test → test.html
            → MCQs   → mcq.html
            → Coding → coding.html
```

Dummy auth (client-only): username `Biswajit`, password `820440`.  
Session key: `sessionStorage.sweAuth = "1"`.

## MCQ topics (all 32) — 50 questions each

Sections per topic: **20 + 20 + 10**.

| Band | Topics |
|------|--------|
| DSA | Arrays, Strings, Hashing, Complexity, Linked List, Stack, Queue, Trees, Heaps, Graphs, Dynamic Programming, Greedy, Recursion |
| CS Core | Operating Systems, Computer Networks, DBMS, SQL, OOPs |
| Backend | Design Patterns, Backend Development, REST APIs, System Design |
| AI Stack | AI/ML Fundamentals, Deep Learning, Large Language Models, RAG, AI Agents |
| Ops | Cloud, DevOps, Git |
| Soft | Behavioral, HR |

**Total MCQs:** 32 × 50 = **1,600**

## Coding topics (locked for v1)

Only topics where writing code is a normal interview ask.

| Topic slug | Sections |
|------------|----------|
| arrays, strings, hashing, linked-list, stack, queue, trees, heaps, graphs, dynamic-programming, greedy, recursion | Easy 3 + Intermediate 3 + Hard 2 = **8** |
| sql | Easy 10 + Intermediate 10 + Hard 5 = **25** |

**Not in coding v1:** Complexity, OS, Networks, DBMS (theory), OOPs, Design Patterns, Backend, REST, System Design, AI/*, Cloud, DevOps, Git, Behavioral, HR.  
Those stay **MCQ-only**.

**Coding totals:** 12 × 8 + 25 = **121** problems (each with Java + Python starters/solutions).

## Content rules

- Interview-style; **do not** copy `SWE.html` / PDF wording.
- MCQ feedback after **section complete** (not mid-question live grade during the section).
- Coding: submit stores attempt; user can reveal Java + Python answers.

## File layout (fewest useful files)

```text
/
  index.html          login
  hub.html            post-login hub
  test.html           MCQ vs Coding cards
  mcq.html            MCQ runner (Phase 3+)
  coding.html         Coding runner (Phase 8+)
  SWE.html            existing study bank
  css/app.css         shared shell
  js/auth.js          session gate + login check
  js/storage.js       save MCQ/coding attempts
  data/topics.json    catalog (bands, flags)
  data/mcq/<slug>.json
  data/coding/<slug>.json
  docs/PHASE0.md      this file
  docs/schemas.md     JSON field contracts
```

## Phase gate

Phase 0 done when:

- [x] Topic lists locked above
- [x] Schemas written (`docs/schemas.md`)
- [x] `data/topics.json` exists
- [x] Login + hub wireframe works locally
- [x] Implementation through Phase 9 complete (content + UI + mobile polish)

**Phase 10 (not started):** final review → push → public link.
