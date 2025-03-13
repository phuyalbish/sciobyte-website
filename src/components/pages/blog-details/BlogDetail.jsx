// import { Share2, FileText, Link2, MessageSquare, Copy, Code } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBlogBySlug } from "@/apis/blogs.js";
import { format } from "date-fns";
import DOMPurify from "dompurify";

const BlogDetail = () => {
    const { slug } = useParams();
    console.log("slug: ", slug);

    const [blog, setBlog] = useState({});
    const [content, setContent] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchBlogBySlug(slug);
                const blogData = response?.data || {}; // Ensure it's an array
                const sanitizedContent = DOMPurify.sanitize(blogData?.content)

                setBlog(blogData);
                setContent(sanitizedContent);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setBlog({});
            }
        })()
    }, [])


    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="lg:flex-1">
                        <article className="prose prose-lg max-w-none">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                {blog?.heading}
                            </h1>

                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">by {blog?.authors?.fullname || "Unknown"}</span>
                                </div>
                                <time>{format(new Date(blog?.created_at || Date.now()), "MMMM d, yyyy")}</time>
                                <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                                    {/* <Share2 className="w-4 h-4" /> */}
                                    <span>Share</span>
                                </button>
                            </div>

                            <div className="aspect-[16/9] mb-8">
                                <img
                                    src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=2069"
                                    alt="Annapurna Base Camp"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            <div className="space-y-6 text-gray-600 text-left" dangerouslySetInnerHTML={{ __html: content }}></div>

                            {/* <div className="flex items-center gap-4 mt-8 py-4 border-t">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <FileText className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Link2 className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <MessageSquare className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Copy className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                    <Code className="w-5 h-5" />
                                </button>
                            </div> */}
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-36">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Content</h2>
                                <nav className="space-y-3">
                                    <a href="#introduction" className="block text-blue-600 hover:text-blue-700">
                                        Introduction
                                    </a>
                                    <a href="#features" className="block text-gray-600 hover:text-gray-900">
                                        Features
                                    </a>
                                    <a href="#how-to-use" className="block text-gray-600 hover:text-gray-900">
                                        How to Use api and this is true for all
                                    </a>
                                    <a href="#introduction-2" className="block text-gray-600 hover:text-gray-900">
                                        Introduction
                                    </a>
                                    <a href="#features-2" className="block text-gray-600 hover:text-gray-900">
                                        Features
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetail;