---
title: "Reflexion"
level: "Master"
description: "An iterative self-correction framework where the AI agent receives feedback on previous failures, 'reflects' on the root cause, and retries the task with improved logic."
example: "Your previous script failed with a 'TypeError'. Analyze the traceback to identify the mismatch and rewrite the function accordingly."
color: "bg-basement-orange"
professions: ["Software Engineers", "QA Testers", "Backend Developers"]
useCase:
  context: "A coding agent generates a Python script that fails during execution. The error log is passed back to the agent for autonomous correction."
  prompt: "The script you generated failed with the following error: 'IndexError: list index out of range'. Reflect on what caused this error within your 'for' loop and generate the corrected code."
  result: "Reflexion: The loop 'for i in range(len(mylist) + 1)' attempts to access a non-existent index because Python lists are zero-indexed. I must remove the '+ 1'.\n\nCorrected Code:\nfor i in range(len(mylist)):\n  print(mylist[i])"
---

## What is the Reflexion Technique?

The **Reflexion** technique empowers Large Language Models (LLMs) with the capability for **iterative self-correction**. It consists of designing a Prompt Engineering loop where the AI generates a response, receives feedback indicating a failure, and is then instructed to "reflect" verbally on why it erred before attempting a new solution.



This verbalization of the error forces the model's neural network to recalibrate its context window. It is the "secret sauce" that allows modern AI coding assistants (such as **Cursor** or **GitHub Copilot**) to exhibit near-human intelligence when autonomously debugging complex software failures.

### When to Use Reflexion?

Reflexion excels in tasks where success can be objectively measured by an external system, a compiler, or a strict set of logical constraints.

* **Autonomous Debugging:** The AI writes code, the interpreter (e.g., Python) throws an exception, and the reflexion prompt passes the traceback back to the model for correction.
* **Strict Format Enforcement:** If the AI is tasked with generating a JSON object but omits a comma, an automated validator detects the error and triggers a Reflexion prompt for self-correction without human intervention.
* **Educational & Adaptive Tutoring:** Models designed to gauge a user's knowledge level, reflecting on and adjusting their pedagogical strategy if a user indicates they do not understand a specific concept.
* **Autonomous Agents:** Allowing an AI web-scraper to recognize if it has navigated to the incorrect URL or encountered a CAPTWEA, subsequently reflecting on its search strategy to find an alternative path.

### Technical Limitations & Trade-offs

As with other iterative strategies, Reflexion does not guarantee an eventual solution. In some scenarios, the Artificial Intelligence may enter a **"Blind Feedback Loop,"** where it reflects on its error but repeatedly commits the same logical fallacy. 

Implementing this technique requires setting strict **Iteration Limits** (e.g., a maximum of 3 reflexions) to prevent excessive **OpenAI or Anthropic API costs**. Furthermore, the model used must be advanced enough (Claude 3.5+, GPT-4o, or O1) to possess the cognitive depth required for meaningful self-critique.