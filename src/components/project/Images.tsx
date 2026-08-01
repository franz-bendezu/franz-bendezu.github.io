"use client";
import { useRef, useState } from "react";
import type { FC } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Modal } from "../ui/Modal";
import { IProjectImage } from "@/interfaces/project";
import cardStyles from "@/components/ui/Card.module.css";

interface GalleryTabsProps {
  images: IProjectImage[];
  selectedIndex: number;
  onChange(index: number): void;
  onOpen?: () => void;
  scrollToPreview?: boolean;
}

function GalleryTabs({
  images,
  selectedIndex,
  onChange,
  onOpen,
  scrollToPreview = false,
}: GalleryTabsProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  const selectImage = (index: number) => {
    onChange(index);
    if (!scrollToPreview) return;

    requestAnimationFrame(() => {
      previewRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  };

  return (
    <TabGroup
      className="flex flex-col gap-4"
      selectedIndex={selectedIndex}
      onChange={selectImage}
    >
      <TabPanels ref={previewRef} className="mt-3 scroll-mt-20">
        {images.map(
          ({ src, srcSet, sizes, width, height, description, alt }) => (
            <TabPanel
              key={src}
              className={`${cardStyles.base} relative aspect-video overflow-hidden p-3 ${onOpen ? "cursor-zoom-in" : ""}`}
              onClick={onOpen}
            >
              <img
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                alt={alt}
                width={width}
                height={height}
                className="h-full w-full rounded-lg object-contain object-center"
              />
              {description && (
                <div className="absolute right-3 bottom-3 left-3 rounded-b-lg bg-black/75 p-2 text-center text-sm text-white">
                  {description}
                </div>
              )}
            </TabPanel>
          ),
        )}
      </TabPanels>
      <TabList className="flex flex-wrap justify-center gap-4">
        {images.map(({ src, srcSet, width, height, alt }) => (
          <Tab
            key={src}
            className="border-divider bg-surface-raised hover:border-accent data-[selected]:border-accent data-[selected]:bg-accent-soft data-[selected]:ring-accent data-[selected]:ring-offset-surface-muted relative aspect-video max-h-20 cursor-pointer rounded-lg border p-2 hover:-translate-y-0.5 active:scale-[0.98] data-[selected]:ring-2 data-[selected]:ring-offset-2"
          >
            <img
              className="h-full w-full object-contain"
              src={src}
              srcSet={srcSet}
              sizes="160px"
              alt={alt}
              width={width}
              height={height}
            />
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  );
}

export const ProjectImagesCarousel: FC<{
  images: IProjectImage[];
  closeLabel?: string;
}> = ({ images, closeLabel = "Close" }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryTabs = (
    <GalleryTabs
      images={images}
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      onOpen={isFullScreen ? undefined : () => setIsFullScreen(true)}
      scrollToPreview={!isFullScreen}
    />
  );

  return (
    <section className="relative">
      {isFullScreen ? (
        <Modal open onClose={setIsFullScreen} closeLabel={closeLabel}>
          {galleryTabs}
        </Modal>
      ) : (
        galleryTabs
      )}
    </section>
  );
};
