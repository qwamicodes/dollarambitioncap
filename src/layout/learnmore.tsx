import Button from "../components/button";
import Heading from "../components/heading";

const Learnmore = () => {
  return (
    <section className="bg-money-wallpaper w-full h-[60rem] object-cover bg-center bg-fixed bg-no-repeat bg-cover rounded-[2rem] flex justify-center items-center tablet:justify-end p-10">
      <div className="text-white tablet:w-2/3 laptop:w-1/2 w-full h-2/3 flex flex-col items-center justify-between gap-10">
        <div className="basis-1/2 flex flex-col items-center tablet:items-start justify-center gap-10">
          <Heading
            title="learn more about us"
            description="Discover our winning trading strategies and join our free TELEGRAM
            CHANNEL to delve deeper into our expertise. Unlock exclusive
            insights, market analysis, and real-time trade updates. Elevate your
            trading skills today!"
          />
        </div>

        <div className="flex-1 flex items-center w-full tablet:justify-start l justify-center">
          <Button variant="secondary">join my free telegram community</Button>
        </div>
      </div>
    </section>
  );
};

export default Learnmore;
