import React from "react";
import TrekHeadingTile from "@/components/tiles/TrekHeadingTile";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekRequirementSection({ requirements, gears }) {
  return (
    <section id="requirements" className="flex flex-col gap-5">
      <div className="text-2xl font-bold">Requirements and Gears</div>
      {requirements}
      <div className="flex flex-wrap gap-2">
        {gears?.length ? (
          gears.map((item, index) => (
            <div
              key={index}
              className={` py-2 px-4 rounded-xl flex gap-3 items-center border hover:border-B75 bg-transparent`}
            >
              <img
                decoding="async"
                loading="lazy"
                src={BASE_MEDIA_URL + item.icon}
                className="w-8 aspect-square h-8 "
              />
              <div className="flex flex-col justify-start items-start">
                <div className="text-base text-N500 font-semibold">
                  {item.name}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No gears available</div>
        )}
      </div>
    </section>
  );
}

export default TrekRequirementSection;
