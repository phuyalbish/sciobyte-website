import { Link } from "react-router-dom";
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
  const { name, price, image, difficulty, formatted_duration, id } = data;

  return (
    <Link
      to={`/travel/${id}`}
      className="relative cursor-pointer group flex flex-col gap-3 items-center aspect-square rounded-lg overflow-hidden hover:shadow-lg shadow-md m-3 hover:bg-B50 p-2 transition-all duration-500 border md:border-none  border-B75 border-0.5"
    >
      <div className="relative overflow-hidden rounded-xl w-full h-[90%]">
        <img
          decoding="async"
          loading="lazy"
          className="group-hover:scale-110 rounded-md  w-full h-full  object-cover transition-all duration-300"
          src={image}
        />
      </div>
      <div className="font-bold  text-left">{name}</div>
    </Link>
  );
};

export default TrekTile;
