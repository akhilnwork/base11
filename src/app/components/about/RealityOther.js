"use client";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "../common/VideoModal";
import PopUp from "../common/PopUp";
import useModal from "@/hooks/useModal";
import ButtonAction from "../button/ButtonAction";

const RealityOther = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const contactModal = useModal(false);

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePlanClick = () => {
    contactModal.open();
  };

  return (
    <>
      <section
        className="text-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full relative bg-gray-800 text-white flex items-center justify-center overflow-hidden"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <Image
          src={"/img/360-image.png"}
          alt="360 Reality"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0"
          priority
        />
        <div className="absolute bg-black/30 sm:bg-black/20 inset-0"></div>

        <div className="absolute inset-0">
          <div className="container mx-auto relative z-10 h-full px-5 w-full object-cover sm:px-6 lg:px-8">
            <div className="flex flex-col absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-26 left-0 right-4 sm:right-auto max-w-full sm:max-w-2xl">
              <h3 className="ml-5 md:ml-0 font-['Geometr415_Lt_BT'] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left font-normal capitalize leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[60px] mb-4 sm:mb-6">
                Lorem Ipsum is simply dummy <br className="hidden sm:block" />
                text of the printing
              </h3>
              <div className="flex pt-2 sm:pt-4 ml-5 md:ml-0">
                <ButtonAction
                  title={"Plan Your Event"}
                  onClick={handlePlanClick}
                  className="mt-2 sm:mt-4 lg:mt-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="play"
          className="play cursor-pointer hover:scale-110 transition-transform duration-200 z-30 absolute left-1/2 md:top-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
          onClick={handlePlayClick}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Image
              src="/svg/play.svg"
              alt="Play Icon"
              width={60}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 ml-1"
            />
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        videoSrc="/video/test-video.mp4"
      />
      <PopUp
        isOpen={contactModal.isOpen}
        onClose={contactModal.close}
        title="Plan Your Event"
        preTitle="Contact"
      />
    </>
  );
};

export default RealityOther;
