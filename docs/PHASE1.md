# Phase 1 — App shell

Status: **done**

## Delivered

- Shared elegant, mobile-friendly shell (`css/app.css`)
- Login → Hub → Test → MCQ / Coding topic lists
- Study entry via `study.html` (auth gate → `SWE.html`)
- Topics loaded from `data/topics.json`, grouped by band
- Topic detail shows section placeholders (content in later phases)
- Session gate + sign out on protected pages

## How to verify

```bash
python3 -m http.server 8080
```

1. Open `http://localhost:8080` → sign in `Biswajit` / `820440`
2. Hub: Study + Test cards
3. Test → MCQs: 32 topics → open one → 3 section cards
4. Test → Coding: 13 topics → open one → Easy/Intermediate/Hard cards
5. Sign out returns to login; protected URLs redirect when logged out

## Next

**Phase 2** — generate DSA MCQ content (50 × ~13 topics).
