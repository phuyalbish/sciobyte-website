
import { useEffect } from 'react';
import { observeOnScroll } from '@/utils/observeOnScroll';
import SopontaneousTrekTile from "@/components/tiles/SopontaneousTrekTile.jsx";
import TrekTile from "@/components/tiles/TrekTile.jsx";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
function SpontaneousTrekSection({treks}) {


    useEffect(() => {
    observeOnScroll('.bottom_popup');
  }, []);


  return (
    <div className="relative flex justify-center  items-center flex-col w-full">
      <div className="md:px-[4rem] flex flex-col gap-10 relative w-full ">
         <div className="flex flex-col gap-5 ">
          <div className=" text-2xl  md:text-3xl flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 ">
            <span className=" font-liches text-white bg-B500 p-2 rounded-2xl  text-xl sm:text-3xl md:text-4xl">
              SPONTANEOUS
            </span>
            <span className="font-liches text-N900  p-2   text-2xl sm:text-2xl md:text-3xl">DECISIONS,</span>
            <span className="font-liches text-white bg-G500 p-2 rounded-2xl   text-2xl sm:text-2xl md:text-3xl">
              ADVENTEROUS
            </span>
            <span className="font-liches text-N900 p-2 rounded-2xl   text-2xl sm:text-2xl md:text-3xl">TRAILS.</span>
          </div>
          <div className=" text-G500  text-lg md:text-2xl">Last Moment Deals</div>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-10 justify-items-center bottom_popup">
          {treks?.map((trek, index) => (
            <SopontaneousTrekTile key={index} data={trek} />
          ))}
        </div>

        <div className="sm:hidden bottom_popup max-w-96">
          <EmblaCarousel>
            {treks?.map((trek, index) => (
              <div key={index} className="embla__slide min-w-full">
                <TrekTile key={index} data={trek} />
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </div>
  );
}

export default SpontaneousTrekSection;
