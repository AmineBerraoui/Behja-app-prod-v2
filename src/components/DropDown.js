import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Dropdown({ width, placeholder, src, setData, value = null, options }) {
  const { i18n } = useTranslation();

  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState(value || "");
  const [activeDropDown, setActiveDropDown] = useState(false);

  // Function to handle option selection
  const handleOptionChange = option => {
    setSelectedOption(option);
    setActiveDropDown(false);
    setData(option); // Close the dropdown when an option is selected
  };

  return (
    <div className={`border border-primary-200 relative`} style={{ width: width }}>
      <div className="flex items-center px-4 py-3">
        <button
          className={`flex ${
            i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"
          } items-center w-full`}
          onClick={() => setActiveDropDown(!activeDropDown)}
        >
          <img src={src} alt={placeholder} />
          {selectedOption ? (
            <p className="text-shades-black ml-2">{selectedOption}</p>
          ) : (
            <div
              className={`w-full flex ${
                i18n.language === "Ar" ? "flex-row-reverse" : "flex-row"
              } justify-between items-center`}
            >
              <div className="flex gap-1">
                <p className={`text-neutral-500 paragraph-01-regular mx-2`}>{placeholder}</p>
              </div>
              <img src="./assets/arrow.svg" alt="behja arrow" />
            </div>
          )}
        </button>

        {activeDropDown && (
          <div className="absolute top-0 left-0 w-full border border-primary-200 z-20 bg-neutral-50">
            {options.map((option, id) => (
              <div
                className="border-b border-primary-200 px-4 py-3"
                key={id}
                onClick={() => handleOptionChange(option)}
              >
                <p className="text-neutral-500 ml-2">{option}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
