import React from "react";

function CategoryTile({ img, name }) {
  return (
    <div className="p-5  sm:w-[200px] lg:w-[300px] cursor-pointer shadow-lg md:shadow-none m-3 hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white">
      <img
        decoding="async"
        loading="lazy"
        src={img}
        className="w-full aspect-square"
      />
      <p className="text-md md:text-lg">{name}</p>
    </div>
  );
}

export default CategoryTile;
