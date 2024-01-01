import PremiumImage from "../assets/images/premium-image.jpg";
import FreeImage from "../assets/images/free-image.jpg";

import Button from "./button";

type PackageProps = {
  type: "free" | "premium";
};

const Package = ({ type }: PackageProps) => {
  if (type === "premium") {
    return (
      <div className="flex gap-10">
        <div className="overflow-hidden basis-1/2">
          <img
            src={PremiumImage}
            alt="premium imagery"
            className="rounded-3xl object-cover w-[60rem] h-[40rem]"
          />
        </div>
        <div className="flex flex-col justify-around">
          <h1 className="font-bold text-3xl uppercase">
            premium mentorship package
          </h1>
          <ul className="list-disc text-gray-600 pl-10">
            <li>Access to the PRIVATE discord community.</li>
            <li>Video lessons on Technical Analysis.</li>
            <li>Recorded Lessons on Global Macroeconomics.</li>
            <li>3-4 Months Mentorship</li>
            <li>Advanced Trading Models</li>
            <li>
              Access to High Probability Setups both lower and higher
              timeframes.
            </li>
            <li>Trade recaps and breakdown</li>
            <li>Access to community chat.</li>
            <li>Giveaways.</li>
          </ul>
          <h3 className="text-gray-700 font-bold ">$299 (ONE-TIME PAYMENT)</h3>
          <div>
            <Button variant="primary">join the waiting list</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-10">
      <div className="overflow-hidden basis-1/2">
        <img
          src={FreeImage}
          alt="free imagery"
          className="rounded-3xl object-cover w-[60rem] h-[40rem]"
        />
      </div>
      <div className="flex flex-col justify-around flex-1">
        <h1 className="font-bold text-3xl uppercase">
          prop-firm passing service
        </h1>
        <ul className="list-disc text-gray-600 pl-10">
          <li>Join our Waiting List for Manual Prop Firm Passing!</li>
        </ul>
        <div className="text-gray-600">
          Get ready to level up your trading career! Join our exclusive waiting
          list for a chance to access prestigious prop firms. No bots involved –
          all applications will be meticulously reviewed by experienced traders.
          Don’t miss out on this opportunity!
          <br />
          <br />
          Take the next step towards success!
        </div>
        <div>
          <Button variant="primary">sign up now</Button>
        </div>
      </div>
    </div>
  );
};

export default Package;
