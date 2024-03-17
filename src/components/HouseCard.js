import React from "react";
import { useTranslation } from "react-i18next";
import { LuBedSingle } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const HouseCard = ({ cardInfos}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()

  console.log("----->", cardInfos);

  return (
    <div className="flex flex-col justify-evenly" onClick={() => navigate("/housedetails", {state: cardInfos})}>
      <img src={cardInfos.imgSrc} alt="Behja House" className="object-cover w-full " />
      <div className="py-2 px-3">
        <div className={`flex ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } justify-between`}>
          <p
            className="subheading-semibold text-primary-800"
            style={{ whiteSpace: "pre-line" }}
          >
            {t(cardInfos.title)}
          </p>
          <div className="flex flex-col justify-center items-center bg-primary-700 rounded px-4 py-2">
            <p className="paragraph-01-regular text-shades-white">
              {t("initial deposit")}
            </p>
            <p className="aragraph-02-semibold text-shades-white">{t(cardInfos.initialDeposit)}{" "}{t('riyal')}</p>
          </div>
        </div>
        <p className="paragraph-01-regular text-primary-800 mt-1">{t(cardInfos.address)}</p>
        <div className={`flex ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center mt-4`}>
          <div className="">
            <p
              className="paragraph-01-regular text-primary-600 mb-2"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("Monthly\nrent")}
            </p>
            <p className="paragraph-02-semibold">{cardInfos.monthlyRent}{" "}{t('riyal')}</p>
          </div>
          <div>
            <p className="paragraph-01-regular text-primary-600 mb-1">
              {t("future savings")}
            </p>
            <p className="paragraph-01-regular text-neutral-500 mb-1">
              {t("for down payment")}
            </p>
            <p className="paragraph-02-semibold">{cardInfos.futureSavings}{" "}{t('riyal')}</p>
          </div>
        </div>
        <div className="bg-neutral-300 w-full h-[1px] my-4" />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-1">
            <LuBedSingle className="text-primary-800" />
            <p className="paragraph-02-regular text-primary-800">{cardInfos.bedNum}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <TbBath className="text-primary-800" />
            <p className="paragraph-02-regular text-primary-800">{cardInfos.bathNum}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <TbDimensions className="text-primary-800" />
            <p className="paragraph-02-regular text-primary-800">{cardInfos.dimension}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
