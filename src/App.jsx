import { BrowserRouter as Router, Routes, Route  } from 'react-router'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

// pages
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound';
import ProjectIndex from '@/pages/projects/Index';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import textureLight from './assets/images/Distressed.jpg';
import textureDark from './assets/images/Inverted.png';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Texture Overlay - outside the border container */}
      <div 
        className="fixed inset-0 m-[10px] pointer-events-none z-[60] rounded-tr-[50px] rounded-bl-[50px]"
        style={{
          backgroundImage: `url(${isDark ? textureDark : textureLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 0.3 : 0.3,
          mixBlendMode: isDark ? 'lighten' : 'multiply'
        }}
      />
      
      <div className="fixed inset-0 m-[10px] border-[5px] border-foreground overflow-hidden flex flex-col bg-background text-foreground rounded-tr-[50px] rounded-bl-[50px]">
      
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-8 left-8 z-50 p-2 rounded-lg border border-foreground hover:bg-muted transition-colors duration-300"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
      
      <Navbar />
      <main className="container mw-4xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 overflow-y-auto scrollbar-hide">
        <Home />
        <About />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
    </>
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //     <Route path='/projects' element={<ProjectIndex />} />


    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>

    //   <Navbar />

    // </Router>
  );
}