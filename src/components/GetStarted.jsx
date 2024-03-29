import React from "react";

const GetStarted = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row justify-around items-center p-5 pl-4 pr-4 md:pl-24 md:pr-24">
      <h1 className="text-[#176B87] font-poppins font-semibold text-2xl text-center ">
        Turn your name into your email address with Hover Realnames
      </h1>
      <button className="bg-[#176B87] p-3 rounded-sm  text-white font-poppins font-bold text-2xl">
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
