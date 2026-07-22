# Phase 9 — Mobile polish / QA

Status: **done**

## Delivered

Cross-app polish for phone and tablet use before public deploy:

1. **Touch / layout**
   - ~44px minimum targets on buttons, chips, tabs, menu toggle
   - Safe-area insets (`viewport-fit=cover`)
   - Sticky topbar on small screens; sticky coding action bar
   - Tighter topic grids; single-column cards / sections under 640px
   - Login + code editor use 16px font to avoid iOS zoom

2. **Copy / structure**
   - Hub and Test no longer say content is “coming later”
   - Coding page uses shared `.wrap.wide` (no inline max-width)

3. **Study bank**
   - Auth gate on `SWE.html`
   - Fixed **← Hub** chip (floats bottom-right on mobile)

## Verify (validators)

```text
check-mcq-all: ok — 32 × 50 = 1600
check-coding-all: ok — 96 DSA + 25 SQL = 121
check-topics: ok — 32 / 32 / 13
```

## Smoke checklist

```text
Login (mobile width) → Hub → Study → ← Hub works
Test → MCQs → section → options tappable → submit → review
Test → Coding → editor stacks; sticky Submit/Show answer
Narrow phone (~375px): no horizontal scroll; topic grid readable
```

## Next

**Phase 10** — final review → push → public link.
