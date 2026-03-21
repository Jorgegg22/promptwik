---
title: "Angular Performance Auditor"
description: "Evaluates Angular components and suggests advanced rendering optimization techniques for enterprise applications."
model: "GPT-5"
category: "Frontend Engineering"
variables: ["PERFORMANCE_BOTTLENECK", "COMPONENT_CODE"]
promptText: "I am experiencing performance challenges in my Angular application. Specifically, the following issue occurs: [PERFORMANCE_BOTTLENECK].\n\nAnalyze the provided code and offer actionable strategies and refactored snippets to optimize execution speed. Apply advanced techniques such as Module Lazy Loading, efficient change detection (ChangeDetectionStrategy.OnPush), or the implementation of trackBy in *ngFor directives where applicable to the context.\n\nComponent Source Code:\n[COMPONENT_CODE]"
---

## Ultra-Fluid Frontend Execution

In massive reactive frameworks like Angular, redundant re-rendering cycles can easily bottleneck the browser's main thread. This engineering-grade prompt provides the AI with precise instructions on which high-impact techniques to audit (`OnPush`, `trackBy`, `Signal-based reactivity`), preventing generic advice and focusing strictly on the framework's lifecycle and internal change detection mechanism.



By forcing the model to look for specific architectural flaws, you ensure that the output targets the root cause of "jank" in your UI, resulting in a significantly lower memory footprint and a smoother user experience (60 FPS) in complex data-heavy applications.