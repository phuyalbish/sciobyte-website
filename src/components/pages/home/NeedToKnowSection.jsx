import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogNormalTile from "@/components/tiles/blogs/NormalBlogTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";
import { fetchBlogs } from "@/apis/blogs.js";
import { useState, useEffect, useRef } from "react";
import { parseISO, format } from "date-fns";
import { Carousel } from "react-responsive-carousel";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Link } from "react-router-dom";
import { observeOnScroll } from '@/utils/observeOnScroll';

import _ from "lodash";

const NeedToKnowSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [rawBlogs, setRawBlogs] = useState([]);
    useEffect(() => {
    observeOnScroll('.bottom_popup');
  }, []);

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


  return (
    <section className="flex flex-col p-4 gap-4 relative w-full md:px-[4rem]">
      <h1 className="font-reenie text-B500 text-2xl md:text-5xl  font-light" >
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
                category: blogs[0].category_name,
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
                        category: blog?.category_name,
                        location: blog?.location,
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
        <EmblaCarousel link="/blogs">
          {rawBlogs?.map((item, index) => (
            <div key={index} className="embla__slide min-w-full">
              <BlogNormalTile
                key={index}
                blog={item}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
      <div className="md:block hidden text-right">
        <Link aria-label="Blogs" to="/blogs" className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
          See All
        </Link>
      </div>
    </section>
  );
};

export default NeedToKnowSection;
