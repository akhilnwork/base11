import FullBanner from "../components/common/FullBanner";
import GalleryList from "../components/gallery/GalleryList";
import Pagination from "../components/common/Pagiantion";
import FetchSsr from "../components/common/FetchSsr";

export default async function GalleryPage() {
  const posts = await FetchSsr("/galleries");
  return (
    <>
      <FullBanner src="/img/banner/gallery-banner.png" title="Gallery" />
      <GalleryList posts={posts} />
    </>
  );
}
