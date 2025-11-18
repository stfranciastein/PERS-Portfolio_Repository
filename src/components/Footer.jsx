import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const mainElement = document.querySelector('main');
        const homeElement = document.getElementById('home');
        
        if (mainElement && homeElement) {
          const scrollPosition = mainElement.scrollTop;
          const homeHeight = homeElement.offsetHeight;
          
          // Hide footer when scrolled past home section
          setIsVisible(scrollPosition < homeHeight - 100);
        }
      };

      const mainElement = document.querySelector('main');
      mainElement?.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => mainElement?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
<footer className={`pb-2 flex flex-col items-center gap-4 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="border-t-[3px] border-foreground w-fit max-w-[90%]">
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold leading-tight pt-4 text-center tracking-widest flex items-center justify-center gap-4 flex-wrap">
              <span>WEB DEV</span>
              <svg className="w-8 h-16 md:w-12 md:h-20 lg:w-14 lg:h-24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="flex items-center gap-2">
                UX + UI DESIGN
                <svg className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 inline-block" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="20" cy="20" r="15" fill="none" />
                  <circle cx="40" cy="20" r="15" fill="currentColor" opacity="0.7" />
                </svg>
              </span>
            </div>
          </div>
        </footer>
    );
}