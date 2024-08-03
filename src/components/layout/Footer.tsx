import React from "react";
import TwitterIcon from "../icon/twitter";
import GitHubIcon from "../icon/github";
import LinkedInIcon from "../icon/linkedin";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-10 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p className="mb-6 lg:mb-0">Diseñado por Franz Bendezu</p>
          <div className="flex flex-wrap space-x-4 font-medium">
            <a
              href="https://twitter.com/franz_bendezu"
              className="flex items-center gap-3 transition-colors hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="h-5 w-5" />
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/franz-antony-bendezu-isidro/"
              className="flex items-center gap-3 transition-colors hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/franz-bendezu"
              className="flex items-center gap-3 transition-colors hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
