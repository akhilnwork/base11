import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
const venues = [
  {
    id: 1,
    name: "Venue 1",
    image: "1.png",
    href: "/venue/1",
  },
  {
    id: 2,
    name: "Venue 2",
    image: "2.png",
    href: "/venue/2",
  },
  {
    id: 3,
    name: "Venue 3",
    image: "3.png",
    href: "/venue/3",
  },
  {
    id: 4,
    name: "Venue 4",
    image: "4.png",
    href: "/venue/4",
  },
  {
    id: 5,
    name: "Venue 5",
    image: "5.png",
    href: "/venue/5",
  },
  {
    id: 6,
    name: "Venue 6",
    image: "6.png",
    href: "/venue/6",
  },
];

const VenueList = () => {
  const imgClass = "flex w-250px h-250px rounded-30px overflow-hidden";
  return (
    <div className="relative bg-gainsboro w-full h-[385px] flex flex-row items-center justify-start py-[30px] px-0 box-border gap-[29px] text-left text-2xl text-black font-geometr415-lt-bt">
      {venues.map((venue) => (
        <Link
          key={venue.id}
          title={venue.name}
          href={venue.href}
          className={cn(
            "flex w-[250px] h-[250px] relative rounded-[30px] group",
            imgClass,
          )}
        >
          <Image
            src={`/img/acc/${venue.image}`}
            alt="Venue Image"
            className={cn("object-cover", imgClass)}
            width={250}
            height={250}
          />
          <div className="flex absolute items-center justify-center inset-0 bg-darkgray-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full">
            <h3 className="text-2xl font-geometr415-lt-bt">{venue.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VenueList;
