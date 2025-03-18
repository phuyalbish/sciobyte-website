import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import { format } from "date-fns";

const LatestTravelBlog = ({ latestBlogs }) => {
  return (
    <>
      <div className="container">
        <div className="mx-auto px-[2rem] md:px-[4.5rem] mb-[4rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestBlogs.map((blog, index) => (
              <BlogVerticalTile
                key={index}
                blog={{
                  title: blog?.heading || "Trekking is Awesome",
                  author: blog?.authors?.fullname || "unknown",
                  date: format(
                    new Date(blog?.created_at || Date.now()),
                    "MMMM d, yyyy"
                  ),
                  location: "Nepal",
                  category: blog?.category.name || "category",
                  imageUrl: blog?.image,
                  slug: blog?.slug,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestTravelBlog;
