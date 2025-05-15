import { useEffect, useState } from "react";
import TrekFAQ from "@/components/accordion/TrekFAQ.jsx";

function TrekFAQSection({ faqs }) {
  const [trekFAQ, setFaqs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleFaqState = (id) => {
    setFaqs(
      trekFAQ.map((faq) =>
        faq.id === id
          ? { ...faq, isOpened: !faq.isOpened }
          : { ...faq, isOpened: false }
      )
    );
  };

  useEffect(() => {
    if (Array.isArray(faqs) && faqs.length > 0) {
      const updatedFaqs = faqs.map((faq, index) => ({
        ...faq,
        isOpened: index === 0,
      }));
      setFaqs(updatedFaqs);
    }
  }, [faqs]);

  const displayedFaqs = showAll ? trekFAQ : trekFAQ.slice(0, 6);

  return (
    <section id="faqs">
      <div className="flex flex-col gap-2">
        {Array.isArray(trekFAQ) && trekFAQ.length > 0 && (
          <>
            <div className="text-xl tracking-wide font-liches font-light">
              Frequently Asked Questions
            </div>

            {displayedFaqs.map((faq, index) => (
              <TrekFAQ
                faq={faq}
                key={index}
                isOpened={faq.isOpened}
                handleFaqState={handleFaqState}
              />
            ))}

            {trekFAQ.length > 6 && (
              <button
                className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer w-full text-right mt-2 underline underline-offset-2"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "See Less" : "See All"}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default TrekFAQSection;
