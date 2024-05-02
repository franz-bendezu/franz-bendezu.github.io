import { NextPage } from "next";
import {
  WORK_EXPERIENCES,
  EDUCATION_EXPERIENCES,
} from "../constants/experiences";
import Card from "../components/ui/Card";

const Projects: NextPage = () => {
  return (
    <section
      data-testid="projects"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="font-monospace text-center text-3xl dark:text-white lg:text-4xl">
        Acerca de mí
      </h1>
      <span className="mb-5 h-1 w-48 bg-blue-500"></span>
      <div className="mt-4 p-4">
        <h2 className="mb-6 text-left text-4xl font-semibold">Educación</h2>
        <div className="container">
          <div className="flex grid-cols-12 flex-col text-gray-50 md:grid">
            {EDUCATION_EXPERIENCES.map((p) => (
              <div key={p.id} className="flex md:contents">
                <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <Card className=" col-start-4 col-end-12 my-4 mr-auto w-full bg-blue-500 px-4 py-3">
                  <h3 className="mb-1 text-lg font-semibold">{p.degree}</h3>
                  <a
                    href={p.link ?? ""}
                    className={`font-semibold ${p?.link ? "text-primary" : "text-foreground"}`}
                  >
                    {p.institution}
                  </a>
                  <div className="mb-4 text-sm uppercase">{p.location}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <h2 className="mb-6 text-left text-4xl font-semibold">
          Experiencia Laboral
        </h2>
        <div className="container">
          <div className="flex grid-cols-12 flex-col text-gray-50 md:grid">
            {WORK_EXPERIENCES.map((p) => (
              <div key={p.id} className="flex md:contents">
                <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <Card className=" col-start-4 col-end-12 my-4 mr-auto w-full bg-blue-500 px-4 py-3">
                  <h3 className="mb-1 text-lg font-semibold">{p.position}</h3>
                  <a
                    href={p.link ?? ""}
                    className={`font-semibold ${p?.link ? "text-primary" : "text-foreground"}`}
                  >
                    {p.company}
                  </a>
                  <div className="mb-4 text-sm uppercase">
                    {p.start} - {p.end}
                  </div>
                  <div className="pl-3 text-justify leading-tight ">
                    <ul className="prose dark:prose-invert list-disc text-sm">
                      {p.tasks.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
