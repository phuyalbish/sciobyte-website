import { useEffect, useState } from "react";
import FAQ from "@/components/accordion/FAQ.jsx";
import { GoArrowUpRight } from "react-icons/go";

import { Link } from "react-router-dom";
import { fetchHomeFAQs } from "@/apis/faqs.js";
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
        const response = await fetchHomeFAQs();
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
    <div className="flex flex-col gap-2 w-full justify-center items-center  px-4 md:p-0 max-w-[100em] mx-auto ">
      <h1 className="text-2xl md:text-3xl  font-liches  font-semibold ">Frequently asked questions</h1>
        <div className=" flex flex-col gap-4 items-center justify-center w-full md:w-[70%]">
          {Array.isArray(faqs) && faqs.length > 0 ? (
            <>
              <div className="flex flex-col gap-2 w-full">
                {faqs.slice(0, 5).map((faq, index) => (
                  <FAQ
                    faq={faq}
                    key={index}
                    isOpened={faq.isOpened}
                    handleFaqState={handleFaqState}
                  />
                ))}
              </div>
              <div className="flex justify-end w-full">
             <Link aria-label="Blogs" to="/faqs" className="flex gap-1 items-center justify-center text-B400 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2">
                 <div> See All</div>
                  <GoArrowUpRight className="text-md"/>
            </Link>
            </div>
            </>
          ) : (
            <p>Loading FAQs...</p>
          )}
        </div>
    </div>
  );
};

export default FAQSection;
