import React from "react";

import { useEffect, useState } from "react";
import SopontaneousTrekTile from "@/components/tiles/SopontaneousTrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";

import EmblaCarousel from "@/components/carousel/EmblaCarousel";
function SpontaneousTrekSection({treks}) {

  return (
    <div className="relative flex justify-center  items-center flex-col">
      <div className="md:px-[4.5rem] flex flex-col gap-10  ">
        <div className="flex flex-col gap-5 ">
          <div className=" text-2xl  md:text-3xl flex flex-wrap items-center justify-center gap-2 ">
            <span className=" font-liches text-white bg-B500 p-2 rounded-2xl  text-2xl sm:text-3xl md:text-4xl">
              SPONTANEOUS
            </span>
            <span className="font-liches text-N900  p-2   text-2xl sm:text-3xl md:text-4xl">DECISIONS,</span>
            <span className="font-liches text-white bg-G500 p-2 rounded-2xl  text-2xl sm:text-3xl md:text-4xl">
              ADVENTEROUS
            </span>
            <span className="font-liches text-N900 p-2 rounded-2xl  text-2xl sm:text-3xl md:text-4xl">TRAILS.</span>
          </div>
          <div className=" text-G300 text-3xl">Last Moment Deals</div>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-10 justify-items-center bottom_popup">
           {
        Array.isArray(treks) && treks.length > 0 ? (
          treks?.map((trek, index) => (
            <SopontaneousTrekTile key={index} data={trek} />
         )) ) : (
              <p className="text-gray-500">No Treks available</p>
            )}
        </div>

        <div className="sm:hidden bottom_popup">
          {
        Array.isArray(treks) && treks.length > 0 ? (
          <EmblaCarousel>
             {
            treks?.map((trek, index) => (
              <div key={index} className="embla__slide min-w-full">
                <SopontaneousTrekTile key={index} data={trek} />
              </div>
            ))
          }
          </EmblaCarousel>
           ) : (
              <p className="text-gray-500">No Treks available</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default SpontaneousTrekSection;
