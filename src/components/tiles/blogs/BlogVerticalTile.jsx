import React from 'react';

const BlogVerticalTile = ({
  title,
  date,
  location,
  imageUrl,
  category,
}) => {
  return (
    <div className="h-full p-[1rem] max-w-full rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          className="w-full h-48 sm:h-96 object-cover rounded-lg"
          src={imageUrl}
          alt={title}
        />
        <span className="absolute bottom-4 left-0 bg-white text-black px-3 py-1 rounded-r-md text-[1rem] font-medium">
          {category}
        </span>
        <span className="absolute top-4 right-4 bg-white text-[#008774] border border-[#008774] px-[1rem] py-[0.5rem] rounded-md text-[0.875rem] font-semibold">
          share
        </span>
      </div>
      <div className=" py-4">
        <h2 className="font-bold text-xl mb-3 text-gray-800 text-left">
          {title}
        </h2>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogVerticalTile;