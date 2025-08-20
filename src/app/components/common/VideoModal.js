"use client";

import { useCallback } from "react";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  const handleBackdropClick = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleBackdropClick}
      />

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="bg-black rounded-3xl shadow-2xl overflow-hidden aspect-video">
          <video
            width="1920"
            height="1080"
            loop
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <button
          onClick={onClose}
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
  );
};

export default VideoModal;
