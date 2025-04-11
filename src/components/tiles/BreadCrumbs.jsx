import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from "react-router-dom";
function BreadCrumbs({
category_name = null,
  name = null,
  region_name = null,
  region_slug = null,
  category_slug = null,
}) {
  console.log(category_slug)
  return (
    <div className="flex gap-1font-light  items-center text-sm flex-wrap">
      <Link to="/">
        <GoHome className="size-3 md:size-6" />
      </Link>
      {region_name && (
        <>
          <GoChevronRight className="size-3 md:size-6" />
          <Link to={`/c/${category_slug}/`} className="hover:underline">
            {category_name}
          </Link>
        </>
      )}
      {region_name && (
        <>
          <GoChevronRight className="size-3 md:size-6" />
          <Link to={`/r/${region_slug}`} className="hover:underline">
            {region_name}
          </Link>
        </>
      )}
      {name && (
        <>
          <GoChevronRight className="size-3 md:size-6" />
          {name}
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
