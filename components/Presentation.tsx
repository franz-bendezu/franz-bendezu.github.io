import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpeg";

const About: React.FC = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Undergraduate student of the Systems Engineering career at the
              National University of Engineering. Passionate about technology, I
              enjoy knowing and using new tools that allow me to solve problems
              in an optimal and efficient way according to the cases that come
              my way. I believe that you should always be in constant learning
              and I like to share the knowledge that I have acquired.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
