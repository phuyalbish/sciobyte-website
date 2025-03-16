import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import { fetchIndivisualDistricts } from "@/apis/districts.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualDistrictPage() {
  const [district, setDistrict] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getDistrict = async () => {
      try {
        const response = await fetchIndivisualDistricts(id);
        setDistrict(response);
      } catch (error) {
        console.error("Error fetching district:", error);
      }
    };

    getDistrict();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
      <BreadCrumbs travel_type={district?.type_name} name={district?.name} />
      <img
        src={BASE_MEDIA_URL + district?.image}
        alt=""
        className="w-full h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-2xl lg:text-4xl  text-left font-bold">
          {district?.name}
        </div>
        <div className="text-md text-left">{district?.description}</div>
      </div>
      <div className="text-2xl text-left font-semibold">
        {district?.trek_count} Travel{district?.trek_count >= 2 ? "s" : ""}
      </div>
      <div className="flex gap-3 flex-wrap flex-grow w-full sm:items-center">
        {district?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={{ ...item, image: BASE_MEDIA_URL + item.image }}
          />
        ))}
      </div>
    </div>
  );
}

export default IndivisualDistrictPage;
