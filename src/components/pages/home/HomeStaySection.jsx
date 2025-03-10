const GoogleReview = () => {
    return (
        <div class="p-4 pe-8 bg-white shadow-lg  text-left rounded-r-[1rem] flex flex-col gap-[0.5rem]">
            <div class="flex text-left">
                <span class="mr-2">
                    <img src="/google-logo.png" alt="Google Logo" class="h-6 w-6" />
                </span>
                <div className="flex gap-3 items-center">
                    <span class="text-lg font-bold text-[#418BE0]">4.8</span>
                    <div class="text-yellow-500 flex">
                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span>
                    </div>
                </div>
            </div>
            <a href="#" class="text-white hover:underline text-[#418BE0]">See our Reviews</a>
        </div>
    );
}
const HomeStaySection = () => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="container">
                    {/* <div className="px-[2rem] md:px-[4.5rem]"> */}
                    <div>
                        <h1 className="text-[2.3rem] mb-[3rem] font-semibold">Your <span className="text-primary">HOMESTAY FAMILY WELCOMES</span> You</h1>
                        <div className="flex flex-col lg:flex-row justify-between w-full gap-3">
                            <div className="w-full lg:w-1/2 flex flex-col gap-[3rem]">
                                <h1 className="text-[2rem] font-semibold">Kritipur Comfort Homestay</h1>
                                <p className="text-[1rem] text-left">Namaste! We are a warm and loving family of four – Aama, Suju, Aashish, and our little one, Anahat. Since 2017, our home has been open to guests from around the world, and we feel truly blessed to have welcomed over 200 wonderful friends into our lives. Hosting has allowed us to build a global family, filled with beautiful connections and cherished memories. With open hearts, we invite you to be a part of our home, where you’ll experience warmth, love, and the true essence of family. Welcome!</p>
                            </div>
                            <div className=" ">
                                <img src="/homestay.png" alt="homestay" className="h-[25rem] w-[30rem] object-cover  mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex flex-col lg:flex-row ">
                        <div className="w-96 lg:w-full lg:absolute top-[20%] flex flex-col-reverse lg:flex-row gap-3 justify-between px-[2rem] md:px-[4.5rem]">
                            <div className="">
                                <GoogleReview />
                            </div>
                            <div className="flex gap-[1rem] items-center lg:translate-y-[-50%]">
                                <img src="/instagram-logo.png" alt="" className="w-[2.5rem] h-[2.5rem]" />
                                <p className="text-[1.3125rem] font-semibold text-black lg:text-white">@nepalwelcomesyou</p>
                            </div>
                        </div>
                    </div>
                    <img src="/homestay-vector.png" alt="homestay-vector" className="w-full hidden lg:block" />
                </div>
            </div>
        </>
    );
}

export default HomeStaySection;