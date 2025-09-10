"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useLightbox(options = {}) {
  const { placeholders = [], items: providedItems = [] } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(() => providedItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const loadedRef = useRef(false);

  // Initialize items if provided directly (for VenueGallery) - only once
  useEffect(() => {
    if (providedItems.length > 0 && !loadedRef.current) {
      setItems(providedItems);
      loadedRef.current = true;
    }
  }, [providedItems.length]); // Only depend on length, not the entire array

  const fetchItems = useCallback(
    async (galleryId) => {
      try {
        const fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}/galleries/${galleryId}`;
        const res = await fetch(fetchUrl, { cache: "no-store" });
        const data = await res.json();
        console.log("API Response:", data.data?.images);

        // Transform API data to match Lightbox expected format
        const rawImages = Array.isArray(data.data?.images)
          ? data.data.images
          : [];
        const nextItems = rawImages
          .filter((img) => img && (img.url || img.src)) // Filter out items without valid URLs
          .map((img, index) => ({
            src: img.url || img.src || "", // Use url or src property
            thumb: img.thumb_url || img.thumbnail || img.url || img.src || "", // Use thumbnail or fallback to main image
            caption:
              img.title || img.caption || img.alt || `Image ${index + 1}`,
            id: img.id || index,
          }));

        console.log("Transformed items:", nextItems);
        setItems(nextItems);
        loadedRef.current = true;
        return nextItems;
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setItems(placeholders);
        loadedRef.current = true;
        return placeholders;
      }
    },
    [placeholders],
  );

  const open = useCallback(
    async (indexOrId, count = 0) => {
      // If items are provided directly (VenueGallery case)
      if (providedItems.length > 0) {
        setCurrentIndex(
          Math.min(indexOrId, Math.max(providedItems.length - 1, 0)),
        );
        setIsOpen(true);
        return;
      }

      // API fetching case (GalleryList case)
      if (count > 0) {
        // Reset loaded state to ensure fresh fetch for new gallery
        loadedRef.current = false;
        const next = await fetchItems(indexOrId);
        setCurrentIndex(0); // Start from first image
        setIsOpen(true);
      } else {
        // If no images, don't open the lightbox
        console.warn("Gallery has no images to display");
      }
    },
    [fetchItems, providedItems],
  );

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const total = items.length;
      if (total === 0) return 0;
      return (prev + 1) % total;
    });
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      const total = items.length;
      if (total === 0) return 0;
      return (prev - 1 + total) % total;
    });
  }, [items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, prev, next]);

  return {
    isOpen,
    items,
    currentIndex,
    open,
    close,
    next,
    prev,
    setIndex: setCurrentIndex,
  };
}

export default useLightbox;
