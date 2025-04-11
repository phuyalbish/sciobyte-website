import React from "react";
import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
function TrekOverviewSection({ description, challenges }) {
  const sanitizedContent = DOMPurify.sanitize(description);
  return (
    <section id="overview" className="flex flex-col gap-5">
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
      <div className="text-base font-semibold">Challenges:</div>
      <div className="flex flex-wrap gap-2">
        {challenges?.length ? (
          challenges.map((item, index) => (
            <div
              key={index}
              className={` py-2 px-4 rounded-xl flex gap-3 items-center border hover:border-B75 bg-transparent cursor-pointer`}
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
        ) : ""}
      </div>
    </section>
  );
}

export default TrekOverviewSection;
