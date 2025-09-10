"use client";
import { useEffect } from "react";
import ButtonLink from "../button/ButtonLink";
import BlogSingle from "../common/BlogSingle";
import Hgroup from "../common/Hgroup";

const blogData = [
  {
    id: 1,
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "news1.png",
    url: "/blog/1",
  },
  {
    id: 2,
    title: "There are many variations of passages of Lorem Ipsum available.",
    image: "news2.png",
    url: "/blog/2",
  },
  {
    id: 3,
    title:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "news3.png",
    url: "/blog/3",
  },
  {
    id: 4,
    title:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "news4.png",
    url: "/blog/4",
  },
];

const BlogBottomLink = ({ related }) => {
  return (
    <section className="py-24  overflow-x-hidden">
      <div className="container mx-auto px-5">
        <div className="w-full relative  text-left text-[15.25px] text-black font-inter">
          <div className="w-full" data-aos="fade-up">
            <Hgroup
              preTitle="Latest news & press"
              title="News & Blogs"
              align="center "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {related?.map((item, index) => (
            <div
              key={item.id || item.slug || `related-${index}`}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <BlogSingle item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBottomLink;
