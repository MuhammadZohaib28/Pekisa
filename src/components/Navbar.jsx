import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 pl-28 pr-28 bg-[#EEF5FF]">
      <div className="flex justify-between items-baseline gap-5">
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

      <ul className="flex justify-between items-center gap-6">
        <li>Help</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
