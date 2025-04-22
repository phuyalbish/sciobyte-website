import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { ImageSkeleton } from "@/components/skeleton/Skeleton.jsx";
import { truncate } from "@/utils/truncate.js";

const BlogHorizontalTile = ({ blog }) => {
  const {
    heading,
    subheading,
    author,
    date,
    imageUrl,
    region,
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
    <div className="sm:h-[15.35rem] p-5 gap-2 flex-col sm:flex-row max-w-full flex rounded-xl overflow-hidden mb-4 shadow-md bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative sm:w-1/2 ">
        {isLoading ? (
          <ImageSkeleton />
        ) : (
          <>
            <img
              decoding="async"
              loading="lazy"
              src={imageUrl}
              className="w-full h-48 sm:h-full object-cover rounded-lg"
              alt={heading}
            />
          </>
        )}
      {region ? (
        <Link
          aria-label="Blogs"
          to="/blogs"
          className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300  p-1 rounded-md text-sm"
        >
          {region}
        </Link>
      ) : "" }

        {copied && (
          <div className="text-N500 absolute bottom-0 right-0 w-34 bg-white/50 text-sm p-1 m-1 rounded-md">
            Link Copied!
          </div>
        )}
        <div
          className="absolute bg-G400 hover:bg-white hover:text-G400  text-white text-xs flex items-center gap-2 cursor-pointer  top-1 right-1 p-1 px-2 rounded-md"
          onClick={handleCopy}
        >
          <IoMdShare className="size-3.5" />
          Share
        </div>
      </div>
      <div className="flex flex-col gap-4 py-2 sm:w-1/2">
        <div className="flex flex-wrap justify-start gap-2 text-gray-600">
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
        <div className="flex justify-start flex-col gap-1">
          <Link 
            aria-label={`Blog - ${heading}`} to={blogUrl}>
            <div className="font-bold text-md line-clamp-2 text-N900 text-left">
              {heading}
            </div>
          </Link>
          <div className="text-base text-N500 text-start">
            {truncate(subheading, 150)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHorizontalTile;
