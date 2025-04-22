import React from "react";
import { Link } from "react-router-dom";

import BG from "@/assets/PreferenceBG.png"
function PreferenceTIle({ img, name, slug }) {
  return (
    <Link 
          aria-label={name} to={slug}  className="w-full overflow-hidden relative md:max-w-[250px] aspect-square  cursor-pointer shadow-lg md:shadow-none m-2 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <img className="absolute w-full overflow-hidden z-0 rounded-md" src={BG} alt="Background" />
     <div className="p-2 z-10 rounded-md">
       <p className=" text-center  text-base font-bold">{name}</p>
      <img
        decoding="async"
        loading="lazy"
        src={img}
        alt={`Image of ${name}`}
        className="w-full aspect-square rounded-md"
        
      />

     </div>
    </Link>
  );
}

export default PreferenceTIle;
