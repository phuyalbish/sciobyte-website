import { useEffect, useState } from "react";
import React from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

const TrekSection = ({ plainText, blueText }) => {
  const [treks, setTreks] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetchTreks();
      const treksData = response?.data?.results;
      setTreks(treksData);
    })();
  }, []);

  return (
    <div className="md:px-[4.5rem] bottom_popup ">
      <h1 className="home-headings font-semibold">
        {plainText} <span className="text-B400"> {blueText}</span>
      </h1>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {treks?.map((trek, index) => (
          <TrekTile key={index} data={trek} />
        ))}
      </div>
      <div className="md:hidden">
        <EmblaCarousel>
          {treks?.map((trek, index) => (
            <div key={index} className="embla__slide min-w-full">
              <TrekTile data={trek} />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </div>
  );
};

export default TrekSection;
