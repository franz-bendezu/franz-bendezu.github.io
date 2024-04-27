import { NextPage } from "next";
import { EXPERIENCES } from "../constants/experiences";

const Projects: NextPage = () => {
  return (
    <div>
      <div className="mt-4 p-4">
        <h1 className="mb-6 text-center text-4xl font-semibold">Experiencia</h1>
        <div className="container">
          <div className="flex grid-cols-12 flex-col text-gray-50 md:grid">
            {EXPERIENCES.map((p) => (
              <div key={p.id} className="flex md:contents">
                <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
                    <i className="fas fa-check-circle text-white"></i>
                  </div>
                </div>
                <article className="animate col-start-4 col-end-12 my-4  mr-auto w-full rounded-xl bg-blue-500 px-4  py-3 shadow-md">
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
                  <div className="text-justify leading-tight pl-3 ">
                    <ul className="prose dark:prose-invert list-disc text-sm">
                      {p.tasks.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
