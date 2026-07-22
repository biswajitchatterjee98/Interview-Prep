# Phase 4 — CS-core MCQ content

Status: **done**

## Delivered

**5 topics × 50 MCQs = 250 questions** (sections 20 + 20 + 10)

| Slug | Title |
|------|--------|
| `operating-systems` | Operating Systems |
| `computer-networks` | Computer Networks |
| `dbms` | DBMS |
| `sql` | SQL |
| `oops` | OOPs |

Interview-style banks under `data/mcq/`. Existing MCQ runner (Phase 3) picks them up automatically (green ready dots).

## Coverage highlights

- **OS:** process/thread, scheduling, sync, deadlock, paging/TLB, thrashing  
- **Networks:** OSI/TCP-IP, TCP/UDP, HTTP/TLS/DNS, NAT, latency vs bandwidth  
- **DBMS:** ACID, normalization, indexes, isolation anomalies, OLTP/OLAP  
- **SQL:** joins, GROUP BY/HAVING, NULL, window functions, EXPLAIN, transactions  
- **OOPs:** pillars, overload/override, interface vs abstract, composition, SOLID  

## Verify

```bash
node scripts/check-mcq-cs.js
# browser: Test → MCQs → Operating Systems / SQL / OOPs → Start section
```

## Totals so far

- Phase 2 DSA: 650  
- Phase 4 CS: 250  
- **MCQ ready: 900 / 1600**

## Next

**Phase 5** — remaining MCQs (Backend, AI Stack, Ops, Soft).
