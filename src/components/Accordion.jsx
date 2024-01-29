import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-between items-start pl-24 pr-24 bg-[#B4D4FF]">
      <div className="flex justify-between items-center gap-5 m-2 p-5 bg-[#9dbcff] w-full rounded-sm ">
        <h1 className="font-poppins font-medium text-2xl">{question}</h1>
        <span onClick={handleAnswer} className="cursor-pointer">
          {isOpen ? (
            <MdArrowForwardIos className="rotate-90 text-2xl transition-transform duration-300 " />
          ) : (
            <MdArrowForwardIos className="-rotate-90 text-2xl transition-transform duration-300 " />
          )}
        </span>
      </div>
      <div>
        {isOpen ? (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out  font-poppins w-full m-2 bg-[#d9e6ff] rounded-sm font-normal items-start text-start  p-4 text-gray-700 ${
              isOpen ? "opacity-100 " : "opacity-0"
            }`}
          >
            {answer}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Accordion;
