import React from "react";
import HeroSection from "../components/HeroSection";
import domainsPicture from "../assets/domain.svg";
import Faq from "../components/Faq";
import BuyDomain from "../components/BuyDomain";
import CustomerReviews from "../components/CustomerReviews";

const Domains = () => {
  const domainPageFaq = [
    {
      question: "How do I check if a domain name is available?",
      answer:
        "To check if a specific domain is available, type it into the search bar at the top of this page and click the magnifying glass. In the search results, you’ll see whether the domain name is available, its price, and other relevant suggestions you could choose as well.",
    },
    {
      question: "Will my domain impact my search engine optimization (SEO)?",
      answer:
        "There are a couple of things to consider here. First, it’s important to know that all domain extensions (also called top-level domains or TLDs) are equal in the eyes of Google and other search engines. Google doesn’t care if you’re using a .COM or a .SHOP domain. It’s not a ranking factor. Nonetheless, a great domain name is an important part of your SEO strategy. A memorable, meaningful, and easy-to-type domain name can translate into more website traffic. Why? Because people are more likely to remember and successfully type your domain name into their browser. Greater web traffic will, among many other factors, positively impact your SEO. So when choosing a domain, go with something relevant and memorable, like [yourbrandname].com or [yourname].art.",
    },
    {
      question: "How long can a domain name be?",
      answer:
        "A domain name can be up to 253 characters long! But generally, the shorter, the better.",
    },
    {
      question: "How short can a domain name be?",
      answer:
        "You have to have at least two characters before your domain extension. This means the shortest a domain name can be is four characters total.",
    },
    {
      question: "How much does it cost to get a domain name?",
      answer:
        "It depends on the domain extension or TLD. Many are in the $15-$30 range. Sometimes, TLD registries designate highly desirable domain names (think cars.shop) as “premium” and set higher baseline prices for these domains. Hover always provides alternative suggestions when you search for a domain name, in case your initial choice is out of budget or already registered by someone else.",
    },
    {
      question: "What is a top-level domain (TLD)?",
      answer:
        "A Top-level domain (TLD) is the last segment in a domain name, to the right of the final dot. For example, .COM and .ORG are both TLDs. There’s also a unique group of TLDs called country-code TLDs, which officially represent a specific nation or geographic region. They are always two letters long. For example, .CA, .BR, and .US are all country-code TLDs. Any TLD that’s longer than two characters is referred to as a “generic” TLD, or gTLD for short.",
    },
    {
      question: "Which TLD should I choose?",
      answer:
        "The choice of your TLD depends on your website's purpose and your brand's personality. If you’re launching a business with a traditional or corporate feel, you might go with a classic .COM. Similarly, many non-profits and government entities choose a .ORG domain, as this TLD is generally associated with these types of organizations. But there are tons — in fact, hundreds— of TLD options that reflect different interests and industry niches. If you’re launching a new photography side-hustle, for instance, you might consider a .PHOTOGRAPHY or .STUIDO domain. There’s definitely a creative option for your business, portfolio, skillset, or hobby. You can browse through different options by typing a domain you’re interested in in the search box at the top of this page. Our search results will include a bunch of alternatives for you to consider.",
    },
  ];

  const domainReviews = [
    {
      id: 1,
      name: "Samantha",
      review:
        "I have been using Hover for years and have always been happy with their service. I have never had any issues with them and they are always quick to respond to any questions or concerns I have. I highly recommend them!",
      designation: "Creative Director, Gary Martin Design",
    },
    {
      id: 2,
      name: "Samantha",
      review:
        "I have been using Hover for years and have always been happy with their service. I have never had any issues with them and they are always quick to respond to any questions or concerns I have. I highly recommend them!",
      designation: "Creative Director, Gary Martin Design",
    },
    {
      id: 3,
      name: "Samantha",
      review:
        "I have been using Hover for years and have always been happy with their service. I have never had any issues with them and they are always quick to respond to any questions or concerns I have. I highly recommend them!",
      designation: "Creative Director, Gary Martin Design",
    },
    {
      id: 4,
      name: "Samantha",
      review:
        "I have been using Hover for years and have always been happy with their service. I have never had any issues with them and they are always quick to respond to any questions or concerns I have. I highly recommend them!",
      designation: "Creative Director, Gary Martin Design",
    },
  ];
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
