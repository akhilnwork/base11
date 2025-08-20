"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState } from "react";
import useHoverCursor from "@/hooks/useHoverCursor";
import HoverCursor from "../common/HoverCursor";
import Hgroup from "../common/Hgroup";
const eventsArray = [
  {
    id: 1,
    title: "Corporate Events",
    image: "/img/corporate-events.png",
    link: "/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    title: "Weddings & Celebrations",
    image: "/img/weddings.png",
    link: "/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Exhibitions & Conferences",
    image: "/img/exhibitions-conference.png",
    link: "/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];
const ServicesHome = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-5 lg:px-8">
        {/*<div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          data-aos="fade-top"
          data-aos-offset="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg mb-5">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
            Discover Unmatched Comfort and Style
          </h2>
        </div>}

        <div className="flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14">
          {eventsArray.map((event, index) => (
            <Events key={event.id} event={event} index={index} />
          ))
          
        </div>*/}<Hgroup preTitle="Our Services" title="Discover Unmatched Comfort and Style" align="center" />  
      </div>
    </section>
  );
};

const Events = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const {
    cursorPosition,
    showCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverCursor();

  return (
    <div
      className="w-full relative text-left text-lg text-gray font-poppins overflow-hidden rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] group"
      data-aos={isEven ? "fade-left" : "fade-right"}
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing={index * 100}
      data-aos-delay={isEven ? "100" : "0"}
      data-aos-once="false"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <Link
          className={cn(
            "relative lg:col-span-8 col-span-1 viewMore flex items-center justify-center cursor-none h-64 sm:h-80 md:h-96 lg:h-auto",
            isEven ? "lg:order-1" : "lg:order-2",
          )}
          href={`/services/${event.id}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full object-cover"
              width={1083}
              height={800}
              alt={event.title}
              src={event.image}
            />
            {/* Overlay fade-in on hover of the event card */}
            <div className="absolute inset-0 z-10 bg-gray-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </Link>
        <div
          className={cn(
            "relative z-10 h-full flex items-center lg:col-span-4 col-span-1 bg-darkgray-150",
            isEven ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div className="h-full flex items-center p-6 sm:p-8 md:p-10">
            <div className="max-w-md space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-geometr415-lt-bt tracking-tight capitalize text-black leading-tight">
                {event.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <HoverCursor show={showCursor} x={cursorPosition.x} y={cursorPosition.y}>
        <p className="m-0 leading-tight">View</p>
        <p className="m-0 leading-tight">More</p>
      </HoverCursor>
    </div>
  );
};

export default ServicesHome;
