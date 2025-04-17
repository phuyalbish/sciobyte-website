import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { scrollToSection } from "@/apis/scrollToSection.js";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekPricingSection({ total_price, map, pricings, trek_name, stars = 0 }) {
  const { id } = useParams();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/t/" + id
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="flex flex-col w-full gap-7">
      <div className="flex flex-col gap-2">
        <div className="relative flex justify-between w-full items-start ">
          <div className="flex flex-col items-start">
            <div className="text-md text-bold">Price Starting From</div>
            <div className="text-xl font-bold text-B500">USD {total_price}</div>
          </div>
          <div className="flex relative  gap-2 items-center">
            <div className="flex gap-1 items-center justify-center">
              {[...Array(stars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <CiShare2 className="size-8 cursor-pointer" onClick={handleCopy} />
          </div>

          {copied && (
            <div className="text-N500 absolute bottom-0 right-0 w-34 ">
              Link Copied!
            </div>
          )}
        </div>
         {Array.isArray(pricings) && pricings?.length > 0 ? (
        <div className="flex flex-col border gap-2 border-N300 rounded-xl px-4 py-4">
         
            <>
              <div className="flex justify-between">
                <div className="font-semibold">Group Size</div>
                <div className="font-semibold">Cost Per Person</div>
              </div>
              {pricings?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between pt-2 border-t border-N200"
                >
                  <div>
                    {item?.min_group_range !== 0 &&
                      `${item?.min_group_range} - `}
                    {item?.max_group_range} Person
                  </div>
                  <div>${item?.price_per_person}</div>
                </div>
              ))}
            </>
          
        </div>
        ) : ""}
        <Link
          to="/contact"
          className="rounded-lg bg-B500 hover:bg-B700 text-white text-base font-bold cursor-pointer flex justify-center items-center p-4"
        >
          Make a Booking
        </Link>
        <a
          href={`https://web.whatsapp.com/send?phone=+9779849828857&text=Hello Aashish, I want to know more about: ${trek_name}`}
          target="_blank"
          className="rounded-lg bg-G600 hover:bg-G700 text-white text-base font-bold cursor-pointer flex justify-center gap-3 items-center p-4"
        >
          <FaWhatsapp />
          Quick Inquiry
        </a>
      </div>
      {map && (
        <div className="flex flex-col gap-3 ">
        <div className="text-lg text-left font-bold">Route Map & Elevation</div>
        <div
          className="group w-full h-full flex items-center justify-center cursor-pointer"
          onClick={() => scrollToSection("maps")}
        >
          <div className="absolute flex md:hidden  group-hover:flex border border-white rounded-md px-2 py-1 text-white cursor-pointer">
            View
          </div>
          <img
            decoding="async"
            loading="lazy"
            src={BASE_MEDIA_URL + map}
            className="w-full h-36 object-cover  rounded-md"
          />
        </div>
      </div>
      )}
    </div>
  );
}

export default TrekPricingSection;
