import FullBanner from "../../components/common/FullBanner";
import Reality360 from "../../components/home/Reality360";
import VenueList from "../../components/venue/VenueList";
import VenueGallery from "../../components/venue/VenueGallery";
import VenueSection from "../../components/venue/VenueSection";
import FetchSsr from "../../components/common/FetchSsr";
export default async function Venues({ params }) {
  //console.log("params", params);
  const post = await FetchSsr(`/venues/${params.venuename}`);
  const posts = await FetchSsr(`/venues`);
  const { title, description, cover_image, gallery, sub_images, slug } =
    post?.data;

  // console.log(title, description, cover_image, gallery, sub_images, slug);
  return (
    <>
      <FullBanner src={cover_image.url} title={title} />
      <VenueList posts={posts} slug={params.venuename} />
      <VenueSection description={description} sub_images={sub_images} />
      {gallery?.images?.length > 0 && <VenueGallery gallery={gallery} />}

      <Reality360 />
    </>
  );
}
