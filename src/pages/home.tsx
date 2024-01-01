import Header from "../layout/header";
import Articles from "../layout/articles";
import Learnmore from "../layout/learnmore";
import Reachout from "../layout/reachout";

const Home = () => {
  return (
    <section>
      <Header />
      <Articles extended={false} />
      <Learnmore />
      <Reachout />
    </section>
  );
};

export default Home;
