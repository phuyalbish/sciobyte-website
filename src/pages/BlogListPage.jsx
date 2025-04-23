import  { useState, useEffect } from "react";
import SingleBlogSection from "@/components/pages/blogs/SingleBlogSection.jsx";
import LatestTravelBlog from "@/components/pages/blogs/LatestTravelBlog.jsx";

import { fetchBlogs } from "@/apis/blogs.js";

function BlogListPage() {
  // return <h1 className="text-[36px]">Blog</h1>;
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
        const latest = blogsData.length
          ? blogsData.reduce((latest, current) =>
              new Date(current?.created_at) > new Date(latest.created_at)
                ? current
                : latest
            )
          : {};

        setLatestBlog(latest);
        setRemainingBlogs(() =>
          blogsData.filter((blog) => blog?.id !== latest?.id)
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
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
  );
}

export default BlogListPage;
