import Link from "next/link";
import LinkArow from "@/app/icons/Linkarrow";
import { cn } from "@/utils/cn";

const ButtonAction = ({
  title,
  type = "white",
  onClick,
  href,
  disabled = false,
  isSubmitting = false,
  buttonType = "button",
}) => {
  const colorClass =
    type === "white"
      ? "bg-white text-black border-black hover:bg-gray-400 hover:text-white"
      : type === "gray"
        ? "bg-gray-400 text-white border-black hover:bg-white hover:text-black"
        : "bg-transparent border-white text-white hover:bg-white hover:text-black";

  const disabledClass =
    disabled || isSubmitting
      ? "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400 hover:text-gray-600"
      : "";

  const baseClasses = cn(
    "px-[0.938rem] font-poppins pl-[1.5rem] pr-6 rounded-[4rem] font-medium group border flex justify-center items-center box-border leading-[3.125rem] h-[3.125rem] text-center text-[0.938rem] duration-200 transition-all",
    colorClass,
    disabledClass,
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={baseClasses} title={title}>
        <span className="mr-2">{title}</span>
        <LinkArow type={type} />
      </Link>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        disabled={disabled || isSubmitting}
        className={baseClasses}
        title={title}
      >
        <span className="mr-2">{isSubmitting ? "Sending..." : title}</span>
        {!isSubmitting && <LinkArow type={type} />}
      </button>
    );
  }

  // Default fallback as anchor tag
  return (
    <a className={baseClasses} title={title}>
      <span className="mr-2">{title}</span>
      <LinkArow type={type} />
    </a>
  );
};

export default ButtonAction;
