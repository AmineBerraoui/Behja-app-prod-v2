import React from "react";
import { useTranslation } from "react-i18next";
import HouseCard from "../components/HouseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const data = {
  card1: {
    imgSrc: "./assets/Card-1.png",
    title: "Aljazzira\nAppartement",
    initialDeposit: "3500",
    address: "North Riyadh",
    monthlyRent: "15,000",
    futureSavings: "20,310",
    bedNum: "2",
    bathNum: "2",
    dimension: "6 x 7.5 m²",
  },
  card2: {
    imgSrc: "./assets/Card-2.png",
    title: "Palm View\nApartments",
    initialDeposit: "3500",
    address: "North Riyadh",
    monthlyRent: "13,000",
    futureSavings: "20,310",
    bedNum: "2",
    bathNum: "3",
    dimension: "6 x 7.5 m²",
  },
  card3: {
    imgSrc: "./assets/Card-3.png",
    title: "Open\nVilla",
    initialDeposit: "10,000",
    address: "North Riyadh",
    monthlyRent: "18,500",
    futureSavings: "20,000",
    bedNum: "6",
    bathNum: "4",
    dimension: "6 x 7.5 m²",
  }
};

const DiscoverSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()

  const NextArrow = (props) => (
    <button
      className="absolute top-[30%] bottom-[70%] right-0 z-40"
      onClick={props.onClick}
    >
      <GrNext className="text-neutral-200" />
    </button>
  );

  const PreviousArrow = (props) => (
    <button
      className="absolute top-[30%] bottom-[70%] left-0 z-40"
      onClick={props.onClick}
    >
      <GrPrevious className="text-neutral-200" />
    </button>
  );

  return (
    <section className="relative w-full" id="homefinder">
      <img
        src="./assets/discover.jpg"
        alt="discover behja"
        style={{ width: "100%" }}
        className="h-[700px] object-cover"
      />
      <div className="absolute w-[90%] bottom-[-408px] md:bottom-[-394px] left-1/2 transform -translate-x-1/2">
        <div className="mb-6">
          <p
            className={`display-02-bold text-shades-white ${
              i18n.language === 'Ar' ? 'text-end' : 'text-start'
            }`}
            style={{ whiteSpace: "pre-line" }}
          >
            {t("Discover Behja\nHome Finder")}
          </p>
          <p
            className={`paragraph-02-regular text-shades-white ${
              i18n.language === 'Ar' ? 'text-end' : 'text-start'
            } mt-2`}
            style={{ whiteSpace: "pre-line" }}
          >
            {t(
              "A curated list of available homes with online\nrent and mortgage simulation to know\nwhat you are investing into."
            )}
          </p>
        </div>
        <div className="hidden md:flex md:flex-row md:justify-around">
          <HouseCard cardInfos={data.card1} />
          <HouseCard cardInfos={data.card2} />
          <div className="hidden lg:block">
            <HouseCard cardInfos={data.card3} />
          </div>
        </div>

        <div className="mb-[34px] md:hidden">
          <Slider
            dots={false} // You can customize this as needed
            infinite={true} // Allow infinite scrolling
            speed={500} // Transition speed in milliseconds
            slidesToShow={1} // Number of slides to show at a time
            slidesToScroll={1} // Number of slides to scroll per interaction
            nextArrow={<NextArrow />} // Custom next arrow component
            prevArrow={<PreviousArrow />}
          >
            <div>
              <HouseCard cardInfos={data.card1} />
            </div>
            <div>
              <HouseCard cardInfos={data.card2} />
            </div>
            <div>
              <HouseCard cardInfos={data.card3} />
            </div>
          </Slider>
        </div>

        <button className="flex items-center justify-center paragraph-01-regular bg-primary-600 text-shades-white w-[250px] h-[41px] rounded mx-auto mt-5 mb-[120px]" onClick={() => navigate('/homefinder')}>
          {t("Find Your Dream Property")}
        </button>
      </div>
    </section>
  );
};

export default DiscoverSection;
