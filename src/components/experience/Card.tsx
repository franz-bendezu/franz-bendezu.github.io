import { FC, ReactNode } from "react";
import Card from "../ui/Card";
import { CheckIcon } from "@heroicons/react/24/solid";

interface Props {
  children: ReactNode;
}

export const ExperienceCard: FC<Props> = (props) => {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-2 col-end-4 mr-10 md:mx-auto">
        <div className="flex h-full w-6 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-blue-500"></div>
        </div>
        <div className="absolute top-1/2 -mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-center shadow">
          <CheckIcon className="h-5 w-5 text-white" />
        </div>
      </div>
      <Card className="col-start-4 col-end-12 my-4 mr-auto w-full bg-white px-4 py-3 dark:bg-gray-800">
        {props.children}
      </Card>
    </div>
  );
};
