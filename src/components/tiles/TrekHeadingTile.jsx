import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function TrekHeadingTile({ icon, heading, description, bg = "False" }) {
  return (
    <div
      className={`rounded-xl flex gap-3  items-center justify-start test ${
        bg == "False" ? "bg-transparent" : "bg-B100"
      }`}
    >
      {icon &&
        React.createElement(icon, {
          className: "text-lg text-N900",
        })}
      <div className="flex flex-col justify-start items-start">
        <div className="text-xs text-N500 font-semibold">{heading}</div>
        <div className="text-sm text-N800 font-semibold">{description}</div>
      </div>
    </div>
  );
}

export default TrekHeadingTile;
