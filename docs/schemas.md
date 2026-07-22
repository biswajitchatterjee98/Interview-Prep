# Data schemas

## `data/topics.json`

```json
{
  "version": 1,
  "mcqSectionSizes": [20, 20, 10],
  "codingSectionSizesDefault": [3, 3, 2],
  "codingSectionSizesSql": [10, 10, 5],
  "topics": [
    {
      "slug": "arrays",
      "title": "Arrays",
      "band": "DSA",
      "hasMcq": true,
      "hasCoding": true
    }
  ]
}
```

## `data/mcq/<slug>.json`

```json
{
  "slug": "arrays",
  "title": "Arrays",
  "sections": [
    {
      "id": 1,
      "label": "Section 1",
      "questions": [
        {
          "id": "arrays-s1-q01",
          "stem": "Interview-style question text…",
          "options": ["A…", "B…", "C…", "D…"],
          "correctIndex": 0,
          "explanation": "One short why (optional)."
        }
      ]
    }
  ]
}
```

Rules:

- Exactly **3** sections; lengths **20, 20, 10**.
- `options.length === 4`.
- `correctIndex` in `0..3`.
- `id` unique across the file.

## `data/coding/<slug>.json`

```json
{
  "slug": "arrays",
  "title": "Arrays",
  "sections": [
    {
      "id": 1,
      "label": "Easy",
      "level": "easy",
      "problems": [
        {
          "id": "arrays-easy-01",
          "title": "Two Sum Variant",
          "prompt": "Problem statement…",
          "examples": [{ "input": "…", "output": "…" }],
          "constraints": ["…"],
          "starter": {
            "java": "class Solution {\n  // …\n}\n",
            "python": "class Solution:\n    pass\n"
          },
          "solution": {
            "java": "…",
            "python": "…"
          },
          "samples": [
            { "input": "…", "output": "…" }
          ]
        }
      ]
    }
  ]
}
```

Rules:

- Non-SQL: section lengths **3, 3, 2**; levels `easy|intermediate|hard`.
- SQL: lengths **10, 10, 5**.
- `starter` + `solution` always include both `java` and `python` (SQL may use SQL text in both keys or `python` unused — prefer `java`/`python` for DSA; for SQL use `"sql"` inside starter/solution instead):

### SQL exception

For `sql` only:

```json
"starter": { "sql": "SELECT …" },
"solution": { "sql": "SELECT …" }
```

Language toggle on SQL page: SQL only (not Java/Python).

## Attempt storage (`localStorage`)

Key prefix: `sweAttempt:`

```json
{
  "kind": "mcq|coding",
  "slug": "arrays",
  "sectionId": 1,
  "answers": { "arrays-s1-q01": 2 },
  "code": { "arrays-easy-01": { "language": "java", "source": "…" } },
  "updatedAt": "ISO-8601"
}
```
