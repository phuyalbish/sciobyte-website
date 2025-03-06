import React from "react";

function CategoryTile({ img, name }) {
  return (
    <div className="p-5 rounded-md flex flex-col gap-3  bg-white">
      <img src={img} alt="" className="w-52 h-52 " />
      <p className="text-lg">{name}</p>
    </div>
  );
}

export default CategoryTile;
