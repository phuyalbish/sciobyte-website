import React from "react";

function CategoryTile({ img, name }) {
  return (
    <div className="p-5 w-1/3 sm:w-[200px] lg:w-[300px] cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <img src={img} className="w-full aspect-square" />
      <p className="text-md md:text-lg">{name}</p>
    </div>
  );
}

export default CategoryTile;
