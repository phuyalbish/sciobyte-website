import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const FAQ = ({ faq, isOpened, handleFaqState }) => {
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-5 self-center" />
  ) : (
    <FaChevronUp className="h-fit w-5 self-center" />
  );
  const question =
    faq?.question.slice(-1) !== "?" ? faq?.question + "?" : faq?.question;
  const answer =
    faq?.answer.slice(-1) !== "." ? faq?.question + "." : faq?.question;

  const question_default_bg_color = isOpened ? "bg-[#91BCED]" : "bg-[#ECF3FC]";

  return (
    <div className="cursor-pointer px-5 w-full md:w-[60%] mx-auto select-none">
      <div
        className={`${question_default_bg_color} hover:bg-[#91BCED] p-4 rounded-md shadow-md transition duration-300 ease-in-out `}
        onClick={() => handleFaqState(faq.id)}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold">{question}</span>
          {arrowSVG}
        </div>
      </div>

      {isOpened && (
        <div className="bg-[#B1CFF2] p-4 rounded-md shadow-md mt-2 flex justify-start">
          <span className="text-left font-medium">{answer}</span>
        </div>
      )}
    </div>
  );
};

export default FAQ;

{
  /* <style> */
}
{
  /* .transition-transform { */
}
// transition: transform 0.3s ease;
// }
{
  /* </style> */
}
