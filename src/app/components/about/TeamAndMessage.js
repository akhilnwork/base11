"use client"
import Image from "next/image";
import { cn} from "@/utils/cn";
import Teams from "./Teams";
import Hgroup from "../common/Hgroup";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const TeamAndMessage = () => {
  const containerRef = useRef(null);
  const widthRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Get container width for responsive horizontal scroll
  useEffect(() => {
    const updateWidth = () => {
      if (widthRef.current) {
        setContainerWidth(widthRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to horizontal movement - scrub through 3 full widths
  // Uses containerWidth * 3 for responsive horizontal scroll
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, -(containerWidth * 5)]
  );
  const springX = useSpring(x, { stiffness: 10, damping: 30 });

  const spinContent = [
    {
      id: 1,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, slightly believable."
      ]
    },
    {
      id: 2,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, slightly believable."
      ]
    },
    {
      id: 3,
      image: "/img/people/director.png",
      title: "Message from our Director",
      content: [
        "Dear Patrons,",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "There are many variations of passages of Lorem Ipsum available, slightly believable."
      ]
    }
  ];

  return (
    <section className="w-full relative py-20 bg-darkgray-150/30" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-5 lg:px-6" ref={widthRef}>
        {/* Sticky horizontal scroll container */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div 
            className="flex gap-4 sm:gap-5 items-center w-full"
            style={{ x: springX }}
            id="spin"
          >
            {spinContent.map((item, index) => (
              <div key={item.id} className="grid w-full max-w-[1498px] lg:w-[1200px] xl:w-[1400px] 2xl:w-[1498px] grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-center flex-shrink-0">
               
                {/* Director Image */}
                <div className="relative col-span-1">
                  <Image 
                    src={item.image} 
                    alt="Director" 
                    width={530} 
                    height={530} 
                    className="w-full h-auto rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] object-cover" 
                  />
                </div>

                {/* Message Content */}
                <div className="relative w-full bg-stone-400 2xl:h-[475px] box-border rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-4 sm:p-6 lg:p-8 xl:p-14 outline outline-white/10 col-span-2">
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
          </motion.div>
        </div>

        {/* Teams section below the pinned content */}
        <div className="mt-20">

          <Teams />
        </div>
      </div>
    </section>
  );
};

export default TeamAndMessage;