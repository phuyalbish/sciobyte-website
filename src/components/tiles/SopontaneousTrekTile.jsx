const JourneyDetailsPanel = ({ detail }) => {
  return (
    <>
      <p className="flex justify-between items-center gap-[0.5rem] md:gap-[1rem]">
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
  const { name, price, image, difficulty, formatted_duration } = data;
  const journeyDetails = [
    { icon: "/TrekType.svg", key: "Type", value: "Trek" },
    { icon: "/duration.svg", key: "Duration", value: formatted_duration },
    { icon: "/difficult.svg", key: "Difficulty", value: difficulty?.name },
  ];

  return (
    <div className="cursor-pointer w-[80vw] md:w-[350px] h-fit flex-wrap flex-grow  group max-w-lg flex flex-col gap-[1rem] rounded-lg overflow-hidden hover:shadow-xl shadow-md bg-white  p-5 transition-all duration-500">
      <div className="relative">
        <img
          className="rounded w-full h-64 object-cover transition-all duration-300"
          src={image}
        />
        <span className="absolute top-[0.5rem] left-0 bg-secondary shadow-lg text-white font-light text-sm  rounded-r-md px-[1rem]">
          Mar 15 - Mar 25
        </span>
      </div>
      <div className="flex justify-between h-fit">
        <div className="font-bold text-xl mb-2 text-left w-7/12 h-fit">
          {name}
        </div>
        <div className="text-gray-600 text-sm font-extrabold text-right w-5/12 h-fit flex flex-col">
          Price Starting From
          <span className="text-primary font-extrabold text-2xl h-fit">
            USD {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrekTile;
