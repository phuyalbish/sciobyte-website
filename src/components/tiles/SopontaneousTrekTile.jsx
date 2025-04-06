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
      <img decoding="async" loading="lazy" src={icon} className="h-5 w-5" />
      <span className="text-left">
        <span className="text-xs flex">{type}</span>
        <strong className="block text-xs">{value}</strong>
      </span>
    </div>
  );
};

const TrekTile = ({ data }) => {
  const {
    id,
    name,
    price,
    image,
    difficulty_name,
    duration,
    tag,
    type_name,
    isBadged,

    star,
    max_group_range,
  } = data;
  return (
    <Link
      to={`/travel/${id}`}
      className="relative  bg-white cursor-pointer group flex flex-col gap-5 rounded-lg overflow-hidden hover:shadow-lg shadow-md m-3 hover:bg-B50 p-5 transition-all duration-500 border md:border-none  border-B75 border-0.5"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          decoding="async"
          loading="lazy"
          className=" w-full aspect-video object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={image}
          alt={name}
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-G300 text-white text-sm rounded-md font-light px-2 py-1">
            {tag}
          </span>
        )}

        {max_group_range > 1 && (
          <img
            decoding="async"
            loading="lazy"
            className=" absolute top-2 right-2  h-7 w-7 bg-G300 rounded-xl p-1"
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
            {[...Array(star)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </span>
          <div className="flex flex-col items-end">
            <p className="text-N300 text-sm font-bold text-right">
              Price Starting From
            </p>
            <span className="text-primary font-extrabold text-md">
              USD {Math.floor(price)}
            </span>
          </div>
        </div>
        <div className="flex justify-between text-gray-600  gap-2">
          <JourneyDetailsPanel type="Type" value={type_name} icon={type_img} />
          <JourneyDetailsPanel
            type="Duration"
            value={`${duration} Days`}
            icon={duration_img}
          />
          <JourneyDetailsPanel
            type="Difficulty"
            value={difficulty_name}
            icon={difficulty_img}
          />
        </div>
      </div>
    </Link>
  );
};

export default TrekTile;
