import homeStay from "@/assets/homestay.png";
import instagramLogo from "@/assets/instagram-logo.png";
import Container from "@/components/Container.jsx";
import ImageSkeleton from "@/components/skeleton/ImageSkeleton.jsx";


const HomeStay = () => {
  return (
    <Container>      <div id="homestay" className="text-2xl font-liches text-center rounded-lg font-semibold">
          Our Home Stay
        </div>

        <div className="flex flex-col md:flex-row  justify-evenly items-center w-full gap-5 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-[1rem]  ">
            <h1 className="text-2xl font-semibold text-left">
              Kirtipur Comfort <span className="text-B300">Homestay</span>
            </h1>
            <p className="text-justify">
              All Namaste! We are a warm and loving family of four – Aama, Suju,
              Aashish, and our little one, Anahat. Since 2017, our home has been
              open to guests from around the world, and we feel truly blessed to
              have welcomed over 200 wonderful friends into our lives. Hosting
              has allowed us to build a global family, filled with beautiful
              connections and cherished memories. With open hearts, we invite
              you to be a part of our home, where you’ll experience warmth,
              love, and the true essence of family. Welcome!
            </p>
          </div>
          <div className="relative md:w-[32rem] w-full">
            <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <ImageSkeleton
              src={homeStay}
              alt="homestay"
              className="h-full w-full object-cover rounded-lg"
            />
            <a

              aria-label="nepal welcoms you"
              href="https://www.instagram.com/nepalwelcomesyou/"
              target="_future"
              className="absolute bottom-2 right-2  flex gap-2  items-center "
            >
              <ImageSkeleton
                src={instagramLogo}
                alt="instagram Logo"
                className="w-6"
              />
              <p className="text-base font-semibold  text-white underline underline-offset-1">
                @nepalwelcomesyou
              </p>
            </a>
          </div>
        </div>
        </Container>

  );
};

export default HomeStay;
