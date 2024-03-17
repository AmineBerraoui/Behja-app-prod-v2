import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "./DropDown";

const bedroomNumOptions = ["1", "2", "3", "4", "5", "6"]
const monthlyRentOptions = ["< 5000", "5001 - 10,000", "> 10,001"]
const rentalDurationOptions = ["day", "week", "month"]
const initialDepositOptions = ["< 5000", "5001 - 10,000", "> 10,001"]
const locationOptions = ["North Riyadh", "South Riyadh"]
const futureValueOptions = ["10,000", "20,000", "30,000"]


const HomeFinderFilter = ({setFilterData, onSearch}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col w-[90%] lg:w-[75%] gap-5 p-8 bg-shades-white">
      <div className={`flex flex-col gap-5 ${i18n.language === "Ar" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between`}>
        <Dropdown
          width={"280px"}
          placeholder={t("Number of bedrooms")}
          src={"./assets/Bed.svg"}
          setData={(selectedValue) => setFilterData.setBedNum(selectedValue)}
          options={bedroomNumOptions}
        />
        <Dropdown
          width={"280px"}
          placeholder={t("Location")}
          src={"./assets/MapPin.svg"}
          setData={(selectedValue) => setFilterData.setLocation(selectedValue)}
          options={locationOptions}
        />
        <Dropdown
          width={"280px"}
          placeholder={t("Monthly rent")}
          src={"./assets/HandCoins.svg"}
          setData={(selectedValue) => setFilterData.setMonthlyRent(selectedValue)}
          options={monthlyRentOptions}
        />
      </div>
      <div className={`flex flex-col gap-5 ${i18n.language === "Ar" ? "lg:flex-row-reverse" : "lg:flex-row"}  items-center justify-between`}>
        <Dropdown
          width={"280px"}
          placeholder={t("Duration of the rental")}
          src={"./assets/ClockAfternoon.svg"}
          setData={(selectedValue) => setFilterData.setRentDuration(selectedValue)}
          options={rentalDurationOptions}
        />
        <Dropdown
          width={"280px"}
          placeholder={t("Initial deposit")}
          src={"./assets/HandCoins.svg"}
          setData={(selectedValue) => setFilterData.setInitialDeposit(selectedValue)}
          options={initialDepositOptions}
        />
        <Dropdown
          width={"280px"}
          placeholder={t("Future property value")}
          src={"./assets/House.svg"}
          setData={(selectedValue) => setFilterData.setFutureValue(selectedValue)}
          options={futureValueOptions}
        />
      </div>
      <button className={`paragraph-01-regular ${i18n.language === "Ar" ? "self-end" : "self-start"}  bg-primary-500 text-shades-white px-8 py-3 w-full lg:w-[25%]`} onClick={() => onSearch()}>
        {t("Search for my future home")}
      </button>
    </div>
  );
};

export default HomeFinderFilter;
