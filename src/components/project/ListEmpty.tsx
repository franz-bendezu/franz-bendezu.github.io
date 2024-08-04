import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

export const ProjectListEmpty: FC = () => (
  <div className="flex w-full flex-col items-center justify-center gap-4">
    <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500 dark:text-yellow-500" />
    <p className="text-2xl dark:text-white">No hay proyectos para mostrar</p>
  </div>
);
