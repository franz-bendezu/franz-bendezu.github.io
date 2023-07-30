import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-10 bg-white dark:bg-black text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p className="mb-6 lg:mb-0">Diseñado por Franz Bendezu</p>
          <div className="flex flex-wrap space-x-4 font-medium">
            <a href="https://twitter.com/franz_bendezu" className="transition-colors hover:text-yellow-500" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/franz-antony-bendezu-isidro/" className="transition-colors hover:text-yellow-500" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/franz-bendezu" className="transition-colors hover:text-yellow-500" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
