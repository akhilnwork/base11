import Image from "next/image";
import BannerHome from "./components/home/BannerHome";
import AboutHome from "./components/home/AboutHome";
import FeaturesHome from "./components/home/FeaturesHome";
import ServicesHome from "./components/home/ServicesHome";
import Reality360 from "./components/home/Reality360";
import NewsHome from "./components/home/NewsHome";
import TestimonialsHome from "./components/home/TestimonialsHome";

export default function Home() {
  return (
    <div className="w-full bg-white text-black font-poppins">
      <BannerHome />
      <AboutHome />
      <FeaturesHome />
      <ServicesHome />
      <Reality360 />
      <TestimonialsHome />
      <NewsHome />
    </div>
  );
}
