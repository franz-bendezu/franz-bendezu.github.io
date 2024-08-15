"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DialogBackdrop } from "@headlessui/react";

export const ProjectFullScreeImg: FC<{ src: string; description?: string }> = ({
  src,
  description,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const close = () => setIsFullScreen(false);

  return (
    <>
      <button
        className="rounded-lg bg-black bg-opacity-50 p-2 text-white"
        onClick={() => setIsFullScreen(!isFullScreen)}
      >
        Fullscreen
      </button>
      <Dialog
        open={isFullScreen}
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={close}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 z-10 bg-black/50" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-3xl rounded-xl bg-white/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 dark:bg-black/50"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {description}
              </DialogTitle>
              <div className="mt-4">
                <Image
                  src={src}
                  alt={description}
                  width="800"
                  height="800"
                  className="w-full rounded-xl object-contain object-center"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  className="rounded-lg bg-black bg-opacity-50 px-4 py-2 text-white"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
