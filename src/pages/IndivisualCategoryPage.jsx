import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RegionTile from "@/components/tiles/RegionTile.jsx";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGappingWithoutAnimation from '@/components/SectionGappingWithoutAnimation';
import DOMPurify from 'dompurify';
import { fetchIndivisualCategories } from "@/apis/categories.js";
import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";
import PageConatiner from "@/components/PageContainer.jsx";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

function IndivisualCategoryPage() {
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetchIndivisualCategories(id);

        const sanitizedContent = DOMPurify.sanitize(response?.description);
        setCategory(response);
        setContent(sanitizedContent);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    getCategory();
  }, [id]);

  return (
    <PageConatiner>
      
      <ImageSkeleton
        src={CLOUDINARY_BASE_MEDIA_URL + category?.image}
        alt={category?.name}
        className="w-full aspect-video max-h-[60vh] object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <div className="text-xl lg:text-xl  font-liches text-left ">
          {category?.name}
        </div>

      <div className="text-md text-justify custom-rich-content" dangerouslySetInnerHTML={{ __html: content }} />
      
      </div>


<div className="flex flex-col gap-4">
       <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
        {category?.trek_count} Travel{category?.trek_count >= 2 ? "s" : ""}
      </h1>
      
        <SectionGappingWithoutAnimation>
      {category?.treks?.map((item, index) => (
          <TrekTile
            key={index}
            data={item}
          />
        ))}
        </SectionGappingWithoutAnimation>
      </div>
{/* 
<div className="flex flex-col gap-4">
       <h1 className="text-lg font-liches md:text-xl font-regular w-full text-left">
        {category?.region_count} Region{category?.region_count >= 2 ? "s" : ""}
      </h1>

      <div className="grid  w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {category?.regions?.map((item, index) => (
          <RegionTile
                    key={index}
                    img={BASE_MEDIA_URL+ item.image}
                    slug={item.slug}
                    name={item.name}
          />
        ))}
      </div>
      </div> */}
    </PageConatiner>
  );
}

export default IndivisualCategoryPage;
