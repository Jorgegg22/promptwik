---
title: "SQL Performance Architect"
description: "Audits high-latency SQL queries, identifies execution plan bottlenecks, and proposes strategic indexing to minimize I/O overhead."
model: "GPT-5"
category: "Database Engineering"
variables: ["SLOW_QUERY", "DB_ENGINE"]
promptText: "Act as a Senior Database Administrator (DBA) specialized in [DB_ENGINE]. I am optimizing a high-latency SQL query that is causing performance degradation. \n\nAnalyze the provided SQL, identify the specific bottleneck (e.g., full table scans, suboptimal joins, or high cardinality), and provide: \n1. A technical diagnosis of the execution plan.\n2. Strategic indexing recommendations for the underlying tables.\n3. The refactored, SARGable query following modern performance standards.\n\nTarget Query:\n[SLOW_QUERY]"
featured: true
---

## Slash Your Database Latency

Relational databases can become an operational nightmare if queries aren't properly tuned. This prompt instructs **GPT-5** to act as a **Senior Database Administrator (DBA)**, providing a level of insight that goes far beyond basic syntax checking.



By demanding index suggestions and an execution plan diagnosis, this prompt attacks the root cause of performance degradation—such as **non-SARGable predicates** or **nested loop join overhead**—rather than just "pretty-printing" the SQL. It ensures your backend remains responsive as your data scales, preventing the dreaded "database timeouts" that plague unoptimized enterprise applications. It’s essentially a senior DBA on-demand, focused on minimizing I/O and maximizing throughput.