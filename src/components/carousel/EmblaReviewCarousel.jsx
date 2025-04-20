import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const EmblaReviewCarousel = ({
  children,
  options = { loop: false, autoplay: false },
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
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
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    setTotalSlides(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className=" relative w-full md:w-96 h-full pb-10 flex flex-col gap-3 items-center">
      <div className="embla relative w-full ">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex gap-2 pb-2">{children}</div>
        </div>
      </div>
      <div className="w-full relative px-3 flex justify-end gap-4 items-center">
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

export default EmblaReviewCarousel;
