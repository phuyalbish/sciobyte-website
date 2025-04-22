import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import badge from "@/assets/badge.svg";
import difficulty_img from "@/assets/difficult.svg";
import group from "@/assets/group.svg";
import duration_img from "@/assets/duration.svg";
import type_img from "@/assets/TrekType.svg";
const JourneyDetailsPanel = ({ icon, value, type }) => {
  return (
    <div className="flex justify-between items-center gap-2  bg-gray-100 rounded-lg">
      <img decoding="async" loading="lazy" src={icon} alt={value} className="h-5 w-5" />
      <span className="text-left">
        <span className="text-xs flex">{type}</span>
        <strong className="block text-xs">{value}</strong>
      </span>
    </div>
  );
};

const TrekTile = ({ data }) => {
  const {
    slug,
    name,
    total_price,
    image,
    difficulties,
    max_duration,
    tag,
    categories,
    isBadged,

    stars,
    max_group_range,
  } = data;
  return (
    <Link
    aria-label={`Trek - ${name}`}
      to={`/trek/${slug}`}
      className=" relative border bg-white  cursor-pointer group flex flex-col gap-5 rounded-lg overflow-hidden hover:shadow-lg shadow-md m-2 md:m-0  p-5 transition-all duration-500   border-N100 5 border-0.5"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          decoding="async"
          loading="lazy"
          className="w-full aspect-video object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={image}
          alt={name}
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-G500 text-white rounded-md font-light px-2 py-1 text-xs">
            {tag}
          </span>
        )}

        {max_group_range > 1 && (
          <img
            decoding="async"
            loading="lazy"
            className=" absolute top-2 right-2  h-7 w-7 bg-G500 rounded-md p-1"
            src={group}
            alt="Group Icon"
          />
        )}
      </div>
      {isBadged && (
        <img
          decoding="async"
          loading="lazy"
          className="absolute top-36 w-12 h-12 "
          src={badge}
          alt="Badge Icon"
        />
      )}
      <div className="flex flex-col justify-between  gap-2">
        <h2 className="font-bold text-base text-left">{name}</h2>
        <div className="flex justify-between items-center mb-1 w-full">
          <span className="text-yellow-500 text-md flex">
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </span>
          <div className="flex flex-col items-end">
            <p className="text-N300 text-xs  text-right">
              Price Starting From
            </p>
            <span className="text-primary font-bold text-md">
              USD {Math.floor(total_price)}
            </span>
          </div>
        </div>
        <div className="flex justify-between text-gray-600  gap-2">
          <JourneyDetailsPanel type="Type" value={categories?.name} icon={type_img} />
          <JourneyDetailsPanel
            type="Duration"
            value={`${max_duration} Days`}
            icon={duration_img}
          />
          <JourneyDetailsPanel
            type="Difficulty"
            value={difficulties?.name}
            icon={difficulty_img}
          />
        </div>
      </div>
    </Link>
  );
};

export default TrekTile;
