import nepalWill from "@/assets/nepalwill.png"
import NW from "@/assets/NW.png"

const HomeStay = () => {
  return (
    <>
      <div id="csr" className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto gap-5">
        <div className="text-xl font-liches  text-left rounded-lg font-semibold">
          Social Initiative
        </div >
         <p className=" text-left">
                  I’ll admit, we hesitated to share this. But someone close to me
                  reminded, if we’re doing this with integrity, why not stand by it
                  proudly? We’re a young business, just finding our footing. We’re not
                  here to change the world overnight—but we believe even small ripples
                  can create waves. That’s why we vouch 5% of our profits to Nepal’s
                  education sector, helping underprivileged children through our
                  little capacity. We dream of a future where the gap between private
                  and government schools isn’t a chasm, but a bridge—because every
                  child irrespective of their socio-economic backgrounds should have a
                  fair shot at the stars.
                </p>
        <div className="flex flex-col lg:flex-row justify-between  items-center w-full gap-4 ">
          
          <div className="relative md:w-[32rem] w-full">
            {/* <div className="absolute h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
            <img
              decoding="async"
              loading="lazy"
              src={nepalWill}
              alt="nepalwill"
              className="h-full w-full object-cover rounded-xl"
            />
            
          </div> 
          <div className="w-full lg:w-7/12 flex flex-col justify-center  ">
            <h1 className="text-xl font-semibold text-left">
              Nepal <span className="text-G300">Will</span>
            </h1>
            <a
              href="https://nepalwill.com/"
              target="_future"
              className=" bottom-1 right-1 flex gap-2 mb-3  items-center "
            >
              <img
                decoding="async"
                loading="lazy"
                src={NW}
                alt=""
                className="w-6 rounded-full"
              />
              <p className="text-sm font-light  text-black">
                @ <span className="underline underline-offset-2">nepalwill</span> 
              </p>
            </a>
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
        </div>
      </div>
    </>
  );
};

export default HomeStay;
