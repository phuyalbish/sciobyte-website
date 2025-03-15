import React from "react";

import { useEffect, useState } from "react";
import SopontaneousTrekTile from "@/components/tiles/SopontaneousTrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";
import { v4 as uuidv4 } from "uuid";

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
    <div>
      <div className="flex flex-col mt-10 gap-5 ">
        <div className="hidden md:text-xl text-lg lg:text-3xl  md:flex flex-wrap items-center justify-center gap-2 ">
          <span className="font-bold text-white bg-G200 p-2 rounded-2xl mx-2">
            SPONTANEOUS
          </span>
          Decision
          <span className="font-bold text-white bg-G200 p-2 rounded-2xl mx-2">
            ADVENTEROUS
          </span>
          Trials
        </div>
        <div className="md:hidden text-xl  font-bold text-G500 flex-wrap items-center justify-center gap-2 ">
          Spontaneouse Decision Adventerous Trials
        </div>
        <div className="text-lg">Last Moment Deals</div>
      </div>
      <div className="flex relative flex-wrap gap-1 w-[90vw] m-auto justify-center items-center">
        {treks?.map((trek) => (
          <SopontaneousTrekTile key={uuidv4()} data={trek} />
        ))}
      </div>
    </div>
  );
}

export default SpontaneousTrekSection;
