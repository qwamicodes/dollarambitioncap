import classNames from "classnames";
import { useLocation } from "react-router-dom";
import Button from "../components/button";

const Header = () => {
  const { pathname } = useLocation();

  const headingText = {
    "/": "Unlocking Wealth: Exploring Global Financial Markets and Online Money-Making Strategies.",
    "/blog": "Latest Posts",
    "/services": "Our Services",
    "/about": "About Us",
    "/contact": "Contact Us",
  }[pathname];

  const headerClassnames = classNames({
    "bg-red-400 flex flex-col w-full tablet:px-24 gap-10 md:gap-20 items-center justify-center  bg-cover":
      true,
    "h-[50rem] bg-hero-pattern": pathname === "/",
    "h-[90rem] bg-hero-pattern-blog": pathname === "/blog",
    "h-[50rem] bg-hero-pattern-services bg-center": pathname === "/services",
    "md:h-[90rem] h-[30rem] bg-hero-pattern-about bg-center": pathname === "/about",
    "h-[90rem] bg-hero-pattern-contact": pathname === "/contact",
  });

  const headerTextClassnames = classNames({
    "font-bold text-center text-white md:w-2/3 laptop:w-1/2 sm:w-[75%]": true,
    "text-3xl md:text-5xl": pathname === "/",
    "text-7xl uppercase":
      pathname === "/blog" ||
      pathname === "/services" ||
      pathname === "/about" ||
      pathname === "/contact",
  });

  return (
    <header className={headerClassnames}>
      <h1 className={headerTextClassnames}>{headingText}</h1>

      {pathname === "/" && <Button variant="primary">learn more</Button>}
    </header>
  );
};

export default Header;
