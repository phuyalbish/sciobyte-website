import  { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const EmblaGalleryCarousel = ({
  children,
  options = { loop: false, autoplay: false },
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      // setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    // setTotalSlides(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className=" relative h-full flex flex-col items-center gap-2">
      <div className="embla relative w-full h-full">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex gap-2">{children}</div>
        </div>
      </div>
      <div className="w-full relative  flex justify-center gap-4 items-center">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="disabled:bg-N50  bg-G500 p-1 hover:bg-G700 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="size-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="disabled:bg-N50  bg-G500 p-1 hover:bg-G700 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronRight className="size-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default EmblaGalleryCarousel;
