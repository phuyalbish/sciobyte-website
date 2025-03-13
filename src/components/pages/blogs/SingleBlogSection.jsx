import { format } from "date-fns";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

const SingleBlogSection = ({ latestBlog }) => {
    const sanitizedContent = DOMPurify.sanitize(latestBlog?.content)
    const content = sanitizedContent.length > 600
        ? sanitizedContent.slice(0, 600)
        : sanitizedContent;

    return (
        <>
            <div className="container">
                <h1 className="text-[2.375rem] font-semibold py-[2rem]">Blog</h1>
                <div className="mx-auto px-[2rem] md:px-[4.5rem]">
                    <article className="rounded-xl grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] items-center p-[1.25rem] bg-white  shadow-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={latestBlog?.images?.image}
                                alt={latestBlog?.images?.caption}
                                className="w-full h-[15rem] md:h-[25rem] object-cover brightness-90 rounded-xl"
                            />
                        </div>

                        <div className="h-full">
                            <div className="flex flex-col gap-4">
                                <Link to={`/blog/${latestBlog?.slug}`}>
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">
                                        {latestBlog?.heading}
                                    </h1>
                                </Link>

                                <div className="flex items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">by {latestBlog?.authors?.fullname || "Unknown"}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <time>{format(new Date(latestBlog?.created_at || Date.now()), "MMMM d, yyyy")}</time>
                                    </div>
                                    <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                                        {/* <Share2 className="w-4 h-4" /> */}
                                        <span>Share</span>
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-B75 text-B500">
                                        {latestBlog?.categories || "Category"}
                                    </span>
                                </div>

                                <span className="leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: content }}></span>
                                <div className="flex justify-end text-B500 hover:text-B300 font-bold cursor-pointer">
                                    {
                                        sanitizedContent.length > 600 &&
                                        <Link to={`/blog/${latestBlog?.slug}`}>
                                            ... Continue Reading
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default SingleBlogSection;