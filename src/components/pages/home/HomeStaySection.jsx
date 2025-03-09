const GoogleReview = () => {
    return (
        <div class="p-4 pe-8 bg-white shadow-lg  text-left rounded-r-[1rem] flex flex-col gap-[0.5rem]">
            <div class="flex text-left">
                <span class="mr-2">
                    <img src="/google-logo.png" alt="Google Logo" class="h-6 w-6" />
                </span>
                <div className="flex">
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
            <div className="container">
                <div className="px-[2rem] md:px-[4.5rem]">
                    <h1 className="text-[2.3rem] mb-[3rem] font-semibold">Your <span className="text-primary">HOMESTAY FAMILY WELCOMES</span> You</h1>
                    <div className="flex justify-between w-full">
                        <div className="w-1/2 flex flex-col gap-[3rem]">
                            <h1 className="text-[2rem] font-semibold">Kritipur Comfort Homestay</h1>
                            <p className="text-[1rem] text-left">Namaste! We are a warm and loving family of four – Aama, Suju, Aashish, and our little one, Anahat. Since 2017, our home has been open to guests from around the world, and we feel truly blessed to have welcomed over 200 wonderful friends into our lives. Hosting has allowed us to build a global family, filled with beautiful connections and cherished memories. With open hearts, we invite you to be a part of our home, where you’ll experience warmth, love, and the true essence of family. Welcome!</p>
                        </div>
                        <div className=" ">
                            <img src="/homestay.png" alt="homestay" className="h-[25rem] w-[30rem] object-cover" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div className="flex">
                            <div className="absolute top-[20%] w-full flex justify-between px-[2rem] md:px-[4.5rem]">
                                <div className="">
                                    <GoogleReview />
                                </div>
                                <div className="flex gap-[1rem] items-center translate-y-[-85%]">
                                    <img src="/instagram-logo.png" alt="" className="w-[2.5rem] h-[2.5rem]" />
                                    <p className="text-[1.3125rem] font-semibold text-white">@nepalwelcomesyou</p>
                                </div>
                            </div>
                        </div>
                        <img width="100%" src="/homestay-vector.png" alt="homestay-vector" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeStaySection;