"use client";

import React from "react";
import ButtonLink from "../button/ButtonLink";

const BannerHome = () => {
  const slides = [
    {
      id: 1,
      image: "/img/banner.png",
    },
    {
      id: 2,
      image: "/img/corporate-events.png",
    },
    {
      id: 3,
      image: "/img/weddings.png",
    },
    {
      id: 4,
      image: "/img/exhibitions-conference.png",
    },
  ];

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
              <ButtonLink href="/" title="Plan Your Event" type="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <div className="w-full absolute top-0 left-0 right-0 [background:linear-gradient(0deg,_rgba(12,_12,_12,_0),_rgba(12,_12,_12,_0.6))] h-[50%] z-2"></div>
        {/*video start  */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onLoadedMetadata={(e) => {
            // Request fullscreen when video loads
            // if (e.target.requestFullscreen) {
            //   e.target.requestFullscreen();
            // } else if (e.target.webkitRequestFullscreen) {
            //   e.target.webkitRequestFullscreen();
            // } else if (e.target.msRequestFullscreen) {
            //   e.target.msRequestFullscreen();
            // }
          }}
        >
          <source src="/video/test-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* video end */}
      </div>
    </section>
  );
};

export default BannerHome;
