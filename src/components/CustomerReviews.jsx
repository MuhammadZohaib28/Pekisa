import React from "react";
import CustomerReviewsSlider from "./CustomerReviewsSlider";

const CustomerReviews = ({ heading, tagline, reviews }) => {
  return (
    <div className="bg-[#86B6F6] flex flex-col justify-between items-start gap-10  pl-24 pr-24 p-20">
      <div className="flex flex-col items-start gap-7">
        <h1 className="font-poppins text-5xl font-extrabold capitalize ">
          {heading}
        </h1>
        <p className="font-poppins text-xl font-normal ">{tagline}</p>
      </div>

      
      {reviews.map((item, index) => (
        <CustomerReviewsSlider
          key={index}
          review={item.review}
          name={item.name}
          designation={item.designation}
        />
      ))}
    </div>
  );
};

export default CustomerReviews;
