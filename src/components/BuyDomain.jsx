import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BuyDomain = ({ tagline, buttonText, taglineSize }) => {
  return (
    <div className="bg-[#fbfdff] flex md:flex-row flex-col justify-around items-center gap-5 md:gap-0 p-7 pl-4 pr-4 md:pl-24 md:pr-24">
      <h1
        className={`font-poppins font-extrabold text-3xl md:${taglineSize} capitalize text-[#176B87] text-center`}
      >
        {tagline}
      </h1>
      <Link
        to={"/domains"}
        className="flex group transition-transform duration-500 items-center gap-5 text-white text-xl md:text-2xl font-semibold bg-[#176B87] p-3 md:p-4 rounded-md "
      >
        <span>{buttonText}</span>
        <div className="transition-transform duration-500  group-hover:translate-x-2">
          <FaArrowRightLong className="text-xl" />
        </div>
      </Link>
    </div>
  );
};

export default BuyDomain;
