import { useState, useEffect, useRef } from 'react';
import projectsData from '../assets/data/projects.json';

export default function Projects({ setIsModalOpen }){
    const [isModalOpenLocal, setIsModalOpenLocal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimeoutRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(projectsData.length / projectsPerPage);

    const startIndex = currentPage * projectsPerPage;
    const modalProjects = projectsData.slice(startIndex, startIndex + projectsPerPage);

    useEffect(() => {
      return () => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
      };
    }, []);

    return (
    <>
    <section id="projects" className="flex items-center scroll-snap-align-start xl:overflow-y-auto overflow-x-hidden">
          <div className="flex gap-0 xl:gap-6 w-full items-start py-9 flex-col xl:flex-row">

            <div className="flex items-start flex-shrink-0">
              <h2 className="text-[clamp(3rem,15vw,120px)] font-bold tracking-tight vertical-text-responsive">
                PROJECTS
              </h2>
            </div>

            <div className="flex-1 space-y-6 overflow-hidden">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                Some of the recent projects I've worked on.
              </p>

              {/* List view for large and below */}
              <div className="2xl:hidden space-y-3">
                {projectsData.map((project) => (
                  <div
                    key={project.slug}
                    className="flex gap-3 border-b border-border pb-3 hover:border-muted-foreground/50 transition-colors duration-300"
                  >
                    <div className="w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={project.screenshots[0]?.url}
                        alt={project.screenshots[0]?.caption || project.title}
                        className="w-full h-full object-cover"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs border border-border rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-4 pt-2">
                  <button
                    onClick={() => {
                      setIsModalOpenLocal(true);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-2 text-sm font-bold uppercase bg-blue-500 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-500 transition-all duration-300 hover:shadow-md"
                  >
                    View More
                  </button>
                </div>
              </div>

              {/* Card view for xl and above */}
              <div className="relative overflow-hidden hidden 2xl:block">
                <div className="overflow-hidden pb-4">
                  <div 
                    className="flex flex-wrap gap-2 lg:gap-3 transition-opacity duration-700 ease-in-out"
                  >
                    {projectsData.map((project) => (
                    <div
                      key={project.slug}
                      className="w-[clamp(250px,300px,300px)] h-[clamp(200px,250px,250px)] lg:h-[clamp(300px,450px,450px)] perspective-1000 group/card"
                    >
                      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover/card:rotate-y-180">
                        {/* Front of card */}
                        <div className="absolute inset-0 backface-hidden group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg">
                          <img
                            src={project.screenshots[0]?.url}
                            alt={project.screenshots[0]?.caption || project.title}
                            className="w-full h-[85%] object-cover group-hover:scale-105 transition-transform duration-300"
                            style={{ objectFit: 'cover', display: 'block' }}
                          />
                          <div className="h-[15%] flex items-center justify-center px-2">
                            <h3 className="text-xs font-bold text-center truncate w-full">{project.title}</h3>
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 border border-border rounded-lg overflow-hidden bg-background p-4 flex flex-col">
                          <h3 className="text-sm font-bold mb-2">{project.title}</h3>
                          <p className="text-xs text-muted-foreground mb-3 flex-1 overflow-y-auto">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {project.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs border border-border rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className="px-2 py-0.5 text-xs text-muted-foreground">
                                +{project.tags.length - 4}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{project.date}</span>
                        </div>
                      </div>
                    </div>
                ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => {
                      setIsModalOpenLocal(true);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-2 text-sm font-bold uppercase bg-blue-500 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-500 transition-all duration-300 hover:shadow-md"
                  >
                    View More
                  </button>
                  <div className="flex-1 h-[2px] bg-border"></div>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* Modal */}
        {(isModalOpenLocal || isClosing) && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className={`relative bg-background border-2 border-foreground max-w-5xl w-full max-h-[80vh] overflow-hidden flex flex-col ${isClosing ? 'animate-modalClosing' : 'animate-modalLoading'}`}> 
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-2xl font-bold">All Projects</h2>
                <button
                  onClick={() => {
                    setIsClosing(true);
                    closeTimeoutRef.current = setTimeout(() => {
                      setIsModalOpenLocal(false);
                      setIsModalOpen(false);
                      setIsClosing(false);
                    }, 800);
                  }}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modalProjects.map((project) => (
                    <div
                      key={project.slug}
                      className="group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img
                          src={project.screenshots[0]?.url}
                          alt={project.screenshots[0]?.caption || project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold">{project.title}</h3>
                          <span className="text-xs text-muted-foreground">{project.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs border border-border rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 p-4 border-t border-border">
                <button
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className="px-3 py-1 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentPage === index 
                          ? 'bg-foreground w-8' 
                          : 'bg-border hover:bg-muted-foreground'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                  className="px-3 py-1 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}