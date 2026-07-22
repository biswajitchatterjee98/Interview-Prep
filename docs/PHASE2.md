# Phase 2 — DSA MCQ content

Status: **done**

## Delivered

- **13 DSA topics × 50 MCQs = 650 questions** (sections 20 + 20 + 10)
- Interview-style stems (screening → mid → senior)
- Files under `data/mcq/<slug>.json`
- Playable runner in `mcq.html`: start section → submit → review (✓/✗, your answer, correct answer, explanation)
- Attempts saved via `localStorage` (`js/storage.js`)

## Topics ready

arrays, strings, hashing, complexity, linked-list, stack, queue, trees, heaps, graphs, dynamic-programming, greedy, recursion

## Verify

```bash
node scripts/check-mcq-dsa.js
# browser: Test → MCQs → Arrays → Start section 1 → submit → review
```

## Next

**Phase 3** can polish MCQ UX further; **Phase 4** generates CS-core MCQs (OS, Networks, DBMS, SQL, OOPs).
