import { Link } from "react-router-dom";
const JourneyDetailsPanel = ({ detail }) => {
  return (
    <div className="flex justify-between items-center gap-2  bg-gray-100 rounded-lg">
      <img
        decoding="async"
        loading="lazy"
        src={detail?.icon}
        alt="TrekType.svg"
        className="h-6 w-6"
      />
      <span className="text-left">
        <span className="text-sm flex">{detail?.key}</span>
        <strong className="block text-sm">{detail?.value}</strong>
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
    max_group_range,
  } = data;
  const journeyDetails = [
    { icon: "/TrekType.svg", key: "Type", value: type_name || "None" },
    {
      icon: "/duration.svg",
      key: "Duration",
      value: duration ? `${duration} Day${duration > 1 ? "s" : ""}` : "0 Day",
    },
    {
      icon: "/difficult.svg",
      key: "Difficulty",
      value: difficulty_name || "Basics",
    },
  ];

  return (
    <Link
      to={`/travel/${id}`}
      className="relative cursor-pointer group flex flex-col gap-5 rounded-lg overflow-hidden hover:shadow-lg shadow-md hover:bg-B50 p-5 transition-all duration-500"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          decoding="async"
          loading="lazy"
          className=" w-full h-64 object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={image}
          alt="Annapurna Base Camp Circuit"
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-G300 text-white text-md rounded-md font-light px-2 py-1">
            {tag}
          </span>
        )}

        {max_group_range > 1 && (
          <img
            decoding="async"
            loading="lazy"
            className=" absolute top-2 right-2  h-8 w-8 bg-G300 rounded-xl p-1"
            src="/group.svg"
            alt="Group Icon"
          />
        )}
      </div>
      {isBadged && (
        <img
          decoding="async"
          loading="lazy"
          className="absolute top-60 w-14 h-14 "
          src="/badge.svg"
          alt="Badge Icon"
        />
      )}
      <h2 className="font-bold text-lg mt-2 text-left">{name}</h2>
      <div className="flex justify-between items-end mb-1 w-full">
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <div className="flex flex-col items-end">
          <p className="text-N300 text-md font-bold text-right">
            Price Starting From
          </p>
          <span className="text-primary font-extrabold text-xl">
            USD {Math.floor(price)}
          </span>
        </div>
      </div>
      <div className="flex justify-between text-gray-600 mt-2 gap-2">
        {journeyDetails.map((detail, index) => (
          <JourneyDetailsPanel key={index} detail={detail} />
        ))}
      </div>
    </Link>
  );
};

export default TrekTile;
