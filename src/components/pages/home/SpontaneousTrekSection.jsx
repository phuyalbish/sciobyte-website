import React from "react";

import { useEffect, useState } from "react";
import SopontaneousTrekTile from "@/components/tiles/SopontaneousTrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";

import EmblaCarousel from "@/components/carousel/EmblaCarousel";
function SpontaneousTrekSection() {
  const [treks, setTreks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchTreks();
      const treksData = response?.data?.results;
      setTreks(treksData);
    })();
  }, []);

  return (
    <div className="relative flex justify-center  items-center flex-col">
      <div className="md:px-[4.5rem] flex flex-col gap-10  ">
        <div className="flex flex-col gap-5 ">
          <div className=" home-headings flex flex-wrap items-center justify-center gap-2 ">
            <span className="font-bold text-white bg-G200 p-2 rounded-2xl  home-headings">
              SPONTANEOUS
            </span>
            <span>Decision</span>
            <span className="font-bold text-white bg-G200 p-2 rounded-2xl  home-headings">
              ADVENTEROUS
            </span>
            <span>Trials</span>
          </div>
          <div className="text-lg">Last Moment Deals</div>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-10 justify-items-center">
          {treks?.map((trek, index) => (
            <SopontaneousTrekTile key={index} data={trek} />
          ))}
        </div>

        <div className="sm:hidden">
          <EmblaCarousel>
            {treks?.map((trek, index) => (
              <div key={index} className="embla__slide min-w-full">
                <SopontaneousTrekTile key={index} data={trek} />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  );
}

export default SpontaneousTrekSection;
