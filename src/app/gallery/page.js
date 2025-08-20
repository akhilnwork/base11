"use client";
import FullBanner from "../components/common/FullBanner";
import GalleryList from "../components/gallery/GalleryList";

export default function GalleryPage() {
  return (
    <>
      <FullBanner src="/img/banner/gallery-banner.png" title="Gallery" />
      <GalleryList />
    </>
  );
}
