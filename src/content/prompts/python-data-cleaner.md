---
title: "Automated Data Sanitization (Pandas)"
description: "Generates specialized Python scripts to clean raw datasets, handle missing values, and normalize column structures."
model: "Gemini Pro"
category: "Data Engineering"
variables: ["COLUMN_NAMES", "DETECTED_DATA_ISSUES"]
promptText: "Act as a Senior Data Engineer. I have a raw dataset within a Pandas DataFrame. The primary columns are [COLUMN_NAMES] and I have identified the following structural issues: [DETECTED_DATA_ISSUES]. \n\nWrite a robust Python (Pandas) script to:\n1. Perform intelligent imputation or removal of null values based on column distribution.\n2. Normalize string formats (lowercase, stripping accents, removing whitespace).\n3. Cast incorrect data types to their optimal numerical or categorical formats.\nReturn only the functional code block with concise inline documentation."
featured: true
---

## Automating the "Janitor Work" of Data Science

It is an industry consensus that **80% of a Data Scientist’s workflow** is consumed by tedious data preprocessing and CSV sanitization. This prompt delegates that heavy lifting to the AI, transforming raw, "dirty" data into a model-ready state.



**Gemini Pro** excels at processing these long logical branches with high speed and accuracy. By explicitly defining the **Column Names** and **Data Issues**, you ensure the generated code is "surgical"—designed specifically for your dataset’s unique schema. The result is a production-ready snippet that can be dropped directly into a **Jupyter Notebook** or integrated into a larger **ETL (Extract, Transform, Load) pipeline**, drastically reducing time-to-insight.