import React from "react";
import HeroSection from "../components/HeroSection";
import GetStarted from "../components/GetStarted";
import BrandShine from "../components/BrandShine";
import BuyDomain from "../components/BuyDomain";
import Faq from "../components/Faq";
import heroimage from "../assets/heroimage.svg";
import CustomerReviews from "../components/CustomerReviews";
import { homePageFaq, homeReviews } from "../utils/index";

const Home = () => {
  return (
    <div>
      <HeroSection
        tagline={"SEARCH AVAILABLE DOMAIN NAMES"}
        heading={"Find your domain name"}
        description={
          "Check if your domain’s available, browse alternatives, and land on one that’s perfect for your business, brand, or big idea."
        }
        picture={heroimage}
        screenHeight={"h-[calc(100vh-12rem)]"}
        showInputField={true}
      />
      <GetStarted />
      <BrandShine />
      <BuyDomain
        tagline={" Buy your domain. Build your brand."}
        buttonText={"Find your domain"}
        taglineSize={"text-4xl"}
      />
      <CustomerReviews
        heading={"Look what our customers say!"}
        reviews={homeReviews}
      />
      <Faq heading={"The domain name FAQ"} faq={homePageFaq} />
    </div>
  );
};

export default Home;
