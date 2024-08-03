import Card from "../ui/Card";
import { FC } from "react";

interface Props {
  degree: string;
  institution: string;
  location: string;
  link?: string;
}

export const ExperienceEducationCard: FC<Props> = (props) => {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
        </div>
        <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-blue-500 text-center shadow">
          <i className="fas fa-check-circle text-white"></i>
        </div>
      </div>
      <Card className="col-start-4 col-end-12 my-4 mr-auto w-full bg-white px-4 py-3 dark:bg-gray-800">
        <h3 className="mb-1 text-lg font-semibold">{props.degree}</h3>
        <a
          href={props.link ?? ""}
          className={`font-semibold ${props?.link ? "text-primary" : "text-foreground"}`}
        >
          {props.institution}
        </a>
        <div className="mb-4 text-sm uppercase">{props.location}</div>
      </Card>
    </div>
  );
};
