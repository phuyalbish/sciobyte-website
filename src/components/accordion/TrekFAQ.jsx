import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const TrekFAQ = ({ faq }) => {
  const [isOpened, setIsOpened] = useState(false);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-5 self-center" />
  ) : (
    <FaChevronUp className="h-fit w-5 self-center" />
  );
  const question =
    faq?.question.slice(-1) !== "?" ? faq?.question + "?" : faq?.question;
  const answer =
    faq?.answer.slice(-1) !== "." ? faq?.answer + "." : faq?.answer;

  const question_default_bg_color = isOpened ? "bg-B200" : "bg-white";

  return (
    <>
      <div className="cursor-pointer w-full  mx-auto select-none">
        <div
          className={`${question_default_bg_color} hover:bg-B200 p-4 rounded-md shadow-xs transition duration-300 ease-in-out `}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex justify-between items-center ">
            <span className="font-semibold">{question}</span>
            {arrowSVG}
          </div>
        </div>

        {isOpened && (
          <div className="bg-B50 p-4 rounded-md shadow-xs mt-2 bg-B100">
            <span className="text-left font-medium">{answer}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default TrekFAQ;
