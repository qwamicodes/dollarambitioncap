import Heading from "../components/heading";

import MissionImage from "../assets/images/mission-image.jpg";

const OurMission = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[1100px] xl:mx-auto mx-10 py-20 items-center gap-20 lg:gap-4">
      <div className="basis-1/2">
        <img
          src={MissionImage}
          alt="mission imagery"
          className="w-[42rem] h-[50rem] rounded-3xl object-cover"
        />
      </div>
      <div className="flex-1 flex items-center flex-col lg:items-start gap-10">
        <Heading title="our mission" />
        <p className="text-gray-800 leading-loose text-center lg:text-left md:mx-20 lg:mx-0">
          <b>Our Mission:</b> Empowering Financial Education and Global Market
          Understanding. At <b>Dollar Ambition Capitals</b>, we bpower
          individuals with knowledge and skills to seize money-making
          opportunities and understand the global financial market. Join us on
          this educational journey to unlock your financial potential and
          contribute positively to the <b>ECONOMY</b>.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
