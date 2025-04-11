import React from "react";

import { Link } from "react-router-dom";
import TrekHeadingTile from "@/components/tiles/TrekHeadingTile";
import { BsClockHistory } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { RiPinDistanceFill } from "react-icons/ri";

import { MdFastfood } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTent } from "react-icons/fa6";
import { GiWalkingBoot } from "react-icons/gi";
import { FaMountainSun } from "react-icons/fa6";

export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;

function TrekBasicInformationSection({ data }) {
  const trekBasicHeadings = [
    {
      icon: BsClockHistory,
      heading: "Duration",
      description: data?.duration + +" Days",
    },
    {
      icon: RiPinDistanceFill,
      heading: "Distance",
      description: data?.distance + " Kms",
    },
    {
      icon: FaPeopleGroup,
      heading: "Group Size",
      description:
        data?.min_group_range + " - " + data?.max_group_range + " People",
    },
    {
      icon: GiPathDistance,
      heading: "Start and End",
      description: data?.start_point + " - " + data?.end_point,
    },
    {
      icon: () => (
        <img
          decoding="async"
          loading="lazy"
          src={BASE_MEDIA_URL + data?.difficulty?.icon}
          className="w-5"
        />
      ),
      heading: "Difficulty",
      description: data?.difficulty?.name,
    },

    {
      icon: FaTent,
      heading: "Accomodation",
      description: data?.accomodation,
    },

    {
      icon: GiWalkingBoot,
      heading: "Activity",
      description: data?.activity,
    },

    {
      icon: FaMountainSun,
      heading: "Altitude",
      description: data?.altitude,
    },
    {
      icon: MdFastfood,
      heading: "Meal",
      description: data?.meal_name?.map((meal, index, arr) =>
        index == 0
          ? `${meal}`
          : index === arr.length - 1
          ? ` & ${meal}`
          : `,${meal}`
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-5  items-start">
      <div className="flex flex-col items-start justify-start">
        <div className="text-xl lg:text-2xl  text-left font-bold">
          {data?.name}
        </div>

        {data?.district_slug ? (
          <Link
            to={`/d/${data?.district_slug}`}
            className="text-md font-normal text-left flex gap-2 items-center cursor-pointer hover:underline underline-offset-1"
          >
            <CiLocationOn />
            {data?.district_name}
          </Link>
        ) : null}
      </div>
      <div className="flex flex-wrap  self-start p-4 rounded-md bg-G200">
        {trekBasicHeadings.map((item, index) =>
          item?.description ? (
            <TrekHeadingTile key={index} {...item} />
          ) : (
            <span key={index}></span>
          )
        )}
      </div>
    </div>
  );
}

export default TrekBasicInformationSection;
