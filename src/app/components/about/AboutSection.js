"use client"
import Image from "next/image";
import { cn} from "@/utils/cn";
import Hgroup from "../common/Hgroup";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  }
];
const aboutSlider= [
  "about.png",
  "about1.png",
  "about.png",
  "about1.png",
]

// Content data - can be moved to a config file or fetched from API
const aboutContent = {
  badge: "About us",
  title: "A Venue Where Every Event Becomes a Masterpiece",
  description: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  ]
};

// Animated Counter Component using useInView
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.5,
    margin: "-100px"
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animateCounter();
    }
  }, [isInView, hasAnimated, value]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <span ref={ref} className="nums">
      {count}+
    </span>
  );
};

const AboutSection = () => {
  return (
    <section className="w-full relative py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* Main Content Grid */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 items-center justify-start gap-6 sm:gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="w-full flex flex-col items-start justify-start gap-6 sm:gap-8">
            {/* Header with Badge and Title */}
            <div className="w-full relative">
              <Hgroup preTitle={aboutContent.badge} title={aboutContent.title} />
            </div>
            
            {/* Description */}
            <div className="self-stretch text-base sm:text-lg leading-[1.5] sm:leading-[27px] font-poppins text-black space-y-3 sm:space-y-4">
              {aboutContent.description.map((paragraph, index) => (
                <p key={index} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Images Section with Swiper */}
          <div className="flex w-full order-first lg:order-last">
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
                }
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
              {aboutSlider.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full relative">
                    <Image 
                      src={`/img/temp/${item}`} 
                      alt={item} 
                      width={666} 
                      height={560} 
                      className="object-cover w-full h-auto rounded-xl sm:rounded-2xl" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className="self-stretch grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 font-poppins">
          {statistics.map((stat) => (
            <div key={stat.id} className="w-full relative text-center bg-darkgray-150/20 hover:bg-darkgray-150/80 group transition-all duration-200 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden h-32 sm:h-40 lg:h-50">

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

const BrandMark = () => {
  return (
    <svg width="118" height="43" viewBox="0 0 118 43" fill="none" xmlns="http://www.w3.org/2000/svg" >

<path fillRule="evenodd" clipRule="evenodd" d="M113.435 2.98142C114.57 8.70805 112.41 14.1521 108.41 18.7283C98.1258 30.4671 79.8303 29.7957 63.0306 25.3214C56.9761 23.7169 50.6517 21.1839 44.4123 18.2899L44.2926 18.2079C42.3328 17.2984 40.3735 16.3486 38.4544 15.3994L6.86561 0.0794877L0.451616 7.92425C19.5264 17.0533 54.5526 37.3643 81.7901 37.1418C85.8138 37.0714 89.8415 36.6793 93.7944 35.8437C97.2635 35.0826 100.818 33.9202 104.098 32.1911C110.416 28.8508 115.193 23.2383 116.568 16.1753C117.386 11.9213 116.92 7.36968 114.842 3.03925L113.434 3.02164L113.435 2.98142Z" fill="#847E7A"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.385757 9.89444L1.12681 14.9725C21.8426 24.7657 41.5358 35.914 64.4925 40.224C77.0569 42.3926 92.4564 43.0277 104.809 36.4238C111.167 33.0437 115.984 27.3915 117.36 20.3286C117.747 18.322 117.854 16.2314 117.638 14.1771C117.626 15.1826 117.452 16.1862 117.279 17.1897C115.17 28.1457 105.398 34.3393 95.3499 36.8285C85.5438 39.2804 74.6084 38.7414 65.0999 36.6915C57.4371 35.0267 50.3444 32.8059 42.8184 29.8555C37.6544 27.8197 32.5739 25.5436 27.5346 23.1876C18.4152 18.9702 9.42312 14.2315 0.42597 9.89494L0.385757 9.89444Z" fill="#A49E9C"/>

    </svg>

  );
};

export default AboutSection;





    		