import React from "react";
import { GoHome } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function BreadCrums({ travelType, location, name }) {
  return (
    <div className="flex gap-3 items-center ">
      <GoHome className="size-8" />
      <GoChevronRight className="size-8" />
      {travelType}
      <GoChevronRight className="size-8" />
      {location}
      <GoChevronRight className="size-8" />
      {name}
    </div>
  );
}

export default BreadCrums;
