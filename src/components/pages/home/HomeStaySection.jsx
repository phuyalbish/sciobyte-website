import homestay from "@/assets/homestay.png";
import homestay_vector from "@/assets/homestay-vector.png";
import mobile_homestay_vector from "@/assets/mobile-homestay-vector.png";

import google_logo from "@/assets/google-logo.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const GoogleReview = () => {
  return (
    <div className="p-4 bg-white shadow-lg  text-left   lg:rounded-r-[1rem] rounded-l-[1rem]   flex flex-col gap-[0.5rem]">
      <div className="flex text-left">
        <span className="mr-2">
          <img
            decoding="async"
            loading="lazy"
            src={google_logo}
            alt="Google Logo"
            className="h-6 w-6"
          />
        </span>
        <div className="flex gap-3 items-center">
          <span className="text-lg font-bold text-[#418BE0]">4.8</span>
          <div className="text-yellow-500 flex gap-1">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          </div>
        </div>
      </div>
      <a href="#" className=" hover:underline text-[#418BE0]">
        See our Reviews
      </a>
    </div>
  );
};
const HomeStaySection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto gap-5">
        <div className="py-2 px-3 text-center home-headings  md:mb-10 rounded-lg">
          Your <span className="font-bold text-B300">HOMESTAY</span> Family{" "}
          <span className="font-bold text-B300">WELCOMES</span> You.
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-end w-full gap-5 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 ">
            <div className="home-headings  font-semibold text-left">
              Kritipur Comfort Homestay
            </div>
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
            <div className="flex">
              <GoogleReview />
            </div>
          </div>
          <div className="relative md:w-[32rem] w-full ">
            <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <img
              decoding="async"
              loading="lazy"
              src={homestay}
              alt="homestay"
              className="h-full w-full object-cover rounded-xl"
            />
            <a
              href="https://www.instagram.com/nepalwelcomesyou/"
              target="_future"
              className="absolute bottom-1 right-1 flex gap-2  items-center "
            >
              <img
                decoding="async"
                loading="lazy"
                src="/instagram-logo.png"
                alt=""
                className="w-6"
              />
              <p className="text-lg font-semibold  text-white underline underline-offset-1">
                @nepalwelcomesyou
              </p>
            </a>
          </div>
        </div>
      </div>
      <img
        decoding="async"
        loading="lazy"
        src={homestay_vector}
        alt="homestay-vector"
        className="w-full hidden md:block"
      />

      <img
        decoding="async"
        loading="lazy"
        src={mobile_homestay_vector}
        alt="homestay-vector"
        className="w-full  md:hidden"
      />
    </div>
  );
};

export default HomeStaySection;
