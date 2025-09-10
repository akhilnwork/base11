"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "../button/ButtonLink";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [venueSlug, setVenueSlug] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);
  const isHomePage = pathname === "/";

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Facilities", href: "/facilities" },
    {
      name: "Venues",
      href: isHydrated && venueSlug ? `/venues/${venueSlug}` : "/venues",
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // if (isHomePage) {
      setIsScrolled(window.scrollY > 0);
      //  }
    };

    // if (isHomePage) {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // }
  }, [isHomePage]);

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const fetchVenueSlug = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/venues/latest-slug`,
        );
        const data = await response.json();
        if (data.data?.slug) {
          setVenueSlug(data.data.slug);
        }
      } catch (error) {
        console.error("Error fetching venue slug:", error);
      }
    };

    // Only fetch after hydration to avoid mismatch
    if (isHydrated) {
      fetchVenueSlug();
    }
  }, [isHydrated]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getHeaderClasses = () => {
    const baseClasses =
      "fixed w-full top-0 right-0 left-0 text-gray-1100 py-3 z-50 transition-all duration-300";

    if (isHomePage) {
      return `${baseClasses} ${isScrolled ? "bg-grayheader" : "bg-transparent"}`;
    } else {
      return `${baseClasses} bg-grayheader`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={getHeaderClasses()}>
        <div className="container mx-auto h-full flex items-center justify-between relative px-5">
          <div className="logo flex justify-start items-start">
            <Link href="/" className="">
              <Image
                src="/svg/ease-eleven-logo.svg"
                alt="Logo"
                width={200}
                height={106}
                className={cn(
                  "lg:h-26 md:h-20 h-15 transition-all duration-150 m-0 w-auto",
                  !isScrolled && isHomePage ? "lg:h-26" : "lg:h-20",
                )}
              />
            </Link>
          </div>

          {/* Single Navigation Component */}
          <nav
            className={`${isMobileMenuOpen ? "bg-grayheader top-0" : "bg-transparent top-[-100%]"} w-screen h-screen fixed transition-all duration-300 left-0 right-0 lg:bg-transparent lg:h-auto lg:static lg:w-auto lg:block`}
          >
            <ul className="menu flex h-screen justify-center items-center lg:h-full flex-col lg:flex-row pb-10 lg:pb-0">
              {links.map((link) => {
                const isActive = pathname === link.href;
                const currentClass = isActive
                  ? "text-white"
                  : "text-white/80 hover:text-white";
                return (
                  <li
                    className="flex flex-col lg:h-full justify-center items-center"
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      title={link?.name}
                      onClick={toggleMobileMenu}
                      className={cn(
                        `flex px-6 py-2 text-4xl xl:text-lg lg:text-lg md:text-5xl leading-10 lg:leading-auto    transition-colors`,
                        currentClass,
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="flex flex-col lg:h-full justify-center items-center mt-10 md:mt-0">
                <ButtonLink
                  title="Contact Us"
                  href="/contact"
                  type="transparent"
                />
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-2"}`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-2"}`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
