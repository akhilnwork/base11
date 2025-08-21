import FullBanner from "../../components/common/FullBanner";
import Reality360 from "../../components/home/Reality360";
import VenueList from "../../components/venue/VenueList";
import VenueGallery from "../../components/venue/VenueGallery";
import VenueSection from "../../components/venue/VenueSection";
export default function Venues({ params }) {
  return (
    <>
      <FullBanner src="/img/banner/venue-banner.png" title="Venues" />
      <VenueList />
      <VenueSection />
      <VenueGallery />

      <Reality360 />
    </>
  );
}
