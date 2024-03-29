import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

const faqs = [
  {
    title: "When will the service be available?",
    number: "01",
    contents: [
      "Q1 (jan) is the expected launch date of the service, but we will\npre-qualify you by the end of the year",
      "We want to work with you / together to ensure you’re the first to\nbe considered at launch ",
    ],
  },
  {
    title: "Who is the service for?",
    number: "02",
    contents: [`It's for those who want to rent a home with the option to eventually buy it.`],
  },
  {
    title: "What kinds of apartments can I choose from?",
    number: "03",
    contents: ["You can choose any apartment available for sale on the market"],
  },
  {
    title: "What are the payment options?",
    number: "04",
    contents: [
      "You can pay rent monthly or annually for up to three years or less, with the initial property price set in the contract.",
    ],
  },
  {
    title: "How do I benefit from the service?",
    number: "05",
    contents: [
      `You can save a part of your rent to reduce the property's future price and later apply for a mortgage loan.`,
    ],
  },
  {
    title: `What factors determine my application's approval?`,
    number: "06",
    contents: [
      "We review each application to ensure seriousness and the ability to meet the guidelines and conditions.",
    ],
  },
  {
    title: "How long can I rent before buying?",
    number: "07",
    contents: ["You can rent for up to 3 years."],
  },
  {
    title: "What happens when I decide to purchase?",
    number: "08",
    contents: [
      `We guarantee you'll pay the agreed-upon price from the first day specified in the purchase contract.`,
    ],
  },
];

const FAQSection = () => {
  const { t, i18n } = useTranslation();
  // const navigate = useNavigate();
  return (
    <section className="w-[90%] mt-48 lg:w-[75%]">
      <p className="paragraph-01-regular text-primary-700 text-center">
        {t("Frequently Asked Questions")}
      </p>
      <p
        className="display-02-bold text-primary-900 text-center mt-3"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("We Answered Your\nCommon Questions!")}
      </p>
      <div className="flex flex-col justify-center items-center mt-20 gap-4 ">
        {faqs.map((faq, id) => (
          <div className="flex items-center justify-center w-full" key={id}>
            <Accordion faqData={faq} />
          </div>
        ))}
      </div>
      <div
        className={`flex flex-col gap-5 items-center justify-center text-center mt-20 lg:${
          i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Link
          to="https://try.behja.co/20214301-e1aa-4212-b267-8c0abcd6f97d"
          className="paragraph-01-regular bg-primary-600 text-primary-50 px-8 py-4 rounded"
        >
          {t("sign up to the waitlist")}
        </Link>
        {/* <button
         
          onClick={() => navigate('https://try.behja.co/20214301-e1aa-4212-b267-8c0abcd6f97d')}
        >
          {t('sign up to the waitlist')}
        </button> */}
        {/* <button className="paragraph-01-regular bg-primary-300 text-primary-900 px-8 py-4 rounded" onClick={() => navigate('/homefinder')}>
          {t("Find a property")}
        </button> */}
      </div>
    </section>
  );
};

export default FAQSection;
