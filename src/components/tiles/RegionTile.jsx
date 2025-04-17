import React from "react";
import { Link } from "react-router-dom";
function RegionTile({ img, name, slug }) {
  return (
    <Link to={`/r/${slug}`}  className="p-2 w-full md:max-w-[400px]  cursor-pointer shadow-lg md:shadow-none m-2 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <p className="text-md font-light">{name}</p>
      <img
        decoding="async"
        loading="lazy"
        src={img}
        className="w-full aspect-square rounded-md"
      />
    </Link>
  );
}

export default RegionTile;
