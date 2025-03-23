import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";

import { truncate } from "@/utils/truncate.js";
const NormalBlogTile = ({ blog }) => {
  const {
    heading,
    subheading,
    author,
    date,
    imageUrl,
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
    <div className="relative flex flex-col gap-3  p-2 md:p-5 max-w-full rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative h-full">
        {isLoading ? (
          <ImageSkeleton />
        ) : (
          <>
            <img
              src={imageUrl}
              decoding="async"
              loading="lazy"
              className="w-full h-48  object-cover rounded-lg"
            />
          </>
        )}

        <Link
          to="/blogs"
          className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300  p-1 rounded-md text-sm"
        >
          {category}
        </Link>

        {copied && (
          <div className="text-N500 absolute bottom-0 right-0 w-34 bg-white/50 text-sm p-1 m-1 rounded-md">
            Link Copied!
          </div>
        )}

        <div
          className="absolute bg-white/50 hover:bg-white text-N300 text-sm flex items-center gap-2 cursor-pointer  top-1 right-1 p-1 rounded-md"
          onClick={handleCopy}
        >
          <IoMdShare className="size-3.5" />
          Share
        </div>
      </div>
      <div className="flex justify-start flex-col gap-1">
        <Link to={blogUrl}>
          <div className="font-bold text-xl text-N400 text-left">{heading}</div>
        </Link>
        <div className="text-md text-N300 text-start">
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
