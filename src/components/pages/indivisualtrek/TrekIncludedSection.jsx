import React from "react";
import CheckMark from "@/assets/icons/CheckMark.svg";
import Exclamation from "@/assets/icons/Exclamation.svg";
import DOMPurify from 'dompurify';
function TrekIncludedSection({ includes, excludes }) {
  return (
    <section id="included" >
       {( (Array.isArray(excludes) && excludes.length > 0) ||  (Array.isArray(includes) && includes.length > 0)) && (
      <div className="flex md:flex-row flex-col  p-6  rounded-lg bg-B200 gap-5">

      <div className="flex flex-col md:w-1/2  gap-5">
        {Array.isArray(includes) && includes.length > 0 ? (
          <div className="flex flex-col gap-5">
            <div className="text-xl tracking-wide font-liches font-light">INCLUDED</div>
            <div className="flex flex-col gap-2">
              {includes.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex felx-row gap-2 items-start  ">
                    <div className="flex min-w-7 min-h-7 ">
                     <img src={CheckMark} alt="Check Mark-Include Image" />
                    </div>
                    <div className="font-bold leading-normal">{item.title}</div>
                  </div>
                  <div className="pl-10 text-sm text-justify  leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description) }} />
                </div>
              ))}
            </div>
          </div>
        ) :""}
      </div>

      <div className="flex flex-col md:w-1/2 gap-5">
        {Array.isArray(excludes) && excludes.length > 0 ? (
          <div className="flex flex-col gap-5">
            <div className="text-xl tracking-wide font-liches font-light">EXCLUDED</div>
            <div className="flex flex-col gap-2">
              {excludes.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <div className="flex felx-row gap-2 items-start  ">
                    <div className="flex min-w-6 min-h-6">
                     <img src={Exclamation} alt="Exclamation Mark-Exclude Image" />
                    </div>
                    <div className="font-bold leading-normal">{item?.title}</div>
                  </div>
                  <div className="pl-10 text-sm text-justify leading-relaxed" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.description) }} />
    
                </div>
              ))}
            </div>
          </div>
        ) : ""}
      </div>


       </div>
       )}
    </section>
  );
}

export default TrekIncludedSection;
