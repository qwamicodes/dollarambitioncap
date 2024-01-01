import MissionImage from "../assets/images/mission-image.jpg";
import Heading from "../components/heading";

const OurMission = () => {
  return (
    <div className="flex max-w-[1100px] mx-auto py-20 items-center">
      <div className="basis-1/2">
        <img src={MissionImage} alt="mission imagery" className="w-[42rem] h-[50rem] rounded-3xl" />
      </div>
      <div className="flex-1 flex flex-col items-start gap-10">
        <Heading title="our mission" />
        <p className="text-gray-800">
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
