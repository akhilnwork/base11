import Image from "next/image";
import BrandMark from "../common/BrandMark";

const statistics = [
  {
    id: 1,
    value: 25,
    label: "Years of Experience",
  },
  {
    id: 2,
    value: 500,
    label: "Events Hosted",
  },
  {
    id: 3,
    value: 500,
    label: "Happy Clients",
  },
  {
    id: 4,
    value: 10000,
    label: "Guest Capacity",
  },
];

const VenueSection = () => {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-5">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-geometr415-lt-bt leading-tight mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
          Hall 01
        </h2>

        {/* Content Layout */}
        <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {/* Left Image */}
          <div className="w-full xl:w-auto xl:flex-shrink-0">
            <Image
              className="w-full sm:max-w-none xl:w-[400px] 2xl:w-[527px] rounded-[20px] sm:rounded-[30px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
              width={527}
              height={700}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, (max-width: 1536px) 400px, 527px"
              alt="Hall 01 - Main venue space"
              src="/img/temp/hall.png"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Description */}
            <div className="space-y-3 sm:space-y-4 pl-[20%]">
              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed font-poppins">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            {/* Second Image */}
            <div className="w-full flex flex-row gap-4">
              <Image
                className="w-full max-w-full sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[665px] rounded-[20px] sm:rounded-[30px] h-[250px] sm:h-[300px] lg:h-[400px]  object-cover"
                width={665}
                height={477}
                sizes="(max-width: 60px) 100vw, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 665px"
                alt="Hall 01 - Interior details"
                src="/img/temp/hall2.png"
              />

              <div className="w-full h-[400px] overflow-hidden relative">
                {/* Upward scrolling marquee */}
                <div className="custom-marquee-up w-full">
                  <div className="flex flex-col gap-4 pb-4">
                    {statistics.map((stat) => (
                      <div
                        key={stat.id}
                        className="w-full relative flex text-center bg-darkgray-150/20 hover:bg-darkgray-150/80 group transition-all duration-200 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden h-32 sm:h-40 lg:h-50 flex-shrink-0"
                      >
                        <div className="absolute opacity-10 group-hover:opacity-80 transition-all duration-100">
                          <BrandMark />
                        </div>

                        {/* Content */}
                        <div className="flex w-full justify-center h-full items-center">
                          <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4">
                            <h4 className="tracking-[0.05em] text-3xl sm:text-5xl lg:text-7xl">
                              {stat.value}+
                            </h4>

                            <div className="text-sm sm:text-lg lg:text-2xl capitalize opacity-80 leading-tight sm:leading-6">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Duplicate for seamless loop */}
                    {statistics.map((stat) => (
                      <div
                        key={`duplicate-${stat.id}`}
                        className="w-full relative flex text-center bg-darkgray-150/20 hover:bg-darkgray-150/80 group transition-all duration-200 rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden h-32 sm:h-40 lg:h-50 flex-shrink-0"
                      >
                        <div className="absolute opacity-10 group-hover:opacity-80 transition-all duration-100">
                          <BrandMark />
                        </div>

                        {/* Content */}
                        <div className="flex w-full justify-center h-full items-center">
                          <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4">
                            <h4 className="tracking-[0.05em] text-3xl sm:text-5xl lg:text-7xl">
                              {stat.value}+
                            </h4>

                            <div className="text-sm sm:text-lg lg:text-2xl capitalize opacity-80 leading-tight sm:leading-6">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
