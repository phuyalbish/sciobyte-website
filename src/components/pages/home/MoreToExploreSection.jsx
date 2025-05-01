import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";

import SectionGapping from '@/components/SectionGapping';
const MoreToExploreSection = () => {
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
      <section className="bg-[#B0E4DD]">
        <div className="px-[2rem] md:px-[4rem] py-5">
          <div className="text-3xl sm:text-4xl md:text-5xl  mb-[3rem] font-semibold">
            Discover more to Explore
          </div>
             {
        Array.isArray(treks) && treks.length > 0 ? (
      <SectionGapping>
        {treks?.map((trek, index) => (
            <TrekTile key={index} data={trek} />
            )) }
      </SectionGapping>
      ) : (
              <p className="text-gray-500">No Treks available</p>
            )}
        </div>
      </section>
    </>
  );
};

export default MoreToExploreSection;
