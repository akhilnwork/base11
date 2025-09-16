import { cn } from "@/utils/cn";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Hgroup from "../common/Hgroup";

const testimonials = [
  {
    id: 1,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: false,
  },
  {
    id: 2,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: true,
  },
  {
    id: 3,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: false,
  },
  {
    id: 4,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: true,
  },
  {
    id: 5,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: false,
  },
  {
    id: 6,
    name: "Amanda Smith",
    position: "Founder of Mangcoding",
    image: "/img/amandasmith.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isActive: true,
  },
];

const TestimonialsHome = ({ posts }) => {
  return (
    <section className="py-24 overflow-x-hidden bg-darkgray-150/20">
      <div className="container mx-auto px-5">
        {/*<div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg mb-6">
            Testimonials
          </div>
          <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
            Hear from our clients
          </h2>
        </div>*/}
        <div className="mb-16">
          <Hgroup
            preTitle="Testimonials"
            title="Hear from our clients"
            align="center"
          />
        </div>
      </div>
      <div className="w-full mb-8">
        <Marquee
          speed={80}
          direction={"right"}
          pauseOnHover={true}
          className="w-full"
        >
          {posts?.data?.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial?.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </Marquee>
      </div>
      <div className="w-full">
        <Marquee
          speed={80}
          direction={"left"}
          pauseOnHover={true}
          className="w-full"
        >
          {posts?.data?.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial?.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const {
    name,
    testimonial: testimonialText,
    designation,
    photo,
  } = testimonial;
  const isEven =
    index % 2 === 0
      ? "bg-darkgray-300 border-dimgray-200"
      : "bg-gray-100 border-dimgray-200";
  return (
    <article className="px-4">
      <div
        className={cn(
          `rounded-[20px] border border-dimgray p-6  flex flex-col w-[400px] min-h-[400px]`,
          isEven,
        )}
      >
        <div className="flex-1">
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-[27px] mb-6">
            {testimonialText}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Image
            className="rounded-[10px] w-[60px] h-[60px] object-cover"
            width={60}
            height={60}
            alt={photo?.alt}
            src={photo?.url}
          />
          <div>
            <h4 className="text-black font-medium leading-[21.6px]">{name}</h4>
            <p className="text-sm sm:text-base text-gray-300 leading-[21.6px]">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsHome;
