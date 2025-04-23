import TrekTile from "@/components/tiles/TrekTile.jsx";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

const TrekSection = ({treks, plainText, blueText }) => {

  return (
    <div className="md:px-[4.5rem] bottom_popup z-40">
      <h1 className="text-2xl font-liches md:text-5xl tracking-widest font-regular px-2 md:mb-6 ">
        {plainText} <span className="text-B400 text-2xl font-liches md:text-5xl font-regular "> {blueText}</span>
      </h1>
      <div className=" hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {
        Array.isArray(treks) && treks.length > 0 ? (
        treks?.map((trek, index) => (
          <TrekTile key={index} data={trek} />
        )) ) : (
              <p className="text-gray-500">No Treks available</p>
            )}
      </div>
      <div className="md:hidden">
         {
           Array.isArray(treks) && treks.length > 0 ? (
        <EmblaCarousel>
           { treks?.map((trek, index) => (
            <div key={index} className="embla__slide min-w-full">
              <TrekTile data={trek} />
            </div>
          ))}
        </EmblaCarousel>
        ) : (
              <p className="text-gray-500">No Treks available</p>
            )}
      </div>
    </div>
  );
};

export default TrekSection;
