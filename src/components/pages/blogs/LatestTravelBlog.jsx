import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx"

const LatestTravelBlog = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-[2.375rem] font-semibold py-[2rem]">Latest Travel Blog</h1>
                <div className="mx-auto px-[2rem] md:px-[4.5rem] mb-[4rem]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                        <div className=" ">
                            <BlogVerticalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestTravelBlog;