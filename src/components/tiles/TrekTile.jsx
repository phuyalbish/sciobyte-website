import { Link } from "react-router-dom";
const JourneyDetailsPanel = ({ detail }) => {
  return (
    <>
      <p className="flex justify-between items-center gap-[0.5rem] md:gap-[1rem] bg-gray-100 rounded-lg px-4 py-2">
        <img
          src={detail?.icon}
          alt="TrekType.svg"
          className="h-[1.5rem] w-[1.5rem]"
        />
        <span className="text-center">
          <span className="text-sm flex">{detail?.key}</span>
          <strong className="block md:text-base text-sm">
            {detail?.value}
          </strong>
        </span>
      </p>
    </>
  );
};

const TrekTile = ({ data }) => {
  const { id, name, price, image, difficulty, formatted_duration } = data;
  const journeyDetails = [
    { icon: "/TrekType.svg", key: "Type", value: "Trek" },
    { icon: "/duration.svg", key: "Duration", value: formatted_duration },
    { icon: "/difficult.svg", key: "Difficulty", value: difficulty?.name },
  ];

  return (
    <Link
      to={`/travel/${id}`}
      className="cursor-pointer group flex flex-col gap-[1rem] rounded-lg overflow-hidden hover:shadow-lg shadow-md hover:bg-B50 p-5 transition-all duration-500"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className=" w-full h-64 object-cover object-center group-hover:scale-110 transition-all duration-300"
          src={image}
          alt="Annapurna Base Camp Circuit"
        />
        <span className="absolute top-[0.5rem] left-[0.5rem] bg-secondary text-white text-base  rounded-xl font-bold px-[1rem] py-[0.5rem]">
          Best Price
        </span>
        <div className="absolute top-[0.5rem] right-[0.5rem] h-[2.3rem] w-[2.3rem] bg-secondary rounded-xl p-[0.3rem]">
          <img className="h-full w-full" src="/group.svg" alt="Group Icon" />
        </div>
        <img
          className="absolute bottom-[-1.3rem]"
          src="/badge.svg"
          alt="Badge Icon"
        />
      </div>
      <h2 className="font-bold text-lg mb-2 text-left">{name}</h2>
      <div className="flex justify-between items-end mb-1 w-full">
        <span className="text-yellow-500 text-2xl">★★★★☆</span>
        <p className="text-gray-600 text-[0.8125rem] font-extrabold text-right">
          Price Starting From <br />{" "}
          <span className="text-primary font-extrabold text-[2rem]">
            USD {price}
          </span>
        </p>
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
