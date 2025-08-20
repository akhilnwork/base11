"use client";
import Image from "next/image";
import ButtonLink from "../button/ButtonLink";
import Hgroup from "../common/Hgroup";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination, Autoplay } from "swiper/modules";
const features = [
  {
    id: 1,
    icon: "/svg/pickup-drop.svg",
    alt: "Pick Up & Drop",
    title: "Pick Up & Drop",
    desc: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
  },
  {
    id: 2,
    icon: "/svg/spacious-grand-ballroom.svg",
    alt: "Spacious Grand Ballroom",
    title: "Spacious Grand Ballroom",
    desc: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
  },
  {
    id: 3,
    icon: "/svg/dedicated-kids-play.svg",
    alt: "Dedicated Kids Play Zone",
    title: "Dedicated Kids Play Zone",
    desc: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
  },
  {
    id: 4,
    icon: "/svg/iconic-architecture-and-interiour.svg",
    alt: "Iconic Architecture & Interiors",
    title: "Iconic Architecture & Interiors",
    desc: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
  },
  {
    id: 5,
    icon: "/svg/pickup-drop.svg",
    alt: "Pick Up & Drop",
    title: "Pick Up & Drop",
    desc: "We'll pick up from airport while you comfy on your ride, mus nellentesque habitant.",
  },
];
const FeaturesHome = () => {
  return (
    <section className="py-28 bg-darkgray-150/20  overflow-x-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/*} <div
            className="space-y-2"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg">
              About us
            </div>
            <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
              A Venue Where Every Event Becomes a Masterpiece
            </h2>
          </div>*/}
          <Hgroup preTitle="About us" title="A Venue Where Every Event Becomes a Masterpiece" align="left" />  
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="flex w-full flex-col">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-2.5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text.
              </p>
            </div>
            <div className="flex w-full mt-10">
              <ButtonLink title="Discover More" href="/about" type="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-[45px] pb-12 px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          <div
            className="image flex"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Image
              src="/img/about-home.png"
              className="rounded-4xl"
              alt="About Home"
              width="755"
              height="452"
            />
          </div>
          <div
            className="block h-[25rem] sm:h-[28rem] lg:h-[30rem]"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Swiper
              slidesPerView={1.2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              modules={[Grid, Pagination, Autoplay]}
              className="grid-swiper"
            >
              {features.reduce((acc, feature, idx) => {
                if (idx % 2 === 0) {
                  acc.push(
                    <SwiperSlide key={`pair-${idx}`}>
                      <div className="flex gap-y-7 flex-col pb-14">
                        <Feature feature={feature} />

                        {features[idx + 1] && (
                          <Feature feature={features[idx + 1]} />
                        )}
                      </div>
                    </SwiperSlide>,
                  );
                }

                return acc;
              }, [])}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ feature }) => {
  return (
    <div
      className={` rounded-3xl p-6 flex-1 border border-dimgray-200 transition-all duration-300 hover:bg-darkgray-300 min-h-[220px]`}
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
          <Image src={feature.icon} alt={feature.alt} width={45} height={45} />
        </div>
        <h3 className="text-2xl font-geometr415-lt-bt capitalize tracking-tight">
          {feature.title}
        </h3>
        <p className={`text-sm sm:text-base font-['Poppins'] tracking-normal leading-relaxed`}>
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

export default FeaturesHome;
