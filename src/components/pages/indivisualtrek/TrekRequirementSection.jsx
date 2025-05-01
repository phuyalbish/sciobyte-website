import DOMPurify from 'dompurify';
function TrekRequirementSection({ requirements }) {

  const sanitizedContent = DOMPurify.sanitize(requirements);
  return (
    <section id="requirements">
    {requirements && (
    <div  className="flex flex-col gap-5">
      <div className="text-xl tracking-wide font-liches font-light">Requirements</div>
    
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}  className='text-justify font-manrope' />
      </div>)}
    </section>
  );
}

export default TrekRequirementSection;
