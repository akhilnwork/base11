import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/about/AboutSection";
import TeamAndMessage from "../components/about/TeamAndMessage";
import RealityOther from "../components/about/RealityOther";
import FetchSsr from "../components/common/FetchSsr";

export default async function AboutUs() {
  const posts = await FetchSsr("/about-slides");

  return (
    <>
      <InnerBanner src="/img/banner/ABOUT-banner.png" title="About Us" />

      <AboutSection posts={posts} />
      <TeamAndMessage />
      <RealityOther />
    </>
  );
}
