import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "@/utils/truncate.js";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function SearchTrekRegionTile({ name, image, slug, category_name, category_slug, main_category, main_category_slug }) {
  return (
    <Link
      to={`/${main_category_slug}/${slug}`}
      className="flex flex-col justify-left gap-1 p-2  min-w-48  max-w-48 rounded-md bg-white/50 hover:bg-white/25   hover:shadow-sm"
    >
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + image}
        className="w-full aspect-square object-cover rounded-md "
      />
      <div className="text-xs text-left text-N900">{truncate(name, 50)}</div>
      <div className="text-xs  text-left text-N700">
        {main_category}
        {category_name ? ` of ${category_name}` : ""}
      </div>
    </Link>
  );
}

export default SearchTrekRegionTile;
