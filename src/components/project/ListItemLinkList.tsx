import {
  ArrowDownTrayIcon,
  CodeBracketIcon,
  FilmIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/20/solid";
import type { FC, SVGProps } from "react";
import type { IProjectLink, ProjectLinkType } from "@/interfaces/project";

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 250" fill="currentColor" {...props}>
    <path d="M128 0C57.3 0 0 57.3 0 128c0 56.6 36.7 104.5 87.5 121.5 6.4 1.2 8.8-2.8 8.8-6.2 0-3.1-.1-13.1-.2-23.8-35.6 7.7-43.1-15.1-43.1-15.1-5.8-14.8-14.2-18.7-14.2-18.7-11.6-7.9.9-7.8.9-7.8 12.9.9 19.6 13.2 19.6 13.2 11.4 19.6 29.9 13.9 37.2 10.6 1.2-8.3 4.5-13.9 8.1-17.1-28.4-3.2-58.3-14.2-58.3-63.3 0-14 5-25.4 13.2-34.4-1.3-3.2-5.7-16.2 1.2-33.9 0 0 10.7-3.4 35.2 13.1 10.2-2.8 21.2-4.3 32-4.3 10.9 0 21.8 1.5 32.1 4.3 24.4-16.6 35.2-13.1 35.2-13.1 7 17.6 2.6 30.7 1.3 33.9 8.2 9 13.2 20.4 13.2 34.4 0 49.2-29.9 60-58.4 63.2 4.6 4 8.7 11.8 8.7 23.7 0 17.1-.1 30.9-.1 35.1 0 3.4 2.3 7.4 8.8 6.1C219.4 232.5 256 184.5 256 128 256 57.3 198.7 0 128 0Z" />
  </svg>
);
const GitLabIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props}>
    <path
      d="m31.46 12.78-4.39-11.47a1.14 1.14 0 0 0-2.18.13l-2.94 9h-11.9l-2.94-9a1.14 1.14 0 0 0-2.18-.14L.53 12.79a8.1 8.1 0 0 0 2.7 9.35l12 9a1.35 1.35 0 0 0 1.62 0l11.92-9a8.09 8.09 0 0 0 2.69-9.36Z"
      fill="#E24329"
    />
  </svg>
);
const icons: Record<ProjectLinkType, FC<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  gitlab: GitLabIcon,
  website: GlobeAmericasIcon,
  source: CodeBracketIcon,
  download: ArrowDownTrayIcon,
  video: FilmIcon,
};

export function ProjectListItemLinkListItem({ link }: { link: IProjectLink }) {
  const Icon = icons[link.type];
  return (
    <a
      href={link.url}
      aria-label={link.title}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-slate-500 bg-slate-500 px-3 py-1.5 text-sm font-medium whitespace-nowrap text-white transition-colors duration-150 hover:bg-slate-600 focus-visible:ring focus-visible:ring-indigo-300 focus-visible:ring-slate-300 focus-visible:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:focus-visible:ring-slate-600"
    >
      <Icon className="mr-1.5 h-5 w-5" />
      {link.title}
    </a>
  );
}

export function LinkList({ links }: { links: IProjectLink[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-2 p-2">
      {links.map((link) => (
        <ProjectListItemLinkListItem key={link.url} link={link} />
      ))}
    </div>
  );
}
