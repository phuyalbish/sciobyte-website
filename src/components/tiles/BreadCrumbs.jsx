import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from "react-router-dom";
function BreadCrumbs({
  travel_type = null,
  name = null,
  category_name = null,
  category_id = null,
}) {
  return (
    <div className="flex gap-3 items-center text-md md:text-base flex-wrap">
      <GoHome className="size-5 md:size-8" />
      {travel_type && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          <Link to={`/type/${travel_type}`} className="hover:underline">
            {travel_type}
          </Link>
        </>
      )}
      {category_name && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          <Link to={`/category/${category_id}`} className="hover:underline">
            {category_name}
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
