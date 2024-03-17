import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import "./RentSimulator.css";
import { PiHandCoins, PiBuildingsLight } from "react-icons/pi";
import { useMyContext } from "../App";
import { useNavigate } from "react-router-dom";

const bedrooms = ["1", "2", "3", "4", "5", "6"];
const city = ["Riyadh", "Khobar", "Jeddah", "Other"]
const neighbourhood = ["Nakheel", "Hitteen", "Malqa", "Alyasmine", "Alaqeeq", "Alsahafa", "Narjis", "Other"]
const currency = ["SAR", "$"]

const RentSimulator = () => {
  const { data, setData } = useMyContext();
  const navigate = useNavigate();

  const { t, i18n  } = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    city: data.selectedOptions?.city || null,
    neighbourhood: data.selectedOptions?.neighbourhood || null,
    bedrooms: data.selectedOptions?.bedrooms || null,
    currency: data.selectedOptions?.currency || null,
    depositAmount: data.selectedOptions?.depositAmount || null,
    propertyValue: data.selectedOptions?.propertyValue || null,
  });
  const [currentlang, setCurrentLang] = useState(i18n.language)

  console.log(selectedOptions);

  const handleChangeDeposit = (e) => {
    setSelectedOptions({ ...selectedOptions, depositAmount: e.target.value });
  };

  const handlePropertyValue = (e) => {
    setSelectedOptions({ ...selectedOptions, propertyValue: e.target.value });
  };

  const handleSubmit = () => {
    setData({ ...data, selectedOptions });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const handleChangeLang = () => {
    if (i18n.language === "Ar") {
      i18n.changeLanguage("En")
      setCurrentLang("En")
    }
    else {
      i18n.changeLanguage("Ar")
      setCurrentLang("Ar")
    }
  }

  console.log(currentlang);

  return (
    <div className={`min-h-screen lg:flex lg:${
      i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
    }`}>
      <div className="flex flex-col justify-between px-4 gap-4 lg:justify-around lg:w-[50%] lg:gap-0 lg:px-24 lg:pb-8">
        <div className={`flex  ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } justify-between pt-4`}>
          <div className="flex-col">
            <img
              src="./assets/Logo.png"
              alt="logo"
              className="w-[82px] h-[26px] mb-2"
              onClick={() => navigate('/')}
            />
            <button onClick={navigateBack}>
              <img src="./assets/ArrowLeft.svg" alt="arrow" />
            </button>{" "}
          </div>
          <p onClick={handleChangeLang}>{currentlang === "Ar" ? "عربي" : "English"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className={`heading-03-semibold text-primary-900 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
            {t("Rent Simulator")}
          </h1>
          <p
            className={`paragraph-01-regular text-neutral-700 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
            style={{ whiteSpace: "pre-line" }}
          >
            {t(
              "Fill the following information\nto get a simulation of your monthly rent,\nand future down payment saved."
            )}
          </p>
        </div>
        <div className="container">
          <div className="blurred-div">
            <h1 className={`heading-02-semibold text-shades-white mb-3 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
              {t("Results")}
            </h1>
            {selectedOptions.city !== null &&
            selectedOptions.bedrooms !== null &&
            selectedOptions.neighbourhood !== null &&
            selectedOptions.currency !== null &&
            selectedOptions.propertyValue !== null &&
            selectedOptions.depositAmount ? (
              <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <p className="paragraph-02-semibold text-shades-white">
                    {t("Deposit")}
                  </p>
                  <p className="paragraph-02-regular text-neutral-300">
                    {t("$5,290")}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="paragraph-02-semibold text-shades-white">
                    {t("Monthly rent")}
                  </p>
                  <p className="paragraph-02-regular text-neutral-300">
                    {t("$5,450")}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="paragraph-02-semibold text-shades-white">
                    {t("Monthly savings")}
                  </p>
                  <p className="paragraph-02-regular text-neutral-300">
                    {t("$2,570")}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p
                      className="paragraph-02-semibold text-shades-white"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {t("Total saved\non down payment")}
                    </p>
                    <p className="paragraph-01-regular text-neutral-300">
                      {t("in 32 months")}
                    </p>
                  </div>
                  <p className="paragraph-02-regular text-neutral-300">
                    {t("$5,290")}
                  </p>
                </div>
                <div className="mt-8">
                  <p
                    className="paragraph-02-regular text-neutral-300 mb-2"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {t("Do you like\nthe results of the simulations ?")}
                  </p>
                  <Link
                    to="/firstapplicationform"
                    className="bg-primary-500 paragraph-01-regular text-shades-white rounded px-8 py-3"
                    onClick={handleSubmit}
                  >
                    {t("Start my application")}
                  </Link>
                </div>
              </div>
            ) : (
              <p
                className="text-shades-white paragraph-02-semibold"
                style={{ whiteSpace: "pre-line" }}
              >
                {t(
                  "Fill the simulation form\nto get an estimate on your future rent and savings.\n\n\nThank you!"
                )}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-row justify-between">
            <DropDown
              width={"200px"}
              placeholder={t("City")}
              src={"./assets/Flag.svg"}
              value={data.selectedOptions?.city || null}
              options={city}
              setData={(option) =>
                setSelectedOptions({ ...selectedOptions, city: option })
              }
            />
            <DropDown
              width={"300px"}
              placeholder={t("Neighbourhood")}
              src={"./assets/House.svg"}
              value={data.selectedOptions?.neighbourhood || null}
              options={neighbourhood}
              setData={(option) =>
                setSelectedOptions({
                  ...selectedOptions,
                  neighbourhood: option,
                })
              }
            />
          </div>
          <DropDown
            width={"100%"}
            placeholder={t("Number of bedrooms")}
            src={"./assets/Bed.svg"}
            value={data.selectedOptions?.bedrooms || null}
            options={bedrooms}
            setData={(option) =>
              setSelectedOptions({ ...selectedOptions, bedrooms: option })
            }
          />
          <DropDown
            width={"100%"}
            placeholder={t("Currency")}
            value={data.selectedOptions?.currency || null}
            options={currency}
            src={"./assets/Coins.svg"}
            setData={(option) =>
              setSelectedOptions({ ...selectedOptions, currency: option })
            }
          />
          <div className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} flex-col gap-1 mb-5`}>
            <div
              className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 border  rounded px-4 py-3 border-primary-200`}
            >
              <PiHandCoins className="text-neutral-500" />
              <input
                type="text"
                name={t("Deposit amount")}
                value={selectedOptions.depositAmount}
                onChange={handleChangeDeposit}
                placeholder={t("Deposit Amount")}
                className={`border-none p-0 m-0 w-full h-full outline-none text-shades-black placeholder-neutral-500 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
              />
              <p className={`text-neutral-500 text-end`}>-</p>
            </div>
            <p className={`text-neutral-500 subparagraph-regular ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
              {t("Deposit should be at least 1% of the property value")}
            </p>
          </div>

          <div
            className={`flex ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-2 border  rounded px-4 py-3 border-primary-200 mb-5`}
          >
            <PiBuildingsLight className="text-neutral-500" />
            <input
              type="text"
              name="property value"
              value={selectedOptions.propertyValue}
              onChange={handlePropertyValue}
              placeholder={t("Add property value")}
              className={`border-none p-0 m-0 w-full h-full outline-none text-shades-black placeholder-neutral-500 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
            />
            <p className="text-neutral-500 text-end">-</p>
          </div>
        </div>
      </div>

      <div className={`hidden-container lg:w-[50%]`}>
        <div className="blurred-div">
          <h1 className={`heading-02-semibold text-shades-white mb-3 ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}>
            {t("Results")}
          </h1>
          {selectedOptions.city !== null &&
          selectedOptions.bedrooms !== null &&
          selectedOptions.neighbourhood !== null &&
          selectedOptions.currency !== null &&
          selectedOptions.propertyValue !== null &&
          selectedOptions.depositAmount ? (
            <div className="flex flex-col gap-5">
              <div className={`flex justify-between items-center ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <p className="paragraph-02-semibold text-shades-white">
                  {t("Deposit")}
                </p>
                <p className="paragraph-02-regular text-neutral-500">
                  {t("$5,290")}
                </p>
              </div>
              <div className={`flex justify-between items-center ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <p className="paragraph-02-semibold text-shades-white">
                  {t("Monthly rent")}
                </p>
                <p className="paragraph-02-regular text-neutral-500">
                  {t("$5,450")}
                </p>
              </div>
              <div className={`flex justify-between items-center ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <p className="paragraph-02-semibold text-shades-white">
                  {t("Monthly savings")}
                </p>
                <p className="paragraph-02-regular text-neutral-500">
                  {t("$2,570")}
                </p>
              </div>
              <div className={`flex justify-between items-center ${i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div>
                  <p
                    className="paragraph-02-semibold text-shades-white"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {t("Total saved\non down payment")}
                  </p>
                  <p className="paragraph-01-regular text-neutral-500">
                    {t("in 32 months")}
                  </p>
                </div>
                <p className="paragraph-02-regular text-neutral-500">
                  {t("$5,290")}
                </p>
              </div>
              <div className="mt-8">
                <p
                  className="paragraph-02-regular text-neutral-500 mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("Do you like\nthe results of the simulations ?")}
                </p>
                <Link
                  to="/firstapplicationform"
                  className="bg-primary-500 paragraph-01-regular text-shades-white rounded px-8 py-3"
                  onClick={handleSubmit}
                >
                  {t("Start my application")}
                </Link>
              </div>
            </div>
          ) : (
            <p
              className={`text-shades-white paragraph-02-semibold ${i18n.language === 'Ar' ? 'text-end' : 'text-start'}`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "Fill the simulation form\nto get an estimate on your future rent and savings.\n\n\nThank you!"
              )}
            </p>
          )}
        </div>
        <img
          src="./assets/LogoSvg.svg"
          alt="behja"
          className="absolute bottom-0"
        />
      </div>
    </div>
  );
};

export default RentSimulator;
