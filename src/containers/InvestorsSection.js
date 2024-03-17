import React from "react";
import { useTranslation } from "react-i18next";
import {FiSend} from "react-icons/fi"

const InvestorsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 items-center justify-center w-[90%] border-primary-200 border-2 mt-28 lg:w-[75%]" id="investorsection">
      <p
        className="heading-02-semibold text-center text-primary-900 mt-20 lg:text-5xl"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("Behja Investors are\ncreating real impact")}
      </p>
      <p
        className="paragraph-02-regular text-primary-700 text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        {t(
          "Behja is about creating real impact. our behja tenants\nenjoy a flexible path to home ownership. and our investment platform\nhelps investors earn higher returns while helping others\nbuy their dream home"
        )}
      </p>
      <p className="paragraph-03-semibold text-primary-900">
        {t("Sign up now to join the waitlist!")}
      </p>
      <div className="mb-20 flex">
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("Enter your email address")}
          className="border-primary-600 border rounded-l px-5 py-3 lg:w-[260px]"
        />
        <button className="hidden text-shades-white lg:block lg:bg-primary-600 lg:rounded-r lg:px-8 lg:py-3 lg:border lg:border-primary-600">
          {t("Join the waitlist")}
        </button>

          <button className="bg-primary-600 rounded-r px-8 py-3 border border-primary-600 lg:hidden">
            <FiSend  className="text-neutral-50"/>
          </button>

      </div>
    </section>
  );
};

export default InvestorsSection;
