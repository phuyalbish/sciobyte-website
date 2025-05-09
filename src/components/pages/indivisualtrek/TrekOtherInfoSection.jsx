
import DOMPurify from 'dompurify';
function TrekOtherInfoSection({ info }) {
  const sanitizedContent = DOMPurify.sanitize(info);
  return (
    <section id="otherinfo" className="text-base italic font-lighter text-N500">

      <span className="font-light text-md font-liches text-black">Extra Information:</span>
      <span dangerouslySetInnerHTML={{ __html: sanitizedContent }}   className='text-justify custom-rich-content'/>
    
    </section>
  );
}

export default TrekOtherInfoSection;