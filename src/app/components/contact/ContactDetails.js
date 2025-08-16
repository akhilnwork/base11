import Image from "next/image";
import { cn } from "@/utils/cn";
import Hgroup from "../common/Hgroup";

const ContactDetails = () => {
  // Contact information data
  const contactInfo = [
    {
      id: 1,
      icon: "svg/cont-location.svg",
      iconAlt: "Location icon",
      label: "Office Address",
      values: [
        "Base Eleven Convention Centre,",
        "Kadappattoor - Velliappally Rd,",
        "Pala, Kottayam Dist., Kerala, India - 686574",
      ],
    },
    {
      id: 2,
      icon: "svg/cont-call.svg",
      iconAlt: "Phone icon",
      label: "Give us a call",
      values: ["+91 8590355922"],
    },
    {
      id: 3,
      icon: "svg/cont-mail.svg",
      iconAlt: "Email icon",
      label: "Send us a message",
      values: ["sales@thebaseeleven.com"],
    },
  ];

  return (
    <div className="col-span-5 gap-9 text-5xl text-black font-geometr415-lt-bt">
      <div className="w-full flex flex-col items-start justify-start gap-[30px] text-base font-inter">
        <div className="flex w-full mb-4">
        <div className="w-full flex flex-col gap-[22px] text-left">
          <h2 className="text-5xl font-geometr415-lt-bt leading-[42px]">Contact Information</h2>
          <p className="text-lg leading-7 font-poppins text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        </div>
        {contactInfo.map((item) => (
          <div key={item.id} className="relative flex w-full gap-x-8">
            <div className="icon w-[45px] h-[45px] flex items-center  text-black  justify-center rounded-full border border-black/10">
              <Image
                className="w-5 h-5"
                width={45}
                height={45}
                sizes="100vw"
                alt={item.iconAlt}
                src={item.icon}
              />
            </div>
            <div
              className={cn("absolute left-14  bg-black/30 w-0.25 top-0 bottom-0")}
            ></div>
            <div className="flex flex-col gap-y-3">
            <div className={cn("relative leading-[21px] font-inter")}>{item.label}</div>
            <div
              className={cn("relative  text-lg leading-[27.2px] font-poppins")}
            >
              {item.values.map((value, index) => (
                <p key={index} className="m-0">
                  {value}
                </p>
              ))}
            </div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
