import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from "react-router-dom";
function BreadCrumbs({
  type_name = null,
  name = null,
  category_name = null,
  category_id = null,
  type_slug = null,
}) {
  return (
    <div className="flex gap-3 items-center text-md md:text-base flex-wrap">
      <Link to="/">
        <GoHome className="size-5 md:size-8" />
      </Link>
      {type_name && (
        <>
          <GoChevronRight className="size-5 md:size-8" />
          <Link to={`/type/${type_slug}/`} className="hover:underline">
            {type_name}
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
