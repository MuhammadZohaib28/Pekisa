import React from "react";

const HeroSection = ({
  tagline,
  heading,
  description,
  picture,
  screenHeight,
  showInputField,
}) => {
  return (
    <div
      className={`bg-[#EEF5FF] flex items-center justify-around gap-0 md:gap-28 pl-4 pr-4 md:pl-24 md:pr-24   ${screenHeight} `}
    >
      <div className="flex flex-col gap-6 sm:gap-5 ">
        <span className="font-poppins font-semibold uppercase text-md sm:text:xl  text-gray-700">
          {tagline}
        </span>
        <h1 className="font-poppins font-bold capitalize text-5xl sm:text-4xl md:text-5xl text-gray-800 ">
          {heading}
        </h1>
        <p className="font-poppins font-normal capitalize text-sm sm:text-xl text-gray-500">
          {description}
        </p>
        {showInputField && ( // Conditionally render input field
          <div className="flex items-center relative">
            <input
              type="search"
              placeholder="Enter the domain you want"
              className="w-full p-3 sm:p-4 placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-xl font-normal font-poppins rounded-l-md relative"
            />
            <button className="bg-slate-900 text-[#EEF5FF] font-poppins font-medium  p-3 sm:p-4 rounded-r-md absolute right-0">
              Submit
            </button>
          </div>
        )}
      </div>
      <div>
        <img src={picture} alt="" className="hidden sm:block" />
      </div>
    </div>
  );
};

export default HeroSection;
