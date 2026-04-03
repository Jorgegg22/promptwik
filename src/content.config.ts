import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const prompts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/prompts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    model: z.string(),
    category: z.string(),
    variables: z.array(z.string()),
    promptText: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const techniques = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/techniques" }),
  schema: z.object({
    title: z.string(),
    level: z.string(),
    description: z.string(),
    example: z.string(),
    color: z.string(),
    professions: z.array(z.string()),
    useCase: z.object({
      context: z.string(),
      prompt: z.string(),
      result: z.string(),
    }),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = { prompts, techniques, legal, guides };