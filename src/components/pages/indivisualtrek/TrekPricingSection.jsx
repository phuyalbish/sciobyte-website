import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { scrollToSection } from "@/apis/scrollToSection.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
import { FaStar } from "react-icons/fa";
function TrekPricingSection({ price, map, pricings, name }) {
  const { id } = useParams();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/trek/" + id
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col items-start">
          <div className="text-md text-bold">Price Starting From</div>
          <div className="text-3xl font-bold text-B500">USD {price}</div>
        </div>
        <div className="flex relative gap-2 items-center ">
          <div className="hidden lg:flex">
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
          </div>
          <CiShare2 className="size-8 cursor-pointer" onClick={handleCopy} />
          {copied && (
            <div className="absolute w-full left-1/2 transform -translate-x-1/2 text-N500 bg-white p-3 rounded shadow-md">
              Link Copied!
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col border gap-2 border-N300 rounded-xl px-4 py-4">
        {Array.isArray(pricings) && pricings?.length > 0 ? (
          <>
            <div className="flex justify-between pt-1 border-t border-N200">
              <div className="font-semibold">Group Size</div>
              <div className="font-semibold">Cost Per Person</div>
            </div>
            {pricings?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between pt-1 border-t border-N200"
              >
                <div>
                  {item?.min_group_range !== 0 && `${item?.min_group_range} - `}
                  {item?.max_group_range} Person
                </div>
                <div>${item?.price_per_person}</div>
              </div>
            ))}
          </>
        ) : (
          <p>No Detailed Pricing</p>
        )}
      </div>
      <div className="rounded-lg bg-B300 hover:bg-B500 text-white text-lg font-bold cursor-pointer flex justify-center items-center p-4">
        Make a Booking
      </div>
      <a
        href={`https://web.whatsapp.com/send?phone=+9779849828857&amp;text=Hello Aashish, I want to know more about: ${name}`}
        target="_blank"
        className="rounded-lg bg-G300 hover:bg-G500 text-white text-lg font-bold cursor-pointer flex justify-center gap-3 items-center p-4"
      >
        <FaWhatsapp />
        Quick Inquiry
      </a>

      <div className="flex flex-col gap-5 ">
        <div className="text-xl font-bold">Route Map & Elevation</div>
        <img
          src={BASE_MEDIA_URL + map}
          className="w-full h-36 object-cover cursor-pointer rounded-md"
          onClick={() => scrollToSection("maps")}
        />
      </div>
    </div>
  );
}

export default TrekPricingSection;
