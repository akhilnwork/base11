"use client";
import ButtonLink from "../button/ButtonLink";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Hgroup from "../common/Hgroup";

const marqueeData = [
  {
    id: 1,
    title: "",
    image: "about-house.png",
  },
  {
    id: 2,
    title: "",
    image: "about-indoor.png",
  },
  {
    id: 3,
    title: "",
    image: "about-marriage.png",
  },
  {
    id: 4,
    title: "",
    image: "about-pot.png",
  },
  {
    id: 5,
    title: "",
    image: "about-pot-indoor.png",
  },
];
const AboutHome = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Hgroup
            title="A Venue Where Every Event Becomes a Masterpiece"
            preTitle="About Us"
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
              <p className="text-lg text-gray-600 leading-relaxed mb-2.5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable.
              </p>
            </div>
            <div className="flex w-full mt-10">
              <ButtonLink title="Discover More" href="/about" type="white" />
            </div>
          </div>
        </div>
      </div>
      <article
        className="w-full pt-16"
        id="marquue-home-about"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Marquee speed={80} pauseOnHover={true} className="w-full">
          {marqueeData.map((item) => (
            <div key={item.id} className="w-full h-full   self-start flex">
              <div className="rounded-2xl overflow-hidden mx-6">
                <Image
                  src={`/img/${item.image}`}
                  alt={item.title}
                  width={360}
                  height={460}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </article>
    </section>
  );
};

export default AboutHome;
