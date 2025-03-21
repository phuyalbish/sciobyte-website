import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineErrorOutline } from "react-icons/md";

function TrekIncludedSection({ includes, excludes }) {
  return (
    <section id="included" className="flex md:flex-row flex-col  gap-5">
      <div className="flex flex-col md:w-1/2  gap-5">
        {Array.isArray(includes) && includes.length > 0 ? (
          <div className="flex flex-col gap-5">
            <div className="text-xl font-bold">Included</div>
            <div className="flex flex-col gap-2">
              {includes.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex felx-row gap-2 items-center  ">
                    <div className="flex min-w-7 min-h-7 ">
                      <IoCheckmark className="w-full h-full" />
                    </div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                  <div className="font-regular ml-9">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No Data Found</p>
        )}
      </div>

      <div className="flex flex-col md:w-1/2 gap-5">
        {Array.isArray(excludes) && excludes.length > 0 ? (
          <div className="flex flex-col gap-5">
            <div className="text-xl font-bold">Excluded</div>
            <div className="flex flex-col gap-2">
              {excludes.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex felx-row gap-2 items-center  ">
                    <div className="flex min-w-6 min-h-6">
                      <MdOutlineErrorOutline className="w-full h-full " />
                    </div>
                    <div className="font-bold">{item.title}</div>
                  </div>
                  <div className="font-regular ml-8">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </section>
  );
}

export default TrekIncludedSection;
