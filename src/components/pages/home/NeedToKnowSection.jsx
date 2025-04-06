import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";
import { fetchBlogs } from "@/apis/blogs.js";
import { useState, useEffect, useRef } from "react";
import { parseISO, format } from "date-fns";
import { Carousel } from "react-responsive-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/assets/styles/carousel.min.css";

import _ from "lodash";

const NeedToKnowSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [rawBlogs, setRawBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchBlogs();
        const blogsData = response?.data?.results || [];

        setRawBlogs(blogsData);

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
    <section className="container flex flex-col gap-4 relative w-full md:px-[4.5rem]">
      <h1 className="text-4xl font-reenie text-B500 sm:text-4xl md:text-5xl  font-light">
        You need to know these
      </h1>
      <div className="relative h-full hidden md:flex justify-between gap-5   items-center">
        {blogs.length > 0 && blogs[0] ? (
          <div className="relative  h-full  md:w-[50%] left_popup ">
            <BlogVerticalTile
              blog={{
                heading: blogs[0]?.heading,
                subheading: blogs[0]?.subheading,
                author: blogs[0]?.author_name,
                date: format(parseISO(blogs[0]?.created_at), "MMMM d, yyyy"),

                region: blogs[0].region_name,
                location: blogs[0].location,
                imageUrl: blogs[0]?.image,
                slug: blogs[0].slug,
                description: blogs[0].description,
              }}
            />
          </div>
        ) : (
          <p>Loading blogs...</p>
        )}

        <div
          id="blog-carousel"
          className="flex flex-col md:w-[45%] bottom_popup"
        >
          {blogs[1] && blogs[1]?.length >= 1 ? (
            <Carousel ref={carouselRef} showStatus={false} showThumbs={false} axis="vertical">
              {blogs[1]?.map((chunkedBlog, index) => (
                <div key={index} className="flex flex-col gap-[2.5rem]">
                  {chunkedBlog.map((blog, index) => (
                    <BlogHorizontalTile
                      key={blog.id || index}
                      blog={{
                        heading: blog.heading,
                        author: blog?.author_name,
                        subheading: blog.subheading,
                        date: format(
                          parseISO(blog?.created_at),
                          "MMMM d, yyyy"
                        ),
                        region: blog?.region_name,
                        location: blogs[0].location,
                        imageUrl: blog?.image,
                        slug: blog?.slug,
                      }}
                    />
                  ))}
                </div>
              ))}
            </Carousel>
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>
      <div className="md:hidden relative w-full">
        <EmblaCarousel>
          {rawBlogs?.map((item, index) => (
            <div key={index} className="embla__slide min-w-full">
              <BlogVerticalTile
                key={index}
                blog={{
                  heading: item?.heading,
                  author: item?.author_name,
                  subheading: item?.heading,
                  date: "Mar 25, 2025",
                  region: item?.region_name,
                  location: blogs[0].location,
                  imageUrl: item?.image,
                  slug: item.slug,
                }}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className="hidden md:block text-right text-B500 font-bold">
        <Link to="/blogs" className="hover:underline hover:text-B300">
          <span>See More ...</span>
        </Link>
      </div>
    </section>
  );
};

export default NeedToKnowSection;

// Submission to the will of god, mothotheism. that is muslim.
// Prophet muhammad is a fimal messenger
// five pillars.
// asahad
// sullah
// haza
//

// six rules
// 1. believe in allah - his angels, books, messengers.
// 2. smthng bad or good happen to you, you have to believe that its from god. (The divine decree). dont loose faith.
// 3.

// zakat -  amount of assets for the charity.  2.5%

// Why Lust is the Greatest Test for Allah’s Chosen
