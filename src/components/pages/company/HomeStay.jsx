const HomeStay = () => {
    return (
        <>
            <div className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto   lg:gap-0 gap-5">
                <div className="py-[2rem] text-center md:text-4xl  text-2xl rounded-lg font-semibold">
                    Our Home Stay
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly items-center w-full gap-5 ">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-[1rem]  ">
                        <h1 className="text-2xl font-semibold text-left">
                            Kritipur Comfort <span className="text-B300">Homestay</span>
                        </h1>
                        <p className="text-[1rem] text-left">
                            Namaste! We are a warm and loving family of four – Aama, Suju,
                            Aashish, and our little one, Anahat. Since 2017, our home has been
                            open to guests from around the world, and we feel truly blessed to
                            have welcomed over 200 wonderful friends into our lives. Hosting
                            has allowed us to build a global family, filled with beautiful
                            connections and cherished memories. With open hearts, we invite
                            you to be a part of our home, where you’ll experience warmth,
                            love, and the true essence of family. Welcome!
                        </p>
                    </div>
                    <div className="relative md:w-[32rem] w-full ">
                        <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <img
                            src="/homestay.png"
                            alt="homestay"
                            className="h-full w-full object-cover rounded-xl"
                        />
                        <a
                            href="https://www.instagram.com/nepalwelcomesyou/"
                            target="_future"
                            className="absolute bottom-1 right-1 flex gap-2  items-center "
                        >
                            <img src="/instagram-logo.png" alt="" className="w-6" />
                            <p className="text-lg font-semibold  text-white underline underline-offset-1">
                                @nepalwelcomesyou
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeStay;