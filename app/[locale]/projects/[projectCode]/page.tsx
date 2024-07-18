import { PROJECTS } from "@/constants/projects";
import { PROJECT_TECHNOLOGIES } from "@/constants/projects/techologies";
import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = () => {
  const params: { projectCode: string }[] = [];
  for (const project of PROJECTS) {
    params.push({ projectCode: project.code });
  }
  return params;
};

type Props = {
  params: {
    projectCode: string;
  };
};
export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find(
    (project) => project.code === params.projectCode,
  );
  const techs =
  PROJECT_TECHNOLOGIES.filter((tech) =>
    project?.technologyCodes.includes(tech.code),
  );
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <section className="border-b py-6 md:py-12 lg:py-16">
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-blue-200 px-3 py-1 text-sm dark:bg-slate-700">
              {project.categoryCode}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {project.shortDescription}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#" prefetch={false}>
                View Live Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              width="800"
              height="450"
              alt="Acme Web App"
              className="mx-auto aspect-video w-max overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="space-y-12 px-4 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Project Overview
            </h2>
            <p className="mt-4 md:text-xl">{project.description}</p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technologies Used
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.code}
                  className="rounded-lg bg-blue-200 p-4 text-center dark:bg-slate-700"
                >
                  {tech?.logo && (
                    <Image
                      src={tech.logo}
                      alt={""}
                      className="h-8 w-8 mx-auto"
                      width="32"
                      height="32"
                    />
                  )}
                  <p className="mt-2 text-sm font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Project Goals
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex flex-row items-start gap-4">
                  <CheckIcon className="mt-1 h-8 w-8 text-blue-500" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">Streamline Operations</h3>
                    <p className="">
                      Automate and centralize key business processes to improve
                      efficiency and reduce manual errors.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-start gap-4">
                  <CheckIcon className="mt-1 h-8 w-8 text-blue-500" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">
                      Enhance Data-Driven Insights
                    </h3>
                    <p className="">
                      Provide real-time analytics and reporting to help our
                      clients make informed, data-driven decisions.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-start gap-4">
                  <CheckIcon className="mt-1 h-8 w-8 text-blue-500" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold">
                      Improve User Experience
                    </h3>
                    <p className="">
                      Deliver a modern, intuitive, and responsive user interface
                      that enhances the overall user experience.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Key Features
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 rounded-lg bg-blue-200 p-6 dark:bg-slate-700">
                <h3 className="text-xl font-bold">Customizable Dashboards</h3>
                <p className="">
                  Users can personalize their dashboards to display the most
                  relevant data and metrics for their specific needs.
                </p>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-blue-200 p-6 dark:bg-slate-700">
                <h3 className="text-xl font-bold">Automated Workflows</h3>
                <p className="">
                  The application includes pre-built workflows to streamline
                  common business processes, such as order management and
                  customer onboarding.
                </p>
              </div>
              <div className="flex flex-col gap-1 rounded-lg bg-blue-200 p-6 dark:bg-slate-700">
                <h3 className="text-xl font-bold">Robust Reporting</h3>
                <p className="">
                  Advanced reporting and analytics tools provide comprehensive
                  insights into key performance indicators and business trends.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              width="800"
              height="450"
              alt="Acme Web App Features"
              className="aspect-video w-max overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
