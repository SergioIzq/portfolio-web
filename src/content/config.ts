import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    frontend: z.object({
      technologies: z.string(),
      code: z.string().url(),
      demo: z.string().url(),
      screenshot: z.string().optional()
    }),
    backend: z
      .object({
        code: z.string().url(),
        technologies: z.string(),
      })
      .optional(), // Backend es opcional
  }),
});

export const collections = {
  projects: projectsCollection,
};
