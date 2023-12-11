import React from "react";

type props = {
  title: string;
  image: string;
  description: string;
};

const ArticleCard = ({ description, image, title }: props) => {
  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden mx-auto">
      <div className="w-full h-[30rem] overflow-hidden">
        <img
          className="cursor-pointer w-full h-full transition-all duration-500 hover:scale-105 object-cover"
          src={image}
          alt={`${title}`}
        />
      </div>
      <div className=" flex flex-col justify-between gap-5 p-8">
        <div className="cursor-pointer hover:text-[#0AA92F] transition-all duration-500 font-bold text-4xl text-black">
          {title}
        </div>
        <div className="text-gray-500">{description}</div>
        <div className="">
          <button className="capitalize font-medium text-xl px-8 py-4 rounded-lg bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 text-white">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
