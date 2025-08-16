import Link from "next/link";
import { cn } from "@/utils/cn";
import LinkArow from "@/app/icons/Linkarrow";

const ButtonLink = ({ title, href, type = "white" }) => {
  const colorClass =
    type === "white"
      ? "bg-white text-black border-black hover:bg-gray-400 hover:text-white"
      : "bg-transparent border-white text-white hover:bg-white hover:text-black";
  return (
    <Link
      className={cn(
        "px-[0.938rem] font-poppins pl-[1.5rem] pr-6 rounded-[4rem] font-medium group   border  flex justify-center items-center box-border leading-[3.125rem]  h-[3.125rem] text-center text-[0.938rem] duration-200 transition-all ",
        colorClass,
      )}
      href={href}
      title={title}
    >
      <span className="mr-2">{title}</span>
      <LinkArow type={type} />
    </Link>
  );
};

export default ButtonLink;
