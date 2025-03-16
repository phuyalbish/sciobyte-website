import React from "react";
import { Link } from "react-router-dom";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function NavbarTrekCategoryTile({ image, type, name, id, onClick }) {
  return (
    <Link
      to={`/${type}/${id}`}
      className="flex gap-2 p-1 rounded-md hover:bg-white/25   hover:shadow-sm"
      onClick={onClick}
    >
      <img
        src={BASE_MEDIA_URL + image}
        className="w-12 h-12 aspect-square rounded-md"
      />
      <div className="flex flex-col justify-start items-start">
        <div className="text-base">{name}</div>
        <div className="text-md text-N300">{type}</div>
      </div>
    </Link>
  );
}

export default NavbarTrekCategoryTile;
