import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds: string[], threshold: number = 0.5) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const createObserver = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // When the section is in view with the specified threshold
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          },
          {
            root: null, // viewport
            rootMargin: '0px',
            threshold, // percentage of the section visible
          }
        );
        
        observer.observe(element);
        observers.push(observer);
      } 
    };

    // Create observers for all sections
    sectionIds.forEach(createObserver);

    // Cleanup observers on unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds, threshold]);

  return activeSection;
};

export default useActiveSection;
