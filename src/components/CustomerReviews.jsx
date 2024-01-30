import React from "react";
import CustomerReviewsSlider from "./CustomerReviewsSlider";

const CustomerReviews = ({ heading, tagline, reviews }) => {
  return (
    <div className="bg-[#86B6F6] flex flex-col justify-between items-start gap-10 p-20 pl-4 pr-4 md:pl-24 md:pr-24">
      <div className="flex flex-col items-start gap-7">
        <h1 className="font-poppins text-5xl font-extrabold capitalize ">
          {heading}
        </h1>
        <p className="font-poppins  text-sm md:text-xl font-normal ">
          {tagline}
        </p>
      </div>

      {reviews.map((item, index) => {
        return (
          <CustomerReviewsSlider
            key={index.id}
            review={item.review}
            name={item.name}
            designation={item.designation}
          />
        );
      })}

      {console.log(reviews)}
    </div>
  );
};

export default CustomerReviews;
