import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
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
const yearSchema = z.string().regex(/^\d{4}$/);
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

const workExperiences = defineCollection({
  loader: file("./src/content/work-experiences.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      start: datedValueSchema,
      end: datedValueSchema.optional(),
      url: z.url().optional(),
      locales: localizedValues(
        z
          .object({
            company: z.string().min(1),
            location: z.string().min(1),
            role: z.string().min(1),
            startLabel: z.string().min(1),
            endLabel: z.string().min(1),
            tasks: z.array(z.string().min(1)),
          })
          .strict(),
      ),
    })
    .strict(),
});

const education = defineCollection({
  loader: file("./src/content/education.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      start: yearSchema,
      end: yearSchema.optional(),
      url: z.url().optional(),
      locales: localizedValues(
        z
          .object({
            institution: z.string().min(1),
            location: z.string().min(1),
            degree: z.string().min(1),
          })
          .strict(),
      ),
    })
    .strict(),
});

const certifications = defineCollection({
  loader: file("./src/content/certifications.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      startedAt: datedValueSchema.optional(),
      issuedAt: datedValueSchema,
      url: z.url(),
      locales: localizedValues(
        z
          .object({
            name: z.string().min(1),
          })
          .strict(),
      ),
    })
    .strict(),
});

const skills = defineCollection({
  loader: file("./src/content/skills.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      items: nonEmptyUniqueStrings,
      locales: localizedValues(z.object({ name: z.string().min(1) }).strict()),
    })
    .strict(),
});

const profiles = defineCollection({
  loader: file("./src/content/profiles.json"),
  schema: z
    .object({
      email: z.email(),
      phone: z.string().min(1).optional(),
      website: z.url(),
      portrait: z.string().startsWith("/"),
      socialLinks: z.array(
        z.object({ label: z.string().min(1), url: z.url() }).strict(),
      ),
      locales: localizedValues(
        z
          .object({
            name: z.string().min(1),
            headline: z.string().min(1),
            location: z.string().min(1),
            summary: z.string().min(1),
          })
          .strict(),
      ),
    })
    .strict(),
});

const resumes = defineCollection({
  loader: file("./src/content/resumes.json"),
  schema: z
    .object({
      profile: reference("profiles"),
      workExperiences: z.array(reference("workExperiences")).min(1),
      education: z.array(reference("education")).min(1),
      certifications: z.array(reference("certifications")),
      skills: z.array(reference("skills")).min(1),
      projects: z.array(reference("projects")),
      locales: localizedValues(
        z
          .object({
            summary: z.string().min(1),
            experience: z.string().min(1),
            education: z.string().min(1),
            certifications: z.string().min(1),
            skills: z.string().min(1),
            projects: z.string().min(1),
            present: z.string().min(1),
          })
          .strict(),
      ),
    })
    .strict(),
});

export const collections = {
  projects,
  workExperiences,
  education,
  certifications,
  skills,
  profiles,
  resumes,
};
export { categorySchema, localeSchema, statusSchema };
