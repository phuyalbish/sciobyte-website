import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "@/utils/truncate.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function SearchTrekCategoryTile({ image, main_type, type, name, id }) {
  return (
    <Link
      to={`/${main_type}/${id}`}
      className="flex flex-col justify-left gap-1 p-2  min-w-32  max-w-32 rounded-md bg-white/50 hover:bg-white/25   hover:shadow-sm"
    >
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + image}
        className="w-fit aspect-square object-cover rounded-md "
      />
      <div className="text-sm text-left text-N500">{truncate(name, 50)}</div>
      <div className="text-sm  text-left text-N300">
        {main_type}
        {type ? ` of ${type}` : ""}
      </div>
    </Link>
  );
}

export default SearchTrekCategoryTile;
