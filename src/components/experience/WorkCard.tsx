import { FC } from "react";
import { IWorkExperience } from "@/interfaces/work-experience";
import { ExperienceCard } from "./Card";

interface Props extends Omit<IWorkExperience, "id"> {}

export const ExperienceWorkCard: FC<Props> = (props) => {
  return (
    <ExperienceCard>
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
    </ExperienceCard>
  );
};
