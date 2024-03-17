import React from "react";
import { useTranslation } from "react-i18next";

const StaticsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="absolute flex justify-around items-center w-[90%] md:w-[75%] z-30 py-2 bg-shades-white">
      <div className="flex flex-col items-center">
        <p className="paragraph-05-semibold md:text-[40px] md:leading-[48px] md:font-semibold text-primary-800">{t("+1500")}</p>
        <p className="text-xs md:text-sm md:font-normal text-primary-500">
          {t("Homes Listed")}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="paragraph-05-semibold md:text-[40px] md:leading-[48px] md:font-semibold text-primary-800">{t("+4250")}</p>
        <p className="text-xs md:text-sm md:font-normal text-primary-500">
          {t("Behja Tenants")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <p className="paragraph-05-semibold md:text-[40px] md:leading-[48px] md:font-semibold text-primary-800">{t("30,000 ")}</p>
          <p className="paragraph-04-semibold md:font-semibold  md:text-lg lg:text-4xl ml-1">{t("Riyal")}</p>
        </div>
        <p className="text-xs md:text-sm md:font-normal text-primary-500">
          {t("Average Deposit")}
        </p>
      </div>
    </section>
  );
};

export default StaticsSection;
