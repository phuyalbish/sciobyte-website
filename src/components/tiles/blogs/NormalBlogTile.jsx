import  { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";



import { ImageSkeleton } from "@/components/skeleton/Skeleton.jsx";

import { truncate } from "@/utils/truncate.js";
const NormalBlogTile = ({ blog }) => {
  const {
    heading,
    subheading,
    author,
    date,
    image,
    category,
    slug,
    location,
  } = blog;
  const isLoading = Object.keys(blog).length === 0;
  const blogUrl = slug ? `/blog/${slug}` : "/";

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com" + blogUrl
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="relative flex flex-col justify-start  gap-3  p-2 md:p-5 max-w-full rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 rounded-lg overflow-hidden  ">
                  {isLoading ? (
                    <ImageSkeleton />
                  ) : (

                <div className="relative w-full h-fill group overflow-hidden ">
                    
                <div
                  className="absolute bg-G400 z-10  rounded-lg hover:bg-white hover:text-G400  text-white text-xs flex items-center gap-2 cursor-pointer  top-1 right-1 p-1 px-2"
                  onClick={handleCopy}
                >
                  <IoMdShare className="size-3.5" />
                  Share
                </div>
                <img
                  src={image}
                  alt={heading}
                  decoding="async"
                  loading="lazy"
                  className=" object-cover w-full h-full group-hover:scale-105 scale-100 rounded-lg transition-all duration-500 ease-in-out"
                />
                  {category ? (
                    <Link
                      aria-label="Blogs"
                      to="/blogs"
                      className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300   px-2  p-1 rounded-md text-sm"
                    >
                      {category}
                    </Link>
                  ) : "" }

                    {copied && (
                      <div className="text-N500 absolute bottom-0 right-0 w-34 bg-white text-sm p-1 px-2 m-1 rounded-md">
                        Link Copied!
                      </div>
                    )} 
                </div> 
                  )}
                </div>

                <div className="flex justify-start  flex-col gap-1">
                      <Link aria-label={`Blog - ${heading}`}
                        to={blogUrl}>
                        <div className="font-bold text-md text-N900 text-left">
                          {heading}
                        </div>
                      </Link>
                      <div className="text-base text-N500 text-start">
                        {truncate(subheading, 150)}
                      </div>
                </div>
          <div className="flex items-center gap-2 text-gray-600">
        {author && (
          <div className="flex items-center gap-1">
            <AiFillEdit />
            <span className="text-sm">{author}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <MdDateRange />
          <span className="text-sm">{date}</span>
        </div>

        {location && (
          <div className="flex items-center gap-1">
            <MdLocationOn />
            <span className="text-sm">{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NormalBlogTile;
