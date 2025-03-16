import React from "react";
import { Link } from "react-router-dom";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function SearchTrekCategoryTile({ image, main_type, type, name, id }) {
  function truncateText(text, maxLength = 50) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }
  return (
    <Link
      to={`/${main_type}/${id}`}
      className="flex flex-col justify-left gap-1 p-2  w-32  rounded-md hover:bg-white/25   hover:shadow-sm"
    >
      <img
        src={BASE_MEDIA_URL + image}
        className="w-fit aspect-square object-cover rounded-md "
      />
      <div className="text-sm text-left">{truncateText(name, 50)}</div>
      <div className="text-sm text-N300 text-left">
        {main_type}
        {type ? ` of ${type}` : ""}
      </div>
    </Link>
  );
}

export default SearchTrekCategoryTile;
