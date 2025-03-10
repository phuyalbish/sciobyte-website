const NeedToKnowSection = () => {
    return (
        <>
            <section className="container p-4">
                <h1 className="text-[2.3rem] mb-[3rem] font-semibold">You need to know these</h1>
                <div className="border border-black p-5 flex flex-col md:flex-row">
                    <div className="border border-black p-5 md:w-1/2">
                        <div id="blog1">
                            <div className="img-container border border-black w-full h-[400px] relative">
                                <img className="h-full w-full object-cover object-center mx-auto" src="/homestay.png" alt="" />
                                <span className="flex gap-1 bg-white  absolute top-5 right-5 py-[0.5rem] px-[1rem]">
                                    <span></span>
                                    <span>5</span>
                                    <span>min</span>
                                    <span>read</span>
                                </span>
                                <span className="bg-white  absolute bottom-5 left-0 py-[0.5rem] px-[1rem]">
                                    Trekking Journey
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-black p-5 md:w-1/2">
                        <div className="border border-black p-5"></div>
                        <div className="border border-black p-5"></div>
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