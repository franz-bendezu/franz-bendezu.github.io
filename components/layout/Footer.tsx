import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" px-6 container mx-auto text-gray-800 dark:text-white bg-white py-6 dark:bg-black">
      <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
      <div className="flex flex-col justify-between lg:flex-row items-center">
        <p>Diseñado por Franz Bendezu</p>
        <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
          <a
            href="https://twitter.com/franz_bendezu"
            className={"transition-colors hover:text-yellow-500"}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/franz-antony-bendezu-isidro/"
            className={"transition-colors hover:text-yellow-500"}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/franz-bendezu"
            className={"transition-colors hover:text-yellow-500"}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
