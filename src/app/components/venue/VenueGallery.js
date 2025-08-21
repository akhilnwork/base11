"use client";

import { useCallback } from "react";
import Image from "next/image";
import useHoverCursor from "@/hooks/useHoverCursor";
import HoverCursor from "../common/HoverCursor";
import Lightbox from "../common/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";
import Hgroup from "../common/Hgroup";

const VENUE_IMAGES = [
  "/img/facilities/hall.png",
  "/img/facilities/wedding.png",
  "/img/facilities/dininig.png",
  "/img/facilities/landscape.png",
];

const VenueGallery = () => {
  const {
    cursorPosition,
    showCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverCursor();

  const { isOpen, items, currentIndex, open, close, next, prev, setIndex } =
    useLightbox();

  return (
    <section
      className="w-full py-12 bg-darkgray-150/20"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 sm:px-5">
        <div className="w-full mb-10">
          <Hgroup preTitle="Lorem Ipsum " title="Gallery" align="center" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[30px] rounded-[30px]">
          {VENUE_IMAGES.map((src, idx) => (
            <button
              key={src + idx}
              type="button"
              onClick={() => open(idx)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative w-full overflow-hidden bg-gray-200 rounded-[30px]"
              aria-label="Open gallery"
            >
              <Image
                src={src}
                alt="Venue gallery"
                width={600}
                height={600}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-auto w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <HoverCursor
          show={showCursor}
          x={cursorPosition.x}
          y={cursorPosition.y}
        >
          View
        </HoverCursor>
      </div>

      <Lightbox
        isOpen={isOpen}
        items={items}
        index={currentIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
        onSelect={setIndex}
      />
    </section>
  );
};

export default VenueGallery;
