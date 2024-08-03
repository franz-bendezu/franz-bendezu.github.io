import { FC } from "react";
import { ExperienceCard } from "./Card";

interface Props {
  degree: string;
  institution: string;
  location: string;
  link?: string;
}

export const ExperienceEducationCard: FC<Props> = (props) => {
  return (
    <ExperienceCard>
      <h3 className="mb-1 text-lg font-semibold">{props.degree}</h3>
      <a
        href={props.link ?? ""}
        className={`font-semibold ${props?.link ? "text-primary" : "text-foreground"}`}
      >
        {props.institution}
      </a>
      <div className="mb-4 text-sm uppercase">{props.location}</div>
    </ExperienceCard>
  );
};
