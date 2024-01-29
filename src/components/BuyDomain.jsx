// import React from "react";
// import { Link } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";

// const BuyDomain = () => {
//   return (
//     <div className="bg-[#EEF5FF] flex justify-around items-center p-7 pl-40 pr-40">
//       <h1 className="font-poppins font-extrabold text-4xl capitalize text-[#176B87]">
//         Buy your domain. Build your brand.
//       </h1>
//       <Link
//         to={"/domains"}
//         className="flex items-center gap-5 text-white text-2xl font-semibold bg-[#176B87] p-4 rounded-md"
//       >
//         <span>Find your domain</span>
//         <FaArrowRightLong className="text-xl" />
//       </Link>
//     </div>
//   );
// };

// export default BuyDomain;

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BuyDomain = () => {
  return (
    <div className="bg-[#EEF5FF] flex justify-around items-center p-7 pl-40 pr-40">
      <h1 className="font-poppins font-extrabold text-4xl capitalize text-[#176B87]">
        Buy your domain. Build your brand.
      </h1>
      <Link
        to={"/domains"}
        className="flex group transition-transform duration-500 items-center gap-5 text-white text-2xl font-semibold bg-[#176B87] p-4 rounded-md "
      >
        <span>Find your domain</span>
        <div className="transition-transform duration-500  group-hover:translate-x-2">
          <FaArrowRightLong className="text-xl" />
        </div>
      </Link>
    </div>
  );
};

export default BuyDomain;
