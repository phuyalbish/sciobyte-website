import React from "react";
import { Link } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { GiWalkingBoot } from "react-icons/gi";
import { RiPinDistanceFill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTent } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";

function TrekBasicInformationSection({ 
  travel_name = null,
  max_duration = null, 
  max_distance = null, 
  min_group_range=null,
  max_group_range = null,
  max_hike_hour = null,
  min_hike_hour = null,
  start_point = null,
  end_point = null,
  difficulties = null,
  accomodations = null,
  max_altitude = null,
  meals = null,
  districts = null,
  best_seasons = null,


}) {
  const trekBasicHeadings = [
    {
      icon: BsClockHistory,
      heading: "Max Duration",
      description: max_duration + +" Days",
    },
    {
      icon: RiPinDistanceFill,
      heading: "Max Distance",
      description: max_distance + " Km",
    },
        {
      icon: GiWalkingBoot,
      heading: "Average Hiking Hours",
      description: min_hike_hour + "-" + max_hike_hour + " Hrs",
    },
    {
      icon: FaPeopleGroup,
      heading: "Group Size",
      description:
        min_group_range + " - " + max_group_range + " People",
    },
    {
      icon: GiPathDistance,
      heading: "Start and End",
      description: start_point + " - " + end_point,
    },
    {
      icon: () => (
        <img
          decoding="async"
          loading="lazy"
          src={BASE_MEDIA_URL + difficulties?.icon}
          className="w-5"
          alt="Difficulty Icon"
        />
      ),
      heading: "Difficulty",
      description: difficulties?.name,
    },

    {
      icon: FaTent,
      heading: "Accomodation",
      description: accomodations?.name,
    },

    {
      icon: FaCloudSun,
      heading: "Best Seasons",
      description: best_seasons,
    },

    {
      icon: FaMountainSun,
      heading: "Max Altitude",
      description:max_altitude+ " meter",
    },
    {
      icon: MdFastfood,
      heading: "Meals",
      description: meals?.map((meal, index, arr) =>
        index == 0
          ? `${meal.name}`
          : index === arr.length - 1
          ? ` & ${meal.name}`
          : `,${meal.name}`
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-5  items-start">
      <div className="flex flex-col items-start justify-start">
        <div className="text-xl lg:text-xl tracking-wide font-light font-liches  text-left">
          {travel_name}
        </div>

      {Array.isArray(districts) && districts.length > 0 && (
        <div className="text-B400 group  cursor-pointer text-sm  text-left flex gap-2 items-center flex-wrap">
          <CiLocationOn className="size-5 transition-colors duration-500 group-hover:text-B700"/>
          {districts.map((district, index) => (
            
            <Link
            aria-label={`District - ${district?.slug}`}
              key={district?.slug}
              to={`/district/${district?.slug}`}
              className=" underline underline-offset-2  hover:text-B700 transition-colors duration-500"
            >
              {district?.name}
              {index < districts.length - 1 && <span>,</span>}
            </Link>
          ))}
        </div>
      )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 p-4 w-full rounded-md bg-G200">

        {trekBasicHeadings.map((item, index) =>
          item?.description ? (
            <div key={index} className="rounded-xl flex gap-3  items-center justify-start">

                  {item?.icon &&
                      React.createElement(item?.icon, {
                        className: "size-6 text-N900",
                      })}
                    <div className="flex flex-col justify-start items-start">
                      <div className="text-xs text-N500 font-semibold text-start">{item?.heading}</div>
                      <div className="text-sm text-N800 font-semibold text-start">{item?.description}</div>
                    </div>
            </div>
          ) : ""
        )}

        {/* <div className="test h-20">Here we go</div>
        <div className="test h-20">Here we go</div>
        <div className="test h-20">Here we go</div>
        <div className="test h-20">Here we go</div>

        <div className="test h-20">Here we go</div> */}
      </div>
    </div>
  );
}

export default TrekBasicInformationSection;
