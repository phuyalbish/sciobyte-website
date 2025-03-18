const JourneyDetailsPanel = ({ detail }) => {
  return (
    <>
      <p className="flex justify-between items-center gap-[0.5rem] md:gap-[1rem]">
        decoding="async" loading="lazy" src={detail?.icon}
        alt="TrekType.svg" className="h-[1.5rem] w-[1.5rem] " />
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

  return (
    <div className="group cursor-pointer w-full h-full flex-wrap gap-5 justify-between  group max-w-lg flex flex-col  rounded-lg hover:shadow-xl shadow-md hover:bg-G50  p-5 transition-all duration-300">
      <img
        decoding="async"
        loading="lazy"
        className="group-hover:scale-110 rounded-md  w-full h-64 object-cover transition-all duration-300"
        src={image}
      />
      {/* <span className="absolute top-[0.5rem] left-0 bg-secondary shadow-lg text-white font-light text-sm  rounded-r-md px-[1rem]">
          Mar 15 - Mar 25
        </span> */}
      <div className="font-bold  text-left">{name}</div>
    </div>
  );
};

export default TrekTile;
