---
title: "ReAct (Reasoning and Acting)"
level: "Master"
description: "A framework that combines verbal reasoning with environmental actions, serving as the core foundation for autonomous AI Agents."
example: "Thought: I need to check the weather. Action: Search[Weather Madrid]. Observation: Sunny. Response..."
color: "bg-button-purple"
professions: ["AI Engineers", "Automation Architects (Make)", "Productivity Architects"]
useCase:
  context: "An autonomous agent is tasked with finding Apple's current stock price and comparing it to yesterday's closing price."
  prompt: "Question: How much has Apple's stock increased today compared to yesterday?\n\nThought 1: I need to retrieve today's current market price."
  result: "Action 1: Stock_API[AAPL, today]\nObservation 1: 185.00 USD.\nThought 2: Now I need yesterday's closing price.\nAction 2: Stock_API[AAPL, yesterday]\nObservation 2: 180.00 USD.\nResponse: Apple's stock has increased by 5.00 USD since yesterday."
---

## What is ReAct (Reasoning and Acting)?

The **ReAct** framework marks the critical transition from simple "chatbots" to true **Autonomous AI Agents**. This advanced Prompt Engineering technique instructs the language model to actively interleave verbalized logical thoughts with executable actions in external tools.



In practice, you force the Artificial Intelligence to operate within a continuous execution loop: **Think** about what it needs to know -> **Act** by executing a command (e.g., calling a Wikipedia API or a database) -> **Observe** the raw result returned by the tool -> **Think** again to determine if it has reached the final answer or if another action is required. This empowers models like **GPT-5** with the ability to interact dynamically with the real world.

### When to Use the ReAct Framework?

ReAct is the industry standard for automated software development and cognitive assistants where the AI must solve problems that require data beyond its internal training set.

* **Dynamic Web Intelligence:** Researching breaking news, real-time stock prices, or current market trends.
* **IT & DevOps Automation:** An agent that detects a server alert, reasons which logs to investigate, executes Bash commands to diagnose, and resolves the incident autonomously.
* **Academic Research Assistants:** A model that reads a primary paper, decides to cross-reference citations in PubMed, and then drafts a fact-verified summary.
* **Enterprise API Orchestration:** Sending emails, creating calendar events, or querying inventories within a CRM like Salesforce based on high-level user goals.

### Technical Limitations & Risks

ReAct agents are susceptible to **Infinite Loops** if an external tool fails or returns an error format that the model doesn't recognize. Furthermore, they are extremely resource-intensive regarding **Token Consumption** (API cost), as the LLM must re-evaluate the entire history of thoughts, actions, and observations at every iteration of the loop. This technique requires highly advanced frontier models—such as **Claude 4** or **OpenAI O1**—to maintain long-range context without degrading performance.