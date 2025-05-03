import TrekTile from "@/components/tiles/TrekTile.jsx";
import SectionGapping from '@/components/SectionGapping';
import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import Container from "@/components/Container.jsx";

const TrekSection = ({treks, plainText, blueText }) => {

  return (
    <div className="bottom_popup z-30">
      <Container>
      <h1 className="text-2xl font-liches md:text-5xl tracking-widest font-regular px-2 md:mb-6 ">
        {plainText} <span className="text-B600 text-2xl font-liches md:text-5xl font-regular "> {blueText}</span>
      </h1>
        {
        Array.isArray(treks) && treks.length > 0 ? (
      <SectionGapping>
        {treks?.map((trek, index) => (
            <TrekTile key={index} data={trek} />
            )) }
      </SectionGapping>
      ) : (
              <p className="md:block hidden text-gray-500">No Treks available</p>
            )}
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
      </Container>
    </div>
  );
};

export default TrekSection;
