"use client";
import React, { useEffect } from "react";
import BlogSingle from "../common/BlogSingle";
import { cn } from "@/utils/cn";
import AOS from "aos";
import "aos/dist/aos.css";

const blogData = [
  {
    id: 1,
    title: "Spaces are being revolutionized modern architectural marvels",
    image: "news1.png",
    url: "/blog/spaces-revolutionized-modern-architectural-marvels",
  },
  {
    id: 2,
    title: "Growth and meaning of mechanical technology",
    image: "news2.png",
    url: "/blog/growth-meaning-mechanical-technology",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "news3.png",
    url: "/blog/spaces-revolutionized-modern-architectural-marvels",
  },
  {
    id: 4,
    title:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "news4.png",
    url: "/blog/growth-meaning-mechanical-technology",
  },
  {
    id: 5,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "news1.png",
    url: "/blog/1",
  },
  {
    id: 6,
    title: "There are many variations of passages of Lorem Ipsum available.",
    image: "news2.png",
    url: "/blog/2",
  },
  {
    id: 7,
    title:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "news3.png",
    url: "/blog/3",
  },
  {
    id: 8,
    title:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "news4.png",
    url: "/blog/4",
  },
  {
    id: 9,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "news1.png",
    url: "/blog/1",
  },
  {
    id: 10,
    title: "There are many variations of passages of Lorem Ipsum available.",
    image: "news2.png",
    url: "/blog/2",
  },
  {
    id: 11,
    title:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "news3.png",
    url: "/blog/3",
  },
  {
    id: 12,
    title:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "news4.png",
    url: "/blog/4",
  },
  {
    id: 13,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "news1.png",
    url: "/blog/1",
  },
  {
    id: 14,
    title: "There are many variations of passages of Lorem Ipsum available.",
    image: "news2.png",
    url: "/blog/2",
  },
  {
    id: 15,
    title:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "news3.png",
    url: "/blog/3",
  },
];

const BlogContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const groupedBlogData = blogData.reduce((groups, item, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!groups[groupIndex]) groups[groupIndex] = [];
    groups[groupIndex].push(item);
    return groups;
  }, []);

  return (
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
  );
};

export default BlogContent;
