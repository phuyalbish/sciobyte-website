import React from "react";
import { Link } from "react-router-dom";
function RegionTile({ img, name, id }) {
  return (
    <Link
      to={`/region/${id}`}
      className="p-2 w-full md:max-w-[300px] cursor-pointer shadow-lg md:shadow-none m-2 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white"
    >
      <img
        decoding="async"
        loading="lazy"
        src={img}
        className="w-full aspect-square rounded-md"
      />
      <p className="text-md md:text-lg">{name}</p>
    </Link>
  );
}

export default RegionTile;
