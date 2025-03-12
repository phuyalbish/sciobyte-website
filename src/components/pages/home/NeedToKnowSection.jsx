import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";
import { fetchBlogs } from "@/apis/blogs.js";
import { useState, useEffect, useRef } from "react";
import { parseISO, format } from "date-fns";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import _ from "lodash";

const NeedToKnowSection = () => {
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

        const chunkedBlogsData = _.chunk(blogsData.slice(1), 2);
        setBlogs([blogsData[0], chunkedBlogsData]);
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
          <div className=" flex flex-col md:flex-row gap-[2.5rem]">
            {blogs.length > 0 && blogs[0] ? (
              <div className=" md:w-[40%]">
                <BlogVerticalTile
                  title={blogs[0]?.heading}
                  date="Mar 25, 2025"
                  location="Nepal"
                  category="Travel Tips"
                  imageUrl={blogs[0]?.images?.image}
                />
              </div>
            ) : (
              <p>Loading blogs...</p>
            )}

            <div
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
                          title={blog.heading}
                          date={format(
                            parseISO(blog?.created_at),
                            "MMMM d, yyyy"
                          )}
                          location="Nepal"
                          category="Travel Tips"
                          imageUrl={blog?.images?.image}
                        />
                      ))}
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>Loading blogs...</p> // Placeholder while fetching
              )}
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
              {/* <div className=" ">
                                <BlogHorizontalTile
                                    title="Annapurna Base Camp Trek in April: An Overall Guide"
                                    date="Mar 25, 2025"
                                    location="Nepal"
                                    category="Travel Tips"
                                    imageUrl="/forest.png"
                                />
                            </div> */}
            </div>
          </div>
          <div className="flex justify-end gap-5 py-5">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default NeedToKnowSection;
