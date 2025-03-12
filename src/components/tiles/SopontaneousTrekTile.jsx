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
    <>
      <div className="cursor-pointer group max-w-lg flex flex-col gap-[1rem] rounded-lg overflow-hidden hover:shadow-xl shadow-md bg-white p-5 transition-all duration-500">
        <div className="relative">
          <img
            className="rounded w-[24rem] h-64 object-cover object-center brightness-[70%] group-hover:brightness-[50%] transition-all duration-300"
            src={image}
            alt="Annapurna Base Camp Circuit"
          />
          <span className="absolute top-[0.5rem] left-0 bg-secondary shadow-lg text-white font-light text-sm  rounded-r-md px-[1rem]">
            Mar 15 - Mar 25
          </span>
        </div>
        <div className="flex justify-between w-full">
          <h2 className="font-bold text-2xl mb-2 text-left">{name}</h2>
          <p className="text-gray-600 text-[0.8125rem] font-extrabold text-right">
            Price Starting From <br />{" "}
            <span className="text-primary font-extrabold text-2xl">
              USD {price}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TrekTile;
