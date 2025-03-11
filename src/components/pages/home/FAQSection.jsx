import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import { fetchFAQs } from "@/apis/faqs.js";

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetchFAQs();
      const faqsData = response?.data?.results;
      setFaqs(faqsData);
    })();
  }, []);
  return (
    <>
      <div className="container ">
        <div className="px-[2rem] md:px-[4.5rem]">
          <h1 className="text-[2.3rem] mb-[3rem] font-semibold">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col gap-2">
            {faqs.map((faq) => (
              <FAQ faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
