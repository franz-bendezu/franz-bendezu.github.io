import { IBaseProject } from "@/interfaces/project";
import { FC } from "react";
import Image from "next-image-export-optimizer";

export const ProjectSummary: FC<{
    project: IBaseProject;
  }> = ({ project }) => {
    return (
      <section className="border-b">
        <div className="grid gap-10 px-4 py-6 md:px-6 md:py-8 lg:grid-cols-2 lg:gap-20 lg:py-12">
          <div className="order-2 space-y-4 lg:order-1">
            <div className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm dark:bg-slate-700">
              {project.categoryCode}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {project.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="inline-block rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-800"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {project.banner && (
            <div className="relative order-1 flex items-center justify-center lg:order-2">
              <Image
                src={project.banner.src}
                alt={project.banner.alt}
                width="828"
                height="450"
                className="mx-auto aspect-video w-auto h-full overflow-hidden rounded-xl object-contain object-center"
              />
            </div>
          )}
        </div>
      </section>
    );
  };