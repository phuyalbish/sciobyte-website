import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchIndivisualRegions } from "@/apis/regions.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualRegionPage() {
  const [region, setRegion] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRegion = async () => {
      try {
        const response = await fetchIndivisualRegions(id);
        setRegion(response);
      } catch (error) {
        console.error("Error fetching region:", error);
      }
    };

    getRegion();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full  md:px-[4.5rem] px-5 mb-20">
      <BreadCrumbs
        category_name={region?.category_name}
        type_slug={region?.type_slug}
        name={region?.name}
      />
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + region?.image}
        alt=""
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-2xl lg:text-4xl  text-left font-bold">
          {region?.name}
        </div>
        <div className="text-md text-left">{region?.description}</div>
      </div>
      <div className="text-2xl text-left font-semibold">
        {region?.trek_count} Travel{region?.trek_count >= 2 ? "s" : ""}
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
        {region?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={{ ...item, image: BASE_MEDIA_URL + item.image }}
          />
        ))}
      </div>
    </div>
  );
}

export default IndivisualRegionPage;
