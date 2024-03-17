import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageslidersection.css";
import { useTranslation } from "react-i18next";

const ImagesSliderSection = ({ images }) => {
  const { t } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000, // Change the duration (in milliseconds) between slides
    dots: false, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
  };

  return (
    <div className={`flex flex-col w-[90%] gap-5 lg:w-[75%]`}>
      <div className="flex mt-5">
        <img src={"./assets/ArrowLeft.svg"} alt="behja go back" />
      </div>
      <div className="relative w-full rounded-lg">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="w-full" key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-[422px] object-cover rounded-lg`}
              />
            </div>
          ))}
        </Slider>
        <div
          className={`absolute flex flex-row items-end justify-between w-full bottom-5 px-10`}
        >
          <p className={`heading-05-bold text-shades-white`}>{t("Entrance")}</p>
          <div className="container">
            <div className={`flex items-center justify-center blurred-div`}>
              <p
                className={`paragraph-01-regular text-shades-white text-center whitespace-pre-line`}
              >
                {t("View\n\nAll 3 photos")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSliderSection;
