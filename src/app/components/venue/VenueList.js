import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
const venues = [
  {
    id: 1,
    name: "Venue 1",
    image: "1.png",
    href: "/venues/1",
    active: true,
  },
  {
    id: 2,
    name: "Venue 2",
    image: "2.png",
    href: "/venues/2",
  },
  {
    id: 3,
    name: "Venue 3",
    image: "3.png",
    href: "/venues/3",
  },
  {
    id: 4,
    name: "Venue 4",
    image: "4.png",
    href: "/venues/4",
  },
  {
    id: 5,
    name: "Venue 5",
    image: "5.png",
    href: "/venues/5",
  },
  {
    id: 6,
    name: "Venue 6",
    image: "6.png",
    href: "/venues/6",
  },
  {
    id: 7,
    name: "Venue 4",
    image: "4.png",
    href: "/venues/4",
  },
  {
    id: 8,
    name: "Venue 4",
    image: "2.png",
    href: "/venues/4",
  },
];

const VenueList = ({ posts, slug }) => {
  return (
    <section className="w-full bg-darkgray-150/20 py-6 sm:py-8 lg:py-12">
      <div className="w-full px-4 sm:px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-[29px]">
          {posts?.data?.map((venue) => (
            <Link
              key={venue.id}
              title={venue.title}
              href={venue.slug}
              className="group relative aspect-square rounded-[20px] sm:rounded-[30px] overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={venue.cover_image.url}
                alt={venue.title}
                className="w-full h-full object-cover"
                width={250}
                height={250}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 12vw"
              />
              <div
                className={cn(
                  "absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center",
                  venue.slug === slug
                    ? "bg-darkgray-150 text-black"
                    : "opacity-0 group-hover:opacity-100  text-white",
                )}
              >
                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-geometr415-lt-bt text-center px-2">
                  {venue.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueList;
