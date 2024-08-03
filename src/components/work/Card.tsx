import { CheckIcon } from "@heroicons/react/20/solid";
import Card from "../ui/Card";
import { FC } from "react";
import { IWorkExperience } from "@/interfaces/work-experience";

interface Props extends Omit<IWorkExperience, "id"> {}

export const WorkExperienceCard: FC<Props> = (props) => {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-700"></div>
        </div>
        <div className="absolute top-1/2 -mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-center shadow">
          <CheckIcon className="h-5 w-5 text-white" />
        </div>
      </div>
      <Card className="col-start-4 col-end-12 my-4 mr-auto w-full bg-white px-4 py-3 dark:bg-gray-800">
        <h3 className="mb-1 text-lg font-semibold">{props.position}</h3>
        <a
          href={props.link ?? ""}
          className={`font-semibold ${props?.link ? "text-primary" : "text-foreground"}`}
        >
          {props.company}
        </a>
        <div className="mb-4 text-sm uppercase">
          {props.start} - {props.end}
        </div>
        <div className="pl-3 text-justify leading-tight">
          <ul className="prose dark:prose-invert list-disc text-sm">
            {props.tasks.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};
