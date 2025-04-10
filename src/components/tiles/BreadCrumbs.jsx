import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from "react-router-dom";
function BreadCrumbs({
  category_name = null,
  name = null,
  region_name = null,
  region_id = null,
  type_slug = null,
}) {
  return (
    <div className="flex gap-3 items-center text-md md:text-base flex-wrap">
      <Link to="/">
        <GoHome className="size-5 md:size-8" />
      </Link>
      {category_name && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          <Link to={`/type/${type_slug}/`} className="hover:underline">
            {category_name}
          </Link>
        </>
      )}
      {region_name && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          <Link to={`/region/${region_id}`} className="hover:underline">
            {region_name}
          </Link>
        </>
      )}
      {name && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          {name}
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
