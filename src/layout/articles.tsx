import { articles } from "../constants";

import classNames from "classnames";

import ArticleCard from "../components/articlecard";

type props = {
  extended: boolean;
};

const Articles = ({ extended }: props) => {
  const articlesClassnames = classNames({
    "w-full lg:w-3/4 mx-auto flex flex-col gap-20": extended,
    "grid tablet:grid-cols-2 laptop:grid-cols-3 grid-cols-1 tablet:gap-20 gap-10":
      !extended,
  });

  return (
    <section className="mx-auto w-full p-6 small:p-10 flex flex-col gap-20 md:py-10">
      {!extended && (
        <h1 className="uppercase text-4xl font-bold text-black laptop:block flex justify-center items-center">
          latest articles
        </h1>
      )}
      <div className={articlesClassnames}>
        {articles.map((props) => (
          <ArticleCard key={props.title} extended={extended} {...props} />
        ))}
      </div>

      {extended && (
        <div className="pagination w-full md:w-2/5 mx-auto flex flex-wrap gap-5 justify-around items-center">
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={
                (page === 1
                  ? "bg-black text-white"
                  : "text-gray-600 bg-white") +
                " px-5 py-2 rounded-full cursor-pointer"
              }
            >
              {page}
            </button>
          ))}

          <div className="flex items-center cursor-pointer">
            Next &nbsp;
            <div className="">
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
