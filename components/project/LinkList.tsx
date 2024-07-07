import {
  ArrowDownTrayIcon,
  CodeBracketIcon,
  FilmIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import { IProjectLink } from "../../interfaces/project";
import GitHubIcon from "../icon/github";
import GitLabIcon from "../icon/gitlab";

const LINK_ICONS = {
  github: GitHubIcon,
  gitlab: GitLabIcon,
  website: GlobeAltIcon,
  source: CodeBracketIcon,
  download: ArrowDownTrayIcon,
  video: FilmIcon,
} as const;

export const LinkListItem: React.FC<{ link: IProjectLink }> = ({ link }) => {
  const Icon = LINK_ICONS[link.type];
  return (
    <a
      key={link.url}
      href={link.url}
      aria-label={link.title}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600"
    >
      <Icon
      className="w-5 h-5 mr-1.5"
      />
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
