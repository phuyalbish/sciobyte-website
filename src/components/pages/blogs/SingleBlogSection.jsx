const SingleBlogSection = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-[2.375rem] font-semibold py-[2rem]">Blog</h1>
                <div className="mx-auto px-[2rem] md:px-[4.5rem]">
                    <article className="rounded-xl grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] items-center p-[1.25rem] bg-white  shadow-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=2069"
                                alt="Annapurna Base Camp"
                                className="w-full h-[15rem] md:h-[25rem] object-cover brightness-90 rounded-xl"
                            />
                        </div>

                        <div className="">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                    Annapurna Base Camp Trek in April: An Overall Guide
                                </h1>

                                <div className="flex items-center gap-6 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <span className="font-medium">by Hello Trekkers</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <time>Mar 20, 2025</time>
                                    </div>
                                    <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                                        {/* <Share2 className="w-4 h-4" /> */}
                                        <span>Share</span>
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        Trekking
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-left">
                                    Hello Trekkers Pvt. Ltd. was founded in the year 2025 with the primary goal of delivering exceptional trekking experiences to adventure enthusiasts from Nepal and across the globe. Our company was established with a strong commitment to promoting Nepal's natural beauty and cultural heritage while ensuring that every trekker—whether local or international—receives the highest standard of service, safety, and hospitality. We strive to create memorable journeys by combining professional guidance, personalized services, and authentic experiences that allow travelers to explore the majestic landscapes of Nepal in a meaningful and enjoyable way.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default SingleBlogSection;