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
      className={`bg-[#EEF5FF] flex items-center justify-around gap-28 pl-24 pr-24  ${screenHeight}`}
    >
      <div className="flex flex-col gap-5 ">
        <span className="font-poppins font-semibold uppercase text-xl text-gray-700">
          {tagline}
        </span>
        <h1 className="font-poppins font-bold capitalize text-5xl text-gray-800">
          {heading}
        </h1>
        <p className="font-poppins font-normal capitalize text-xl text-gray-500">
          {description}
        </p>
        {showInputField && ( // Conditionally render input field
          <div className="flex items-center relative">
            <input
              type="search"
              placeholder="Enter the domain you want"
              className="w-full p-4 placeholder:text-gray-400 font-normal font-poppins rounded-l-md relative"
            />
            <button className="bg-slate-900 text-[#EEF5FF] font-poppins font-medium  p-4 rounded-r-md absolute right-0">
              Submit
            </button>
          </div>
        )}
      </div>
      <div>
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
