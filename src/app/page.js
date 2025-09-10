import BannerHome from "./components/home/BannerHome";
import AboutHome from "./components/home/AboutHome";
import FeaturesHome from "./components/home/FeaturesHome";
import ServicesHome from "./components/home/ServicesHome";
import Reality360 from "./components/home/Reality360";
import NewsHome from "./components/home/NewsHome";
import TestimonialsHome from "./components/home/TestimonialsHome";
import HomeTabs from "./components/home/HomeTabs";
import FetchSsr from "./components/common/FetchSsr";
export default async function Home() {
  const testimonialPosts = await FetchSsr("/testimonials");
  const venuePosts = await FetchSsr("/venues");
  const blogPosts = await FetchSsr("/blogs/latest");
  return (
    <div className="w-full bg-white text-black font-poppins">
      <BannerHome />
      <AboutHome />
      <FeaturesHome />
      <ServicesHome />
      <Reality360 />

      <TestimonialsHome posts={testimonialPosts} />
      <HomeTabs posts={venuePosts} />
      <NewsHome posts={blogPosts} />
    </div>
  );
}
