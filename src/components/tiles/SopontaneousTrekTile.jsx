const JourneyDetailsPanel = ({ detail }) => {
  return (
    <>
      <p className="flex justify-between items-center gap-[0.5rem] md:gap-[1rem]">
        <img
          decoding="async"
          loading="lazy"
          src={detail?.icon}
          alt="TrekType.svg"
          className="h-[1.5rem] w-[1.5rem] "
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

  return (
    <div className="group cursor-pointer w-full h-full flex-wrap gap-5 justify-between  group max-w-lg flex flex-col  rounded-lg shadow-lg m-3 md:shadow-none hover:shadow-xl  hover:bg-G50  p-5 transition-all duration-300">
      <img
        decoding="async"
        loading="lazy"
        className="group-hover:scale-110 rounded-md  w-full h-64 object-cover transition-all duration-300"
        src={image}
      />
      <div className="font-bold  text-left">{name}</div>
    </div>
  );
};

export default TrekTile;
