import { useEffect, useState } from "react";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
import { fetchFavouriteTreks } from "@/apis/treks.js";
import PageConatiner from "@/components/PageContainer.jsx";

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
 <PageConatiner>
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
</PageConatiner>
    
  );
}

export default FavoriteTreks;