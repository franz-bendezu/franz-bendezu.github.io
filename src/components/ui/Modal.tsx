"use client";
import { FC, ReactNode } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { DialogBackdrop } from "@headlessui/react";

export const Modal: FC<{
  open?: boolean;
  children: ReactNode;
  title?: string;
  onClose(value: boolean): void;
}> = ({ children, open, onClose, title }) => {
  return (
    <>
      <Dialog
        open={open}
        as="div"
        className="relative z-30 focus:outline-none"
        onClose={onClose}
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 z-10 bg-black/50" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-5xl rounded-xl bg-white/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0 dark:bg-black/50"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                {title}
              </DialogTitle>
              <div className="mt-4">{children}</div>
              <div className="mt-4 flex justify-center">
                <Button
                  className="rounded-lg bg-black bg-opacity-50 px-4 py-2 text-white"
                  onClick={() => onClose(false)}
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
