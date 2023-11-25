"use client"

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 align-center">
      {!isMenuOpen && (
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
      )}

      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? 'flex-row justify-center' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
        {isMenuOpen && (
          <li>
            <button onClick={handleCloseClick} className="close-button">
              Close
            </button>
          </li>
        )}
      </ul>

      {!isMenuOpen && (
        <div className="inline-block cursor-pointer lg:hidden" onClick={handleMenuClick}>
          <Image 
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      )}

      <div className={`lg:flexCenter hidden ${isMenuOpen ? 'justify-center' : ''}`}>
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;














// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {/* <ul className="hidden h-full gap-12 lg:flex"> */}
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button 
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image 
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   )
// }

// export default Navbar