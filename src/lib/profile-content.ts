import {
  getCollection,
  getEntries,
  getEntry,
  type CollectionEntry,
} from "astro:content";
import type { Locale } from "./i18n";
import { getProjects } from "./projects";

export const CAREER_START = "2021-08";

export function getExperienceYears(referenceDate = new Date()) {
  const [startYear, startMonth] = CAREER_START.split("-").map(Number);
  const currentYear = referenceDate.getUTCFullYear();
  const currentMonth = referenceDate.getUTCMonth() + 1;

  return currentYear - startYear - (currentMonth < startMonth ? 1 : 0);
}

function byPosition<T extends { position: number }>(a: T, b: T) {
  return a.position - b.position;
}

function requireEntry<T>(entry: T | undefined, label: string): T {
  if (!entry) throw new Error(`Missing referenced ${label} entry`);
  return entry;
}

function localizeWorkExperience(
  entry: CollectionEntry<"workExperiences">,
  locale: Locale,
) {
  return {
    id: entry.id,
    position: entry.data.position,
    startDate: entry.data.start,
    endDate: entry.data.end,
    link: entry.data.url,
    ...entry.data.locales[locale],
  };
}

function localizeEducation(
  entry: CollectionEntry<"education">,
  locale: Locale,
) {
  return {
    id: entry.id,
    position: entry.data.position,
    start: entry.data.start,
    end: entry.data.end,
    link: entry.data.url,
    ...entry.data.locales[locale],
  };
}

function localizeCertification(
  entry: CollectionEntry<"certifications">,
  locale: Locale,
) {
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${value}-01T00:00:00Z`));
  const issuedAt = formatDate(entry.data.issuedAt);
  return {
    id: entry.id,
    position: entry.data.position,
    issuedAt: entry.data.issuedAt,
    url: entry.data.url,
    date: entry.data.startedAt
      ? `${formatDate(entry.data.startedAt)} – ${issuedAt}`
      : issuedAt,
    ...entry.data.locales[locale],
  };
}

function localizeSkill(entry: CollectionEntry<"skills">, locale: Locale) {
  return {
    id: entry.id,
    position: entry.data.position,
    items: [...entry.data.items],
    ...entry.data.locales[locale],
  };
}

function localizeProfile(entry: CollectionEntry<"profiles">, locale: Locale) {
  const years = getExperienceYears();

  return {
    id: entry.id,
    email: entry.data.email,
    phone: entry.data.phone,
    website: entry.data.website,
    portrait: entry.data.portrait,
    socialLinks: entry.data.socialLinks.map((link) => ({ ...link })),
    ...entry.data.locales[locale],
    summary: entry.data.locales[locale].summary.replaceAll(
      "{years}",
      String(years),
    ),
  };
}

export async function getWorkExperiences(locale: Locale) {
  return (await getCollection("workExperiences"))
    .map((entry) => localizeWorkExperience(entry, locale))
    .sort(byPosition);
}

export async function getEducation(locale: Locale) {
  return (await getCollection("education"))
    .map((entry) => localizeEducation(entry, locale))
    .sort(byPosition);
}

export async function getCertifications(locale: Locale) {
  return (await getCollection("certifications"))
    .map((entry) => localizeCertification(entry, locale))
    .sort(byPosition);
}

export async function getSkills(locale: Locale) {
  return (await getCollection("skills"))
    .map((entry) => localizeSkill(entry, locale))
    .sort(byPosition);
}

export async function getProfile(locale: Locale, id = "franz") {
  const entry = requireEntry(await getEntry("profiles", id), `profile ${id}`);
  return localizeProfile(entry, locale);
}

export async function getResume(locale: Locale, id = "default") {
  const resume = requireEntry(await getEntry("resumes", id), `resume ${id}`);
  const [
    profileEntry,
    workEntries,
    educationEntries,
    certificationEntries,
    skillEntries,
  ] = await Promise.all([
    getEntry(resume.data.profile),
    getEntries(resume.data.workExperiences),
    getEntries(resume.data.education),
    getEntries(resume.data.certifications),
    getEntries(resume.data.skills),
  ]);

  const projects = await getProjects(locale);
  const projectsById = new Map(
    projects.map((project) => [project.translationKey, project]),
  );

  return {
    labels: resume.data.locales[locale],
    profile: localizeProfile(
      requireEntry(profileEntry, "resume profile"),
      locale,
    ),
    workExperiences: workEntries.map((entry) =>
      localizeWorkExperience(
        requireEntry(entry, "resume work experience"),
        locale,
      ),
    ),
    education: educationEntries.map((entry) =>
      localizeEducation(requireEntry(entry, "resume education"), locale),
    ),
    certifications: certificationEntries.map((entry) =>
      localizeCertification(
        requireEntry(entry, "resume certification"),
        locale,
      ),
    ),
    skills: skillEntries.map((entry) =>
      localizeSkill(requireEntry(entry, "resume skill"), locale),
    ),
    projects: resume.data.projects.map((reference) =>
      requireEntry(
        projectsById.get(reference.id),
        `resume project ${reference.id}`,
      ),
    ),
  };
}

export type ResumeData = Awaited<ReturnType<typeof getResume>>;
