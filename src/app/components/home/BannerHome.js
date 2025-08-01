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
        <div className="container h-full relative mx-auto">
          <div className="absolute bottom-28 left-0 z-1">
            <h1 className="capitalize font-geometr415-lt-bt leading-[5.313rem] text-white text-left text-[5rem]">
              Your Venue
              <br />
              for Grand Experiences
            </h1>
            <div className="relative flex mt-10">
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
