import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx"
import {format} from "date-fns";

const LatestTravelBlog = ({latestBlogs}) => {
    console.log("latestBlogs: ", latestBlogs);
    return (
        <>
            <div className="container">
                <h1 className="text-[2.375rem] font-semibold py-[2rem]">Latest Travel Blog</h1>
                <div className="mx-auto px-[2rem] md:px-[4.5rem] mb-[4rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            latestBlogs.map((blog, index) => 
                                <BlogVerticalTile
                                    key={index}
                                    title={blog?.heading || "Trekking is Awesome"}
                                    date={format(new Date(blog?.created_at || Date.now()), "MMMM d, yyyy")}
                                    location="Nepal"
                                    category={blog?.category || "category"}
                                    imageUrl={blog?.images?.image}
                                    slug={blog?.slug}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestTravelBlog;