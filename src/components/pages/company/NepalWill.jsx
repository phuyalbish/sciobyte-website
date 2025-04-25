import NW from "@/assets/NW.png"
import nepalWill from "@/assets/nepalwill.png"
function NepalWill() {
  return (
    
      <div id="csr" className="flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto gap-5">
        <div className="text-xl font-liches  text-left rounded-lg font-semibold">
          Social Initiative
        </div >
        <div className="flex gap-10">
          
          <div className="relative md:w-[32rem] w-full">
            <img
              decoding="async"
              loading="lazy"
              src={nepalWill}
              alt="nepal will"
              className="h-full w-full object-cover rounded-xl"
            />
            
          </div> 
          <div className="w-full lg:w-7/12 flex flex-col justify-center  ">
            <h1 className="text-xl font-semibold text-left">
              Nepal <span className="text-G300">Will</span>
            </h1>
            <a

              aria-label="Nepal Will"
              href="https://nepalwill.com/"
              target="_future"
              className=" bottom-1 right-1 flex gap-2 mb-3  items-center "
            >
              <img
                decoding="async"
                loading="lazy"
                src={NW}
                alt="Nepal Will"
                className="w-6 rounded-full"
              />
              <p className="text-sm font-light  text-black">
                @ <span className="underline underline-offset-2">nepalwill</span> 
              </p>
            </a>
            <p className="text-justify">
              NepalWill is a non-governmental organization dedicated to
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
  )
}

export default NepalWill