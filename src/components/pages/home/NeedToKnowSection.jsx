import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";
import { fetchBlogs } from "@/apis/blogs.js";
import { useState, useEffect, useRef } from "react";
import { parseISO, format } from "date-fns";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import _ from "lodash";

const NeedToKnowSection_need_to_work_on_it = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBlogs();
        const blogsData = response?.data?.results || []; // Ensure it's an array

        if (!Array.isArray(blogsData) || blogsData.length === 0) {
          setBlogs([]);
          return;
        }

        // const chunkedBlogsData = _.chunk(blogsData.slice(1), 2);
        // setBlogs([blogsData[0], chunkedBlogsData]);
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    })();
  }, []);

  const carouselRef = useRef(null);
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  return (
    <>
      <section className="container">
        {/* <div className="px-[2rem] md:px-[4.5rem]"> */}
        <div className="px-[2rem] md:px-[4.5rem]">
          <h1 className="mb-[3rem] text-6xl text-G200 reenie-beanie">
            You need to know these
          </h1>
          <div className="w-full grid grid-rows-[65vh] grid-cols-1 md:grid-cols-2 gap-[2.5rem] items-center border border-black">
            {blogs.length > 0 && blogs[0] ? (
              <div className="h-full">
                <BlogVerticalTile
                  blog={{
                    title: blogs[0]?.heading,
                    date: "Mar 25, 2025",
                    location: "Nepal",
                    category: "Travel Tips",
                    imageUrl: blogs[0]?.images?.image,
                    slug: blogs[0].slug,
                  }}
                />
              </div>
            ) : (
              <p>Loading blogs...</p>
            )}

            {/* <div
              id="blog-carousel"
              className="flex flex-col gap-[2.5rem]   md:w-[60%]"
            >
              {blogs[1] && blogs[1]?.length >= 1 ? (
                <Carousel ref={carouselRef} axis="vertical">
                  {blogs[1]?.map((chunkedBlog, index) => (
                    <div key={index} className="flex flex-col gap-[2.5rem]">
                      {chunkedBlog.map((blog, index) => (
                        <BlogHorizontalTile
                          key={blog.id || index}
                          blog={{
                            title: blog.heading,
                            date: format(
                              parseISO(blog?.created_at),
                              "MMMM d, yyyy"
                            ),
                            location: "Nepal",
                            category: "Travel Tips",
                            imageUrl: blog?.images?.image,
                            slug: blog?.slug,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>Loading blogs...</p> // Placeholder while fetching
              )} */}
            {/* <Carousel axis="vertical" autoFocus autoPlay={true} infiniteLoop >
                                {
                                    blogs?.slice(1,)?.map(blog => (
                                        <BlogHorizontalTile
                                            title={blog?.heading}
                                            date={format(parseISO(blog?.created_at), "MMMM d, yyyy")}
                                            location="Nepal"
                                            category="Travel Tips"
                                            imageUrl={blog?.images?.image}
                                        />
                                    ))
                                }
                            </Carousel> */}
            <div className="w-full grid grid-rows-2 gap-5">
              {
                blogs.slice(1, 3).map((blog, index) => {
                  // console.log(blog)
                  return <BlogHorizontalTile
                    key={index}
                    blog={{
                      title: blog?.heading,
                      date: format(new Date(blog?.created_at), "MMMM d, yyyy"),
                      location: "Nepal",
                      category: blog?.category || "category",
                      imageUrl: blog?.images?.image,
                      slug: blog?.slug
                    }}
                  />
                })
              }
            </div>
          </div>
        </div>
        <div>
          <div className="text-right text-B500 font-bold">
            <Link to="/blogs" className="hover:underline hover:text-B300">
              <span>See More ...</span>
            </Link>
          </div>
        </div>

        {/* <div className="flex justify-end gap-5 py-5">
              <div
                className="rounded-[0.25rem] p-5 bg-[#00A991] cursor-pointer"
                onClick={prevSlide}
              >
                <img src="/left_keyboard_backspace.svg" alt="" />
              </div>
              <div
                className="rounded-[0.25rem] p-5 bg-[#00A991] cursor-pointer"
                onClick={nextSlide}
              >
                <img src="/right_keyboard_backspace.svg" alt="" />
              </div>
            </div> */}

      </section >
    </>
  );
};


import SingleBlogSection from "@/components/pages/blogs/SingleBlogSection.jsx";
import LatestTravelBlog from "@/components/pages/blogs/LatestTravelBlog.jsx";

const NeedToKnowSection = () => {
  const [latestBlog, setLatestBlog] = useState({});
  const [remainingBlogs, setRemainingBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBlogs();
        const blogsData = response?.data?.results || []; // Ensure it's an array

        if (!Array.isArray(blogsData) || blogsData.length === 0) {
          setLatestBlog({});
          setRemainingBlogs([]);
          return;
        }
        console.log("Blogs Data: ", blogsData);
        const latest = blogsData.length
          ? blogsData.reduce((latest, current) =>
            new Date(current?.created_at) > new Date(latest.created_at) ? current : latest
          )
          : {}

        setLatestBlog(latest)
        setRemainingBlogs(() =>
          blogsData.filter(blog => blog?.id !== latest?.id).slice(0, 3)
        );

      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      }
    })();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-[2rem]">
        <SingleBlogSection latestBlog={latestBlog} />
        <LatestTravelBlog latestBlogs={remainingBlogs} />
      </div>
    </>
  )
};
export default NeedToKnowSection;