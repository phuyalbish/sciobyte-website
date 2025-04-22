import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekScheduleExtraHeadingTile({ name, description }) {
  return (
    <div className="flex  flex-col">
      <div className="flex flex-row items-center gap-2">
        {/* <img
          decoding="async"
          loading="lazy"
          src={BASE_MEDIA_URL + icon}
          className="w-5 h-5"
          alt={name}
        /> */}
        <div className="text-lg font-semibold">{name}</div>
      </div>

      <div className="text-base font-normal">{description}</div>
    </div>
  );
}

export default TrekScheduleExtraHeadingTile;
