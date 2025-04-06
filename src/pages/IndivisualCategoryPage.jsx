import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import RegionTile from "@/components/tiles/RegionTile.jsx";
import { fetchIndivisualCategories } from "@/apis/categories.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualCategoryPage() {
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetchIndivisualCategories(id);
        setCategory(response);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    getCategory();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
      <BreadCrumbs name={category?.name} />
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + category?.image}
        alt=""
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-2xl lg:text-4xl  text-left font-bold">
          {category?.name}
        </div>
        <div className="text-md text-left">{category?.description}</div>
      </div>
      <div className="text-2xl text-left font-semibold">
        {category?.trek_count} Travel{category?.trek_count >= 2 ? "s" : ""}
      </div>
      <div className="flex gap-3 flex-wrap flex-grow w-full sm:items-center">
        {category?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={{ ...item, image: BASE_MEDIA_URL + item.image }}
          />
        ))}
      </div>

      <div className="text-2xl text-left font-semibold">
        {category?.region_count} Categor{category?.region_count >= 2 ? "ies" : "y"}
      </div>
      <div className="flex gap-3 flex-wrap flex-grow w-full sm:items-center">
        {category?.treks?.map((item, index) => (
          <RegionTile
            key={index}
            name={item?.name}
            img={BASE_MEDIA_URL + item?.image}
          />
        ))}
      </div>
    </div>
  );
}

export default IndivisualCategoryPage;
