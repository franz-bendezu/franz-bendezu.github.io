import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { PROJECT_TECHNOLOGIES } from "./constants/project-techologies";

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
const technologyCodesSchema = nonEmptyUniqueStrings.superRefine(
  (codes, context) => {
    const knownCodes = new Set(
      PROJECT_TECHNOLOGIES.map((technology) => technology.code),
    );
    codes.forEach((code, index) => {
      if (!knownCodes.has(code)) {
        context.addIssue({
          code: "custom",
          message: `Unknown technology code: ${code}`,
          path: [index],
        });
      }
    });
  },
);
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
    role: z.string().min(1).optional(),
    challenge: z.string().min(1),
    approach: z.string().min(1),
    outcomes: z.array(z.string().min(1)).min(1),
    projectGoals: z.array(localizedTextSchema).min(1),
    keyFeatures: z.array(localizedTextSchema).min(1),
  })
  .strict();
const localizedValues = <T extends z.ZodType>(schema: T) =>
  z.object({ en: schema, es: schema }).strict();

const projects = defineCollection({
  loader: glob({
    pattern: "*.json",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z
      .object({
        position: z.number().int().positive(),
        status: statusSchema,
        tags: nonEmptyUniqueStrings,
        categoryCode: categorySchema,
        technologyCodes: technologyCodesSchema,
        priority: z.number().optional(),
        featured: z.boolean().optional(),
        start: datedValueSchema.optional(),
        end: datedValueSchema.optional(),
        banner: z
          .object({
            src: image(),
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
                src: image(),
                locales: localizedValues(localizedImageSchema),
              })
              .strict(),
          )
          .optional(),
        locales: localizedValues(localizedProjectSchema),
      })
      .strict()
      .refine(({ start, end }) => !start || !end || start <= end, {
        message: "Project end date must not be earlier than its start date",
        path: ["end"],
      }),
});

const workExperiences = defineCollection({
  loader: file("./src/content/work-experiences.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      technologyCodes: technologyCodesSchema,
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
      technologyCodes: technologyCodesSchema,
      locales: localizedValues(z.object({ name: z.string().min(1) }).strict()),
    })
    .strict(),
});

const profiles = defineCollection({
  loader: file("./src/content/profiles.json"),
  schema: ({ image }) =>
    z
      .object({
        email: z.email(),
        phone: z.string().min(1).optional(),
        website: z.url(),
        portrait: image(),
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

const serviceItemSchema = z
  .object({ title: z.string().min(1), description: z.string().min(1) })
  .strict();
const services = defineCollection({
  loader: file("./src/content/services.json"),
  schema: z
    .object({
      position: z.number().int().positive(),
      slug: z.string().min(1),
      technologyCodes: technologyCodesSchema,
      relatedProjects: z.array(z.string().min(1)).min(1),
      locales: localizedValues(
        z
          .object({
            title: z.string().min(1),
            navTitle: z.string().min(1),
            metaTitle: z.string().min(1),
            metaDescription: z.string().min(1),
            eyebrow: z.string().min(1),
            description: z.string().min(1),
            audience: z.string().min(1),
            problems: z.array(serviceItemSchema).min(1),
            outcomes: z.array(z.string().min(1)).min(1),
            deliverables: z.array(z.string().min(1)).min(1),
            process: z.array(serviceItemSchema).length(4),
            faqs: z.array(serviceItemSchema).min(1),
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
  services,
  resumes,
};
export { categorySchema, localeSchema, statusSchema };
