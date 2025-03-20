import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekScheduleExtraHeadingTile({ icon, name, description }) {
  return (
    <div className="flex  flex-col">
      <div className="flex flex-row items-center gap-2">
        <img
          decoding="async"
          loading="lazy"
          src={BASE_MEDIA_URL + icon}
          className="w-5 h-5"
        />
        <div className="text-xl font-bold">{name}</div>
      </div>

      <div className="text-base font-normal ml-7">{description}</div>
    </div>
  );
}

export default TrekScheduleExtraHeadingTile;
