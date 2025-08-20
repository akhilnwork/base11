import InnerBanner from "../components/common/InnerBanner";
import FacilitiesSection from "../components/facilities/FacilitiesSection";

export const metadata = {
  title: "Facilities - Base Eleven Event Venue",
  description: "Discover our world-class facilities at Base Eleven. From spacious ballrooms to dedicated kids play zones, we offer everything needed for your perfect event.",
  keywords: "event venue facilities, ballroom, wedding facilities, corporate event spaces, venue amenities",
  openGraph: {
    title: "Facilities - Base Eleven Event Venue",
    description: "Discover our world-class facilities at Base Eleven. From spacious ballrooms to dedicated kids play zones, we offer everything needed for your perfect event.",
    type: "website",
    images: ["/img/banner/faclities-banner.png"],
  },
};

export default function Facilities() {
  return (
    <>
      <InnerBanner src="/img/banner/faclities-banner.png" title="Facilities" />
      <FacilitiesSection />
    </>
  );
}
