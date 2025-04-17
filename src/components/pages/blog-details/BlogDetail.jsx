// import { Share2, FileText, Link2, MessageSquare, Copy, Code } from 'lucide-react';
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
    // console.dir([...e.target.parentNode.children]);
    const sidebarHeadings = [...e.target.parentNode.children].filter(
      (child) => child !== e.target
    );
    sidebarHeadings.forEach((heading) => heading.classList.remove("text-B400"));
    e.target.classList.add("text-B400");

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
      <div className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-14">
          <div className="bg-white rounded-lg shadow-sm py-5 text-left">
            <h2 className="px-5 text-lg font-semibold text-gray-900 mb-4">
              Content
            </h2>
            <nav className="p-5 w-full space-y-3 h-[50vh] overflow-x-hidden overflow-y-auto">
              {headings.length === 0 ? (
                <>
                  <DescriptionSkeleton />
                  <DescriptionSkeleton />
                  <DescriptionSkeleton />
                  <DescriptionSkeleton />
                </>
              ) : (
                <>
                  {headings.map((heading, index) => (
                    <p
                      onClick={(e) => navigateSidebar(e, heading.id)}
                      key={index}
                      className={`block cursor-pointer ${
                        index === 0 ? "text-B400" : ""
                      } hover:text-B400`}
                    >
                      {heading.content}
                    </p>
                  ))}
                </>
              )}
            </nav>
          </div>
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

        

        const blogData = response?.data || {}; // Ensure it's an array
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
  }, []);

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
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:flex-1">
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
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
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

                  <div className="flex gap-2 items-center cursor-pointer"
                    onClick={handleCopy}>

                  <IoMdShare
                    className="flex items-center gap-1 cursor-pointer bg-white/50 hover:bg-white text-N300  p-1 rounded-md size-6"
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
                  className="space-y-6 text-gray-600 text-left"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              )}

              {/* <div className="flex items-center gap-4 mt-8 py-4 border-t">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <FileText className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Link2 className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Copy className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Code className="w-5 h-5" />
                                </button>
                            </div> */}
            </article>
          </div>

          {/* Sidebar */}
          <Sidebar headings={headings} />
          <GotoTop />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
