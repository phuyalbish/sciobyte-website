import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";

import { fetchFavouriteTreks } from "@/apis/treks.js";
// import { BASE_MEDIA_URL } from "@/config/baseurl.js";


function FavoriteTreks() {

const [treks, setTreks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchFavouriteTreks();
      const treksData = response?.results;
      setTreks(treksData);
    })();
  }, []);


  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4rem] mb-20">
      <div className="text-xl font-liches text-left rounded-lg font-semibold">
         {treks?.length ? (treks?.length): ""} Liked Treks
        </div>
    <div className="flex gap-3 flex-wrap flex-grow w-full justify-start items-start container">
             {treks?.length ? (
            treks.map((item, index) => (
              <TrekTile key={index} data={item} />
            ))
          ) : (
            <p className="text-center">No  Liked treks found</p>
          )}
    </div>  
    </div>
  );
}

export default FavoriteTreks;