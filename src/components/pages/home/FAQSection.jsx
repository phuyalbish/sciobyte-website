import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import { fetchFAQs } from "@/apis/faqs.js";
import spntaneousbottom from "@/assets/spontaneousBackImg.png";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  const handleFaqState = (id) => {
    setFaqs(
      faqs.map((faq) => {
        if (id === faq.id) {
          faq.isOpened = true;
        } else {
          faq.isOpened = false;
        }
        return faq;
      })
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchFAQs();
        const faqsData = response?.data?.results || []; // Ensure it's always an array

        if (!Array.isArray(faqsData)) {
          setFaqs([]);
          return;
        }

        let maxLength = faqsData.length;
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
        setFaqs([]); // Fallback in case of an error
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-2 w-full   max-w-[100em] mx-auto ">
      <h1 className="text-3xl   font-semibold ">Frequently asked questions</h1>

      <div className="flex flex-col gap-1">
        {Array.isArray(faqs) && faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <FAQ
              faq={faq}
              key={index}
              isOpened={faq.isOpened}
              handleFaqState={handleFaqState}
            />
          ))
        ) : (
          <p>Loading FAQs...</p>
        )}
      </div>

      <img
        decoding="async"
        loading="lazy"
        src={spntaneousbottom}
        alt=""
        className="bottom-0 object-cover  z-0"
      />
    </div>
  );
};

export default FAQSection;
