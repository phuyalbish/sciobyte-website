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
    <div className="flex gap-1font-light  items-center text-base flex-wrap text-left">
      <Link 
        aria-label="Home Page" to="/">
        <GoHome className="size-6" />
      </Link>
      {category_name && (
        <>
          <GoChevronRight className="size-6" />
          <Link 
          aria-label={`Category - ${category_slug}`}
          to={`/category/${category_slug}/`} className="hover:underline">
            {category_name}
          </Link>
        </>
      )}
      {region_name && (
        <>
          <GoChevronRight className="size-6" />
          <Link 
          
          aria-label={`Region - ${region_slug}`}
          to={`/region/${region_slug}`} className="hover:underline">
            {region_name}
          </Link>
        </>
      )}
      {name && (
        <>
          <GoChevronRight className="size-6" />
          {name}
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
