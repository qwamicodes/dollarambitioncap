import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  const { pathname } = useLocation();

  const liClassname = "border-b border-gray-200 px-5 py-4";

  return (
    <nav className="min-[320px]:w-full flex items-center justify-center w-full mx-auto h-[7rem] fixed z-20 bg-white/7 text-white backdrop-blur-sm shadow-sm shadow-black/8">
      <div className="w-3/4 flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="main logo" />
        </Link>

        <ul className="hidden tablet:flex tablet:gap-5 uppercase font-medium justify-between items-center basis-1/2 text-2xl">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/privacy-policy">privacy policy</Link>
          </li>
        </ul>
        <div className="w-[4rem] rounded-md p-3 bg-[#0AA92F] md:hidden">
          <span onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </span>
        </div>
      </div>
      {showNav && (
        <ul className="absolute top-full w-[100vw] flex-col bg-white text-gray-500  gap-5 uppercase font-medium justify-between items-center basis-[40%] text-2xl">
          <li className={liClassname}>
            <Link to="/" className={pathname === "/" ? "text-red-400" : ""}>
              home
            </Link>
          </li>
          <li className={liClassname}>
            <Link
              to="/blog"
              className={pathname === "/blog" ? "text-red-400" : ""}
            >
              blog
            </Link>
          </li>
          <li className={liClassname}>
            <Link
              to="/services"
              className={pathname === "/services" ? "text-red-400" : ""}
            >
              services
            </Link>
          </li>
          <li className={liClassname}>
            <Link
              to="/about"
              className={pathname === "/about" ? "text-red-400" : ""}
            >
              about
            </Link>
          </li>
          <li className={liClassname}>
            <Link
              to="/contact"
              className={pathname === "/contact" ? "text-red-400" : ""}
            >
              contact
            </Link>
          </li>{" "}
          <li className={liClassname}>
            <Link
              to="/privacy-policy"
              className={pathname === "/privacy-policy" ? "text-red-400" : ""}
            >
              privacy policy
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
