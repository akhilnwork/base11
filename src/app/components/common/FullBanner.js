"use client";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";

const FullBanner = ({ src, title }) => {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowScrollArrow(false);
      } else {
        setShowScrollArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full relative">
      <Image
        className=" w-full h-screen object-cover"
        width={1920}
        height={500}
        alt={title}
        src={src}
      />
      <div className="absolute inset-0 bg-black/40 w-full"></div>
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-5 relative flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="tracking-[-1px] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-geometr415-lt-bt capitalize leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <Image
        className={cn(
          "absolute left-1/2 transform -translate-x-1/2 bottom-10 animate-bounce duration-300 cursor-pointer",
          showScrollArrow ? "opacity-100" : "opacity-0",
        )}
        id="scrollarrow"
        width={73}
        height={73}
        alt="Scroll"
        src="/svg/scroll-arrow.svg"
      />
    </section>
  );
};

export default FullBanner;
