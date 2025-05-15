import  { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";
import {fetchData} from "@/apis/https";

import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";
const BlogVerticalTile = () => {

  const [blog, setCurrentBlog] = useState(null);
  const [copied, setCopied] = useState(false);

    useEffect(() => {
      (async () => {
        try {
          const data = await fetchData(`/blogs/current/`);
          setCurrentBlog(data);
        }
        catch (error) {
          console.error("Error fetching Current blogs:", error);
        } 
      })();
    }, []);

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
    <div className="relative flex flex-col gap-3  p-2 md:p-5 max-w-full m-3 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg select-none">
      <div className="relative h-full w-full">
            <div className="w-full md:h-96 h-48">
            <ImageSkeleton
              src={CLOUDINARY_BASE_MEDIA_URL+blog?.image}
              alt={blog?.heading}
              className="object-cover rounded-lg"
            />
            </div>
    {blog?.category_name ? (
        <Link
          
          aria-label="Blogs"
          to="/blogs"
          className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300    px-2 p-1 rounded-md text-sm"
        >
          {blog?.category_name}
        </Link>
      ) : "" }

        {copied && (
          <div className="text-N500 absolute bottom-0 right-0 w-34 bg-white text-sm p-1 px-2 m-1 rounded-md">
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
              <div className="flex justify-start flex-col gap-1">
                <Link 
                  aria-label={`Blog - ${blog?.heading}`}
                  to={`/blog/${blog?.slug}`}>
                  <div className="font-bold text-md text-N900 text-left">
                    {blog?.heading}
                  </div>
                </Link>
                <div className="text-base text-N500 text-start line-clamp-2">
                  {blog?.subheading}
                </div>
              </div>
      <div className="flex items-center gap-2 text-gray-600">
        {blog?.author_name && (
          <div className="flex items-center gap-1">
            <AiFillEdit />
            <span className="text-sm">{blog?.author_name}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <MdDateRange />
          <span className="text-sm">  {format(new Date(blog?.created_at || Date.now()), "MMMM d, yyyy")}</span>
        </div>

        {blog?.location && (
          <div className="flex items-center gap-1">
            <MdLocationOn />
            <span className="text-sm">{blog?.location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogVerticalTile;
