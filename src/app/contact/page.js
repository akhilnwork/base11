import InnerBanner from "../components/common/InnerBanner";
import ContactDetails from "../components/contact/ContactDetails";
import ContactFom from "../components/common/ContactFom";
import Hgroup from "../components/common/Hgroup";

export default function ContactPage() {
  return (
    <>
      <InnerBanner src="/img/banner/contact-banner.png" title="Contact Us" />

      <section className="relative w-full flex flex-row py-20">
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
