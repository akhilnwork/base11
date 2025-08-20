"use client";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "../common/VideoModal";

const Reality360 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section
        className="text-center lg:min-h-[700px] min-h-[500px] w-full relative bg-gray-800 text-white flex items-center justify-center overflow-x-hidden"
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
        <div className="absolute bg-black/20 inset-0"></div>
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-center justify-center text-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-geometr415-lt-bt tracking-tight leading-tight capitalize text-white max-w-4xl">
              <span>Your Event, Your Vision</span>
              <br />

              <span>Now in </span>
              <Image
                src="/svg/360.svg"
                alt="360 Icon"
                width={60}
                height={45}
                className="inline-block w-12 h-9 sm:w-16 sm:h-12 md:w-20 md:h-15 lg:w-20 lg:h-15"
              />
              <span className="text-white"> Reality</span>
            </h2>
            <div
              id="play"
              className="play cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={handlePlayClick}
            >
              <Image
                src="/svg/play.svg"
                alt="Play Icon"
                width={60}
                height={60}
                className="mt-6 sm:mt-8 md:mt-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-16 lg:h-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal Video */}
      <VideoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        videoSrc="/video/test-video.mp4"
      />
    </>
  );
};

export default Reality360;
