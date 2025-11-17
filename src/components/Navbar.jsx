import { useState, useEffect } from 'react';

export default function(){
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'projects', 'contact'];
        const scrollPosition = document.querySelector('main').scrollTop + 200;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      const mainElement = document.querySelector('main');
      mainElement?.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => mainElement?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <nav className="fixed right-10 top-8 z-10">
          <div className="flex flex-col gap-2 items-end">
            <button
                className={`hidden lg:block text-[clamp(1.5rem,4vw,35px)] lowercase hover:opacity-70 transition-all duration-300 ${activeSection === 'home' ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => {
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                home
            </button>
            <button
                className={`lg:hidden w-3 h-3 rounded-full border-2 border-foreground transition-all duration-300 ${activeSection === 'home' ? 'bg-foreground' : 'bg-transparent'}`}
                onClick={() => {
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Home section"
            />

            <button
                className={`hidden lg:block text-[clamp(1.5rem,4vw,35px)] lowercase hover:opacity-70 transition-all duration-300 ${activeSection === 'about' ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => {
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                about
            </button>
            <button
                className={`lg:hidden w-3 h-3 rounded-full border-2 border-foreground transition-all duration-300 ${activeSection === 'about' ? 'bg-foreground' : 'bg-transparent'}`}
                onClick={() => {
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="About section"
            />

            <button
                className={`hidden lg:block text-[clamp(1.5rem,4vw,35px)] lowercase hover:opacity-70 transition-all duration-300 ${activeSection === 'projects' ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                projects
            </button>
            <button
                className={`lg:hidden w-3 h-3 rounded-full border-2 border-foreground transition-all duration-300 ${activeSection === 'projects' ? 'bg-foreground' : 'bg-transparent'}`}
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Projects section"
            />

            <button
                className={`hidden lg:block text-[clamp(1.5rem,4vw,35px)] lowercase hover:opacity-70 transition-all duration-300 ${activeSection === 'contact' ? 'opacity-100' : 'opacity-30'}`}
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                contact
            </button>
            <button
                className={`lg:hidden w-3 h-3 rounded-full border-2 border-foreground transition-all duration-300 ${activeSection === 'contact' ? 'bg-foreground' : 'bg-transparent'}`}
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Contact section"
            />
            
          </div>
    </nav>
    );
}