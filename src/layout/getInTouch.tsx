import { FormEvent } from "react";
import {
  LogoYoutube,
  LogoInstagram,
  LogoTwitter,
  LogoLinkedin,
} from "react-ionicons";

import Heading from "../components/heading";

const GetInTouch = () => {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div className="my-20 flex max-w-[1200px] mx-auto gap-20">
      <div className="basis-1/2 flex flex-col items-start gap-10">
        <Heading title="let's get in touch!" />
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col items-start w-full gap-10"
        >
          <input
            className="w-full p-5 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none "
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full p-5 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none "
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            className="w-full p-5 rounded-lg border border-gray-200 focus:border-gray-400 focus:outline-none "
            rows={8}
            name="message"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="rounded-full uppercase py-5 px-10 flex items-center justify-center text-white bg-[#FB2056] font-bold text-2xl"
          >
            send message
          </button>
        </form>
      </div>
      <div className="flex-1 flex flex-col gap-10 items-start">
        <Heading title="contact info" />
        <div className="flex flex-col gap-3">
          <b className="capitalize text-3xl font-bold">email us</b>
          <p className="text-gray-500">dollarambitioncapitals@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3">
          <b className="capitalize text-3xl font-bold">follow us</b>
          <div className="fill-white flex justify-evenly items-center gap-5">
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://youtube.com/@dacapitals"
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <LogoYoutube color="white" width="20px" height="20px" />
            </a>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://t.me/da_caps"
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 64 64"
              >
                <path d="M32 10c12.15 0 22 9.85 22 22s-9.85 22-22 22-22-9.85-22-22 9.85-22 22-22zm7.589 30.968c.404-1.241 2.301-13.615 2.534-16.054.071-.738-.163-1.229-.619-1.449-.553-.265-1.371-.133-2.322.21-1.303.47-17.958 7.541-18.92 7.951-.912.388-1.775.81-1.775 1.423 0 .431.256.673.96.924.732.261 2.577.82 3.668 1.121 1.05.29 2.243.038 2.913-.378.709-.441 8.901-5.921 9.488-6.402.587-.48 1.056.135.576.616-.48.48-6.102 5.937-6.844 6.693-.901.917-.262 1.868.343 2.249.689.435 5.649 3.761 6.396 4.295.747.534 1.504.776 2.198.776.694-.001 1.059-.915 1.404-1.975z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://instagram.com/da.capitals?igshid=NGExMmI2YTkyZg=="
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <LogoInstagram color="white" width="20px" height="20px" />
            </a>
            <a
              href=""
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <LogoTwitter color="white" width="20px" height="20px" />
            </a>
            <a
              href=""
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <LogoLinkedin color="white" width="20px" height="20px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
