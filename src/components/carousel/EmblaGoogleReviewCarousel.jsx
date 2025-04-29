import  { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const EmblaCarousel = ({
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
    <div className=" relative w-full flex flex-col gap-3 items-center">
      <div className="embla relative w-full ">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex gap-2 pb-2">{children}</div>
        </div>
      </div>
      <div className="w-full relative px-3 flex justify-between gap-4 items-center">
        <Link aria-label="Reviews" to="/reviews" className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
          See All
        </Link>
        <div className="flex gap-2">
          <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="size-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronRight className="size-6 text-white" />
        </button>
      </div>
        </div>
    </div>
  );
};

export default EmblaCarousel;
