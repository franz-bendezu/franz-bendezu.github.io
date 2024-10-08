"use client";
import React, { FC, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Modal } from "../ui/Modal";
import { IProjectImage } from "@/interfaces/project";
import Image from "next-image-export-optimizer";

export const ProjectImagesCarousel: FC<{
  images: IProjectImage[];
}> = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const close = () => setIsFullScreen(false);
  const open = () => setIsFullScreen(true);

  const TabsFeatures = (
    <TabGroup
      className="flex flex-col gap-4"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <TabPanels className="mt-3">
        {images?.map(({ src, description, alt }) => (
          <TabPanel
            key={src}
            className="relative aspect-video rounded-xl bg-gray-200 p-3 dark:bg-slate-700"
            onClick={open}
          >
            <Image
              src={src}
              alt={alt}
              width="828"
              height="450"
              className="aspect-video overflow-hidden rounded-xl object-contain object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
              {description}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
      <TabList className="flex flex-wrap justify-center gap-4">
        {images?.map(({ src, alt }) => (
          <Tab
            key={src}
            className="aspect-video max-h-20 rounded-lg bg-slate-200 p-2 data-[hover]:bg-slate-300 data-[selected]:bg-slate-400 data-[selected]:data-[hover]:bg-slate-400 dark:bg-slate-700 data-[hover]:dark:bg-slate-800 data-[selected]:dark:bg-slate-900"
          >
            <Image
              className="h-full w-full object-contain"
              src={src}
              alt={alt}
              width="96"
              height="96"
            />
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );

  return (
    <section className="relative">
      <Modal open={isFullScreen} onClose={close}>
        {TabsFeatures}
      </Modal>
      {TabsFeatures}
    </section>
  );
};
