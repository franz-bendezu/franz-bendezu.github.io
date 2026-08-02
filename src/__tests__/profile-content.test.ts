import { describe, expect, it } from "vitest";
import {
  getCertifications,
  getExperienceYears,
  getResume,
  getSkills,
  getWorkExperiences,
} from "@/lib/profile-content";

describe("shared profile content", () => {
  it("localizes reusable experience, skill, and certification records", async () => {
    const [englishWork, spanishWork, englishSkills, englishCertifications] =
      await Promise.all([
        getWorkExperiences("en"),
        getWorkExperiences("es"),
        getSkills("en"),
        getCertifications("en"),
      ]);

    expect(englishWork).toHaveLength(7);
    expect(englishWork[0].company).toBe("Thoughtworks");
    expect(spanishWork[0].startLabel).toBe("Septiembre 2025");
    expect(englishWork[1].company).toBe("Devsu");
    expect(
      englishWork[1].technologies.map((technology) => technology.name),
    ).toEqual([
      "NestJS",
      "Azure DevOps",
      "Apache Kafka",
      "Redis",
      "Event-Driven Architecture",
      "PostgreSQL",
    ]);
    expect(englishWork[2].endLabel).toBe("April 2025");
    expect(englishSkills).toHaveLength(7);
    expect(englishSkills.find(({ id }) => id === "cloud")?.items).toEqual([
      "Amazon S3",
      "Amazon EC2",
      "Amazon RDS",
      "AWS Lambda",
      "API Gateway",
      "Amazon CloudFront",
      "Amazon Route 53",
      "DigitalOcean",
    ]);
    expect(englishCertifications).toHaveLength(10);
    expect(englishCertifications[0].date).toBe("November 2023");
  });

  it("resolves the CV composition through typed collection references", async () => {
    const [englishResume, spanishResume] = await Promise.all([
      getResume("en"),
      getResume("es"),
    ]);
    const experienceYears = getExperienceYears();

    expect(englishResume.profile.email).toBe("fbendezui@uni.pe");
    expect(spanishResume.profile.summary).toContain(
      `más de ${experienceYears} años de experiencia`,
    );
    expect(spanishResume.profile.summary.split("\n\n")).toHaveLength(3);
    expect(englishResume.profile.summary).toContain(
      `over ${experienceYears} years of experience`,
    );
    expect(englishResume.education).toHaveLength(3);
    expect(englishResume.education[0].institution).toBe(
      "Hanyang Cyber University",
    );
    expect(
      englishResume.projects.map(({ translationKey }) => translationKey),
    ).toEqual([
      "movify-aws-migration",
      "agendalo-ssr-migration",
      "my-portfolio",
    ]);
    expect(spanishResume.projects.at(-1)?.code).toBe("my-portfolio");
    expect(spanishResume.labels.certifications).toBe(
      "Cursos y Certificaciones",
    );
  });

  it("calculates completed career years from August 2021", () => {
    expect(getExperienceYears(new Date("2026-07-31T00:00:00Z"))).toBe(4);
    expect(getExperienceYears(new Date("2026-08-01T00:00:00Z"))).toBe(5);
  });
});
