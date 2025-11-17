import { Link } from 'react-router';

export default function Home(){
    return(
        <div className="relative min-h-screen flex flex-col overflow-hidden p-6">
            {/* Border Frame */}
            <div className="absolute inset-6 border-4 border-foreground rounded-lg pointer-events-none z-50"></div>
            
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M0 0 L50 86.6 L100 0 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            <path d="M0 100 L50 13.4 L100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#triangles)"/>
                </svg>
            </div>

            {/* Top Navigation */}
            <nav className="fixed top-12 right-12 z-50">
                <ul className="flex flex-col items-end gap-2 text-sm tracking-wide">
                    <li>
                        <Link to="/about" className="hover:opacity-60 transition-opacity">
                            about
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="hover:opacity-60 transition-opacity">
                            portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:opacity-60 transition-opacity">
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Main Content Area */}
            <div className="relative z-10 flex-grow flex items-start justify-center w-full" style={{marginTop: 0, paddingTop: 0}}>
                <div className="flex w-full items-center justify-center gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 flex items-center justify-center" style={{height: '600px'}}>
                        <div className="w-[420px] h-[420px] bg-muted overflow-hidden rounded-[20px] flex items-center justify-center">
                            <img 
                                src="https://i.pinimg.com/736x/29/62/b1/2962b17c11aced64f0db5773c9eda192.jpg" 
                                alt="Josh Santiago Francia"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center items-start h-[420px] ml-8">
                        <h1 className="text-[70px] font-light tracking-tight leading-none text-left">
                            JOSH SANTIAGO FRANCIA
                        </h1>
                    </div>
                </div>
            </div>

            {/* Bottom Bar with Border */}
            <div className="relative z-10 border-t-2 border-foreground mt-auto pt-6 pb-8">
                <h2 className="text-center text-[140px] font-black tracking-wider leading-none whitespace-nowrap" style={{ fontWeight: 1000, textStroke: '4px currentColor', WebkitTextStroke: '4px currentColor' }}>
                    WEB-DEV | UX/UI DESIGN
                </h2>
            </div>
        </div>
    );
}