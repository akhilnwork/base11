import Image from "next/image";
import Link from "next/link";

const floatingIcons = [
  {
    id: 1,
    image: "/svg/telephone-fixed.svg",
    alt: "Phone",
    url: "tel:+918590355922",
    target: "_self",
  },
  {
    id: 2,
    image: "/svg/email-fixed.svg",
    alt: "Email",
    url: "mailto:sales@thebaseeleven.com",
    target: "_self",
  },
  {
    id: 3,
    image: "/svg/whatsapp-fixed.svg",
    alt: "Whatsapp",
    url: "https://whatsapp.com/",
    target: "_blank",
  },
];

const FloatingIcons = () => {
  return (
    <div className="fixed right-6 bottom-24 z-50">
      <div className="w-12 relative flex flex-col gap-4">
        {floatingIcons.map((icon) => (
          <div className="relative w-12 h-12" key={icon.id}>
            <Link
              href={icon.url}
              target={icon.target}
              rel="noopener noreferrer"
              className="absolute hover:scale-110 transition-transform duration-200"
            >
              <Image
                className="max-w-full overflow-hidden max-h-full object-cover"
                width={50}
                height={50}
                sizes="100vw"
                alt={icon.alt}
                src={icon.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingIcons;
