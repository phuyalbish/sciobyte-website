import { FaStar } from "react-icons/fa";
function ReviewTile({ star, name, reviewDetail, profile, date }) {
  return (
    <div className="md:w-1/3 p-2">
    <div className="transition-all duration-300 cursor-pointer relative flex flex-col shadow rounded-3xl hover:bg-B50 gap-5   box-border
       p-5 justify-start items-start">
     
      <div className="flex gap-3 justify-center items-center">
        <img
          decoding="async"
          loading="lazy"
          src={profile}
          alt={name}
          className="w-12 h-12 rounded-full  object-cover z-0 "
        />
        <div className="flex flex-col ">
          <div className="text-md font-semibold text-left">{name}</div>
            <div className="text-base text-left text-N500">{date}</div>
        </div>
      </div>
       <div className="flex gap-1">
        {Array.from({ length: star || 0 }).map((_, index) => (
          <FaStar key={index} className="text-yellow-300" size={20} />
        ))}
      </div>
      <hr className="border border-B200 w-full" />
      <div className="text-sm leading-relaxed line-clamp-5 text-left">{reviewDetail}</div>
    </div>
    </div>
  );
}

export default ReviewTile;
