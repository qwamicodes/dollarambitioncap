import Image1 from "../assets/images/download-1.jpg";
import Image2 from "../assets/images/handshake.jpg";

import Button from "../components/button";
import Heading from "../components/heading";

const Reachout = () => {
  return (
    <section className="flex items-center flex-col laptop:flex-row justify-around mx-auto w-full p-24 gap-20">
      <div className="basis-1/3 flex flex-col items-start justify-between gap-10">
        <Heading
          title="we'd love to hear from you"
          description="Discover untapped potential in trading and the money-making sector.
          Join forces with us, the ultimate collaboration platform, and together
          we’ll soar to new heights. Reach out now for a lucrative partnership
          opportunity"
        />

        <div className="flex-1 flex items-center justify-center text-white">
          <Button variant="primary">get in touch</Button>
        </div>
      </div>
      <div className="grid tablet:grid-cols-2 gap-10">
        <div className="basis-1/3">
          <img
            className="rounded-[2rem] w-[20rem] h-30rem]"
            src={Image1}
            alt="man facing outside with money splashing"
          />
        </div>
        <div className="basis-1/3">
          <img
            className="rounded-[2rem]  w-[20rem] h-30rem]"
            src={Image2}
            alt="two human beings giving each other a handshake"
          />
        </div>
      </div>
    </section>
  );
};

export default Reachout;
