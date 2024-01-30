import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 pl-2 pr-2 md:pl-28 md:pr-28 bg-[#EEF5FF]">
      <div className="md:hidden relative flex justify-between items-center w-full ">
        <h1 className="capitalize text-5xl font-semibold font-dancing">
          <NavLink to={"/"}>Pekisa</NavLink>
        </h1>
        <button
          onClick={handleMenu}
          className="md:hidden flex text-3xl cursor-pointer"
        >
          {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
        {isOpen && (
          <div
            className="absolute  top-14 z-50 overflow-hidden h-[calc(100vh-30rem)] w-full bg-[#80BCBD] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100
          "
          >
            <ul className="flex flex-col justify-between items-center gap-6 font-poppins text-md font-medium p-10 text-gray-800 ">
              <li className="hover:text-black font-poppins font-bold  text-center border-gray-300 border-2 p-2 rounded-sm w-full">
                <NavLink to="domains">Domains</NavLink>
              </li>
              <li className="hover:text-black font-poppins font-bold text-center border-gray-300 border-2 p-2 rounded-sm w-full">
                <NavLink to={"email"}>Email</NavLink>
              </li>
              <li className="hover:text-black font-poppins font-bold text-center border-gray-300 border-2 p-2 rounded-sm w-full">
                <NavLink to={"about"}>About</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-between items-baseline gap-5">
        <h1 className="capitalize text-5xl font-semibold font-dancing">
          <NavLink to={"/"}>Pekisa</NavLink>
        </h1>
        <ul className="flex justify-between items-center gap-6 font-poppins text-md font-medium text-gray-400">
          <li className="hover:text-black">
            <NavLink to="domains">Domains</NavLink>
          </li>
          <li className="hover:text-black ">
            <NavLink to={"email"}>Email</NavLink>
          </li>
          <li className="hover:text-black ">
            <NavLink to={"about"}>About</NavLink>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex justify-between items-center gap-6">
        <li>Help</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
