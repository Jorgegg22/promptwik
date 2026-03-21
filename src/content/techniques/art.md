---
title: "Automatic Reasoning and Tool-use (ART)"
level: "Master"
description: "Allows the AI to pause text generation, execute an external tool, and resume the response using the retrieved data."
example: "Calculate the square root of 14598 [TOOL_CALL: CALCULATOR] and use the result to..."
color: "bg-basement-orange"
professions: ["Data Engineers", "BI Specialists", "Operations Managers"]
useCase:
  context: "A financial chatbot needs to perform an exact tax calculation, a task where LLMs often fail without an external calculator."
  prompt: "Calculate the VAT (21%) of €34,589 and add it to the total. Use the [CALCULATOR] tool for the mathematical operation."
  result: "To provide the exact result, I am proceeding with the calculation.\n\n<tool_use>\n[CALCULATOR: 34589 * 0.21]\n</tool_use>\n<tool_result>\n7263.69\n</tool_result>\n\nThe VAT is €7,263.69. The total amount is €41,852.69."
---

## What is Automatic Reasoning and Tool-use (ART)?

**ART** (Automatic Reasoning and Tool-use) is the natural evolution that pulled Generative AI out of its isolated text box. This Prompt Engineering discipline instructs the language model to recognize its own computational limitations and delegate specific tasks to external software or hardware tools.

Through the use of **Stop Sequences**, the AI pauses its token generation, issues a structured command (e.g., a SQL query or a Weather API call), waits for the system to return the raw data, and then seamlessly incorporates that result into its final response to the user.

### When to Use ART (Tool-use)?

The integration of tools is the core of enterprise-grade co-pilots and advanced autonomous assistants in 2026.

* **Mathematical Precision:** LLMs do not "calculate"; they predict the next most likely text token. ART allows the AI to call a calculator or a Python script for exact arithmetic operations.
* **Live Database Queries:** A sales representative asks, "How many units did we sell in London last quarter?". The AI generates the required SQL query, executes it on the corporate database, and drafts the answer with the precise, real-time figure.
* **Real-World Interaction:** Creating assistants capable of booking flights, executing stock trades, or triggering Slack notifications on demand.
* **Real-Time Fact-Checking:** Connecting with Wikipedia APIs or search engines to verify claims and data points instantly, reducing hallucinations.

### Technical Limitations & Security

The primary risk of Tool-use is **Cybersecurity**. Allowing an LLM to generate code or SQL queries that execute automatically on a server exposes the infrastructure to massive **Prompt Injection** attacks. 

Implementing ART requires a strictly isolated execution environment (**Sandboxing**) and "Human-in-the-Loop" approvals for critical operations, such as data deletion or financial transactions, to ensure the AI remains an asset and not a liability.