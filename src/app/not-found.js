import Link from "next/link";
import Image from "next/image";
import ButtonLink from "./components/button/ButtonLink";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white relative w-full">
      {/* Background Image Container */}
      <Image
        src="/img/not-found.png"
        alt="404 Background"
        fill
        className="object-cover w-screen h-full top-0 left-0 absolute right-0 bottom-0"
        priority
      />
      {/* Background Image */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* 404 Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-8xl md:text-12xl lg:text-16xl xl:text-[18.75rem] leading-none font-geometr415-lt-bt tracking-tight font-bold text-center">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-geometr415-lt-bt tracking-tight mb-2 sm:mb-4 text-center px-4">
            OOPS! PAGE NOT FOUND
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4">
            Oops! it could be you or us, there is no page here. It might have
            been moved or deleted.
          </p>
          <div className="flex mt-6 sm:mt-8 md:mt-10">
            <ButtonLink
              href="/"
              text="Back to Home"
              title="Back to Home"
              type="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
