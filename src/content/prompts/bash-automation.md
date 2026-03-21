---
title: "Bash Scripting Architect"
description: "Generates robust Shell scripts for system administration, workflow automation, and infrastructure management."
model: "Gemini Pro"
category: "DevOps Engineering"
variables: ["TASK_TO_AUTOMATE", "OPERATING_SYSTEM"]
promptText: "Act as a Senior DevOps Engineer. I need to automate repetitive tasks on [OPERATING_SYSTEM] using a robust Bash script.\n\nThe script must perform the following: [TASK_TO_AUTOMATE]. \n\nDeliverables:\n1. A complete, POSIX-compliant Shell script.\n2. Implementation of defensive scripting practices (error handling, exit codes).\n3. Pre-execution validation commands for critical operations (e.g., directory existence, root privileges).\n4. Inline documentation explaining each logic block.\n5. Explicit instructions on how to grant execution permissions and run the script safely."
---

## Command Line Efficiency

This prompt is inspired by "Automation and Efficiency" standards in professional SysAdmin workflows. **Gemini Pro** excels at processing these technical requirements with extreme low-latency. 



What elevates this prompt to an "Architect" level is the mandatory requirement for **Defensive Scripting**. By enforcing error handling and pre-execution validations, you ensure the AI doesn't just give you "code that works," but "code that is safe." This prevents catastrophic failures—such as recursive deletions in the wrong directory—ensuring your infrastructure remains stable and predictable.