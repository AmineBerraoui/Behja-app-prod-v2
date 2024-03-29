import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const NotJustaServiceSection = () => {
  const { t } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000, // Change the duration (in milliseconds) between slides
    dots: false, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
  };

  return (
    <section className="w-[75%] mt-20">

      <div className="hidden lg:flex lg:flex-row lg:gap-10">
        <div className=" bg-gradient-to-b from-primary-400 to-primary-50 w-[30%] h-[526px] flex flex-col justify-end rounded-t-[20px]">
          <img src="./assets/homme-1.png" alt="homme" className="self-center" />
        </div>
        <div className="flex flex-col w-[70%] justify-between gap-5">
          <div className="flex flex-row gap-10 h-[60%]">
            <div className="flex flex-col w-[65%]">
              <div className="bg-gradient-to-b from-primary-400 to-primary-50  h-[164px] flex flex-col justify-end rounded-t-[20px]">
                <img
                  src="./assets/homme-2.png"
                  alt="homme"
                  className="self-center"
                />
              </div>
              <div>
                <p className="heading-02-semibold text-center text-primary-900">
                  {t("Not Just a Service")}
                </p>
                <p
                  className="paragraph-01-regular text-primary-700 text-center"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t(
                    "Behja is a thriving community where dreamers\nand aspiring homeowners come together\nto make magic happen!"
                  )}
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-primary-400 to-primary-50  w-[35%] flex flex-col justify-end rounded-t-[20px]">
              <img
                src="./assets/woman-2.png"
                alt="woman"
                className="self-center"
              />
            </div>
          </div>
          <div className="flex flex-row gap-10 items-end">
            <div className=" bg-gradient-to-b from-primary-400 to-primary-50 w-[263px] h-[212px] flex flex-col justify-end rounded-t-[20px]">
              <img
                src="./assets/woman-1.png"
                alt="woman"
                className="self-center"
              />
            </div>
            <div className="bg-gradient-to-b from-primary-400 to-primary-50 w-[406px] h-[196px] rounded-t-[20px]">
              <img
                src="./assets/woman-3.png"
                alt="woman"
                className="self-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-primary-400 to-primary-50 rounded-t-[20px] lg:hidden">
        <Slider {...settings}>
          <div className="relative w-full h-[300px] ">
            <img
              src="./assets/woman-1.png"
              alt="behja person"
              className="absolute left-0 right-0 bottom-[-10px] m-auto "
            />
          </div>
          <div className="relative w-full h-[300px] ">
            <img
              src="./assets/homme-1.png"
              alt="behja person"
              className="absolute left-0 right-0 bottom-[-10px] m-auto   "
            />
          </div>
          <div className="relative w-full h-[300px] ">
            <img
              src="./assets/woman-2.png"
              alt="behja person"
              className="absolute left-0 right-0 bottom-[-10px] m-auto   "
            />
          </div>
          <div className="relative w-full h-[300px] ">
            <img
              src="./assets/homme-2.png"
              alt="behja person"
              className="absolute left-0 right-0 bottom-[-10px] m-auto   "
            />
          </div>
          <div className="relative w-full h-[300px] ">
            <img
              src="./assets/woman-3.png"
              alt="behja person"
              className="absolute left-0 right-0 bottom-[-10px] m-auto   "
            />
          </div>
        </Slider>
      </div>

      <p
        className="display-01-semibold text-center mt-10"
        style={{
          background: "linear-gradient(to right, #BA938C, #EEE4E2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("+100 Behja tenants already!")}
      </p>
      <div className="lg:hidden">
            <p className="heading-01-semibold text-primary-900 text-center mt-10">
              {t("Not Just a Service")}
            </p>
            <p
              className="paragraph-02-regular text-primary-700 text-center"
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "Behja is a thriving community where dreamers\nand aspiring homeowners come together\nto make magic happen!"
              )}
            </p>
          </div>
    </section>
  );
};

export default NotJustaServiceSection;
