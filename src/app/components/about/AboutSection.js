"use client";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Hgroup from "../common/Hgroup";
import BrandMark from "../common/BrandMark";
import { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// statistics data - can be moved to a config file or fetched from API
const statistics = [
  {
    id: 1,
    value: 25,
    label: "Years of Experience",
  },
  {
    id: 2,
    value: 500,
    label: "Events Hosted",
  },
  {
    id: 3,
    value: 500,
    label: "Happy Clients",
  },
  {
    id: 4,
    value: 10000,
    label: "Guest Capacity",
  },
];
//const aboutSlider = ["about.png", "about1.png", "about.png", "about1.png"];

// Content data - can be moved to a config file or fetched from API
const aboutContent = {
  badge: "About us",
  title: "A Venue Where Every Event Becomes a Masterpiece",
  description: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  ],
};

// Custom useInView hook using Intersection Observer
const useInView = (ref, options = {}) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.amount || 0.5,
        rootMargin: options.margin || "0px",
        ...options,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isInView;
};

// Animated Counter Component using custom useInView
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "-100px",
  });

  const animateCounter = useCallback(() => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart,
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [value, duration]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animateCounter();
    }
  }, [isInView, hasAnimated, animateCounter]);

  return (
    <span ref={ref} className="nums">
      {count}+
    </span>
  );
};

const AboutSection = ({ posts }) => {
  return (
    <section className="w-full relative py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* Main Content Grid */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-6 sm:gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="w-full flex flex-col items-start justify-start gap-6 sm:gap-8">
            {/* Header with Badge and Title */}
            <div className="w-full relative">
              <Hgroup
                preTitle={aboutContent.badge}
                title={aboutContent.title}
              />
            </div>

            {/* Description */}
            <div
              className="self-stretch text-sm sm:text-base lg:text-lg leading-[1.5] sm:leading-[27px] font-['Poppins'] text-black space-y-3 sm:space-y-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
            >
              {aboutContent.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="m-0"
                  data-aos="fade-right"
                  data-aos-delay={500 + index * 150}
                  data-aos-duration="600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Images Section with Swiper */}
          <div
            className="flex w-full order-first lg:order-last about-page-slider"
            data-aos="zoom-in-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-out-back"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="w-full"
            >
              {posts?.data?.map(({ id, title, image }) => (
                <SwiperSlide key={id}>
                  <div className="w-full relative">
                    <Image
                      src={image?.url}
                      alt={title}
                      width={666}
                      height={560}
                      className="object-cover w-full h-auto rounded-xl sm:rounded-2xl max-h-[500px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="self-stretch grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 font-poppins">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className="w-full relative text-center bg-darkgray-150/20 hover:bg-darkgray-150/80 group transition-all duration-200 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden h-32 sm:h-40 lg:h-50"
              data-aos="flip-up"
              data-aos-delay={index * 200}
              data-aos-duration="700"
              data-aos-easing="ease-out-back"
            >
              <div className="absolute opacity-10 group-hover:opacity-80 transition-all duration-100">
                <BrandMark />
              </div>

              {/* Content */}
              <div className="flex w-full justify-center h-full items-center">
                <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4">
                  <h4 className="tracking-[0.05em] text-3xl sm:text-5xl lg:text-7xl">
                    <AnimatedCounter value={stat.value} />
                  </h4>

                  <div className="text-sm sm:text-lg lg:text-2xl capitalize opacity-80 leading-tight sm:leading-6">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
