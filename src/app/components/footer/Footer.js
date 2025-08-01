import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const footerData = {
    contact: {
      title: "Contact Us",
      address: [
        "Base Eleven Convention Centre,",
        "Kadappattoor - Velliappally Rd, Pala",
        "Kottayam Dist., Kerala, India - 686574",
      ],
      phone: "+91 8590355922",
      email: "sales@thebaseeleven.com",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Facilities", href: "#" },
        { name: "Virtual Tour", href: "#" },
        { name: "Gallery", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { name: "Corporate Event", href: "#" },
        { name: "Wedding and Celebration", href: "#" },
        { name: "Facilities", href: "#" },
        { name: "Dining Area", href: "#" },
      ],
    },
    otherLinks: {
      title: "Other Links",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms and Conditions", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    social: {
      title: "Follow Us",
      links: [
        { name: "Facebook", href: "#", icon: "facebook" },
        { name: "Instagram", href: "#", icon: "instagram" },
        { name: "Youtube", href: "#", icon: "youtube" },
      ],
    },
  };

  const renderSocialIcon = (iconName) => {
    const icons = {
      facebook: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white"
            d="M11.8 21.0898H12.2C12.9499 21.0898 13.3249 21.0898 13.5878 20.8988C13.6727 20.8371 13.7473 20.7625 13.809 20.6776C14 20.4147 14 20.0397 14 19.2898V13.5898H15.25C15.9522 13.5898 16.3033 13.5898 16.5556 13.4213C16.6648 13.3483 16.7585 13.2546 16.8315 13.1454C17 12.8931 17 12.542 17 11.8398C17 11.1376 17 10.7865 16.8315 10.5342C16.7585 10.425 16.6648 10.3313 16.5556 10.2583C16.3033 10.0898 15.9522 10.0898 15.25 10.0898H14V8.08984C14 7.6239 14 7.39093 14.0761 7.20716C14.1776 6.96213 14.3723 6.76745 14.6173 6.66596C14.8011 6.58984 15.0341 6.58984 15.5 6.58984C15.9659 6.58984 16.1989 6.58984 16.3827 6.51372C16.6277 6.41223 16.8224 6.21755 16.9239 5.97252C17 5.78875 17 5.55578 17 5.08984V4.6454C17 4.12723 17 3.86815 16.9063 3.66722C16.8069 3.45415 16.6357 3.28289 16.4226 3.18353C16.2217 3.08984 15.9626 3.08984 15.4444 3.08984C13.6309 3.08984 12.7241 3.08984 12.0208 3.41776C11.2751 3.76552 10.6757 4.36491 10.3279 5.11068C10 5.81391 10 6.7207 10 8.53429V10.0898H8.75C8.04777 10.0898 7.69665 10.0898 7.44443 10.2583C7.33524 10.3313 7.24149 10.425 7.16853 10.5342C7 10.7865 7 11.1376 7 11.8398C7 12.542 7 12.8931 7.16853 13.1454C7.24149 13.2546 7.33524 13.3483 7.44443 13.4213C7.69665 13.5898 8.04777 13.5898 8.75 13.5898H10V19.2898C10 20.0397 10 20.4147 10.191 20.6776C10.2527 20.7625 10.3273 20.8371 10.4122 20.8988C10.6751 21.0898 11.0501 21.0898 11.8 21.0898Z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      instagram: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white"
            d="M18.5 6.58984C18.5 7.14212 18.0523 7.58984 17.5 7.58984C16.9477 7.58984 16.5 7.14212 16.5 6.58984C16.5 6.03756 16.9477 5.58984 17.5 5.58984C18.0523 5.58984 18.5 6.03756 18.5 6.58984Z"
          />
          <path
            className="stroke-white"
            d="M3 10.2898C3 7.29005 3 5.79016 3.76393 4.7387C4.01065 4.39912 4.30928 4.10049 4.64886 3.85377C5.70032 3.08984 7.20021 3.08984 10.2 3.08984H13.8C16.7998 3.08984 18.2997 3.08984 19.3511 3.85377C19.6907 4.10049 19.9893 4.39912 20.2361 4.7387C21 5.79016 21 7.29005 21 10.2898V13.8898C21 16.8896 21 18.3895 20.2361 19.4409C19.9893 19.7805 19.6907 20.0791 19.3511 20.3259C18.2997 21.0898 16.7998 21.0898 13.8 21.0898H10.2C7.20021 21.0898 5.70032 21.0898 4.64886 20.3259C4.30928 20.0791 4.01065 19.7805 3.76393 19.4409C3 18.3895 3 16.8896 3 13.8898V10.2898Z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            className="stroke-white"
            d="M16 12.0898C16 14.2989 14.2091 16.0898 12 16.0898C9.79086 16.0898 8 14.2989 8 12.0898C8 9.8807 9.79086 8.08984 12 8.08984C14.2091 8.08984 16 9.8807 16 12.0898Z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      youtube: (
        <svg
          width="25"
          height="18"
          viewBox="0 0 25 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-white"
            d="M12.4991 18C12.497 18 12.4947 18 12.4924 18C11.7381 17.9949 5.06921 17.9342 3.17979 17.4251C1.85933 17.0715 0.816965 16.0341 0.461054 14.7182C-0.0333311 12.869 -0.00185979 9.30862 0.00157343 9.02432C-0.00166906 8.74136 -0.0335218 5.15154 0.459528 3.28708C0.4601 3.28537 0.460481 3.28347 0.461054 3.28176C0.812959 1.98095 1.87879 0.911421 3.17655 0.556811C3.17979 0.555861 3.18322 0.5551 3.18646 0.55415C5.05452 0.064993 11.7365 0.00513103 12.4924 0H12.506C13.2622 0.00513103 19.9488 0.0657531 21.8209 0.575624C23.1379 0.928335 24.1795 1.96442 24.5364 3.27853C25.0493 5.14432 25.0018 8.74193 24.9966 9.04561C25.0002 9.34473 25.0302 12.8732 24.5387 14.7317C24.5383 14.7336 24.5377 14.7353 24.5373 14.7371C24.1812 16.0529 23.139 17.0903 21.8171 17.4443C21.8153 17.4449 21.8134 17.4453 21.8117 17.4458C19.9439 17.9348 13.2616 17.9947 12.506 18C12.5037 18 12.5014 18 12.4991 18ZM2.34742 3.78612C1.91331 5.43185 1.95432 8.97587 1.9547 9.01159V9.03725C1.94173 10.0201 1.98731 12.8665 2.34761 14.2146C2.52232 14.8602 3.03636 15.3716 3.68829 15.5462C5.08237 15.9219 10.5139 16.0401 12.4991 16.054C14.4894 16.0401 19.929 15.9252 21.3128 15.5645C21.9626 15.3893 22.4749 14.8796 22.6508 14.2333C23.0114 12.8654 23.0566 10.0329 23.0435 9.05625C23.0435 9.04599 23.0435 9.03573 23.0437 9.02547C23.0616 8.03081 23.0263 5.15116 22.6525 3.7922C22.6521 3.79087 22.6517 3.78954 22.6515 3.78821C22.476 3.1398 21.9618 2.62841 21.3099 2.45377C19.9294 2.07768 14.489 1.95986 12.4991 1.94599C10.5101 1.95986 5.07588 2.07464 3.68791 2.43495C3.04837 2.61169 2.52271 3.14132 2.34742 3.78612ZM10.0098 12.9404V5.05938L16.8457 9L10.0098 12.9404Z"
          />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <footer className="">
      <article className="flex bg-dimgray-100 text-white flex-col py-12 md:py-16 lg:py-24">

      
      <div className="container mx-auto px-4 sm:px-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">

          {/* Contact Section - Full width on mobile, half on tablet, 5 cols on desktop */}
          <div className="col-span-1 md:col-span-2 lg:col-span-5">
          <div className="space-y-3 sm:space-y-4">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/svg/ease-eleven-logo.svg"
                  alt="Logo"
                  width={152}
                  height={77}
                  className="w-32 sm:w-36 md:w-40 lg:w-auto"
                />
              </Link>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {footerData.contact.address.map((line, index) => (
                <p key={index} className="text-sm sm:text-base">
                  {line}
                </p>
              ))}
            </div>
            <div className="pt-3 sm:pt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/svg/telephone-filed.svg"
                  alt="phone"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                />
                <p className="text-base sm:text-lg font-medium">
                  {footerData.contact.phone}
                </p>
              </div>
              <div className="">
                <p className="text-sm sm:text-base">
                  {footerData.contact.email}
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* Links Section - Full width on mobile, half on tablet, 7 cols on desktop */}
          <div className="col-span-1 md:col-span-2 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
 
          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {footerData.quickLinks.title}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {footerData.services.title}
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links & Social */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              {footerData.otherLinks.title}
            </h3>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 text-left">
              {footerData.otherLinks.links.map((link, index) => (
                <li key={index} className="flex ">
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                {footerData.social.title}
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {footerData.social.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center transition-colors"
                  >
                    {renderSocialIcon(link.icon)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
                </div>
        </article>
        <article className="flex bg-gray-300 text-white flex-col py-6 sm:py-8">

      
      <div className="container mx-auto px-4 sm:px-5">
        {/* Footer Bottom */}
       
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm opacity-80 text-center sm:text-left">
              © 2025 Base Eleven All Rights Reserved
            </p>
            <p className="text-xs sm:text-sm opacity-80 text-center sm:text-right">
              {/* Designed By: Script N Pixel */}
            </p>
          </div>
       
      </div>
      </article>
    </footer>
  );
};

export default Footer;
