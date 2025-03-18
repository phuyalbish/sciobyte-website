const Hero = () => {
  return (
    <>
      <div>
        <div className="py-[2rem] text-center md:text-4xl  text-2xl rounded-lg font-semibold">
          Who We Are & Our Vision for your New Tales
        </div>
        <div className="group flex justify-center relative h-[30rem]">
          <div className="hidden lg:block shadow-[0_0_12px_0_rgba(0,0,0,0.5)] transition duration-500 overflow-hidden brightness-75 rounded-lg absolute z-10 left-0 h-full w-[24.4375rem] scale-[81%] opacity-0 group-hover:scale-[80%] group-hover:opacity-100">
            <img
              decoding="async"
              loading="lazy"
              src="/forest.png"
              className="h-full w-full object-cover object-center"
              alt="company-hero-img"
            />
          </div>
          <div className="hidden lg:block shadow-[0_0_12px_0_rgba(0,0,0,0.5)] transition duration-500 overflow-hidden brightness-75 rounded-lg absolute z-20 left-[15%] h-full w-[24.4375rem] scale-[91%]  opacity-0 group-hover:scale-[90%] group-hover:opacity-100">
            <img
              decoding="async"
              loading="lazy"
              src="/rock.jpeg"
              className="h-full w-full object-cover object-center"
              alt="company-hero-img"
            />
          </div>
          <div className="shadow-[0_0_12px_0_rgba(0,0,0,0.5)] transition duration-500 overflow-hidden brightness-75 rounded-lg absolute z-40 h-full w-[24.4375rem] scale-[101%]  group-hover:scale-[100%]">
            <img
              decoding="async"
              loading="lazy"
              src="/company-hero-img.png"
              className="h-full w-full object-cover object-center"
              alt="company-hero-img"
            />
          </div>
          <div className="hidden lg:block shadow-[0_0_12px_0_rgba(0,0,0,0.5)] transition duration-500 overflow-hidden brightness-75 rounded-lg absolute z-20 right-[15%] h-full w-[24.4375rem] scale-[91%]  opacity-0 group-hover:scale-[90%] group-hover:opacity-100">
            <img
              decoding="async"
              loading="lazy"
              src="/rock.jpeg"
              className="h-full w-full object-cover object-center"
              alt="company-hero-img"
            />
          </div>
          <div className="hidden lg:block shadow-[0_0_12px_0_rgba(0,0,0,0.5)] transition duration-500 overflow-hidden brightness-75 rounded-lg absolute z-10 right-0 h-full w-[24.4375rem] scale-[81%]  opacity-0 group-hover:scale-[80%] group-hover:opacity-100">
            <img
              decoding="async"
              loading="lazy"
              src="/forest.png"
              className="h-full w-full object-cover object-center"
              alt="company-hero-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
