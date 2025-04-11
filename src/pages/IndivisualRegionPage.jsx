import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "@/components/tiles/BreadCrumbs";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import DOMPurify from 'dompurify';
import { fetchIndivisualRegions } from "@/apis/regions.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function IndivisualRegionPage() {
  const [region, setRegion] = useState(null);
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRegion = async () => {
      try {
        const response = await fetchIndivisualRegions(id);

        const sanitizedContent = DOMPurify.sanitize(response?.description);
        console.log(sanitizedContent)
        setRegion(response);
        setContent(sanitizedContent);
      } catch (error) {
        console.error("Error fetching region:", error);
      }
    };

    getRegion();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
      {/* <BreadCrumbs travel_type={region?.category_name} name={region?.name} /> */}
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + region?.image}
        alt=""
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl lg:text-xl  font-liches text-left ">
          {region?.name}
        </div>

      <div className="text-md text-left" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
       <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
        {region?.trek_count} Travel{region?.trek_count >= 2 ? "s" : ""}
      </h1>
      <div className="flex gap-3 flex-wrap flex-grow w-full justify-start items-start">
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
