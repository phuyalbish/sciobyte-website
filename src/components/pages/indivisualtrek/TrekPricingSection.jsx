import React from "react";
import { CiShare2 } from "react-icons/ci";

import { scrollToSection } from "@/apis/scrollToSection.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
import { FaStar } from "react-icons/fa";
function TrekPricingSection({ price, map }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col items-start">
          <div className="text-md text-bold">Price Starting From</div>
          <div className="text-3xl font-bold text-B500">USD {price}</div>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="hidden lg:flex">
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
            <FaStar className="text-yellow-300" size={20} />
          </div>
          <CiShare2 className="size-8" />
        </div>
      </div>
      <div className="flex flex-col border gap-2 border-N300 rounded-xl px-4 py-4">
        <div className="flex justify-between pt-1  border-N200 ">
          <div className="font-semibold">Group Size</div>
          <div className="font-semibold">Cost Per Person</div>
        </div>
        <div className="flex justify-between pt-1 border-t border-N200 ">
          <div>1 Person</div>
          <div>$590</div>
        </div>
        <div className="flex justify-between pt-1 border-t border-N200 ">
          <div>2-4 Person</div>
          <div>$565</div>
        </div>
      </div>
      <div className="rounded-lg bg-B300 hover:bg-B500 text-white text-lg font-bold cursor-pointer flex justify-center items-center p-4">
        Make a Booking
      </div>

      <div className="rounded-lg bg-G300 hover:bg-G500 text-white text-lg font-bold cursor-pointer flex justify-center items-center p-4">
        Quick Inquiry
      </div>

      <div className="flex flex-col gap-5 ">
        <div className="text-xl font-bold">Route Map & Elevation</div>
        <img
          src={BASE_MEDIA_URL + map}
          className="w-full aspect-square/2 object-cover cursor-pointer rounded-md"
          onClick={() => scrollToSection("maps")}
        />
      </div>
    </div>
  );
}

export default TrekPricingSection;
