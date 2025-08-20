"use client";
import FullBanner from "../components/common/FullBanner";
import GalleryList from "../components/gallery/GalleryList";

export const metadata = {
  title: "Gallery - Base Eleven Event Venue",
  description: "Explore our stunning gallery showcasing beautiful weddings, corporate events, and celebrations at Base Eleven. See our venue spaces and event photography.",
  keywords: "event venue gallery, wedding photos, venue spaces, event photography, Base Eleven images",
  openGraph: {
    title: "Gallery - Base Eleven Event Venue",
    description: "Explore our stunning gallery showcasing beautiful weddings, corporate events, and celebrations at Base Eleven.",
    type: "website",
    images: ["/img/banner/gallery-banner.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <FullBanner src="/img/banner/gallery-banner.png" title="Gallery" />
      <GalleryList />
    </>
  );
}
