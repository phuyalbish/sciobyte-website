import NormalBlogTile from "@/components/tiles/blogs/NormalBlogTile.jsx";
import { format } from "date-fns";

const LatestTravelBlog = ({ latestBlogs }) => {
  return (
    <>
      <div className="container">
        <div className="mx-auto px-3 md:px-[4.5rem] mb-[4rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestBlogs.map((blog, index) => (
              <NormalBlogTile
                key={index}
                blog={{
                  heading: blog?.heading || "Trekking is Awesome",
                  subheading: blog?.subheading || "Trekking is Awesome",
                  author: blog?.author_name,
                  date: format(
                    new Date(blog?.created_at || Date.now()),
                    "MMMM d, yyyy"
                  ),
                  location: blog?.location,
                  region: blog?.region_name || "region",
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
