"use client";
import Image from "next/image";

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jessica Mercedes",
      position: "Chairman",
      image: "1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      id: 2,
      name: "Jessica Mercedes",
      position: "Chairman",
      image: "2.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      id: 3,
      name: "Jessica Mercedes",
      position: "Chairman",
      image: "3.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      id: 4,
      name: "Jessica Mercedes",
      position: "Chairman",
      image: "4.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-black">
      {teamMembers.map((member, index) => (
        <div 
          key={member.id} 
          className="relative w-full group"
          data-aos="flip-left"
          data-aos-delay={index * 200}
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
        >
          {/* Background Image */}
          <div 
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
            data-aos="zoom-in-up"
            data-aos-delay={index * 200 + 300}
            data-aos-duration="700"
          >
            <Image
              className="w-full h-full rounded-t-[20px] sm:rounded-t-[25px] lg:rounded-t-[30px] lg:rounded-b-[30px] object-cover object-top lg:object-center"
              width={387}
              height={450}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              alt={member.name}
              src={`/img/people/${member.image}`}
            />

            {/* Overlay - Only on desktop (lg and above) */}
            <div className="hidden lg:block absolute inset-0  lg:rounded-b-[30px] rounded-t-[30px] bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
          </div>

          {/* Content Section - Below image on mobile/tablet, overlay on desktop */}
          <div 
            className="lg:absolute lg:bottom-2.5 lg:left-2.5 lg:right-2.5 p-3 sm:p-4 lg:p-6 duration-300 transition-all bg-darkgray-150/80 lg:group-hover:bg-darkgray-150 rounded-b-[20px] sm:rounded-b-[25px] lg:rounded-[30px]"
            data-aos="slide-up"
            data-aos-delay={index * 200 + 500}
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
          >
            {/* Name */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-['Geometr415_Lt_BT'] capitalize mb-1 sm:mb-2 text-black">
              {member.name}
            </h3>

            {/* Position */}
            <p className="text-sm sm:text-base capitalize font-poppins mb-2 sm:mb-3 text-black/90">
              {member.position}
            </p>

            {/* Description - Always visible on mobile/tablet, hover effect on desktop */}
            <div className="block lg:hidden">
              {/* Mobile/Tablet: Always visible */}
              <p className="text-xs sm:text-sm lg:text-base font-poppins leading-[1.4] sm:leading-[1.5] lg:leading-[27px] text-black/90">
                {member.description}
              </p>
            </div>

            <div className="hidden lg:block max-h-0 duration-300 transition-all group-hover:max-h-[300px] overflow-hidden">
              {/* Desktop: Hover effect */}
              <p className="text-base font-poppins leading-[27px] text-black/90">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
