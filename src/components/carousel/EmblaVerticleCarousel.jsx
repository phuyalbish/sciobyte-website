import  { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const EmblaCarousel = ({
  children,
  options = { axis: "y", loop: false, autoplay: false },
  link =""
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
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className=" relative w-full flex flex-col gap-3 items-center">
      <div className="embla relative w-full ">
        <div className="overflow-hidden h-[500px] relative" ref={emblaRef}>
          <div className="flex flex-col gap-2 pb-2 relative">{children}</div>
        </div>
      </div>

      <div className="w-full relative  flex justify-between gap-4 items-center">
       { link && 
        <Link to={link} target="_blank" aria-label="Reviews" className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
          See All
        </Link>}
        <div></div>
        <div className="flex gap-2 self-end">
          <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronUp className="size-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
          aria-label="Previous slide"
        >
          <FiChevronDown className="size-6 text-white" />
        </button>
      </div>
        </div>
    </div>
  );
};

export default EmblaCarousel;
