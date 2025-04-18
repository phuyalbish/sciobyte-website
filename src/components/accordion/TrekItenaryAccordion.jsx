import React, { useState } from "react";
import TrekHeadingTile from "@/components/tiles/TrekHeadingTile";
import { FaTent } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import DOMPurify from 'dompurify';
export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
import TrekScheduleExtraHeadingTile from "@/components/tiles/trek/TrekScheduleExtraHeadingTile";

const TrekItenaryAccordion = ({ schedule }) => {

  const sanitizedContent = DOMPurify.sanitize(schedule?.detail);
  // const [isOpenGallerySection, setIsOpenGallerySection] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-7 self-center bg-G300 p-2 rounded-sm text-white" />
  ) : (
    <FaChevronUp className="h-fit w-7 self-center  bg-G300 p-2 rounded-sm text-white" />
  );

  const trekHeadings = [

        {
          icon: FaMountainSun,
          heading: "Max Altitude",
          description: schedule?.accomodations?.name,
        },
    {
      icon: FaTent,
      heading: "Accomodation",
        description: schedule?.accomodations?.map((accomodation, index, arr) => {
          if (arr.length === 1) return accomodation.name;
          if (index === arr.length - 1) return ` & ${accomodation.name}`;
          return `${accomodation.name}, `;
        }),
    },
    {
      icon: FaTruckPlane,
      heading: "Transportaion",
      description: schedule?.transportations?.name,
    },
   {
    icon: MdFastfood,
    heading: "Meal",
    description: schedule?.meals?.map((meal, index, arr) => {
      if (arr.length === 1) return meal.name;
      if (index === arr.length - 1) return ` & ${meal.name}`;
      if (index === arr.length - 2) return `${meal.name}`;
      return `${meal.name}, `;
    }),
  }
  ];
  return (
    <>
      <div className="cursor-pointer w-full mx-auto select-none  flex flex-col">
        <div
          className={`transition duration-300 ease-in-out  flex md:flex-row flex-col gap-3  justify-start`}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex flex-col md:w-20 items-center">
            <div className="px-5 h-8 bg-G300 rounded-tl-3xl w-full text-white items-center justify-center flex text-md">
              Day
            </div>
            <div className="text-md font-bold">{schedule.day}</div>
          </div>
          <div className="flex justify-between   w-full h-fit gap-2 ">
            <div className="font-bold text-md">{schedule?.heading}</div>
            {arrowSVG}
          </div>
        </div>
 {isOpened && (
        <div
          className={`md:ml-20 overflow-hidden transition-max-height flex flex-col gap-3 duration-700 ease-in-out`}
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

          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          <div className="flex gap-2  relative overflow-x-scroll  w-100 rounded-md">
            <div className="bg-white/50 text-N400 p-1 px-2 rounded-md absolute bottom-3 right-3">
              Scroll --
            </div>
            {schedule?.gallery.map((item, index) => (
              <img
                decoding="async"
                loading="lazy"
                key={index}
                src={BASE_MEDIA_URL + item.image}
                className="object-cover min-w-[400px] aspect-square overflow-hidden transition-all duration-500 ease-in-out rounded-md"
              />
            ))}
          </div>
        </div>
 )}
      </div>
    </>
  );
};

export default TrekItenaryAccordion;
