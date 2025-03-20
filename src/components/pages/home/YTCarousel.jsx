import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
export default function YTCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div
      className="relative overflow-hidden  rounded-xl flex flex-col justify-center gap-5 h-[70vh]  w-[80vw]  md:w-[30vw] border-white border-2 box-content shadow-2xl
 "
    >
      <div
        className="flex transition-transform ease-out duration-500  "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute bottom-5 right-5 z-20  h-fit  flex items-center justify-end gap-5 ">
        <button
          onClick={prev}
          className="bg-G300 p-1 hover:bg-G400 rounded-md text-white"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="bg-G300 p-1 hover:bg-G400 rounded-md text-white"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <FaPlay className="text-white absolute top-1/2 left-[50%] size-10 -translate-y-[50%]  -translate-x-[50%]  hover:hidden" />
    </div>
  );
}
