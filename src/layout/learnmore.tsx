import React from "react";

const Learnmore = () => {
  return (
    <section className="bg-money-wallpaper w-full h-[60rem] object-cover bg-center bg-fixed bg-no-repeat bg-cover rounded-[2rem] flex justify-center items-center tablet:justify-end p-10">
      <div className="text-white tablet:w-2/3 laptop:w-1/2 w-full h-2/3 flex flex-col items-center justify-between gap-10">
        <div className="basis-1/2 flex flex-col items-center tablet:items-start justify-center gap-10">
          <h1 className="uppercase text-[3.2rem] font-bold text-center">
            learn more about us
          </h1>
          <span className="h-[3px] bg-[#0AA92F] w-[50px]" />
          <p className="text-center tablet:text-left">
            Discover our winning trading strategies and join our free TELEGRAM
            CHANNEL to delve deeper into our expertise. Unlock exclusive
            insights, market analysis, and real-time trade updates. Elevate your
            trading skills today!
          </p>
        </div>

        <div className="flex-1 flex items-center w-full tablet:justify-start l justify-center">
          <button className="uppercase text-xl font-bold rounded-full px-10 py-4 transition-all duration-300 bg-[#0AA92F] hover:bg-[#195E00] hover:scale-90">
            join my free telegram community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Learnmore;
