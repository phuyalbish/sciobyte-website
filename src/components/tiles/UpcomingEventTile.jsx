import { Link } from "react-router-dom";
const TrekTile = ({ data }) => {
  console.log(data)
  return (
    <Link

    aria-label={`Trek - ${data?.trek_detail?.name}`}
      to={`/trek/${data?.trek_detail?.slug}`}
      className="relative  bg-B100 shadow-sm p-4 flex  md:gap-16 items-center justify-between md:flex-row flex-col"
    >
      <div className="flex md:flex-row flex-col  md:items-center gap-5  w-full   md:w-1/2">

      <div className="relative hidden md:flex flex-col  border-white min-w-28 w-fit flex-grow-0  pr-5 md:border-r-2">
        <div className="text-3xl font-semibold font-liches text-G500">
          {data?.departure_date && new Date(data.departure_date).toLocaleDateString('en-US', {
            day: 'numeric',
          })}
        </div>
        <div className="text-md font-medium">{data?.departure_date && new Date(data.departure_date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
          })}</div>
      </div>


      <div className="flex  items-start text-left flex-col relative ">
        <div className="text-md font-medium relative line-clamp-2">
          
             {data?.trek_detail?.name}
        </div>
        <div className="md:text-xl  text-lg text-B500 font-medium">
            USD {data?.trek_detail?.total_price}

        </div>
      </div>
      </div>
      <div className="flex items-center flex-row  md:w-1/2 w-full  justify-between gap-8">


        <div className="text-md md:hidden">
          {data?.departure_date && new Date(data.departure_date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </div>

      <div className="text-G500 md:text-lg">{data?.seat_left} seats left</div>
      <div className="md:text-md">{data?.trek_detail?.category_name}</div>
      <div className="bg-G500 py-2 px-3 rounded-md md:block hidden text-white">Reserve my Spot</div>
      </div>
    </Link>
  );
};

export default TrekTile;
