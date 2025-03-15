import React from "react";
import { FaStar } from "react-icons/fa";
function ReviewTile({ star, name, reviewDetail, profile }) {
  return (
    <div className="transition-all duration-300 cursor-pointer relative flex flex-col hover:shadow-lg rounded-3xl hover:bg-B50 gap-5  md:w-1/3 p-5 justify-start items-start">
      <div className="flex gap-1">
        {Array.from({ length: star || 0 }).map((_, index) => (
          <FaStar key={index} className="text-yellow-300" size={20} />
        ))}
      </div>
      <div className="flex gap-2 justify-center items-center">
        <img
          src={profile}
          alt=""
          className="w-12 h-12 rounded-full  object-cover z-0 "
        />
        <div className="text-base">{name}</div>
      </div>
      <div className="text-sm text-left">{reviewDetail}</div>
    </div>
  );
}

export default ReviewTile;
