"use client";

import React from "react";
import ButtonAction from "../button/ButtonAction";
import PopUp from "../common/PopUp";
import useModal from "@/hooks/useModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerHome = () => {
  const slides = [
    {
      id: 1,
      video: "/video/test-video.mp4",
      type: "video/mp4",
    },
    {
      id: 2,
      video: "/video/test-video.mp4",
      type: "video/mp4",
    },
    {
      id: 3,
      video: "/video/test-video.mp4",
      type: "video/mp4",
    },

    {
      id: 4,
      video: "/video/test-video.mp4",
      type: "video/mp4",
    },
  ];

  const contactModal = useModal(false);

  return (
    <section className="w-full h-screen bg-red-600 relative overflow-hidden">
      <div className="absolute w-screen h-full top-0 right-0 left-0 bottom-0">
        <div className="container h-full relative mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start">
          <div
            className="w-full flex flex-col items-center lg:items-start text-center lg:text-left z-10 relative lg:absolute lg:bottom-36"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <h1 className="capitalize font-geometr415-lt-bt leading-tight sm:leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.313rem] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
              Your Venue
              <br />
              for Grand Experiences
            </h1>
            <div className="relative flex mt-6 sm:mt-8 md:mt-10">
              <ButtonAction
                title="Plan Your Event"
                type="white"
                onClick={contactModal.open}
              />
            </div>
          </div>
        </div>
      </div>
      <article className="swiper w-full h-screen banner-swiper">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-full h-full">
              <div className="relative w-full h-screen">
                <div className="w-full absolute top-0 left-0 right-0 [background:linear-gradient(0deg,_rgba(12,_12,_12,_0),_rgba(12,_12,_12,_0.6))] h-[50%] z-2"></div>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                >
                  <source src={slide.video} type={slide.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>

      <PopUp
        isOpen={contactModal.isOpen}
        onClose={contactModal.close}
        title="Plan Your Event"
        preTitle="Contact"
      />
    </section>
  );
};

export default BannerHome;
