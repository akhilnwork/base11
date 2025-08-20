"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_PLACEHOLDERS = [
  "/img/news1.png",
  "/img/news2.png",
  "/img/news3.png",
  "/img/acc/1.png",
  "/img/acc/2.png",
  "/img/acc/3.png",
  "/img/acc/4.png",
  "/img/acc/5.png",
  "/img/acc/6.png",
].map((src) => ({ src, thumb: src }));

export function useLightbox(options = {}) {
  const { fetchUrl = "/api/gallery", placeholders = DEFAULT_PLACEHOLDERS } =
    options;

  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const loadedRef = useRef(false);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch(fetchUrl, { cache: "no-store" });
      const data = await res.json();
      const nextItems = Array.isArray(data) ? data : [];
      setItems(nextItems);
      loadedRef.current = true;
      return nextItems;
    } catch (_e) {
      setItems(placeholders);
      loadedRef.current = true;
      return placeholders;
    }
  }, [fetchUrl, placeholders]);

  const open = useCallback(
    async (index = 0) => {
      let next = items;
      if (!loadedRef.current) {
        next = await fetchItems();
      }
      setCurrentIndex(Math.min(index, Math.max(next.length - 1, 0)));
      setIsOpen(true);
    },
    [items, fetchItems],
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
