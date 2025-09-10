import BlogContent from "../components/blog/BlogContent";
import InnerBanner from "../components/common/InnerBanner";
import FetchSsr from "../components/common/FetchSsr";
export const metadata = {
  title: "News & Blogs - Base Eleven Event Venue",
  description:
    "Stay updated with the latest news, event trends, and stories from Base Eleven. Read our blog for event planning tips, venue updates, and celebration inspiration.",
  keywords:
    "event venue blog, wedding planning tips, event trends, Base Eleven news, celebration ideas",
  openGraph: {
    title: "News & Blogs - Base Eleven Event Venue",
    description:
      "Stay updated with the latest news, event trends, and stories from Base Eleven. Read our blog for event planning tips and celebration inspiration.",
    type: "website",
    images: ["/img/banner/news-banner.png"],
  },
};

export default async function BlogPage() {
  const posts = await FetchSsr("/blogs");
  return (
    <>
      <InnerBanner src="/img/banner/news-banner.png" title="News & Blogs" />
      <BlogContent posts={posts} />
    </>
  );
}
