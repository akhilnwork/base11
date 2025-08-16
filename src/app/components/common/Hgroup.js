import { cn } from "@/utils/cn";

const Hgroup = ({ title, preTitle, align }) => {
  return (
    <hgroup
      className="space-y-6"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <p className="inline-block px-4 py-2 bg-gray-400 text-white text-sm rounded-lg">
        {preTitle}
      </p>
      <h2 className="text-5xl font-geometr415-lt-bt tracking-tight leading-tight capitalize">
        {title}
      </h2>
    </hgroup>
  );
};

export default Hgroup;
