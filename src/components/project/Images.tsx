"use client";
import { useState } from "react";
import type { FC } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Modal } from "../ui/Modal";
import { IProjectImage } from "@/interfaces/project";
import cardStyles from "@/components/ui/Card.module.css";

export const ProjectImagesCarousel: FC<{
  images: IProjectImage[];
  closeLabel?: string;
}> = ({ images, closeLabel = "Close" }) => {
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
            className={`${cardStyles.base} relative aspect-video cursor-zoom-in overflow-hidden p-3`}
            onClick={open}
          >
            <img
              src={src}
              alt={alt}
              width="828"
              height="450"
              className="h-full w-full rounded-lg object-contain object-center"
            />
            <div className="absolute right-3 bottom-3 left-3 rounded-b-lg bg-black/75 p-2 text-center text-sm text-white">
              {description}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
      <TabList className="flex flex-wrap justify-center gap-4">
        {images?.map(({ src, alt }) => (
          <Tab
            key={src}
            className="border-divider bg-surface-raised data-[hover]:border-accent data-[selected]:border-accent data-[selected]:bg-accent-soft aspect-video max-h-20 rounded-lg border p-2"
          >
            <img
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
      <Modal open={isFullScreen} onClose={close} closeLabel={closeLabel}>
        {TabsFeatures}
      </Modal>
      {TabsFeatures}
    </section>
  );
};
