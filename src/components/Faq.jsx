import React from "react";
import Accordion from "./Accordion";

const Faq = ({ heading, faq }) => {
  return (
    <div className=" pl-4 pr-4 md:pl-24 md:pr-24 p-10 bg-[#B4D4FF]">
      <h1 className="text-4xl font-bold text-[#00394c] mb-10">{heading}</h1>
      {faq.map((item, index) => (
        <Accordion
          key={index.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Faq;
