import React from "react";

const Header = () => {
  return (
    <header className="h-[40rem] bg-red-400 flex flex-col w-full tablet:px-24 gap-10 items-center justify-center bg-hero-pattern bg-cover">
      <h1 className="text-3xl font-bold text-center text-white laptop:w-1/2">
        Unlocking Wealth: Exploring Global Financial Markets and Online
        Money-Making Strategies.
      </h1>
      <button className="font-bold text-2xl bg-[#0AA92F] text-white px-10 tablet:px-16 py-4 transition-all duration-500 hover:bg-[#195E00] rounded-full uppercase">
        learn more
      </button>
    </header>
  );
};

export default Header;
