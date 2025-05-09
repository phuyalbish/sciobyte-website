import React, { useRef, useEffect } from "react";
import { FaTent } from "react-icons/fa6";
import { FaTruckPlane } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { GiPathDistance } from "react-icons/gi";
import DOMPurify from 'dompurify';
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";

const TrekItenaryAccordion = ({ schedule,  isOpened, handleScheduleState }) => {
const scrollRef = useRef(null);
const hasInteractedRef = useRef(false);

useEffect(() => {
  if (isOpened) {
    if (hasInteractedRef.current && scrollRef.current) {
      const yOffset = window.innerHeight * 0.2;
      const y = scrollRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
}, [isOpened]);

  const sanitizedContent = DOMPurify.sanitize(schedule?.detail);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit min-w-7 max-w-7 self-center bg-G300 p-2 rounded-sm text-white" />
  ) : (
    <FaChevronUp className="h-fit min-w-7 max-w-7 self-center  bg-G300 p-2 rounded-sm text-white" />
  );

  const default_bg_color = isOpened ? "bg-G200" : "bg-white";
  const default_hover_bg_color = isOpened ? "hover:bg-G200" : "hover:bg-G100";


  const trekHeadings = [

        {
          icon: FaMountainSun,
          heading: "Max Altitude",
          description: schedule?.max_altitude+"m",
        },
         ...(schedule?.max_duration > 1
          ? [{
              
              icon: GiDuration,
              heading: "Duration",
              description:  schedule?.min_duration + " - "+ schedule?.max_duration + "Hrs",
            }]
          : []),

        ...(schedule?.distance > 0
          ? [{
              
              icon: GiPathDistance,
              heading: "Distance",
              description:  schedule?.distance  + "Kms",
            }]
          : []),


         ...(schedule?.elevation_gain > 0
          ? [{
              icon: FaArrowTrendUp,
              heading: "Elevation Gain",
              description: schedule?.elevation_gain + "m",
            }]
          : []),

         ...(schedule?.elevation_loss > 0
          ? [{
              icon: FaArrowTrendDown,
              heading: "Elevation Loss",
              description:  schedule?.elevation_loss + "m",
            }]
          : []),
       
        {
          icon: FaTent,
          heading: "Accomodation",
            description: schedule?.accomodations?.map((accomodation, index, arr) => {
              if (arr.length === 1) return accomodation.name;
              if (index === arr.length - 1) return ` or ${accomodation.name}`;
              if (index === arr.length - 2) return `${accomodation.name}`;
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
      <div ref={scrollRef} className="cursor-pointer w-full mx-auto select-none  flex flex-col gap-2 ">
        <div
          className={`${default_bg_color} ${default_hover_bg_color} sticky top-28  z-10 pt-2 rounded-md p-2 transition duration-300 ease-in-out  flex flex-row  gap-3  justify-start`}
          onClick={() => {
            hasInteractedRef.current = true;
            handleScheduleState(schedule.id);
          }}
        >
          <div className="flex flex-col  w-10 md:w-16 h-full items-center bg-white rounded-tl-lg">
            <div className="px-5 bg-G300 h-fit rounded-tl-lg w-full text-white items-center justify-center flex  text-base md:text-md">
              Day
            </div>
            <div className="w-full h-full flex justify-center items-center text-base md:text-md font-bold">{schedule.day}</div>
          </div>
          <div className="flex justify-between   w-full h-fit gap-2 ">
            <div className="font-bold text-base md:text-md">{schedule?.heading}</div>
            {arrowSVG}
          </div>
        </div>
        {isOpened && (
        <div
          className={`md:pl-20 p-4 rounded-md  overflow-hidden transition-max-height flex flex-col gap-3 duration-700 ease-in-out bg-G100`}
        >
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  w-full">
            {trekHeadings.map((item, index) =>
              item?.description ? (
                  <div key={index} className="rounded-xl flex gap-3 bg-G200  py-2 px-4   items-center justify-start">
                
                                  {item?.icon &&
                                      React.createElement(item?.icon, {
                                        className: "text-lg text-N900",
                                      })}
                                    <div className="flex flex-col justify-start items-start">
                                      <div className="text-xs text-N500 font-semibold text-start">{item?.heading}</div>
                                      <div className="text-sm text-N800 font-semibold text-start">{item?.description}</div>
                                    </div>
                            </div>
              ) : ""
            )}
          </div>  

          <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}    className='text-justify custom-rich-content'/>
         {schedule?.gallery?.length > 0 && (
            <div className="flex gap-2 relative overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-md h-[400px] z-0 ">
              {schedule.gallery.map((item, index) => (
                <div key={index} className="h-full flex items-center  snap-start shrink-0">
                  <img
                    decoding="async"
                    alt={`Trek Itinerary Gallery ${index + 1}`}
                    loading="lazy"
                    src={BASE_MEDIA_URL + item.image}
                    className="object-cover h-full w-auto max-w-full transition-all duration-500 ease-in-out rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        )}
      </div>

      
    </>
  );
};

export default TrekItenaryAccordion;
