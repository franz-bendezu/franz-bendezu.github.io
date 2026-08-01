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

    expect(englishWork).toHaveLength(7);
    expect(englishWork[0].company).toBe("Thoughtworks");
    expect(spanishWork[0].startLabel).toBe("Septiembre 2025");
    expect(englishWork[1].company).toBe("Devsu");
    expect(englishWork[2].endLabel).toBe("April 2025");
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
    expect(spanishResume.profile.summary).toContain("6 años de experiencia");
    expect(spanishResume.profile.summary.split("\n\n")).toHaveLength(3);
    expect(englishResume.profile.summary).toContain("6 years of experience");
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
    expect(spanishResume.projects.at(-1)?.code).toBe("mi-portafolio");
    expect(spanishResume.labels.certifications).toBe(
      "Cursos y Certificaciones",
    );
  });
});
