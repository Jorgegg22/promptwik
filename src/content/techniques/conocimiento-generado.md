---
title: "Prompt de Conocimiento Generado"
level: "Avanzado"
description: "La IA genera primero información o hechos relevantes sobre el tema antes de responder a la pregunta principal."
example: "Escribe 4 hechos clave sobre la Revolución Francesa. Basado en esos hechos, ¿cuál fue su impacto económico?"
color: "bg-basement-orange"
professions: ["Investigadores", "Periodistas", "Estudiantes"]
useCase:
  context: "Se necesita analizar el impacto de una nueva ley, pero el modelo a veces inventa detalles si se le pregunta directamente."
  prompt: "Paso 1: Escribe 3 hechos clave sobre la Ley de IA de la UE de 2024. \nPaso 2: Basado ÚNICAMENTE en esos 3 hechos, redacta un resumen de riesgos para startups europeas."
  result: "Hecho 1: Clasifica los sistemas por riesgo.\nHecho 2: Prohíbe la puntuación social.\nHecho 3: Impone multas millonarias.\n\nAnálisis: Las startups enfrentan un riesgo financiero extremo si desarrollan modelos de alto riesgo sin auditorías previas..."
---
## ¿Qué es el Prompt de Conocimiento Generado?

El **Generated Knowledge Prompting** (Prompt de Conocimiento Generado) es una técnica que divide la interacción con la IA en dos fases lógicas. En lugar de hacer una pregunta compleja directamente, primero forzamos a la Inteligencia Artificial a generar hechos concretos, definiciones o contexto histórico sobre el tema en cuestión.

Una vez que este "conocimiento" ha sido extraído de los pesos neuronales del modelo y volcado en el lienzo de texto, le pedimos (en el mismo prompt o en el siguiente) que responda a la pregunta original basándose *exclusivamente* en lo que acaba de redactar. Actúa como un calentamiento neuronal (Context Priming) que mejora drásticamente la precisión.

### ¿Cuándo utilizar Conocimiento Generado?

Es altamente efectivo para tareas de conocimiento abierto (Open-Domain) donde la Inteligencia Artificial suele dar respuestas vagas o poco fundamentadas.

* **Análisis Histórico o Científico:** "Genera las 5 leyes de la termodinámica. Ahora usa la ley 2 para explicar este fenómeno."
* **Escritura de Ensayos o Tesis:** Forzar a la IA a enumerar primero los argumentos principales y fuentes teóricas antes de redactar el documento final.
* **Consultas de Propiedad Intelectual:** Útil cuando no tienes una base de datos externa (RAG) pero necesitas que el modelo recupere todo lo que "recuerda" sobre una patente específica antes de evaluarla.
* **Control de Sesgos Algorítmicos:** Al obligar a la IA a listar hechos neutrales primero, evitas que salte a conclusiones precipitadas o sesgadas en temas sociopolíticos.

### Limitaciones de la Técnica

Esta estrategia depende por completo de la memoria inherente del LLM. Si **GPT-5** o **Gemini** no fueron entrenados con información suficiente sobre el nicho que estás preguntando, el "conocimiento generado" en la primera fase estará plagado de alucinaciones. En consecuencia, la respuesta final, basada en esos hechos falsos, será catastróficamente errónea y presentará una falsa sensación de autoridad.