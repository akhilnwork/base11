"use client";

import ButtonLink from "../button/ButtonLink";
import BlogSingle from "../common/BlogSingle";
import Hgroup from "../common/Hgroup";

const NewsHome = ({ posts }) => {
  return (
    <section className="py-24  bg-darkgray-150/20 overflow-x-hidden news-home">
      <div className="container mx-auto px-5">
        <div className="w-full relative  text-left text-[15.25px] text-black font-inter">
          <div className="flex w-full justify-between items-center md:flex-row flex-col">
            <div className="space-y-4  mb-5 md:mb-0" data-aos="fade-up">
              {/*<div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg">
                Latest news & press
              </div>
              <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
                News & Blogs
              </h2>*/}
              <Hgroup
                preTitle="Latest news & press"
                title="News & Blogs"
                align="left"
              />
            </div>
            <div className="flex" data-aos="fade-up" data-aos-delay="100">
              <ButtonLink title="View all Blog" href="/blog" type="white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {posts?.data?.map((item, index) => (
            <div
              key={item.id || item.slug || `news-${index}`}
              data-aos="fade-up"
              data-aos-anchor=".news-home"
              data-aos-delay={100 + index * 100}
            >
              <BlogSingle item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
