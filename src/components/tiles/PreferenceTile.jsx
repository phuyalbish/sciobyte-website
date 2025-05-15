
import { Link } from "react-router-dom";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

import BG from "@/assets/PreferenceBG.png"
function PreferenceTIle({ img, name, slug }) {
  return (
    <Link 
          aria-label={name} to={slug}  className="group w-full overflow-hidden relative md:max-w-[250px] aspect-square  cursor-pointer shadow-lg md:shadow-none hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <img className="absolute w-full overflow-hidden z-0 rounded-md" src={BG} alt="Background" />
     <div className="p-2 z-10 rounded-md">
       <p className=" text-center  text-base font-bold">{name}</p>
      <ImageSkeleton
        src={img}
        alt={`Image of ${name}`}
        className="w-full  aspect-square rounded-md group-hover:scale-105 scale-100 transition-all duration-500 ease-in-out"
        
      />

     </div>
    </Link>
  );
}

export default PreferenceTIle;
