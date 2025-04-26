import { useEffect, useState } from "react";
import TrekFAQ from "@/components/accordion/TrekFAQ.jsx";

function TrekFAQSection({ faqs }) {
  const [trekFAQ, setFaqs] = useState([]);

  
 const handleFaqState = (id) => {

  setFaqs(
    trekFAQ.map((faq) => {
      if (faq.id === id) {
        return { ...faq, isOpened: !faq.isOpened }; 
      } else {
        return { ...faq, isOpened: false };
      }
    })
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

  return (
    <section id="faqs">
      <div className="flex flex-col gap-2">
        {Array.isArray(trekFAQ) && trekFAQ.length > 0 && (
          <>
            <div className="text-xl tracking-wide font-liches font-light">
              Frequently Asked Questions
            </div>
            {trekFAQ.map((faq, index) => (
              <TrekFAQ
                faq={faq}
                key={index}
                isOpened={faq.isOpened}
                handleFaqState={handleFaqState}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default TrekFAQSection;