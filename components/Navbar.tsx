"use client"
//latest version
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLogoVisible(!isLogoVisible);
    setIsMenuButtonVisible(!isMenuButtonVisible);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
    setIsLogoVisible(true);
    setIsMenuButtonVisible(true);
  };

  const handleResize = () => {
    const isLargeScreen = window.innerWidth >= 1024;
    if (isLargeScreen) {
      setIsMenuOpen(false);
      setIsLogoVisible(true);
      setIsMenuButtonVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`max-container padding-container relative z-30 py-5 ${isMenuOpen ? 'justify-center' : 'flexBetween'}`}>
      {isLogoVisible && (
        <Link href="/" passHref>
            <Image src="/logo-no-background.svg" alt="logo" width={95} height={29} />
        </Link>
      )}

      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? 'flex-row justify-center' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flexCenter">
            <Link href={link.href} passHref className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold text-center" onClick={handleCloseClick}>
                {link.label}
            </Link>
          </li>
        ))}
        {isMenuOpen && (
          <li className="text-center">
            <button onClick={handleCloseClick} className="close-button text-red-500">
              Close
            </button>
          </li>
        )}
      </ul>

      {isMenuButtonVisible && (
        <div className={`lg:flexCenter hidden ${isMenuOpen ? 'justify-center' : ''}`}>
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      )}

      {isMenuButtonVisible && (
        <div className="inline-block cursor-pointer lg:hidden" onClick={handleMenuClick}>
          <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;