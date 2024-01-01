import { CalendarOutline } from "react-ionicons";
import Button from "./button";

type props = {
  title: string;
  image: string;
  description: string;
  extended: boolean;
};

const ArticleCard = ({ description, image, title, extended }: props) => {
  if (extended) {
    return (
      <div className="flex gap-10 bg-white shadow-lg shadow-gray-100 rounded-xl pr-10 py-5 cursor-pointer">
        <div className="flex items-center justify-center overflow-hidden basis-1/3">
          <img src={image} alt={description} className="rounded-3xl aspect-video object-cover" />
        </div>
        <div className="flex flex-col flex-1 justify-around">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl">{title}</h1>
            <div className="flex text-gray-600 gap-5">
              <CalendarOutline color="#a1a1a1" height="24px" width="24px" />
              <span>28th November, 2023</span>
            </div>
          </div>
          <div className="text-gray-500">{description}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl bg-white rounded-3xl overflow-hidden mx-auto">
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
          <Button variant="default">
            learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
