import React from "react";

import { articles } from "../constants";

import ArticleCard from "../components/articlecard";

const Articles = () => {
  return (
    <section className="mx-auto w-full p-6 small:p-10 flex flex-col gap-20">
      <h1 className="uppercase text-3xl font-bold text-black">
        latest articles
      </h1>
      <div className="grid tablet:grid-cols-2 laptop:grid-cols-3 grid-cols-1 tablet:gap-20">
        {articles.map((props) => (
          <ArticleCard key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
