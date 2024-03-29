import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Accordion = ({ faqData }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    if (false) setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[90%] bg-white  md:px-16 py-3" onClick={toggleAccordion}>
      <div
        className={`flex ${
          i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"
        } justify-between items-center h-[96px] px-2`}
      >
        <div
          className={`flex ${
            i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"
          } items-start gap-8`}
        >
          <div className="paragraph-02-semibold text-start md:text-3xl md:font-semibold md:text-start text-primary-600">
            {t(faqData.number)}
          </div>
          <div
            className={`paragraph-02-semibold ${
              i18n.language === "Ar" ? "text-end" : "text-start"
            } md:text-3xl md:font-semibold md:text-start text-primary-900`}
            style={{ whiteSpace: "pre-line" }}
          >
            {t(faqData.title)}
          </div>
        </div>
        <button
          className="flex text-shades-white rounded-full w-5 h-5 justify-center items-start font-bold text-sm md:w-9 md:h-9 md:text-2xl"
          style={{ backgroundColor: isOpen ? "#99655C" : "#D4D3D3" }}
          onClick={toggleAccordion}
        >
          {isOpen ? "x" : "+"}
        </button>
      </div>
      {isOpen && (
        <ul
          className={`flex flex-col ${
            i18n.language === "Ar" ? "items-end" : "items-start"
          } justify-center pl-24`}
        >
          {faqData.contents.map((content, id) => (
            <li
              key={id}
              className={`paragraph-02-regulat text-neutral-500 whitespace-pre-line ${
                i18n.language === "Ar" ? "text-end" : "text-start"
              } ${i18n.language === "Ar" ? "list-inside" : "list-disc"} `}
            >
              {t(content)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
