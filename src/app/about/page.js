
import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/about/AboutSection";
import TeamAndMessage from "../components/about/TeamAndMessage";
import HorizontalPinSection from "../components/about/Test";


export default function AboutUs() {
  return (
    <>
      <InnerBanner src="/img/banner/ABOUT-banner.png" title="About Us" />

      <AboutSection />
      <TeamAndMessage />  
     
    </>
  );
}
