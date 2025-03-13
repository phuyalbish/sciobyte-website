import React from "react";
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function TrekHeadingTile({
  icon,
  heading,
  description,
  extraTextInDescription,
}) {
  return (
    <div className="bg-B75 py-2 px-4 rounded-xl flex gap-3 items-center">
      {icon &&
        React.createElement(icon, {
          className: "text-3xl text-N500",
        })}
      <div className="flex flex-col justify-start items-start">
        <div className="text-sm text-N200 font-semibold">{heading}</div>
        <div className="text-base text-N500 font-semibold">{description}</div>
      </div>
    </div>
  );
}

export default TrekHeadingTile;
