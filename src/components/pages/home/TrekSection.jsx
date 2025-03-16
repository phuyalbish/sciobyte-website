import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchTreks } from "@/apis/treks.js";
const TrekSection = () => {
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
      <section className="container">
        <div className="px-[2rem] md:px-[4.5rem]">
          <h1 className="text-[2.3rem] mb-[3rem] font-semibold">
            Your Tale Begins <span className="text-primary">NOW!</span>
          </h1>
          {/* <div className="flex flex-wrap gap-[1.5rem] place-items-center justify-center items-center"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {treks?.map((trek, index) => (
              <TrekTile key={index} data={trek} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrekSection;
