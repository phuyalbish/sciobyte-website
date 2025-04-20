import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = ({ faq, isOpened, handleFaqState }) => {
  const arrowSVG = isOpened ? (
    <FaChevronUp className="h-fit w-5 self-center" />
  ) : (
    <FaChevronDown className="h-fit w-5 self-center" />
  );

  const questionBg = isOpened ? "bg-B200" : "bg-white";
console.log(isOpened)
  return (
    <div className="cursor-pointer px-5 w-full mx-auto select-none">
      <button
        onClick={() => handleFaqState(faq.id)}
        className={`w-full text-left ${questionBg} hover:bg-B75 p-4 rounded-md shadow-xs transition duration-300 ease-in-out`}
        aria-expanded={isOpened}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold">{faq.question}</span>
          {arrowSVG}
        </div>
      </button>

      {isOpened && (
        <div className="group bg-B50 p-4 rounded-md shadow-xs mt-2 bg-B100 text-left flex justify-between gap-4">
          <p className="text-left font-medium">{faq.answer}</p>
          {faq.image && (
            <img
              src={faq.image}
              alt=""
              className="rounded-md w-32 md:w-36 aspect-square group-hover:scale-105 scale-100 transition-all duration-500"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FAQ;