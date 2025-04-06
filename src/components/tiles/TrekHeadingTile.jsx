import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function TrekHeadingTile({ icon, heading, description, bg = "True" }) {
  return (
    <div
      className={` py-2 px-4 rounded-xl mb-1 mr-1 flex gap-3 items-center ${
        bg == "False" ? "bg-transparent" : "bg-B75"
      }`}
    >
      {icon &&
        React.createElement(icon, {
          className: "text-xl text-N900",
        })}
      <div className="flex flex-col justify-start items-start">
        <div className="text-sm text-N500 font-semibold">{heading}</div>
        <div className="text-base text-N800 font-semibold">{description}</div>
      </div>
    </div>
  );
}

export default TrekHeadingTile;
