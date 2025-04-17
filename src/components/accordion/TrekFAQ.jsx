import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


export const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL;
const TrekFAQ = ({ faq }) => {
  const [isOpened, setIsOpened] = useState(false);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-5 self-center" />
  ) : (
    <FaChevronUp className="h-fit w-5 self-center" />
  );

  const question_default_bg_color = isOpened ? "bg-B200" : "bg-white";

  return (
    <>
      <div className="cursor-pointer w-full  mx-auto select-none">
        <div
          className={`${question_default_bg_color} hover:bg-B200 p-4 rounded-md shadow-xs transition duration-300 ease-in-out `}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex justify-between items-center ">
            <span className="font-semibold">{faq?.question}</span>
            {arrowSVG}
          </div>
        </div>

      {isOpened && (
        <div className="group bg-B50 p-4 rounded-md shadow-xs mt-2 bg-B100 text-left flex justify-between ">
          <span className="text-left font-medium">{faq?.answer}</span>
          {faq?.image && (
              <img
                src={BASE_MEDIA_URL+faq?.image}
                alt=""
                className="rounded-md w-36 aspect-square group-hover:scale-105 scale-100 transition-all duration-500"
              />
            )}
        </div>
      )}
      </div>
    </>
  );
};

export default TrekFAQ;
