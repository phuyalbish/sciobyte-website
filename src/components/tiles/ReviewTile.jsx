import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

function ReviewTile({ star, name, reviewDetail, profile, date }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="md:w-1/3 p-2">
        <div
          onClick={() => setIsModalOpen(true)}
          className="transition-all duration-300 cursor-pointer h-full hover:shadow-md relative flex flex-col shadow rounded-3xl hover:bg-B50 gap-5 box-border p-5 justify-start items-start"
        >
          <div className="flex gap-3 justify-start w-full items-center">
            <div className="w-12 h-12">
            <ImageSkeleton
              decoding="async"
              loading="lazy"
              src={profile}
              alt={name}
              className="rounded-full object-cover z-0"
            />
            </div>
            <div className="flex flex-col">
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
          <div className="text-sm leading-relaxed line-clamp-4 text-left">{reviewDetail}</div>
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute inset-0 z-20 bg-white/50  flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <div className="flex gap-3 mb-4 items-center">
            <div className="w-12 h-12 relative">
              <ImageSkeleton src={profile} alt={name} className="relative rounded-full object-cover" />
              </div>
              <div className="flex flex-col justify-start">
                <div className="font-semibold text-left">{name}</div>
                <div className="text-sm text-N500 text-left">{date}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: star || 0 }).map((_, index) => (
                <FaStar key={index} className="text-yellow-300" size={18} />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-justify">{reviewDetail}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewTile;