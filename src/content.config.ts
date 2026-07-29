import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const localeSchema = z.enum(["en", "es"]);
const categorySchema = z.enum(["freelance", "personal", "demo"]);
const statusSchema = z.enum(["active", "completed"]);
const projectLinkTypeSchema = z.enum([
  "github",
  "gitlab",
  "website",
  "source",
  "download",
  "video",
]);
const datedValueSchema = z.string().regex(/^\d{4}-\d{2}$/);
const nonEmptyUniqueStrings = z
  .array(z.string().min(1))
  .refine((values) => new Set(values).size === values.length, {
    message: "Values must be unique",
  });
const localizedTextSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
  })
  .strict();
const localizedImageSchema = z
  .object({
    alt: z.string().min(1),
    description: z.string().min(1).optional(),
  })
  .strict();
const localizedLinkSchema = z
  .object({
    title: z.string().min(1),
  })
  .strict();
const localizedProjectSchema = z
  .object({
    code: z.string().min(1),
    title: z.string().min(1),
    shortDescription: z.string().min(1),
    description: z.string().min(1).optional(),
    projectGoals: z.array(localizedTextSchema),
    keyFeatures: z.array(localizedTextSchema),
  })
  .strict();
const localizedValues = <T extends z.ZodType>(schema: T) =>
  z.object({ en: schema, es: schema }).strict();

const projects = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/projects",
  }),
  schema: z
    .object({
      position: z.number().int().positive(),
      status: statusSchema,
      tags: nonEmptyUniqueStrings,
      categoryCode: categorySchema,
      technologyCodes: nonEmptyUniqueStrings,
      priority: z.number().optional(),
      start: datedValueSchema.optional(),
      end: datedValueSchema.optional(),
      banner: z
        .object({
          src: z.string().startsWith("/"),
          locales: localizedValues(localizedImageSchema),
        })
        .strict()
        .optional(),
      links: z
        .array(
          z
            .object({
              type: projectLinkTypeSchema,
              url: z.url(),
              locales: localizedValues(localizedLinkSchema),
            })
            .strict(),
        )
        .optional(),
      images: z
        .array(
          z
            .object({
              src: z.string().startsWith("/"),
              locales: localizedValues(localizedImageSchema),
            })
            .strict(),
        )
        .optional(),
      locales: localizedValues(localizedProjectSchema),
    })
    .strict(),
});

export const collections = { projects };
export { categorySchema, localeSchema, statusSchema };
