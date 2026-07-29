type ContentEntry = {
  id: string;
  data: Record<string, unknown>;
};

const modules = import.meta.glob("../../content/projects/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Record<string, unknown>>;

const entries = Object.entries(modules).map(([path, data]) => ({
  id: path
    .split("/")
    .at(-1)!
    .replace(/\.json$/, ""),
  data,
}));

export async function getCollection(
  collection: string,
  filter?: (entry: ContentEntry) => boolean,
) {
  if (collection !== "projects") return [];
  return filter ? entries.filter(filter) : entries;
}
