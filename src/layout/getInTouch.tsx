import { FormEvent } from "react";

import Heading from "../components/heading";

const GetInTouch = () => {
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div className="my-20 flex flex-col lg:flex-row max-w-[1200px] xl:mx-auto lg:mx-20 mx-10 gap-20">
      <div className="basis-1/2 flex flex-col items-center lg:items-start gap-10">
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
      <div className="flex-1 flex flex-col gap-10 lg:items-start items-center md:mx-auto lg:mx-0 md:w-2/3 lg:w-fit">
        <Heading title="contact info" />
        <div className="flex flex-col gap-3 w-fit">
          <b className="capitalize text-3xl font-bold">email us</b>
          <p className="text-gray-500">dollarambitioncapitals@gmail.com</p>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <b className="capitalize text-3xl font-bold">follow us</b>
          <div className="fill-white text-white flex justify-evenly items-center gap-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/@dacapitals"
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
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
              rel="noreferrer"
              href="https://instagram.com/da.capitals?igshid=NGExMmI2YTkyZg=="
              className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <button className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </button>
            <button className="rounded-full bg-[#0AA92F] hover:bg-[#195E00] transition-all duration-500 flex items-center justify-center p-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
