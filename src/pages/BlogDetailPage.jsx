import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBlogBySlug } from "@/apis/blogs.js";
import { format } from "date-fns";
import DOMPurify from "dompurify";
import { AiFillEdit } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import {truncate} from "@/utils/truncate.js";
import {
  HeadingSkeleton,
  DescriptionSkeleton,
  LongBlogContentSkeleton,
  ImageSkeleton,
} from "@/components/skeleton/Skeleton.jsx";
import GotoTop from "@/components/GotoTop.jsx";
import { v4 as uuidv4 } from "uuid";

import "@/assets/styles/blogs.css";
import { BASE_MEDIA_URL } from "@/config/baseurl.js";

const extractHeadings = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const h1Elements = [...doc.querySelectorAll("h1")].map((h1) => {
    const id = uuidv4();
    h1.id = id;
    return {
      id: id,
      content: h1.textContent,
    };
  });

  return {
    h1Elements: h1Elements,
    updatedContent: doc.body.innerHTML,
  };
};

const Sidebar = ({ headings }) => {
  const navigateSidebar = (e, id) => {
    const sidebarHeadings = [...e.target.parentNode.children].filter(
      (child) => child !== e.target
    );
    sidebarHeadings.forEach((heading) => {
      heading.classList.remove("text-B600")
    });
    e.target.classList.add("text-B600");

    const targetElement = document.getElementById(id);
    if (targetElement) {
      (targetElement.previousElementSibling || targetElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>

      <div className="hidden lg:block w-full h-full shrink-0 sticky">
          <div className="bg-white w-full p-4 text-left flex flex-col gap-3 ">
          

            {headings.length > 0 && (
            <nav className="w-full flex flex-col gap-3 h-fit">
              {headings.map((heading, index) => (
                <p onClick={(e) => navigateSidebar(e, heading.id)}  key={index}  className={`block text-base cursor-pointer hover:text-B400`} >
                  {heading.content}
                </p>
              ))}
            </nav>
          )}
          </div>
        </div>
    </>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState([]);

  
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBlogBySlug(slug);

        

        const blogData = response?.data || {};
        const sanitizedContent = DOMPurify.sanitize(blogData?.content);

        const { h1Elements, updatedContent } =
          extractHeadings(sanitizedContent);
        setHeadings(h1Elements);
        setBlog(blogData);
        setContent(updatedContent);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog({});
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://hellotrekkers.com/blog/" + slug
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
      <div className="flex flex-col md:flex-row gap-5 mt-5 w-full md:px-[4rem] mb-20 px-4 md:p-0">
          <div className="flex md:w-9/12 w-full md:flex-grow-0 flex-col gap-4">
            <article className="prose prose-lg max-w-none text-left">
              {isLoading ? (
                <HeadingSkeleton />
              ) : (
                <div className="flex flex-col mb-4 gap-1">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                  {blog?.heading}
                </h1>

                                <div className="text-base text-N600 text-start">
                                  {blog?.subheading && truncate(blog?.subheading, 150)}
                                </div>
                                </div>
                
              )}

              {isLoading ? (
                <DescriptionSkeleton />
              ) : (
                <div className="flex flex-wrap items-center gap-6 text-sm text-N700 mb-6">
                  {blog?.author_name && (
                    <div className="flex items-center gap-2">
                      <AiFillEdit />
                      <span className="font-medium">
                        by {blog?.author_name || "Unknown"}
                      </span>
                    </div>
                  )}

                  {blog?.location && (
                    <div className="flex items-center gap-2">
                      <MdLocationOn />
                      <span className="font-medium">{blog?.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MdDateRange />
                    <time>
                      {format(
                        new Date(blog?.created_at || Date.now()),
                        "MMMM d, yyyy"
                      )}
                    </time>
                  </div>

                  <div className="flex gap-2 items-center text-black cursor-pointer"
                    onClick={handleCopy}>

                      <IoMdShare
                        className="flex items-center gap-1 cursor-pointer  p-1 rounded-md size-6"
                      />
                      Share
                  </div>

                  {copied && (
                    <div className="text-N500  w-34  text-sm  rounded-md">
                      Link Copied!
                    </div>
                  )}
                </div>
              )}

              <div className="aspect-[16/9] mb-8 relative">
                {isLoading ? (
                  <ImageSkeleton />
                ) : (
                  <img
                    decoding="async"
                    loading="lazy"
                    
                    src={BASE_MEDIA_URL + blog?.image}
                    alt={blog?.heading}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}
              </div>

              {isLoading ? (
                <LongBlogContentSkeleton />
              ) : (
                <div
                  className="space-y-6 text-N700 text-justify font-manrope"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              )}

            </article>
          </div>
         {headings.length > 0 && (
              <div className="hidden md:flex flex-col md:w-3/12 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold font-liches bg-white z-10 sticky top-[10vh] text-N900">
                  Table of Content
                </h2>
                <div className="md:flex sticky top-[15vh] hidden w-full rounded-b-lg overflow-y-auto h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-900">
                  <Sidebar headings={headings} />
                </div>
              </div>
            )}
          <GotoTop />
      </div>
  );
};

export default BlogDetail;
