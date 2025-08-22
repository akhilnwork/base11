import React from "react";
import { cn } from "@/utils/cn";

const Hgroup = ({ title, preTitle, align = "left" }) => {
  const isCenter = align === "center";

  return (
    <hgroup
      className={cn(
        "space-y-4 sm:space-y-6",
        isCenter ? "text-center" : "text-left",
      )}
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      {preTitle && (
        <p
          className={cn(
            "px-3 py-1 sm:px-4 sm:py-2 bg-gray-400 text-white text-xs sm:text-sm rounded-lg font-medium",
            isCenter ? "inline-block" : "inline-block",
          )}
        >
          {preTitle}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-['Geometr415_Lt_BT'] tracking-tight leading-tight capitalize",
          isCenter ? "mx-auto" : "",
        )}
      >
        {title?.split("/n").map((line, index, array) => (
          <React.Fragment key={index}>
            {line}
            {index < array.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
    </hgroup>
  );
};

export default Hgroup;
