"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useHoverCursor from "@/hooks/useHoverCursor";
import HoverCursor from "../common/HoverCursor";

const BlogSingle = ({ item }) => {
  const {
    cursorPosition,
    showCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverCursor();

  return (
    <>
      <div className="space-y-4">
        <Link
          href={`/blog/${item.slug}`}
          className="cursor-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src={item.featured_image.url}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl md:max-h-[440px] md:min-h-[440px]"
              width={388}
              height={440}
            />
          </div>
          <h3 className="text-xl font-geometr415-lt-bt capitalize leading-relaxed text-black/80 mt-4 ">
            {item.title}
          </h3>
        </Link>
      </div>
      <HoverCursor show={showCursor} x={cursorPosition.x} y={cursorPosition.y}>
        <p className="m-0 leading-tight">View</p>
        <p className="m-0 leading-tight">Details</p>
      </HoverCursor>
    </>
  );
};

export default BlogSingle;
