import { FC, ReactNode } from "react";
import Card from "../ui/Card";
import { CheckIcon } from "@heroicons/react/24/solid";

interface Props {
  children: ReactNode;
}

export const ExperienceCard: FC<Props> = (props) => {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-1 col-end-3 mr-10 md:mx-auto">
        <div className="flex h-full w-8 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
        </div>
        <div className="absolute top-0 mt-8 flex w-full aspect-square items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-blue-400/75 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-blue-800"></div>
          </div>
        </div>
      </div>
      <Card className="col-start-3 col-end-12 my-4 mr-auto w-full bg-white px-4 py-3 dark:bg-gray-800">
        {props.children}
      </Card>
    </div>
  );
};
