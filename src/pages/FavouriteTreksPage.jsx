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
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4rem] mb-20 px-4 md:p-0">
      <div className="text-xl font-liches text-left rounded-lg font-semibold">
         {treks?.length ? (treks?.length): ""} Liked Treks
        </div>
      <div className="grid  w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
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