import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import { Link } from "react-router-dom";
function BreadCrums({ travel_type, name, category_name, category_id }) {
  return (
    <div className="flex gap-3 items-center text-md md:text-base ">
      <GoHome className="size-5 md:size-8" />
      <GoChevronRight className="size-5 md:size-8" />
      {travel_type}
      <GoChevronRight className="size-5 md:size-8" />
      <Link to={`/category/${category_id}`} className="hover:underline">
        {category_name}
      </Link>
      <GoChevronRight className="size-5 md:size-8" />
      {name}
    </div>
  );
}

export default BreadCrums;
