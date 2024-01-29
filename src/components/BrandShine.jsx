import React from "react";
import { FcGlobe } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BrandShine = () => {
  const productsData = [
    {
      icon: <FcGlobe />,
      title: "Domains",
      description:
        "Stand out from the crowd with the perfect domain name and extension for your idea, be it .COM, .ORG, or .ME.",
      url: "/domains",
    },
    {
      icon: <MdEmail />,
      title: "Custom Email",
      description:
        "Get a professional email address that matches your domain and ditch your you@freewebmail.com.",
      url: "/email",
    },
    {
      icon: <MdOutlineMarkEmailRead />,
      title: "Realnames Email",
      description:
        "Get a firstname@lastname email address to add a truly personal touch to your communications.",
      url: "/realnames",
    },
  ];
  return (
    <div className="flex justify-around items-start pb-28  pt-28 pl-24 pr-24 gap-28 bg-[#B4D4FF]">
      <div className="flex flex-col items-start gap-10 justify-between flex-1">
        <h1 className="font-poppins text-5xl font-semibold capitalize ">
          Products that help your brand shine
        </h1>
        <p className="font-poppins">
          Pekisa puts you in full control of your online presence. We make it
          easy to manage and register domains. We also offer matching
          professional email to level up your communications.
        </p>
      </div>

      <div className="flex flex-col items-center gap-20  flex-1">
        {productsData.map((product, index) => (
          <div
            className="flex justify-between items-start gap-8 bg-white border-2 border-gray-400 rounded-md p-4"
            key={index}
          >
            <h1 className="text-5xl">{product.icon}</h1>
            <div className="flex flex-col gap-4">
              <Link to={product.url} className="flex items-center gap-5">
                <h1 className="font-poppins text-2xl text-gray-800 font-semibold">
                  {product.title}{" "}
                </h1>
                <FaArrowRightLong className="text-xl" />
              </Link>
              <p className="font-poppins">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandShine;
