import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="max-w-[1440px] min-[320px]:w-full flex items-center justify-center w-full mx-auto h-[7rem] fixed z-20 bg-white/7 text-white backdrop-blur-sm shadow-sm shadow-black/8">
      <div className="w-3/4 flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="main logo" />
        </Link>

        <ul className="hidden tablet:flex tablet:gap-5 uppercase font-medium justify-between items-center basis-[40%] text-2xl">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <span>blog</span>
          </li>
          <li>
            <span>services</span>
          </li>
          <li>
            <span>about</span>
          </li>
          <li>
            <span>contact</span>
          </li>
        </ul>
        <ul className="hidden flex flex-col bg-white text-black py-5 gap-5 uppercase font-medium justify-between items-center basis-[40%] text-3xl">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <span>blog</span>
          </li>
          <li>
            <span>services</span>
          </li>
          <li>
            <span>about</span>
          </li>
          <li>
            <span>contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
