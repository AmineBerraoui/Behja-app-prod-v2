import React from "react";
import { useTranslation } from "react-i18next";
import { PiCrosshair, PiFilesLight, PiIdentificationCardLight } from "react-icons/pi";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const BenefitsSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className={`flex flex-col items-center justify-center bg-gradient-to-r from-primary-600 to-primary-700 w-full mt-16`} id="benefitssection">
      <div className={`w-[90%] ${i18n.language === "Ar" ? "items-end" : "items-start"} py-28 `}>
        <p className={`paragraph-01-regular text-primary-50 ${i18n.language === "Ar" ? "text-end" : "text-start"}  mb-4`}>
          {t("The Benefits of Behja")}
        </p>
        <p
          className={`heading-02-semibold ${i18n.language === "Ar" ? "text-end" : "text-start"} text-primary-50 mb-24`}
          style={{ whiteSpace: "pre-line" }}
        >
          {t(
            "Behja is Designed\nfor Future Homeowners\nWho Seek Flexibility and Convenience!"
          )}
        </p>
        <div className={`flex flex-col gap-5 md:${i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"} md:items-start md:justify-between`}>
          <div className={`flex flex-col ${i18n.language === "Ar" ? "justify-end" : "justify-start"} gap-3`}>
            <PiCrosshair className={`text-shades-white ${i18n.language === "Ar" ? "self-end" : "self-start"}  w-14 h-16`} />
            <p
              className={`heading-05-semibold ${i18n.language === "Ar" ? "text-end" : "text-start"} text-primary-50`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t("High\nflexibility.")}
            </p>
            <p
              className={`paragraph-02-regular ${i18n.language === "Ar" ? "text-end" : "text-start"} text-neutral-200`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "You are the decision-maker\nfrom choosing the property\nto buying it."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <PiFilesLight className={`text-shades-white ${i18n.language === "Ar" ? "self-end" : "self-start"} w-14 h-16`} />
            <p
              className={`heading-05-semibold ${i18n.language === "Ar" ? "text-end" : "text-start"} text-primary-50`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t("Reliable\ncontracts.")}
            </p>
            <p
              className={`paragraph-02-regular ${i18n.language === "Ar" ? "text-end" : "text-start"} text-neutral-200`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "All contracts are\ndocumented, and use\nEjar central system."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <PiIdentificationCardLight className={`text-shades-white ${i18n.language === "Ar" ? "self-end" : "self-start"} w-14 h-16`} />
            <p
              className={`heading-05-semibold ${i18n.language === "Ar" ? "text-end" : "text-start"} text-primary-50`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t("Experience and\nprofessionalism.")}
            </p>
            <p
              className={`paragraph-02-regular ${i18n.language === "Ar" ? "text-end" : "text-start"} text-neutral-200`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "Our team includes a select\ngroup of experts in the\nfield of real estate and\ncontracts."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <BiBriefcaseAlt2 className={`text-shades-white ${i18n.language === "Ar" ? "self-end" : "self-start"} w-14 h-16`} />
            <p
              className={`heading-05-semibold ${i18n.language === "Ar" ? "text-end" : "text-start"} text-primary-50`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t("Everything you\nneed in one place.")}
            </p>
            <p
              className={`paragraph-02-regular ${i18n.language === "Ar" ? "text-end" : "text-start"} text-neutral-200`}
              style={{ whiteSpace: "pre-line" }}
            >
              {t(
                "Our all-in-one platform that\neffortlessly handles everything from\nmanaging utility bills to seamless\nrental payments."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
