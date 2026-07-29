import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";

export function ProjectListEmpty({ label }: { label: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-16">
      <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500" />
      <p className="text-2xl dark:text-white">{label}</p>
    </div>
  );
}
