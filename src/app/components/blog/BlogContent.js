"use client";
import React, { useEffect } from "react";
import BlogSingle from "../common/BlogSingle";
import Pagination from "../common/Pagiantion";
import { cn } from "@/utils/cn";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogContent = ({ posts }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const groupedBlogData = posts?.data?.reduce((groups, item, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!groups[groupIndex]) groups[groupIndex] = [];
    groups[groupIndex].push(item);
    return groups;
  }, []);

  return (
    <>
      <section className="w-full">
        {groupedBlogData.map((group, groupIdx) => (
          <div
            key={`group-${groupIdx}`}
            className={cn(
              "flex w-full image-col py-25",
              groupIdx % 2 === 0 && "bg-darkgray-150/20",
            )}
            data-aos="fade-up"
            data-aos-delay={groupIdx * 200}
          >
            <div className="container mx-auto px-5 space-y-10">
              <div className="image-col grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {group.map((item, index) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    <BlogSingle item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className=" flex justify-center items-center py-10 -mt-[60px] pb-25">
        <Pagination />
      </section>
    </>
  );
};

export default BlogContent;
