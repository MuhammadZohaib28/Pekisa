import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviewsSlider = ({ review, name, designation }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full m-auto">
      <div className="mt-10">
        <Slider {...settings}>
          <div className="flex   p-10 bg-[#e5f0ff] h-[300px] font-poppins rounded-md">
            <div>
              <p className="text-md text-gray-700">{review}</p>
            </div>

            <div className="flex flex-col justify-center items-start gap-2 p-2">
              <h1 className="font-bold font-poppins text-xl text-gray-800">
                {name}
              </h1>
              <h1>{designation}</h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviewsSlider;
