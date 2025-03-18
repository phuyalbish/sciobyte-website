const HomeStay = () => {
  return (
    <>
      <div className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto   lg:gap-0 gap-5">
        <div className="py-[2rem] text-center md:text-4xl text-2xl rounded-lg font-semibold">
          CSR
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center w-full gap-5 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-[1rem]  ">
            <h1 className="text-2xl font-semibold text-left">
              Nepal <span className="text-G300">Will</span>
            </h1>
            <p className="text-[1rem] text-left">
              NepalWill is a non-governmental organization dedicated to
              uplifting primary school children in Nepal by providing essential
              educational resources and opportunities. Believing in the
              transformative power of education, NepalWill works to bridge the
              resource gap that hinders many children from accessing quality
              learning environments. What sets NepalWill apart is its commitment
              to transparency and integrity by exclusively accepting in-kind
              contributions such as books, school supplies, and infrastructure
              support. This ensures that every donation makes a tangible
              difference in the lives of the children we aim to serve.
            </p>
          </div>
          <div className="relative md:w-[32rem] w-full ">
            <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <img
              decoding="async"
              loading="lazy"
              src="/nepalwill.png"
              alt="nepalwill"
              className="h-full w-full object-cover rounded-xl"
            />
            <a
              href="https://nepalwill.com/"
              target="_future"
              className="absolute bottom-1 right-1 flex gap-2  items-center "
            >
              <img
                decoding="async"
                loading="lazy"
                src="/NW.png"
                alt=""
                className="w-6"
              />
              <p className="text-lg font-semibold  text-white underline underline-offset-1">
                @nepalwill
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStay;
