"use client";
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

const NewsHome = () => {
  return (
    <section className="py-24  bg-darkgray-150/20 overflow-x-hidden">
      <div className="container mx-auto px-5">
        <div className="w-full relative  text-left text-[15.25px] text-black font-inter">
          <div className="flex w-full justify-between items-center md:flex-row flex-col">
            <div className="space-y-4  mb-5 md:mb-0">
             {/*<div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg">
                Latest news & press
              </div>
              <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
                News & Blogs
              </h2>*/}
              <Hgroup preTitle="Latest news & press" title="News & Blogs" align="left" />  
            </div>
            <div className="flex">
              <ButtonLink title="View all Blog" href="/blog" type="white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {blogData.map((item) => (
            <BlogSingle key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
