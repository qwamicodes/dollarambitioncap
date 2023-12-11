import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/footer-logo.png";

const Footer = () => {
  const footerLinkClassname =
    "hover:text-[#39C201] transition-colors duration-500 cursor-pointer";

  return (
    <footer className="flex flex-col laptop:flex-row items-center justify-around py-16 bg-black h-[20rem] text-white w-full">
      <ul className="capitalize flex gap-10">
        <li className={footerLinkClassname}>privacy policy</li>
        <li className={footerLinkClassname}>about</li>
        <li className={footerLinkClassname}>contact</li>
      </ul>
      <img src={Logo} className="w-[10rem]" alt="footer logo" />
      <div className="flex flex-col items-center text-3xl gap-2">
        <h3 className="capitalize">copyright</h3>
        <span>
          &copy; {new Date().getFullYear()} &nbsp;
          <Link className="text-[#39C201]" to="/">
            Dollarambitioncap
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
