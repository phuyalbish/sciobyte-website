import React from "react";
import { useNavigate } from "react-router-dom";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function HeaderTrekRegionTile({ image, type, name, id, onclick }) {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer  flex gap-2 p-1 items-center shadow-lg w-full  rounded-md hover:bg-white/25 "
      onClick={() => {
        onclick();
        navigate(`/${type}/${id}`);
      }}
    >
      <img
        decoding="async"
        loading="lazy"
        src={BASE_MEDIA_URL + image}
        alt="header Trek Region Image"
        className="w-12 h-12 aspect-square rounded-md"
      />
      <div className="flex flex-col justify-start items-start">
        <div className="text-base text-start">{name}</div>
        <div className="text-md text-N300 text-start">{type}</div>
      </div>
    </div>
  );
}

export default HeaderTrekRegionTile;
