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
    <>
      <div className="px-[2rem] md:px-[4.5rem] flex flex-col gap-10">
        <div className="flex flex-col mt-10 gap-5">
          <div className="md:text-xl text-lg lg:text-3xl  flex flex-wrap items-center justify-center gap-[0.1rem] ">
            <span className="font-bold text-white bg-G200 p-2 rounded-2xl mx-2">
              SPONTANEOUS
            </span>
            Decision
            <span className="font-bold text-white bg-G200 p-2 rounded-2xl mx-2">
              ADVENTEROUS
            </span>
            Trials
          </div>
          <div className="text-lg">Last Moment Deals</div>
        </div>
        {/* <div className="flex relative flex-wrap gap-[2rem] w-full px-[1rem] md:px-0 sm:ml-[5vh] place-items-center justify-center items-center"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-[2rem]">
          {treks?.map((trek) => (
            <SopontaneousTrekTile key={uuidv4()} data={trek} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SpontaneousTrekSection;
