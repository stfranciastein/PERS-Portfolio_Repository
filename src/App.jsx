import { BrowserRouter as Router, Routes, Route  } from 'react-router'
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
import textureImage from './assets/images/Distressed.jpg';

export default function App() {
  return (
    <div className="fixed inset-0 m-[10px] border-[5px] border-black overflow-hidden flex flex-col bg-background text-foreground rounded-tr-[50px] rounded-bl-[50px]">
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-50 rounded-tr-[50px] rounded-bl-[50px]"
        style={{
          backgroundImage: `url(${textureImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />
      
      <Navbar />
      <main className="container mw-4xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 overflow-y-auto scrollbar-hide">
        <Home />
        <About />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
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