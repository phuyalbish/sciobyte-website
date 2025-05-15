import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
import DOMPurify from 'dompurify';
import { fetchIndivisualRegions } from "@/apis/regions.js";
import PageConatiner from "@/components/PageContainer.jsx";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";
function IndivisualRegionPage() {
  const [region, setRegion] = useState(null);
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getRegion = async () => {
      try {
        const response = await fetchIndivisualRegions(id);

        const sanitizedContent = DOMPurify.sanitize(response?.description);
        setRegion(response);
        setContent(sanitizedContent);
      } catch (error) {
        console.error("Error fetching region:", error);
      }
    };

    getRegion();
  }, [id]);

  return (
    <PageConatiner>
      {/* <BreadCrumbs travel_type={region?.category_name} name={region?.name} /> */}
      <ImageSkeleton
        src={CLOUDINARY_BASE_MEDIA_URL + region?.image}
        alt={region?.name}
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl lg:text-xl  font-liches text-left ">
          {region?.name}
        </div>

      <div className="text-md text-justify custom-rich-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
       <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
        {region?.trek_count} Travel{region?.trek_count >= 2 ? "s" : ""}
      </h1>

        <SectionGappingWithoutAnimation>
        {region?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={item}
          />
        ))}
        </SectionGappingWithoutAnimation>
      </PageConatiner>
  );
}

export default IndivisualRegionPage;
