import React from "react";
import HeroSection from "../components/HeroSection";
import domainsPicture from "../assets/domain.svg";
import Faq from "../components/Faq";
import BuyDomain from "../components/BuyDomain";
import CustomerReviews from "../components/CustomerReviews";
import { domainPageFaq, domainReviews } from "../utils";

const Domains = () => {
  return (
    <div>
      <HeroSection
        tagline={"BUY A DOMAIN NAME FROM HOVER"}
        heading={"Get the perfect domain"}
        description={
          "Endless domain options. Great prices. And help from friendly humans."
        }
        picture={domainsPicture}
        screenHeight={"h-[calc(100vh-6rem)]"}
        showInputField={true}
      />
      <BuyDomain
        tagline={"Is your perfect domain name available?"}
        buttonText={"Search for your domain"}
        taglineSize={"text-3xl"}
      />
      <CustomerReviews
        heading={"Stop Searching And Choose Hover"}
        tagline={
          "Our customers really love us, and we’re confident you will too."
        }
        reviews={domainReviews}
      />
      <Faq heading={"Questions? We have answers."} faq={domainPageFaq} />
    </div>
  );
};

export default Domains;
