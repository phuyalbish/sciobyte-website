const HomeStaySection = () => {
    return (
        <>
            <div className="container px-[2rem] md:px-[4.5rem] ">
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
        </>
    );
}

export default HomeStaySection;