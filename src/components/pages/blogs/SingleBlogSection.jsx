import React, { useState } from "react";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import {
  ImageSkeleton,
  HeadingSkeleton,
  DescriptionSkeleton,
  LongBlogContentSkeleton,
} from "@/components/skeleton/Skeleton.jsx";

import {truncate} from "@/utils/truncate.js";

const SingleBlogSection = ({ latestBlog }) => {
  const sanitizedContent = DOMPurify.sanitize(latestBlog?.content);
  const content =
    sanitizedContent.length > 600
      ? sanitizedContent.slice(0, 600)
      : sanitizedContent;

  const isLoading = Object.keys(latestBlog).length === 0;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/blog/" + latestBlog?.slug
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="home-headings font-semibold py-[2rem]">Blog</h1>
        <div className="mx-auto px-[2rem] md:px-[4.5rem]">
          <article className=" rounded-xl grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] items-center p-[1.25rem] bg-white  shadow-lg overflow-hidden">
            <div className="relative h-full">
              {isLoading ? (
                <ImageSkeleton />
              ) : (
                <img
                  decoding="async"
                  loading="lazy"
                  src={latestBlog?.image}
                  className="w-full h-[15rem] md:h-[25rem] object-cover brightness-90 rounded-xl"
                />
              )}
            </div>

            <div className="h-full">
              <div className="flex flex-col gap-4">
                <Link to={`/blog/${latestBlog?.slug}`}>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">
                    {isLoading ? <HeadingSkeleton /> : latestBlog?.heading}
                  </h1>
                </Link>

                <div className="flex  relative items-center gap-6 text-sm text-gray-600">
                  {isLoading ? (
                    <DescriptionSkeleton />
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <AiFillEdit />
                        <span className="font-medium">
                          by {latestBlog?.author_name || "Unknown"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdDateRange />
                        <time>
                          {format(
                            new Date(latestBlog?.created_at || Date.now()),
                            "MMMM d, yyyy"
                          )}
                        </time>
                      </div>
                      <IoMdShare
                        className="flex items-center gap-1 cursor-pointer bg-white/50 hover:bg-white text-N300  p-1 rounded-md size-6"
                        onClick={handleCopy}
                      />

                      {copied && (
                        <div className="text-N500  w-34  text-sm  rounded-md">
                          Link Copied!
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="flex gap-2">
                  {!isLoading && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-B75 text-B500">
                      {latestBlog?.category_name || "Category"}
                    </span>
                  )}
                </div>

                <div className="text-md text-N300 text-start">
                  {latestBlog?.subheading && truncate(latestBlog?.subheading, 150)}
                </div>

                {isLoading ? (
                  <LongBlogContentSkeleton />
                ) : (
                  <>
                    <span
                      className="leading-relaxed text-left"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                    <div className="flex justify-end text-B500 hover:text-B300 hover:underline font-bold cursor-pointer">
                      {sanitizedContent.length > 600 && (
                        <Link to={`/blog/${latestBlog?.slug}`}>
                          ... Continue Reading
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default SingleBlogSection;
