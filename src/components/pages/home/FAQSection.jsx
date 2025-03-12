import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import { fetchFAQs } from "@/apis/faqs.js";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchFAQs();
        const faqsData = response?.data?.results || []; // Ensure it's always an array

        if (!Array.isArray(faqsData)) {
          setFaqs([]);
          return;
        }

        setFaqs(faqsData);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs([]); // Fallback in case of an error
      }
    })();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {Array.isArray(faqs) && faqs.length > 0 ? (
        faqs.map((faq, index) => <FAQ faq={faq} key={index} />)
      ) : (
        <p>Loading FAQs...</p>
      )}
    </div>
  );
};

export default FAQSection;
