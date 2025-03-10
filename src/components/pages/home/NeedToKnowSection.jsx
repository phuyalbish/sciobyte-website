import BlogVerticalTile from "@/components/tiles/blogs/BlogVerticalTile.jsx";
import BlogHorizontalTile from "@/components/tiles/blogs/BlogHorizontalTile.jsx";

const NeedToKnowSection = () => {
    return (
        <>
            <section className="container p-4">
                <h1 className="text-[2.3rem] mb-[3rem] font-semibold">You need to know these</h1>
                <div className=" flex flex-col md:flex-row gap-[2.5rem]">
                    <div className=" md:w-[40%]">
                        <BlogVerticalTile
                            title="Annapurna Base Camp Trek in April: An Overall Guide"
                            date="Mar 25, 2025"
                            location="Nepal"
                            category="Travel Tips"
                            imageUrl="/forest.png"
                        />
                    </div>
                    <div className="flex flex-col gap-[2.5rem]   md:w-[60%]">
                        <div className="">
                            <BlogHorizontalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>
                        <div className=" ">
                            <BlogHorizontalTile
                                title="Annapurna Base Camp Trek in April: An Overall Guide"
                                date="Mar 25, 2025"
                                location="Nepal"
                                category="Travel Tips"
                                imageUrl="/forest.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5 py-5">
                    <div className="rounded-[0.25rem] p-5 bg-[#00A991]"></div>
                    <div className="rounded-[0.25rem] p-5 bg-[#00A991]"></div>
                </div>
            </section>
        </>
    );
}

export default NeedToKnowSection;