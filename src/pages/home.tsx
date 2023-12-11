import React from "react";

import Header from "../layout/header";
import Articles from "../layout/articles";
import Learnmore from "../layout/learnmore";
import Reachout from "../layout/reachout";
import Footer from "../layout/footer";

const Home = () => {
  return (
    <section className="">
      <Header />
      <Articles />
      <Learnmore />
      <Reachout />
      <Footer />
    </section>
  );
};

export default Home;
