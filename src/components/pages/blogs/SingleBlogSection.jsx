import { useState, useEffect } from "react";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { CLOUDINARY_BASE_MEDIA_URL } from "@/config/baseurl.js";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";

import {
  ImageSkeleton,
  HeadingSkeleton,
  DescriptionSkeleton,
  LongBlogContentSkeleton,
} from "@/components/skeleton/Skeleton.jsx";
import { fetchData } from "@/apis/https";

const SingleBlogSection = () => {
  const [currentBlog, setCurrentBlog] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCurrentBlog = async () => {
      try {
        const data = await fetchData(`/blogs/current/`);
        setCurrentBlog(data);
      } catch (error) {
        console.error("Error fetching current blog:", error);
      }
    };
    fetchCurrentBlog();
  }, []);

  if (!currentBlog) {
    return <div className="flex items-center justify-center">No Blogs Found</div>;
  }
  
  const sanitizedContent = DOMPurify.sanitize(currentBlog?.excerpt);

  const content = sanitizedContent.length > 600
    ? sanitizedContent.slice(0, 600)
    : sanitizedContent;
  const isLoading = Object.keys(currentBlog).length === 0;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/blog/" + currentBlog?.slug
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <article className="rounded-xl grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] items-center p-[1.25rem] bg-white shadow-md overflow-hidden">
      <div className="relative h-full">
        
          <ImageSkeleton
            alt={currentBlog?.name}
            src={CLOUDINARY_BASE_MEDIA_URL + currentBlog?.image}
            className="w-full h-[15rem] md:h-[23rem] object-cover brightness-90 rounded-xl"
          />
        
      </div>

      <div className="h-full">
        <div className="flex flex-col gap-4">
          <Link aria-label={`Blog - ${currentBlog?.slug}`} to={`/blog/${currentBlog?.slug}`}>
            <h1 className="text-md sm:text-xl font-bold text-gray-900 text-left">
              {isLoading ? <HeadingSkeleton /> : currentBlog?.heading}
            </h1>
          </Link>

          <div className="flex flex-wrap relative items-center gap-4 text-sm text-gray-600">
            {isLoading ? (
              <DescriptionSkeleton />
            ) : (
              <>
                {currentBlog?.author_name && (
                  <div className="flex items-center gap-2">
                    <AiFillEdit   className="text-md" />
                    <span className="font-medium">by {currentBlog?.author_name}</span>
                  </div>
                )}


                <div className="flex items-center gap-2">
                  <MdDateRange  className="text-md"/>
                  <time>
                    {format(new Date(currentBlog?.created_at || Date.now()), "MMMM d, yyyy")}
                  </time>
                </div>


                {currentBlog?.location && (
                  <div className="flex items-center gap-2">
                    <MdLocationOn   className="text-md"/>
                    <span className="font-medium">{currentBlog?.location}</span>
                  </div>
                )}

                <div
                  className="bg-white hover:bg-white text-N700 text-sm flex items-center gap-2 cursor-pointer p-1 rounded-md"
                  onClick={handleCopy}
                >
                  <IoMdShare className="size-4" />
                  Share
                </div>

                {copied && (
                  <div className="text-N500 w-34 text-sm rounded-md">
                    Link Copied!
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex gap-2">
            {!isLoading && (
              <span className="inline-flex items-center py-1 px-2 rounded-md bg-G100 text-sm font-medium text-N800">
                {currentBlog?.category_name || "Trek"}
              </span>
            )}
          </div>

          <div className="text-base text-N600 text-start">
            {currentBlog?.subheading}
          </div>

          {isLoading ? (
            <LongBlogContentSkeleton />
          ) : (
            <>
              <div
                className="leading-relaxed line-clamp-5 text-justify custom-rich-content"
                dangerouslySetInnerHTML={{ __html: content }} 
              ></div>
              <div className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2 text-right">
                {sanitizedContent.length > 600 && (
                  <Link aria-label={`Blog - ${currentBlog?.slug}`} to={`/blog/${currentBlog?.slug}`}>
                    Continue Reading
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleBlogSection;