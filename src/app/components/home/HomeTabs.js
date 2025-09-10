"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useHoverCursor from "@/hooks/useHoverCursor";
import HoverCursor from "../common/HoverCursor";
import Hgroup from "../common/Hgroup";

const HomeTabs = ({ posts }) => {
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  const {
    cursorPosition,
    showCursor,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useHoverCursor();

  const handleTabClick = (tabId, slug) => {
    if (activeTab === tabId) {
      if (slug) router.push(`/venues/${slug}`);

      return;
    }
    setActiveTab(tabId);
  };

  return (
    <section className="py-25 overflow-x-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          <Hgroup
            preTitle="Best solutions for"
            title="Lorem Ipsum is simply dummy /n text of the printing"
            align="left"
          />
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
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-[15px]">
          {posts?.data?.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <div
                key={tab.id}
                className={cn(
                  `tab transition-all duration-500 ease-in-out cursor-pointer rounded-[30px] overflow-hidden group relative ${
                    isActive
                      ? "h-[400px] md:h-[700px] md:flex-1 cursor-none"
                      : "h-[80px] md:h-[700px] md:w-[100px]"
                  }`,
                )}
                onClick={() => handleTabClick(tab.id, tab.slug)}
                onMouseMove={isActive ? handleMouseMove : undefined}
                onMouseEnter={isActive ? handleMouseEnter : undefined}
                onMouseLeave={isActive ? handleMouseLeave : undefined}
              >
                <Image
                  src={tab?.cover_image?.url}
                  className="w-full h-full object-cover"
                  height={700}
                  width={1200}
                  alt={tab?.title}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-black/25",
                    !isActive &&
                      "bg-darkgray-150/50 group-hover:bg-darkgray-150/70",
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute max-w-[660px] w-full bg-darkgray-150/80 p-8 rounded-[30px] bottom-0 left-0",
                    !isActive &&
                      "bg-darkgray-150/0 lg:-rotate-90 lg:whitespace-nowrap",
                  )}
                >
                  <h3 className="text-black xl:text-3xl md:text-2xl text-xl font-normal font-geometr415-lt-bt mb-2.5">
                    {tab?.title}
                  </h3>
                  <div
                    className={cn(
                      "flex transition-all duration-100 max-h-[0px] overflow-hidden",
                      isActive && "max-h-[500px]",
                    )}
                  >
                    <p className="text-black/80 text-sm sm:text-base lg:text-lg font-normal font-['Poppins'] leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <HoverCursor show={showCursor} x={cursorPosition.x} y={cursorPosition.y}>
        <p className="m-0 leading-tight">View</p>
        <p className="m-0 leading-tight">More</p>
      </HoverCursor>
    </section>
  );
};

export default HomeTabs;
