import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogNormalTile from "@/components/tiles/blogs/NormalBlogTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";
import {fetchData} from "@/apis/https";
import { useState, useEffect, useRef } from "react";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import { Link } from "react-router-dom";
import { observeOnScroll } from '@/utils/observeOnScroll';


const NeedToKnowSection = () => {
  const [blogs, setBlogs] = useState([]);
    useEffect(() => {
    observeOnScroll('.bottom_popup');
  }, []);

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

  useEffect(() => {
    (async () => {
      try {  
        const response = await fetchData(`/blogs/home/`);
        console.log(response)
        setBlogs(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } 
    })();
  }, []);

  const carouselRef = useRef(null);


  return (
    <section className="flex flex-col p-4 gap-4 relative w-full md:px-[4rem]">
      <h1 className="font-reenie text-B500 text-2xl md:text-5xl  font-light" >
        You need to know these
      </h1>
      <div className="relative h-full hidden md:flex justify-between    items-center">
          <div className="relative  h-full  md:w-1/2 left_popup  ">
            <BlogVerticalTile
            />
          </div>
        <div
          id="blog-carousel"
          className="flex flex-col md:w-1/2 bottom_popup"
        >
          {blogs && blogs?.length  ? (
             <EmblaCarousel ref={carouselRef} showStatus={false} showThumbs={false} link="/blogs">
              {chunkArray(blogs, 2).map((group, index) => (
                    <div key={index} className="embla__slide min-w-full">
                      <div className="flex flex-col ">
                        {group.map((item, subIndex) => (
                          <BlogHorizontalTile key={subIndex} blog={item} />
                        ))}
                      </div>
                    </div>
                  ))}
              </EmblaCarousel>
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>
      <div className="md:hidden relative w-full">
        <EmblaCarousel link="/blogs">
          {blogs?.map((item, index) => (
            <div key={index} className="embla__slide min-w-full">
              <BlogNormalTile
                key={index}
                blog={item}
                baseUrl={true}
              />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
};

export default NeedToKnowSection;
