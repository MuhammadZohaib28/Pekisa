import React from "react";
import HeroSection from "../components/HeroSection";
import WhatWeAreAllAbout from "../components/WhatWeAreAllAbout";

const About = () => {
  return (
    <div>
      <HeroSection
        tagline={"WHO WE ARE"}
        heading={"It all starts with a domain"}
        description={
          "We’re passionate about helping people have the best domain experience ever, with easy to use UX, simple but powerful tools, and incredible customer support."
        }
        screenHeight={"h-[calc(100vh-20rem)]"}
        showInputField={false}
      />
      <WhatWeAreAllAbout />
      <HeroSection
        heading={"Ready To Get Started?"}
        description={
          "We’re here to help make the process of getting online as easy as possible."
        }
        screenHeight={"h-[calc(100vh-20rem)]"}
        showInputField={true}
      />
    </div>
  );
};

export default About;
