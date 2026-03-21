---
title: "Docker & Compose Architect"
description: "Generates secure and optimized Docker configurations for production-grade environments and local development workflows."
model: "Claude 4"
category: "DevOps & Infrastructure"
variables: ["TECH_STACK", "EXPOSED_PORTS"]
promptText: "Act as a Senior DevOps Engineer. Generate a production-ready 'Dockerfile' and 'docker-compose.yml' for the following tech stack: [TECH_STACK]. The application must expose these ports: [EXPOSED_PORTS].\n\nMandatory Constraints:\n1. Utilize official and lightweight base images (e.g., Alpine Linux) to minimize attack surfaces.\n2. Implement Multi-stage builds to significantly reduce the final image footprint.\n3. Configure secure environment variable handling and volume mapping.\n4. Enforce non-root user execution to adhere to the Principle of Least Privilege."
---

## Stress-Free Production Deployments

Containerizing applications is a common source of technical debt due to permission conflicts or bloated, insecure images. This prompt is engineered with enterprise-grade security directives, ensuring your code doesn't just "work on your machine" but is ready for deployment in high-security environments like **AWS EKS**, **Azure Kubernetes Service (AKS)**, or **Google Cloud Run**.



By explicitly enforcing **Multi-stage builds** and **Non-root execution**, you are guiding the AI to build a "lean" container. This results in faster deployment times, lower storage costs in your private registry, and a hardened infrastructure that is resilient against common container-escape vulnerabilities.