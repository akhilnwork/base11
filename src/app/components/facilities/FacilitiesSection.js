"use client";
import Image from "next/image";
import { memo } from "react";
import { cn } from "@/utils/cn";
import Hgroup from "../common/Hgroup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import ButtonAction from "../button/ButtonAction";
import PopUp from "../common/PopUp";
import useModal from "@/hooks/useModal";

const facilitiesData = {
  title: "Facilities",
  subtitle: "Our Experts",
  sections: [
    {
      id: 1,
      title: "Weddings & Celebrations",
      category: "Facilities",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Interruptions, viruses, technical problems, interferences",
        "Delays or unavailability of the Website and the Services",
        "Third-party actions.",
        "Unavailability of the Website",
        "Any other event beyond the Company's direct control.",
      ],
      images: ["wedding.png", "hall.png", "house.png", "landscape.png"],
    },
    {
      id: 2,
      title: "Weddings & Celebrations",
      category: "Facilities",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Interruptions, viruses, technical problems, interferences",
        "Delays or unavailability of the Website and the Services",
        "Third-party actions.",
        "Unavailability of the Website",
        "Any other event beyond the Company's direct control.",
      ],
      buttonText: "Enquire Now",
      images: ["hall.png", "house.png", "landscape.png", "wedding.png"],
    },
    {
      id: 3,
      title: "Weddings & Celebrations",
      category: "Facilities",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Interruptions, viruses, technical problems, interferences",
        "Delays or unavailability of the Website and the Services",
        "Third-party actions.",
        "Unavailability of the Website",
        "Any other event beyond the Company's direct control.",
      ],
      buttonText: "Enquire Now",
      images: ["house.png", "landscape.png", "wedding.png", "hall.png"],
    },
    {
      id: 4,
      title: "Weddings & Celebrations",
      category: "Facilities",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      features: [
        "Interruptions, viruses, technical problems, interferences",
        "Delays or unavailability of the Website and the Services",
        "Third-party actions.",
        "Unavailability of the Website",
        "Any other event beyond the Company's direct control.",
      ],
      buttonText: "Enquire Now",
      images: ["landscape.png", "wedding.png", "hall.png", "house.png"],
    },
  ],
};

const FacilitiesCard = memo(function FacilitiesCard({
  section,
  preTitle,
  isPriority,
  isEven,
  onEnquire,
}) {
  const imageAlt = section?.title
    ? `${section.title}${section?.category ? ` - ${section.category}` : ""}`
    : "Facility image";

  return (
    <article className="faclities relative w-full 2xl:h-200 flex flex-col lg:flex-row items-center justify-start text-left text-5xl text-black font-poppins overflow-x-hidden">
      <div
        className={cn(
          `w-full lg:w-1/2 relative h-[500px] lg:absolute lg:2xl:h-[800px] lg:xl:h-[600px] overflow-hidden shrink-0 lg:top-0 object-cover ${isEven ? "lg:right-0" : "lg:left-0"}`,
        )}
        data-aos={isEven ? "slide-left" : "slide-right"}
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <Swiper
          direction="vertical"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="h-full w-full"
        >
          {section.images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image
                className="h-[500px] lg:2xl:h-[800px] lg:xl:h-[600px] w-full object-cover"
                width={960}
                height={800}
                sizes="(min-width: 1280px) 960px, 100vw"
                alt={imageAlt}
                src={`/img/facilities/${image}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Section - Full width on mobile, positioned on lg+ */}
      <div className="container mx-auto px-5 w-full md:w-auto">
        <div
          className={`w-full lg:w-1/2 py-10 relative ${isEven ? "lg:left-0 lg:pr-20" : "lg:left-1/2 lg:pl-20"}`}
          data-aos={isEven ? "fade-right" : "fade-left"}
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <div className="relative w-full flex flex-col items-start justify-start gap-5">
            <div
              className="w-full relative font-geometr415-lt-bt flex"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <Hgroup title={section.title} preTitle={preTitle} align="left" />
            </div>
            <div
              className="self-stretch relative text-sm sm:text-base lg:text-lg leading-[27px] text-black"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="600"
            >
              {section.description}
            </div>
            <div
              className="relative text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="600"
            >
              <ul className="m-0 font-inherit leading-[30px] pl-[21px] list-disc list-inside">
                {section.features?.map((feature, index) => (
                  <li
                    key={index}
                    className="mb-0"
                    data-aos="fade-right"
                    data-aos-delay={1000 + index * 100}
                    data-aos-duration="400"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="w-full flex"
              data-aos="zoom-in"
              data-aos-delay="1300"
              data-aos-duration="600"
              data-aos-easing="ease-out-back"
            >
              <ButtonAction
                title={"Enquire Now"}
                type="white"
                onClick={onEnquire}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

const FacilitiesSection = () => {
  const contactModal = useModal(false);

  return (
    <>
      {facilitiesData.sections.map((section, index) => (
        <FacilitiesCard
          key={section.id}
          section={section}
          preTitle={facilitiesData.title}
          isPriority={index === 0}
          isEven={index % 2 === 1}
          onEnquire={contactModal.open}
        />
      ))}
      <PopUp
        isOpen={contactModal.isOpen}
        onClose={contactModal.close}
        title="Enquire Now"
        preTitle="Contact"
      />
    </>
  );
};

export default FacilitiesSection;
