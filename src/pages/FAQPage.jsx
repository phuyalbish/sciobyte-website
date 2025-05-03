import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import PageConatiner from "@/components/PageContainer.jsx";

import { fetchFAQs } from "@/apis/faqs.js";


function ReviewSection() {

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
    <PageConatiner>
          <h1 className="text-2xl md:text-3xl  font-liches  font-semibold ">Frequently asked questions</h1>
            <div className="flex flex-col  gap-4 items-center m-auto justify-center w-full md:w-[70%]">
              {Array.isArray(faqs) && faqs.length > 0 ? (
                <>
                  <div className="flex flex-col gap-2 w-full">
                    {faqs.map((faq, index) => (
                      <FAQ
                        faq={faq}
                        key={index}
                        isOpened={faq.isOpened}
                        handleFaqState={handleFaqState}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p>Loading FAQs...</p>
              )}
            </div>
    </PageConatiner>
  );
}

export default ReviewSection;
