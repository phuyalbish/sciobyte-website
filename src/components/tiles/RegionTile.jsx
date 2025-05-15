import { Link } from "react-router-dom";
import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";

import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

function RegionTile({ img, name, slug }) {
  return (
    <Link 
          aria-label={`Region - ${name}`} to={`/region/${slug}`}  className="p-2 w-full md:max-w-[250px] aspect-square  cursor-pointer shadow-lg md:shadow-none m-2 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <p className="text-md font-light">{name}</p>
      <ImageSkeleton
        src={CLOUDINARY_BASE_MEDIA_URL+img}
        alt={name}
        className="w-full aspect-square rounded-md"
        
      />
    </Link>
  );
}

export default RegionTile;
