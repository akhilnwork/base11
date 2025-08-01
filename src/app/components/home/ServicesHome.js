"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
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
    <section className="py-16 ">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg mb-6">
            Our Services
          </div>
          <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
            Discover Unmatched Comfort and Style
          </h2>
        </div>

        <div className="flex flex-col">
          {eventsArray.map((event, index) => (
            <Events key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowCustomCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCustomCursor(false);
  };

  return (
    <div className="w-full relative text-left text-lg text-gray font-poppins mb-8 overflow-hidden rounded-[30px] group">
      <div className="grid grid-cols-12 gap-0">
        <Link
          className={cn(
            "relative col-span-8 viewMore flex items-center justify-center cursor-none",
            isEven ? "order-1" : "order-2",
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
            "relative z-10 h-full flex items-center col-span-4 bg-darkgray-150",
            isEven ? "order-2" : "order-1",
          )}
        >
          <div className="h-full flex items-center p-10">
            <div className="max-w-md space-y-6">
              <h3 className="text-3xl font-geometr415-lt-bt tracking-tight capitalize text-black leading-tight">
                {event.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      {showCustomCursor && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: cursorPosition.x - 50,
            top: cursorPosition.y - 50,
          }}
        >
          <div className="h-[100px] w-[100px] bg-white/10 rounded-full [backdrop-filter:blur(3.6px)] flex flex-col items-center justify-center text-base text-white font-poppins tracking-[-0.02em] leading-5 capitalize">
            <p className="m-0 leading-tight">View</p>
            <p className="m-0 leading-tight">More</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesHome;
