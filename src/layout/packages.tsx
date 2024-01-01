import Heading from "../components/heading";
import Package from "../components/package";

const Packages = () => {
  return (
    <div className="flex flex-col items-center justify-evenly my-20">
      <div className="flex flex-col items-center justify-center gap-10 my-10 w-1/2">
        <Heading title="personalized forex mentorship for profitable trading success" />
      </div>

      <div className="flex flex-col gap-20 items-center max-w-[1200px]">
        <Package type="premium" />
        <Package type="free" />
      </div>
    </div>
  );
};

export default Packages;
