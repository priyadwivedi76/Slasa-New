import React, { useState } from "react";
import { FaShippingFast, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const HeaderTop = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
   const { t, i18n } = useTranslation(); 

  return (
    <div className="relative bg-black text-white h-11 text-md px-6 py-0 flex justify-center items-center flex-wrap overflow-visible z-40">
      {/* Left Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-4 flex-wrap">
        {/* Free Shipping */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("shipping")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaShippingFast size={14} />
          <span>{t("Free Shipping")}</span>
          {hoveredItem === "shipping" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-sm rounded-md shadow-lg p-2 w-48 text-center z-50">
            {t("Enjoy free shipping on all orders above $50!")}
            </div>
          )}
        </div>

        {/* Click and Collect */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("collect")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaCalendarAlt size={14} />
          <span>{t("Click and Collect")}</span>
          {hoveredItem === "collect" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-48 text-center z-50">
             {t("Order online and collect from your nearest store!")}
            </div>
          )}
        </div>

        {/* Warranty */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("warranty")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span>{t("Warranty")}</span>
          {hoveredItem === "warranty" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-3 w-48 text-center z-50">
             {t("Get up to 2 years of warranty on selected products.")}
            </div>
          )}
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center gap-4 relative ml-auto">
        {/* B2B Dropdown (Hide on smaller screens) */}
        <div
          className="hidden sm:relative cursor-pointer px-3 py-1 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("b2b")}
          onMouseLeave={() => setHoveredItem(null)}
        >
        {t("B2B Services ⌄")}
          {hoveredItem === "b2b" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-40 text-center z-50">
              <p className="px-4 py-1 hover:bg-gray-700 transition">{t("Custom Designs")}</p>
              <p className="px-4 py-1 hover:bg-gray-700 transition">{t("Consulting Services")}</p>
            </div>
          )}
        </div>

        {/* Deliver to Area Dropdown */}
        <div
          className="relative flex items-center gap-2 cursor-pointer px-3 py-0.5 rounded-md hover:bg-gray-800 transition"
          onMouseEnter={() => setHoveredItem("area")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <FaMapMarkerAlt size={14} />
          <span>{t("Deliver to Area ⌄")}</span>
          {hoveredItem === "area" && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 bg-gray-900 text-white text-xs rounded-md shadow-lg p-2 w-36 text-center z-50">
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">{t("Sharjah")}</p>
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">{t("Abu Dhabi")}</p>
              <p className="px-4 py-0.5 hover:bg-gray-700 transition">{t("Hatta")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section (Hide on smaller screens) */}
      <div className="hidden sm:flex items-center gap-2 md:gap-3 flex-nowrap">
        <div className="cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
         {t("Store Locator")}
        </div>
        <div className="cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
          {t("Help")}
        </div>
        <a href="/sell-with-us" className="hidden !text-white lg:block cursor-pointer px-2 py-1 rounded-md hover:bg-gray-800 transition">
              {t("Sell with Us")}
        </a>

      </div>
    </div>
  );
};

export default HeaderTop;
