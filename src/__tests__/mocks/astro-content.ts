import certifications from "../../content/certifications.json";
import education from "../../content/education.json";
import profiles from "../../content/profiles.json";
import resumes from "../../content/resumes.json";
import skills from "../../content/skills.json";
import workExperiences from "../../content/work-experiences.json";

type ContentEntry = {
  id: string;
  collection: string;
  data: Record<string, unknown>;
};

const projectModules = import.meta.glob("../../content/projects/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Record<string, unknown>>;

const projectEntries = Object.entries(projectModules).map(([path, data]) => ({
  id: path
    .split("/")
    .at(-1)!
    .replace(/\.json$/, ""),
  collection: "projects",
  data,
}));

function entriesFromObject(
  collection: string,
  values: Record<string, Record<string, unknown>>,
) {
  return Object.entries(values).map(([id, sourceData]) => {
    const data =
      collection === "resumes"
        ? {
            ...sourceData,
            profile: { collection: "profiles", id: sourceData.profile },
            workExperiences: (sourceData.workExperiences as string[]).map(
              (id) => ({ collection: "workExperiences", id }),
            ),
            education: (sourceData.education as string[]).map((id) => ({
              collection: "education",
              id,
            })),
            certifications: (sourceData.certifications as string[]).map(
              (id) => ({ collection: "certifications", id }),
            ),
            skills: (sourceData.skills as string[]).map((id) => ({
              collection: "skills",
              id,
            })),
            projects: (sourceData.projects as string[]).map((id) => ({
              collection: "projects",
              id,
            })),
          }
        : sourceData;
    return { id, collection, data };
  });
}

const stores = new Map<string, ContentEntry[]>([
  ["projects", projectEntries],
  ["workExperiences", entriesFromObject("workExperiences", workExperiences)],
  ["education", entriesFromObject("education", education)],
  ["certifications", entriesFromObject("certifications", certifications)],
  ["skills", entriesFromObject("skills", skills)],
  ["profiles", entriesFromObject("profiles", profiles)],
  ["resumes", entriesFromObject("resumes", resumes)],
]);

export async function getCollection(
  collection: string,
  filter?: (entry: ContentEntry) => boolean,
) {
  const entries = stores.get(collection) ?? [];
  return filter ? entries.filter(filter) : entries;
}

export async function getEntry(
  collectionOrReference: string | { collection: string; id: string },
  id?: string,
) {
  const reference =
    typeof collectionOrReference === "string"
      ? { collection: collectionOrReference, id: id! }
      : collectionOrReference;
  return stores
    .get(reference.collection)
    ?.find((entry) => entry.id === reference.id);
}

export async function getEntries(
  references: { collection: string; id: string }[],
) {
  return Promise.all(references.map((reference) => getEntry(reference)));
}
