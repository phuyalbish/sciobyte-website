import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import CategoryTile from "@/components/tiles/CategoryTile.jsx";
import { fetchIndivisualTypes } from "@/apis/types.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualTypePage() {
  const [type, setType] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getType = async () => {
      try {
        const response = await fetchIndivisualTypes(id);
        setType(response);
      } catch (error) {
        console.error("Error fetching type:", error);
      }
    };

    getType();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5">
      <BreadCrumbs name={type?.name} />
      <img
        src={BASE_MEDIA_URL + type?.image}
        alt=""
        className="w-full h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-2xl lg:text-4xl  text-left font-bold">
          {type?.name}
        </div>
        <div className="text-md text-left">{type?.description}</div>
      </div>
      <div className="text-2xl text-left font-semibold">
        {type?.trek_count} Travel{type?.trek_count >= 2 ? "s" : ""}
      </div>
      <div className="flex gap-3 flex-wrap flex-grow w-full sm:items-center">
        {type?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={{ ...item, image: BASE_MEDIA_URL + item.image }}
          />
        ))}
      </div>

      <div className="text-2xl text-left font-semibold">
        {type?.category_count} Categor{type?.category_count >= 2 ? "ies" : "y"}
      </div>
      <div className="flex gap-3 flex-wrap flex-grow w-full sm:items-center">
        {type?.treks?.map((item, index) => (
          <CategoryTile
            key={index}
            name={item?.name}
            img={BASE_MEDIA_URL + item?.image}
          />
        ))}
      </div>
    </div>
  );
}

export default IndivisualTypePage;
