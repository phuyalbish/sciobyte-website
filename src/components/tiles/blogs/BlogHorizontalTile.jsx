import React from "react";
import { Link } from "react-router-dom";
import {ImageSkeleton} from "@/components/skeleton/Skeleton.jsx"

const BlogHorizontalTile = ({ blog }) => {
  const {
    title,
    date,
    location,
    imageUrl,
    category,
    slug,
  } = blog;
  const blogUrl = slug ? `/blog/${slug}` : '/';

  return (
    <div className="sm:h-[15.35rem] p-[1rem] flex flex-col sm:flex-row max-w-full flex rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative sm:w-1/2 ">
        {
          blog ? (
            <ImageSkeleton />
          )
          : (
            <></>
          )
        }
        <img
          src={imageUrl}
          className="w-full h-48 sm:h-full object-cover rounded-lg"
          alt={title}
        />
        <span className="absolute bottom-4 left-0 bg-white text-black px-3 py-1 rounded-r-md text-[1rem] font-medium">
          {category}
        </span>
        <span className="cursor-pointer absolute top-4 right-4 bg-white text-[#008774] border border-[#008774] px-[1rem] py-[0.5rem] rounded-md text-[0.875rem] font-semibold">
          share
        </span>
      </div>
      <div className="sm:px-6 py-4 sm:w-1/2">
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <Link to={blogUrl}>
          <h2 className="font-bold text-xl mb-3 text-gray-800 text-left">
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogHorizontalTile;
