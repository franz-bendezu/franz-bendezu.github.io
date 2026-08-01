import { getImage } from "astro:assets";
import type { IProject, IProjectImage } from "@/interfaces/project";

const CARD_WIDTHS = [320, 480, 640, 960];
const GALLERY_WIDTHS = [160, 320, 640, 960, 1200, 1600];

async function optimizeImage(
  image: IProjectImage,
  widths: number[],
  sizes: string,
): Promise<IProjectImage> {
  if (!image.source) return image;

  const responsiveWidths = [...new Set(widths)]
    .filter((width) => width <= image.width)
    .sort((a, b) => a - b);
  if (!responsiveWidths.length) responsiveWidths.push(image.width);
  const optimized = await getImage({
    src: image.source,
    widths: responsiveWidths,
    sizes,
    format: "webp",
    quality: 80,
  });

  const { source: _source, ...attributes } = image;

  return {
    ...attributes,
    src: optimized.src,
    srcSet: optimized.srcSet.attribute,
    sizes,
  };
}

export async function optimizeProjectBanner(
  project: IProject,
): Promise<IProject> {
  if (!project.banner) return project;

  return {
    ...project,
    banner: await optimizeImage(
      project.banner,
      CARD_WIDTHS,
      "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
    ),
  };
}

export function optimizeProjectBanners(projects: IProject[]) {
  return Promise.all(projects.map(optimizeProjectBanner));
}

export async function optimizeProjectGallery(
  images: IProjectImage[] | undefined,
) {
  if (!images) return undefined;

  return Promise.all(
    images.map((image) =>
      optimizeImage(
        image,
        GALLERY_WIDTHS,
        "(min-width: 1280px) 1200px, calc(100vw - 2.5rem)",
      ),
    ),
  );
}
