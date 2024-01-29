import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-[#0F1035]">
      <img
        src="https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_18-1024.png"
        alt="Not Found"
        className="h-96 w-96 object-cover"
      />
      <p className="bg-[#FF6868] p-3 rounded-sm  text-white font-poppins font-bold text-2xl ">
        The page does not exist. Please click the button below to go back. :(
      </p>
      <button className="m-10">
        <Link to="/" className="bg-[#176B87] p-3 rounded-sm  text-white font-poppins font-bold text-2xl">Home</Link>
      </button>
    </div>
  );
};
export default NotFound;
