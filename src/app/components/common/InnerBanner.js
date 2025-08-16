import Image from "next/image";
const InnerBanner = ({ src, title }) => {
  return (
    <section className="w-full relative mt-20">
      <Image
        className=" w-full h- object-cover"
        width={1920}
        height={500}
        alt={title}
        src={src}
      />
      <div className="absolute inset-0 bg-black/40 w-full"></div>
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-5 relative flex h-full items-center ">
          <div className="flex">
            <h1 className="tracking-[-1px]  text-left text-5xl text-white font-geometr415-lt-bt capitalize">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
