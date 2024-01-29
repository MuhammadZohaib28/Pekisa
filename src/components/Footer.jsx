import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerdata = [
    {
      title: "Products",
      links: [
        {
          name: "Domains",
          url: "/domains",
        },
        {
          name: "Transfer",
          url: "/transfer",
        },
        {
          name: "Renew",
          url: "/renew",
        },
        {
          name: "Pricing",
          url: "/pricing",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About Us",
          url: "/about",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "Jobs",
          url: "/careers",
        },
        {
          name: "Affiliates",
          url: "/affiliates",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          name: "Help",
          url: "/help Center",
        },
        {
          name: "Service Status",
          url: "/serviceStatus",
        },
      ],
    },
    {
      title: "Account",
      links: [
        {
          name: "Sign In",
          url: "/signin",
        },
        {
          name: "Webmail",
          url: "/webmail",
        },
      ],
    },
  ];

  const footerSocialMedia = [
    {
      href: "",
      icon: <BsTwitterX />,
    },
    {
      href: "",
      icon: <TiSocialFacebook />,
    },
    {
      href: "",
      icon: <FaLinkedinIn />,
    },
    {
      href: "",
      icon: <FaTiktok />,
    },
  ];
  return (
    <footer className="bg-[#113945] flex flex-col justify-between items-center h-[calc(100vh-20rem)] pl-24 pr-24">
      <div className="flex justify-between items-center gap-36 h-screen">
        <div className="flex flex-col justify-around items-center gap-4">
          <h1 className="capitalize text-6xl font-bold font-dancing text-white">
            Pekisa
          </h1>
          <ul className="flex justify-around items-center gap-3">
            {footerSocialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-[#6cabfd] rounded-full h-full w-full p-2"
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-between items-start gap-24">
            {footerdata.map((data, index) => (
              <div className="flex flex-col gap-1" key={index}>
                <h1 className="text-white text-xl ">{data.title}</h1>
                {data.links.map((link, index) => (
                  <Link className="text-gray-400 " to={link.url} key={index}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            )
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full pl-20 pr-20 pt-5 border-t-2 border-gray-500">
        <p>
          Copyright © 2024 <span className="font-dancing ">Pekisa</span>
        </p>
        <ul className="flex justify-between items-center gap-10">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
