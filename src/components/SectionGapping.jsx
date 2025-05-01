import { useEffect } from 'react';
import { observeOnScroll } from '@/utils/observeOnScroll';
function SectionGapping({children}) {
  
    useEffect(() => {
    observeOnScroll('.bottom_popup');
  }, []);

  
    return (

    <div className="hidden md:grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4 bottom_popup">
        {children}</div>
  )
}

export default SectionGapping