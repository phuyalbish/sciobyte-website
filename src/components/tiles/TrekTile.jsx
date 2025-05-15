import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import badge from "@/assets/badge.svg";
import difficulty_img from "@/assets/difficult.svg";
import group from "@/assets/group.svg";
import duration_img from "@/assets/duration.svg";
import type_img from "@/assets/TrekType.svg";
import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";
const JourneyDetailsPanel = ({ icon, value, type }) => {
  return (
    <div className="flex justify-between items-center gap-2   rounded-lg">
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
      className="relative  bg-white  cursor-pointer group flex justify-between flex-col gap-2 rounded-lg overflow-hidden hover:shadow-lg shadow-md m-2 md:m-0  p-5 transition-all duration-500 border  border-N100  border-0.5"
    >
      <div className="flex flex-col gap-2 justify-start">
      <div className="relative overflow-hidden rounded-xl w-full h-64 ">
        <ImageSkeleton
          className=" w-full h-64 object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={CLOUDINARY_BASE_MEDIA_URL+image}
          alt={name}
        />
        {tag && (
          <span className="absolute text-sm top-2 left-2  text-white bg-G500  rounded-md font-light px-2 py-1">
            {tag}
          </span>
        )}
        {max_group_range > 1 && (
          <ImageSkeleton
            className=" absolute top-2 right-2  h-8 w-8  rounded-xl p-1 bg-G500"
            src={group}
            alt="Group Icon"
          />
        )}
      </div>
      {isBadged && (
        <ImageSkeleton
          className="absolute top-48 w-12 h-12 "
          src={badge}
          alt="Badge Icon"
        />
      )}
        <h2 className="font-bold text-md text-left line-clamp-2">{name}</h2>
        </div>
        <div className="flex flex-col ">
          <div className="flex sm:justify-between justify-end  items-center mb-1 w-full">
            <span className="text-yellow-500 text-md hidden sm:flex">
              {[...Array(stars)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </span>
            <div className="flex flex-col items-end">
              <p className="text-N300 text-sm  text-right">
                Price Starting From
              </p>
              <span className="text-primary font-bold text-xl">
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
