import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import i18n from "../i18n";
import { PiLockSimple } from "react-icons/pi";
import { PiGlobe } from "react-icons/pi";
import { PiCaretDown } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const languages = ["Ar", "En"];

const NavBar = ({fixed}) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguage = (language) => {
    setActiveLanguage(language);
    i18n.changeLanguage(language);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`flex items-center justify-center w-full bg-shades-white ${fixed ? "fixed top-0 z-50" : "block"}`}>
      <div className={`flex ${activeLanguage === "Ar" ? "flex-row-reverse" : "flex-row"} items-center justify-between py-[32px]  w-[90%] lg:w-[75%]`}>
      <img
        src="./assets/Logo.png"
        className="w-[82px] h-[27px]"
        alt="behja logo"
        onClick={() => navigate("/")}
      />

      <button
        className="xl:hidden"
        onClick={toggleMobileMenu}
        ref={menuButtonRef}
      >
        <RiMenu3Fill />
      </button>

      {isMobileMenuOpen ? (
        <div
          className="fixed flex flex-col items-center justify-between py-5 top-0 right-0 w-[50%] h-full bg-neutral-100 z-40 transition-right duration-300 ease-in-out "
          ref={mobileMenuRef}
        >
          <button className="self-end px-10" onClick={toggleMobileMenu}>
            <GrClose />
          </button>
          <div className="flex flex-col items-center  gap-10">
            {/* <p className="paragraph-01 text-primary-800 w-full py-3 md:text-2xl md:font-semibold">
              <a href="#homefinder">{t("Home Finder")}</a>
            </p> */}
            <p className="paragraph-01 text-primary-800 w-full py-3 md:text-2xl md:font-semibold">
              <a href="#howitworks">{t("How it works")}</a>
            </p>
            <p className="paragraph-01 text-primary-800 w-full py-3 md:text-2xl md:font-semibold">
              <a href="#benefitssection">{t("For Behja tenants")}</a>
            </p>
            <p className="paragraph-01 text-primary-800 w-full py-3 md:text-2xl md:font-semibold">
              <a href="#investorsection">{t("For Behja investors")}</a>
            </p>
          </div>
          <button className=" flex items-center bg-primary-600 rounded py-3 px-9">
            <PiLockSimple className="text-white w-10 h-8" />
          </button>
          <div className="flex items-center justify-around w-full">
            <button onClick={() => handleLanguage("En")}>En</button>
            <button onClick={() => handleLanguage("Fr")}>Fr</button>
            <button onClick={() => handleLanguage("Ar")}>Ar</button>
          </div>
        </div>
      ) : null}

      <div className={`hidden xl:flex xl:${activeLanguage === "Ar" ? "flex-row-reverse" : "flex-row"} xl:px-[51px] xl:gap-12`}>
        {/* <p className="paragraph-01 text-primary-800">
          <a href="#homefinder">{t("Home Finder")}</a>
        </p> */}
        <p className="paragraph-01 text-primary-800">
          <a href="#howitworks">{t("How it works")}</a>
        </p>
        <p className="paragraph-01 text-primary-800">
          <a href="#benefitssection">{t("For Behja tenants")}</a>
        </p>
        <p className="paragraph-01 text-primary-800">
          <a href="#investorsection">{t("For Behja investors")}</a>
        </p>
      </div>
      <button className="hidden xl:flex xl:items-center xl:bg-primary-600 xl:rounded xl:py-3 xl:px-9 xl:mr-6">
        <p className="paragraph-01 text-shades-white mr-1">
          {t("Tenant Area")}
        </p>
        <PiLockSimple className="text-white" />
      </button>
      <div className="hidden xl:flex xl:items-center xl:gap-1">
        <p className="text-sm">{activeLanguage}</p>
        <button
          className="flex items-center gap-1 hovered-button w-8 h-7"
          onClick={toggleDropdown}
        >
          <PiGlobe />
          <PiCaretDown className="w-3 h-3" />
        </button>
        <div className="absolute mt-2 w-10 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
          {isDropdownOpen && (
            <div className="absolute mt-2 w-10 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50">
              {languages.map((language, id) => (
                <button
                  className="w-full py-1 px-4 text-sm text-gray-700 hover:bg-gray-200 text-left"
                  key={id}
                  onClick={() => handleLanguage(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
