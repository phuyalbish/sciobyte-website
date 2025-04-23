import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import DOMPurify from 'dompurify';
import { fetchIndivisualDistricts } from "@/apis/districts.js";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";
function IndivisualDistrictPage() {
  const [district, setDistrict] = useState(null);
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getDistrict = async () => {
      try {
        const response = await fetchIndivisualDistricts(id);

        const sanitizedContent = DOMPurify.sanitize(response?.description);
        console.log(sanitizedContent)
        setDistrict(response);
        setContent(sanitizedContent);
      } catch (error) {
        console.error("Error fetching district:", error);
      }
    };

    getDistrict();
  }, [id]);

  return (
    <div className="flex flex-col gap-5 mt-5 w-full md:px-[4.5rem] px-5 mb-20">
      {/* <BreadCrumbs travel_type={district?.caetgory_name} name={district?.name} /> */}
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + district?.image}
        alt={district?.name}
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl lg:text-xl  font-liches text-left ">
          {district?.name}
        </div>

      <div className="text-md text-left" dangerouslySetInnerHTML={{ __html: content }} />
        {/* <div {district?.description}</div> */}
      </div>
       <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
        {district?.trek_count} Travel{district?.trek_count >= 2 ? "s" : ""}
      </h1>
      <div className="flex gap-3 flex-wrap flex-grow w-full justify-start items-start">
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
