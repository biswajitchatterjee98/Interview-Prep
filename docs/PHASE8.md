# Phase 8 — Coding UI

Status: **done**

## Delivered

Full coding practice runner in `coding.html`:

1. **Topic list** — ready banks with green dots  
2. **Sections** — Easy / Intermediate / Hard with progress  
3. **Problem list** — Not started / In progress / Submitted  
4. **Editor**
   - Split prompt + editor (stacks on mobile)
   - Language tabs: **Java | Python** (DSA) or **SQL** only
   - Autosave draft while typing
   - **Submit** stores attempt in `localStorage`
   - **Show answer** reveals reference solution(s) for all languages
   - **Reset starter**
   - Previous / Next problem navigation

## Files

- `coding.html` — runner UI  
- `js/coding.js` — bank load + draft helpers  
- `css/app.css` — editor styles  

## Verify

```text
Login → Test → Coding → Arrays → Easy → open a problem
Type code → refresh (draft resumes) → Submit → Show answer
SQL topic → language tab is SQL only
```

## Next

**Phase 9** — mobile polish / QA across Study + MCQ + Coding. → **done** (`docs/PHASE9.md`)

**Phase 10** — final review → push → public link.
