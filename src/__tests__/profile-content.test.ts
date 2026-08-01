import { describe, expect, it } from "vitest";
import {
  getCertifications,
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

    expect(englishWork).toHaveLength(5);
    expect(spanishWork[0].startLabel).toBe("Septiembre 2024");
    expect(englishWork[0].startLabel).toBe("September 2024");
    expect(englishSkills).toHaveLength(7);
    expect(englishCertifications).toHaveLength(10);
    expect(englishCertifications[0].date).toBe("November 2023");
  });

  it("resolves the CV composition through typed collection references", async () => {
    const [englishResume, spanishResume] = await Promise.all([
      getResume("en"),
      getResume("es"),
    ]);

    expect(englishResume.profile.email).toBe("fbendezui@uni.pe");
    expect(spanishResume.profile.summary).toContain(
      "más de 5 años de experiencia",
    );
    expect(spanishResume.profile.summary.split("\n\n")).toHaveLength(3);
    expect(englishResume.profile.summary).toContain(
      "more than 5 years of experience",
    );
    expect(
      englishResume.projects.map(({ translationKey }) => translationKey),
    ).toEqual([
      "movify-aws-migration",
      "agendalo-ssr-migration",
      "my-portfolio",
    ]);
    expect(spanishResume.projects.at(-1)?.code).toBe("mi-portafolio");
    expect(spanishResume.labels.certifications).toBe(
      "Cursos y Certificaciones",
    );
  });
});
