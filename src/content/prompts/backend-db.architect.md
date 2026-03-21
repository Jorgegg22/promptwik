---
title: "SQL Database Architect"
description: "Designs optimized relational schemas, including indexes and foreign keys, based on complex business rules and logic."
model: "GPT-5"
category: "Backend Engineering"
variables: ["BUSINESS_ENTITIES", "DATABASE_ENGINE"]
promptText: "Act as an expert Database Architect specialized in [DATABASE_ENGINE]. I need to design the database schema for an application that manages these entities and business rules: [BUSINESS_ENTITIES].\n\nMandatory Deliverables:\n1. Complete DDL (Data Definition Language) script for table creation.\n2. Correct definition of Primary Keys, Foreign Keys, and Constraints.\n3. Proposal of necessary indexes to optimize frequent read-heavy queries.\n4. Adherence to 3rd Normal Form (3NF) standards."
---

## Bulletproof Data Structures

A structural database error at the project's inception can cost months of expensive refactoring later in the development lifecycle. This prompt leverages the deep reasoning capabilities of **GPT-5** to architect your tables with surgical precision before the first line of code is ever written. 



By explicitly requesting "indexes" and "3NF," you force the AI to prioritize **Future Scalability** and **Query Performance** rather than simple data storage. This ensures that your backend remains performant as your dataset grows from a few rows to millions of records, maintaining the referential integrity required for mission-critical applications.