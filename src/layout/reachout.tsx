import React from "react";

import Image1 from "../assets/images/download-1.jpg";
import Image2 from "../assets/images/handshake.jpg";

const Reachout = () => {
  return (
    <section className="flex items-center flex-col laptop:flex-row justify-around mx-auto w-full p-24 gap-20">
      <div className="basis-1/3 flex flex-col items-start justify-between gap-10">
        <h1 className="uppercase text-[3.2rem] font-bold">
          WE'D LOVE TO HEAR FROM YOU
        </h1>
        <span className="h-[3px] bg-[#0AA92F] w-[50px]" />
        <p className="text-gray-500 font-normal">
          Discover untapped potential in trading and the money-making sector.
          Join forces with us, the ultimate collaboration platform, and together
          we’ll soar to new heights. Reach out now for a lucrative partnership
          opportunity
        </p>

        <div className="flex-1 flex items-center justify-center text-white">
          <button className="uppercase text-2xl font-bold rounded-full px-16 py-5 transition-all duration-300 bg-[#0AA92F] hover:bg-[#195E00] hover:scale-90">
            get in touch
          </button>
        </div>
      </div>
      <div className="grid tablet:grid-cols-2 gap-10">
        <div className="basis-1/3">
          <img
            className="rounded-[2rem] w-[20rem] h-30rem]"
            src={Image1}
            alt="man facing outside with money splashing"
          />
        </div>
        <div className="basis-1/3">
          <img
            className="rounded-[2rem]  w-[20rem] h-30rem]"
            src={Image2}
            alt="two human beings giving each other a handshake"
          />
        </div>
      </div>
    </section>
  );
};

export default Reachout;
