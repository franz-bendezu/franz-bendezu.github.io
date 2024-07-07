import {
  ArrowDownTrayIcon,
  CodeBracketIcon,
  FilmIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/20/solid";
import { IProjectLink, ProjectLinkType } from "../../interfaces/project";
import GitHubIcon from "../icon/github";
import GitLabIcon from "../icon/gitlab";
import { FC, SVGProps } from "react";

const LINK_ICONS: Record<ProjectLinkType, FC<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  gitlab: GitLabIcon,
  website: GlobeAmericasIcon,
  source: CodeBracketIcon,
  download: ArrowDownTrayIcon,
  video: FilmIcon,
} as const;

export const LinkListItem: FC<{ link: IProjectLink }> = ({ link }) => {
  const Icon = LINK_ICONS[link.type];
  return (
    <a
      key={link.url}
      href={link.url}
      aria-label={link.title}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600"
    >
      <Icon className="mr-1.5 h-5 w-5" />
      {link.title}
    </a>
  );
};

export const LinkList: React.FC<{ links: IProjectLink[] }> = ({ links }) => {
  return (
    <div className="flex flex-row gap-2 p-2">
      {links.map((link) => (
        <LinkListItem key={link.url} link={link} />
      ))}
    </div>
  );
};