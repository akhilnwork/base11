"use client";
import Image from "next/image";
import Teams from "./Teams";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TeamAndMessage = () => {
  const containerRef = useRef(null);
  const widthRef = useRef(null);
  const spinRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // GSAP hook for scroll animation and resize handling
  useGSAP(
    () => {
      // Get container width
      const updateWidth = () => {
        if (widthRef.current) {
          setContainerWidth(widthRef.current.offsetWidth);
        }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);

      // Create horizontal scroll animation
      const createScrollAnimation = () => {
        if (!containerRef.current || !spinRef.current || containerWidth === 0)
          return;

        const container = containerRef.current;
        const spin = spinRef.current;

        // Calculate scroll distance
        const spinItems = spin.querySelectorAll(".spin-item");
        if (spinItems.length === 0) return;

        const totalSpinWidth = Array.from(spinItems).reduce((total, item) => {
          return total + (item.offsetWidth || 0);
        }, 0);
        const scrollDistance = Math.max(0, totalSpinWidth - containerWidth);

        // Only create ScrollTrigger if scrolling is needed
        if (scrollDistance > 0) {
          const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 2,
            onUpdate: (self) => {
              if (container.isConnected && spin.isConnected) {
                const progress = self.progress;
                const currentX = -scrollDistance * progress;
                gsap.set(spin, { x: currentX });
              }
            },
          });

          return () => scrollTrigger.kill();
        }
      };

      // Create initial animation
      let cleanup = createScrollAnimation();

      // Handle resize with debouncing
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (cleanup) cleanup();
          cleanup = createScrollAnimation();
        }, 200);
      };

      window.addEventListener("resize", handleResize);

      // Return cleanup function
      return () => {
        window.removeEventListener("resize", updateWidth);
        window.removeEventListener("resize", handleResize);
        clearTimeout(resizeTimeout);
        if (cleanup) cleanup();
      };
    },
    { dependencies: [containerWidth] },
  );

  const spinContent = [
    {
      id: 1,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      ],
    },
    {
      id: 2,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      ],
    },
    {
      id: 3,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      ],
    },
  ];

  return (
    <section
      className="w-full relative lg:pt-32  pt-20 pb-20 bg-darkgray-150/60 overflow-x-hidden"
      ref={containerRef}
      id="team-message-container"
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-6" ref={widthRef}>
        {/* Sticky horizontal scroll container */}
        <div className=" flex items-center ">
          <div
            ref={spinRef}
            className="flex items-start w-full justify-start gap-4 md:gap-0"
            id="spin"
            style={{ willChange: "transform" }}
          >
            {spinContent.map((item) => (
              <div
                key={item.id}
                className=" spin-item grid w-full max-w-[1200px] lg:w-[1200px] xl:w-[1400px] 2xl:max-w-[1400px] grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-center flex-shrink-0 lg:pr-6"
                // style={{
                //   minWidth: containerWidth > 0 ? `${containerWidth - 60}px` : 'auto',
                //   width: containerWidth > 0 ? `${containerWidth - 60}px` : 'auto'
                // }}
              >
                {/* Director Image */}
                <div className="relative col-span-1 flex justify-center items-start lg:justify-start">
                  <Image
                    src={item.image}
                    alt="Director"
                    width={530}
                    height={530}
                    className="w-full max-w-[150px] lg:max-w-[530px] h-auto rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] object-cover"
                  />
                </div>

                {/* Message Content */}
                <div className="relative w-full bg-stone-400 2xl:h-[440px] box-border rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-6 lg:p-8 xl:p-14 outline outline-white/10 col-span-2">
                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal font-['Geometr415_Lt_BT'] capitalize text-black mb-3 sm:mb-4 lg:mb-5">
                      {item.title}
                    </h2>

                    <div className="text-black text-sm sm:text-base font-normal font-['Poppins'] leading-relaxed space-y-2 sm:space-y-3 lg:space-y-1">
                      {item.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-sm sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teams section below the pinned content */}
        <div className="flex pt-10 sm:pt-12 lg:pt-16 xl:pt-20">
          <Teams />
        </div>
      </div>
    </section>
  );
};

export default TeamAndMessage;
