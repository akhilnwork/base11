import BlogContent from "../components/blog/BlogContent";
import InnerBanner from "../components/common/InnerBanner";

export default function BlogPage() {
  return (
    <>
      <InnerBanner src="/img/banner/news-banner.png" title="News & Blogs" />
      <BlogContent />
    </>
  );
}
