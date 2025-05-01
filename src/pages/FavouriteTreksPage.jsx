import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
import { fetchFavouriteTreks } from "@/apis/treks.js";
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
         {treks?.length > 1 ? (treks?.length)+" Liked Treks": "Liked Trek"} 
        </div>
       { Array.isArray(treks) && treks.length > 0 ? (
        <SectionGappingWithoutAnimation>
            {treks.map((item, index) => (
              <TrekTile key={index} data={item} />
            ))
          }
            </SectionGappingWithoutAnimation>
          )
          
          : (
            <p className="text-center">No  Liked treks found</p>
          )}
    </div>  
    
  );
}

export default FavoriteTreks;