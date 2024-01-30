import React from "react";
import { FaLaptop } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

const WhatWeAreAllAbout = () => {
  const cardData = [
    {
      icon: <FaLaptop />,
      tagline: "Put your brand first",
      description:
        "You’ll own your name and personal brand online, and have control over its look and feel.",
    },
    {
      icon: <FaRegStar />,
      tagline: "Help you succeed",
      description:
        "Our easy-to-use interface, robust control panel, and over 400 TLDs to choose from make your experience a breeze.",
    },
    {
      icon: <BiMessageSquareDots />,
      tagline: "Top-rated support",
      description:
        "We’re always here to help you with any questions you might have on your path to greatness.",
    },
  ];
  return (
    <div className="bg-[#7FC7D9]  flex flex-col items-start p-20 pl-4 pr-4 md:pl-24 md:pr-24">
      <div>
        <h1 className="font-poppins font-bold capitalize text-5xl text-gray-800">
          What we’re all about
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-10">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-[#DCF2F1] rounded-sm md:h-[250px] h-full w-full md:3/4 flex justify-between item-start gap-10 p-2 md:p-5"
          >
            <span className="text-5xl">{item.icon}</span>
            <div className="flex flex-col items-start gap-3">
              <h1 className="font-poppins font-semibold capitalize text-3xl text-gray-700">
                {item.tagline}
              </h1>
              <p className="font-poppins font-normal text-sm md:text-lg text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeAreAllAbout;
