import React, { useState } from "react";
import TrekHeadingTile from "@/components/tiles/TrekHeadingTile";
import { FaTent } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import TrekScheduleExtraHeadingTile from "@/components/tiles/trek/TrekScheduleExtraHeadingTile";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
const TrekItenaryAccordion = ({ schedule }) => {
  const [isOpenGallerySection, setIsOpenGallerySection] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-7 self-center bg-G300 p-2 rounded-sm text-white" />
  ) : (
    <FaChevronUp className="h-fit w-7 self-center  bg-G300 p-2 rounded-sm text-white" />
  );

  const trekHeadings = [
    {
      icon: FaTent,
      heading: "Accomodation",
      description: schedule?.accomodation,
    },
    {
      icon: FaTruckPlane,
      heading: "Transportaion",
      description: schedule?.transportation_name,
    },
    {
      icon: MdFastfood,
      heading: "Meal",
      description: schedule?.meal_name?.map((meal, index, arr) =>
        index === arr.length - 1 ? ` & ${meal}` : `${meal}, `
      ),
    },
  ];
  return (
    <>
      <div className="cursor-pointer w-full mx-auto select-none  flex flex-col">
        <div
          className={`transition duration-300 ease-in-out  flex md:flex-row flex-col gap-3 `}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex flex-col md:w-20 items-center">
            <div className="px-5 h-8 bg-G300 rounded-tl-3xl w-full text-white items-center justify-center flex text-xl font-bold">
              Day
            </div>
            <div className="text-xl font-bold">{schedule.day}</div>
          </div>
          <div className="flex justify-between  w-full h-fit gap-2">
            <div className="font-bold text-xl">{schedule?.heading}</div>
            {arrowSVG}
          </div>
        </div>

        <div
          className={`md:ml-20 overflow-hidden transition-max-height flex flex-col gap-3 duration-700 ease-in-out ${
            isOpened ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-wrap gap-2">
            {trekHeadings.map((item, index) =>
              item?.description ? (
                <TrekHeadingTile key={index} bg="False" {...item} />
              ) : (
                <span key={index}></span>
              )
            )}
          </div>

          {schedule?.detail}
          <div className="flex flex-col gap-2">
            {schedule?.extra_headings.map((item, index) => (
              <TrekScheduleExtraHeadingTile
                key={index}
                icon={item?.icon}
                name={item?.name}
                description={item?.description}
              />
            ))}
          </div>
          <div className="flex gap-2  relative overflow-x-scroll  w-100 rounded-md">
            <div className="bg-white/50 text-N400 p-1 px-2 rounded-md absolute bottom-3 right-3">
              Scroll --
            </div>
            {schedule?.gallery.map((item, index) => (
              <img
                key={index}
                src={BASE_MEDIA_URL + item.image}
                className="object-cover min-w-[400px] aspect-square overflow-hidden transition-all duration-500 ease-in-out rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrekItenaryAccordion;
