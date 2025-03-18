import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { ImageSkeleton } from "@/components/skeleton/Skeleton.jsx";

const BlogHorizontalTile = ({ blog }) => {
  const { title, author, date, location, imageUrl, category, slug } = blog;
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
    <div className="sm:h-[15.35rem] p-[1rem] flex-col sm:flex-row max-w-full flex rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
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
              alt={title}
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
        <IoMdShare
          className="flex items-center gap-1 cursor-pointer absolute top-1 right-1 bg-white/50 hover:bg-white text-N300  p-1 rounded-md size-6"
          onClick={handleCopy}
        />
      </div>
      <div className="sm:px-6 py-4 sm:w-1/2">
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <AiFillEdit />
            <span className="text-sm">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdDateRange />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdLocationOn />
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
