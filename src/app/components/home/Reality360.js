"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const Reality360 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <section className="text-center lg:min-h-[700px] min-h-[500px] w-full relative bg-gray-800 text-white flex items-center justify-center">
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
          <div className="flex flex-col items-center justify-center text-center">
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
      {modalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleBackdropClick}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="bg-black rounded-3xl shadow-2xl overflow-hidden aspect-video">
              <video
                ref={videoRef}
                width="1920"
                height="1080"
                loop
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                <source src="/video/test-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Reality360;
