"use client";

import { useCallback } from "react";
import Image from "next/image";
import useHoverCursor from "@/hooks/useHoverCursor";
import HoverCursor from "../common/HoverCursor";
import Lightbox from "../common/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

const PLACEHOLDER_IMAGES = [
  "/img/news1.png",
  "/img/news2.png",
  "/img/news3.png",
  "/img/acc/1.png",
  "/img/acc/2.png",
  "/img/acc/3.png",
  "/img/acc/4.png",
  "/img/acc/5.png",
  "/img/acc/6.png",
];

const GalleryList = () => {
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
    <section className="w-full py-24" onMouseMove={handleMouseMove}>
      <div className="container mx-auto px-4 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-[30px] rounded-[30px]">
          {PLACEHOLDER_IMAGES.map((src, idx) => (
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
                alt="Gallery placeholder"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
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

export default GalleryList;
