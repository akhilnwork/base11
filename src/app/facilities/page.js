import InnerBanner from "../components/common/InnerBanner";
import FacilitiesSection from "../components/facilities/FacilitiesSection";
import Hgroup from "../components/common/Hgroup";
import RealityOther from "../components/about/RealityOther";

export default function Facilities() {
  return (
    <>
      <InnerBanner src="/img/banner/faclities-banner.png" title="Facilities" />
      <section className="pt-25 overflow-x-hidden pb-10">
        <div className="container mx-auto px-5">
          <Hgroup preTitle="Our Experts" title="Facilities" align="center" />
        </div>
      </section>
      <FacilitiesSection />
      <RealityOther />
    </>
  );
}
