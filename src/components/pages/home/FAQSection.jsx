import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import { fetchFAQs } from "@/apis/faqs.js";
const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

const handleFaqState = (id) => {
  setFaqs(faqs.map(faq => ({
    ...faq,
    isOpened: faq.id === id ? !faq.isOpened : false
  })));
};



const [showAll, setShowAll] = useState(false);

const toggleShowAll = () => setShowAll((prev) => !prev);


  useEffect(() => {
    (async () => {
      try {
        const response = await fetchFAQs();
        const faqsData = response?.data?.results || []; 
        if (!Array.isArray(faqsData)) {
          setFaqs([]);
          return;
        }

        setFaqs(
          faqsData.map((faq, index) => {
            return {
              ...faq,
              isOpened: index === 0 ? true : false,
            };
          })
        );
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs([]); 
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-2 w-full   max-w-[100em] mx-auto ">
      <h1 className="text-2xl md:text-3xl  font-liches  font-semibold ">Frequently asked questions</h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          {Array.isArray(faqs) && faqs.length > 0 ? (
            <>
              <div className="flex flex-col gap-2">
                {(showAll ? faqs : faqs.slice(0, 5)).map((faq, index) => (
                  <FAQ
                    faq={faq}
                    key={index}
                    isOpened={faq.isOpened}
                    handleFaqState={handleFaqState}
                  />
                ))}
              </div>
              {faqs.length > 5 && (
                <button
                  onClick={toggleShowAll}
                  className="text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 "
                >
                  {showAll ? "Show Less" : "Show All"} 
                </button>
              )}
            </>
          ) : (
            <p>Loading FAQs...</p>
          )}
        </div>
    </div>
  );
};

export default FAQSection;
