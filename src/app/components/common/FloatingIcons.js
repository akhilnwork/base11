"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopUp from "./PopUp";

const floatingIcons = [
  {
    id: 1,
    image: "/svg/telephone-fixed.svg",
    alt: "Phone",
    url: "tel:+918590355922",
    target: "_self",
  },
  {
    id: 2,
    image: "/svg/email-fixed.svg",
    alt: "Email",
    url: "mailto:sales@thebaseeleven.com",
    target: "_self",
  },
  {
    id: 3,
    image: "/svg/whatsapp-fixed.svg",
    alt: "Whatsapp",
    url: "https://whatsapp.com/",
    target: "_blank",
  },
];

const FloatingIcons = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <div className="fixed right-6 md:bottom-24 z-50 scale-75 md:scale-100 bottom-5">
        <div className="w-12 relative flex flex-col items-center justify-end gap-4">
          <div
            className="size-[78px] p-2.5 bg-[#807672] rounded-[100px] hover:scale-110 transition-transform duration-200 flex justify-center items-center border border-white cursor-pointer"
            onClick={handleBookNowClick}
          >
            <div className="text-center justify-start text-[#121212] text-[15px] font-medium font-['Poppins'] capitalize leading-[18px]">
              Book
              <br />
              Now
            </div>
          </div>
          {floatingIcons.map((icon) => (
            <div className="relative w-12 h-12" key={icon.id}>
              <Link
                href={icon.url}
                target={icon.target}
                rel="noopener noreferrer"
                className="absolute hover:scale-110 transition-transform duration-200 "
              >
                <Image
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  width={50}
                  height={50}
                  sizes="100vw"
                  alt={icon.alt}
                  src={icon.image}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <PopUp
        isOpen={isPopUpOpen}
        onClose={handleClosePopUp}
        title="Book Your Event"
        preTitle="Get Started"
      />
    </>
  );
};

export default FloatingIcons;
