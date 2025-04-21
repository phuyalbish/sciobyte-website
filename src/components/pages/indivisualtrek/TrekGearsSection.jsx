import React from "react";

import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekRequirementSection({gears }) {
  return (
    <section id="gears">
    <div  className="flex flex-col gap-5">
      <div className="text-xl tracking-wide font-liches font-light">Gears</div>
    
      <div className="flex flex-wrap gap-2">
        {gears?.length ? (
          gears.map((item, index) => (
            <div
              key={index}
              className={` py-2 px-4 rounded-xl flex gap-3 items-center  bg-G200 cursor-pointer`}
            >
              <img
                decoding="async"
                loading="lazy"
                src={BASE_MEDIA_URL + item.icon}
                className="w-8 aspect-square h-8 "
              />
              <div className="flex flex-col justify-start items-start">
                <div className="text-base text-N900 font-semibold">
                  {item.name}
                </div>
              </div>
            </div>
          ))
        ) : ""}
      </div>

      </div>
    </section>
  );
}

export default TrekRequirementSection;
