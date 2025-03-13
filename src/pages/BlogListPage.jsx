import React from "react";
import SingleBlogSection from "@/components/pages/blogs/SingleBlogSection.jsx";
import LatestTravelBlog from "@/components/pages/blogs/LatestTravelBlog.jsx";

function BlogListPage() {
  // return <h1 className="text-[36px]">Blog</h1>;
  return (
    <>
      <SingleBlogSection />
      <LatestTravelBlog />
    </> 
  );
}

export default BlogListPage;
