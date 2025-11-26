import { useEffect } from 'react';

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-0 bg-background/95 backdrop-blur-sm">
      <div className="relative bg-background border-2 border-foreground w-[90vw] max-w-[90vw] h-[90vh] max-h-[90vh] overflow-hidden flex flex-col animate-modalLoading">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close project details"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Screenshot */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={project.screenshots[0]?.url}
                  alt={project.screenshots[0]?.caption || project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">About this project</h3>
              <p className="text-lg text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm border-2 border-border rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Date */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Year</h3>
              <p className="text-lg text-foreground">{project.date}</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-bold uppercase bg-blue-500 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-500 transition-all duration-300 hover:shadow-md"
                >
                  View Live Site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm font-bold uppercase border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
