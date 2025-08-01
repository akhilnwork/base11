import React from "react";
import ButtonLink from "../button/ButtonLink";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="w-full relative  text-left text-[15.25px] text-gray-300 font-inter">
          <div className="flex w-full justify-between items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg">
                Latest news & press
              </div>
              <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
                News & Blogs
              </h2>
            </div>
            <div className="flex">
              <ButtonLink title="View all Blog" href="/blog" type="white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((item) => (
            <div key={item} className="space-y-4">
              <Link href={item.url}>
                <div className=" rounded-2xl overflow-hidden">
                  <Image
                    src={`/img/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                    width={388}
                    height={440}
                  />
                </div>
                <h3 className="text-xl font-geometr415-lt-bt capitalize leading-tight">
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
