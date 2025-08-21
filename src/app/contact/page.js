import InnerBanner from "../components/common/InnerBanner";
import ContactDetails from "../components/contact/ContactDetails";
import ContactFom from "../components/common/ContactFom";
import Hgroup from "../components/common/Hgroup";

export const metadata = {
  title: "Contact Us - Base Eleven Event Venue",
  description:
    "Get in touch with Base Eleven for your next event. Contact our team to plan your perfect wedding, corporate event, or celebration. Professional event planning services.",
  keywords:
    "contact Base Eleven, event planning contact, wedding venue contact, event inquiry, book venue",
  openGraph: {
    title: "Contact Us - Base Eleven Event Venue",
    description:
      "Get in touch with Base Eleven for your next event. Contact our team to plan your perfect wedding, corporate event, or celebration.",
    type: "website",
    images: ["/img/banner/contact-banner.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <InnerBanner src="/img/banner/contact-banner.png" title="Contact Us" />

      <section className="relative w-full flex flex-row py-20 overflow-x-hidden">
        <div className="container mx-auto px-5">
          <div className="flex pb-12">
            <Hgroup title="Contact Us" preTitle="Get In Touch" align="left" />
          </div>
          <div className="grid grid-cols-12 gap-x-20">
            <ContactFom />
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
