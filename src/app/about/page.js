import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/about/AboutSection";
import TeamAndMessage from "../components/about/TeamAndMessage";
import RealityOther from "../components/about/RealityOther";

export const metadata = {
  title: "About Us - Base Eleven Event Venue",
  description:
    "Learn about Base Eleven, a premier event venue where every celebration becomes a masterpiece. Discover our story, team, and commitment to exceptional experiences.",
  keywords:
    "about Base Eleven, event venue team, venue story, wedding planners, event professionals",
  openGraph: {
    title: "About Us - Base Eleven Event Venue",
    description:
      "Learn about Base Eleven, a premier event venue where every celebration becomes a masterpiece. Discover our story, team, and commitment to exceptional experiences.",
    type: "website",
    images: ["/img/banner/ABOUT-banner.png"],
  },
};

export default function AboutUs() {
  return (
    <>
      <InnerBanner src="/img/banner/ABOUT-banner.png" title="About Us" />

      <AboutSection />
      <TeamAndMessage />
      <RealityOther />
    </>
  );
}
