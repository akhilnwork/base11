import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/about/AboutSection";
import TeamAndMessage from "../components/about/TeamAndMessage";
import RealityOther from "../components/about/RealityOther";



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
