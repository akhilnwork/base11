"use client";

import Image from "next/image";

const IconButton = ({ onClick, label, children, className = "" }) => (
  <button
    aria-label={label}
    onClick={onClick}
    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

export default function Lightbox({
  isOpen,
  items,
  index,
  onClose,
  onPrev,
  onNext,
  onSelect,
}) {
  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[99999]">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex flex-col">
        <div className="relative flex-1 flex items-center justify-center">
          <div className="relative w-full h-full">
            {items[index] && (
              <Image
                src={items[index].src}
                alt={items[index].caption || "Gallery image"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            )}
          </div>

          <IconButton
            onClick={onPrev}
            label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </IconButton>

          <IconButton
            onClick={onNext}
            label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </IconButton>

          <IconButton
            onClick={onClose}
            label="Close"
            className="absolute top-4 right-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="w-full bg-darkgray-150/20">
          <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex gap-2">
              {items.map((item, i) => (
                <button
                  key={item.src + i}
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`relative h-16 w-16 rounded-md overflow-hidden border ${i === index ? "border-white" : "border-transparent"}`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <Image
                    src={item.thumb || item.src}
                    alt={item.caption || "Thumbnail"}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
