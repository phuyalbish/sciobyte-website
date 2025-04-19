import React from "react";
import { Link } from "react-router-dom";

import BG from "@/assets/PreferenceBG.png"
function PreferenceTIle({ img, name, slug }) {
  return (
    <Link to={slug}  className="w-full relative md:max-w-[250px] aspect-square  cursor-pointer shadow-lg md:shadow-none m-2 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <img className="absolute w-full h-full z-0 rounded-md" src={BG} alt="" />
     <div className="p-2 z-10 rounded-md">
       <p className=" text-left  text-base font-light">{name}</p>
      <img
        decoding="async"
        loading="lazy"
        src={img}
        className="w-full aspect-square rounded-md"
        
      />

     </div>
    </Link>
  );
}

export default PreferenceTIle;
