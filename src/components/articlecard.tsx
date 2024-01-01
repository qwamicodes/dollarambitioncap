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
      <div className="flex flex-col md:flex-row gap-5 bg-white shadow-lg shadow-gray-100 rounded-3xl overflow-hidden lg:pr-10 md:px-0 lg:py-5 cursor-pointer">
        <div className="flex items-center justify-center overflow-hidden basis-1/3">
          <img
            src={image}
            alt={description}
            className="rounded-3xl aspect-video object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-1 justify-around gap-5 md:py-5 p-5">
          <div className="flex flex-col gap-10">
            <h1 className="font-bold text-3xl lg:text-5xl">{title}</h1>
            <div className="flex items-center text-gray-500 text-xl gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span>28th November, 2023</span>
            </div>
          </div>
          <div className="text-gray-500 text-xl">{description}</div>
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
