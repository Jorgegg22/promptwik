---
title: "Self-Consistency"
level: "Master"
description: "Samples multiple logical Chain of Thought (CoT) paths and selects the most frequent answer to overcome isolated reasoning errors."
example: "Generate 3 distinct ways to solve this problem and return the final solution where the majority of paths agree."
color: "bg-button-purple"
professions: ["AI Researchers", "Quantitative Analysts", "Technical Auditors"]
useCase:
  context: "Solving a complex logic puzzle where the model tends to make errors if it only attempts the task once."
  prompt: "Solve this mathematical enigma by generating 3 distinct reasoning paths. At the end, compare the 3 conclusions and return as the final answer the one where at least 2 paths coincide."
  result: "Path 1: The result is 45.\nPath 2: Carry error detected, the result is 42.\nPath 3: Direct multiplication leads to 42.\n\nConsensus: The majority-validated answer is 42."
---

## What is Self-Consistency?

**Self-Consistency** is a direct evolution of the Chain of Thought (CoT) technique. it is based on the mathematical premise that if a complex problem has multiple logical ways to be solved, the correct answer is the one reached most frequently across different reasoning attempts.

Instead of asking the Artificial Intelligence to solve the problem a single time, the prompt (or a script calling the API multiple times) requires the generation of various diverse reasoning paths. Finally, all end-results are collected, and the winning solution is selected through "majority voting" or **algorithmic consensus**.



### When to Use Self-Consistency?

This is a high-stakes technique, reserved for environments where a single calculation or logical error could be critical.

* **Complex Mathematical Resolution:** Advanced algebra, physics, or financial modeling where an LLM might lose track of variables mid-process.
* **Source Code Inference:** Determining the exact output of a complex programming function without executing it in a real compiler.
* **Legal or Contractual Analysis:** When a binary conclusion is required (e.g., "Is this action permitted under Clause 4?") from a dense, multi-page legal text.
* **Logical Diagnostics:** Theoretical medical evaluations or failure analysis in critical industrial systems.

### Technical Limitations & Trade-offs

The primary drawback is the **computational and economic overhead**. Asking **GPT-5** to solve the same problem 5 or 10 times will multiply your API call costs by that same factor. Furthermore, Self-Consistency adds no value to creative tasks (such as writing a poem) or open-ended data extraction, where there is no single mathematical "correct answer" that can be subjected to a majority vote.