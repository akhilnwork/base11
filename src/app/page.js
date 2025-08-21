"use client";
import { useEffect } from "react";
import BannerHome from "./components/home/BannerHome";
import AboutHome from "./components/home/AboutHome";
import FeaturesHome from "./components/home/FeaturesHome";
import ServicesHome from "./components/home/ServicesHome";
import Reality360 from "./components/home/Reality360";
import NewsHome from "./components/home/NewsHome";
import TestimonialsHome from "./components/home/TestimonialsHome";
import HomeTabs from "./components/home/HomeTabs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="w-full bg-white text-black font-poppins">
      <BannerHome />
      <AboutHome />
      <FeaturesHome />
      <ServicesHome />
      <Reality360 />

      <TestimonialsHome />
      <HomeTabs />
      <NewsHome />
    </div>
  );
}
