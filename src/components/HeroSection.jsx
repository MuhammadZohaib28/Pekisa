import React from "react";

import heroimage from "../assets/heroimage.svg";

const HeroSection = () => {
  return (
    <div className="bg-[#EEF5FF] h-[calc(100vh-12rem)] flex items-center justify-around gap-28 pl-24 pr-24">
      <div className="flex flex-col gap-5 ">
        <span className="font-poppins font-semibold uppercase text-xl text-gray-700">
          Buy a domain name from Pekisa
        </span>
        <h1 className="font-poppins font-bold capitalize text-5xl text-gray-800">
          Get the perfect domain
        </h1>
        <p className="font-poppins font-normal capitalize text-xl text-gray-500">
          Endless domain options. Great prices. And help from friendly humans.
        </p>
        <div className="flex  items-center relative">
          <input
            type="search"
            placeholder="Enter the domain you want"
            className="w-full p-4 placeholder:text-gray-400 font-normal font-poppins rounded-l-md relative"
          />
          <button className="bg-slate-900 text-[#EEF5FF] font-poppins font-medium  p-4 rounded-r-md absolute right-0">
            Submit
          </button>
        </div>
      </div>
      <div>
        <img src={heroimage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
