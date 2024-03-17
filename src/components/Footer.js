import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className=" w-full ">
      <div className={`flex flex-col items-center justify-around gap-5 bg-primary-700 mt-24 py-16 px-24 ${i18n.language === "Ar" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className={`flex flex-col items-center justify-center lg:${i18n.language === "Ar" ? "items-end" : "items-start"}`}>
          <img src="./assets/Behja.svg" alt="Behja" />
          <p
            className={`heading-04-bold text-shades-white mt-8 lg:${i18n.language === "Ar" ? "items-end" : "items-center"}`}
            style={{ whiteSpace: "pre-line" }}
          >
            {t("Become a home owner\nin 3 years or less")}
          </p>
        </div>
        <div className="flex justify-between gap-12">
          <div className={"flex flex-col gap-3"}>
            <p className="paragraph-03-semibold text-primary-100 mb-3">
              {t("Resources")}
            </p>
            <p className="paragraph-01-regular text-primary-100">{t("Blog")}</p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Career")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Customer Help Center")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Agents")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Partnership Enquiries ")}
            </p>
          </div>
          <div className={"flex flex-col gap-3"}>
            <p className="paragraph-03-semibold text-primary-100 mb-3">
              {t("Connect With Us")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Facebook")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Instagram")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Twitter")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Youtube")}
            </p>
          </div>
          <div className={"flex flex-col gap-3"}>
            <p className="paragraph-03-semibold text-primary-100 mb-3">
              {t("Useful Links")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Privacy Policy")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Terms & Conditions")}
            </p>
            <p className="paragraph-01-regular text-primary-100">
              {t("Brokerages and Licensing")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:px-24 lg:py-4">
        <p className="paragraph-01-regular text-primary-900">{t('© 2023 Behja.')}</p>
        <p className="paragraph-01-regular text-primary-900">
          {t('All rights reserved.')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
