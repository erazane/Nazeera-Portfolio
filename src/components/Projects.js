import React, { useCallback } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const projects = [
    {
      id: 1,
      title: "Voucher Redemption Web App",
      description: "A modern online store with shopping cart, product filtering, and responsive design. Built with React and modern CSS practices.",
      technologies: ["React", "CSS3", "JavaScript", "Mern Stack"],
      image: "/images/Project1.jpeg",
      githubUrl: "https://github.com/CodeBridgeGenerator/voucher-app-a99a95",
      // liveUrl: "https://constance-ecommerce.netlify.app"
    },
    {
      id: 2,
      title: "CommuniHub: Neighbourhood Management System",
      description: "Productivity application for managing daily tasks with drag-and-drop functionality and local storage persistence.",
      technologies: ["React", "Local Storage", "Custom Hooks", "CSS Grid"],
      image: "/images/Project2.jpg",
      githubUrl: "https://github.com/erazane/CommuniHub",
      // liveUrl: "https://constance-tasks.netlify.app"
    },
    {
      id: 3,
      title: "UniConsult: University Consultation App",
      description: "A web application for university students to book consultations with advisors, featuring a clean UI and calendar integration.",
      technologies: ["Java", "React", "MYSQL", "Spring Boot"],
      image: "/images/Project3.jpg",
      githubUrl: "https://github.com/erazane/UniConsult",
      // liveUrl: "https://constance-weather.netlify.app"
    },
    {
      id: 4,
      title: "Mekar Studio: E-commerce Website",
      description: "A web application for university students to book consultations with advisors, featuring a clean UI and calendar integration.",
      technologies: ["PHP", "React"],
      image: "/images/Project4.jpg",
      githubUrl: "https://github.com/erazane/Mekar-Studio",
      // liveUrl: "https://constance-weather.netlify.app"
    },
    {
      id: 5,
      title: "Birthday Website",
      description: "A specialised birthday website with interactive elements and custom animations.",
      technologies: ["Javascript", "Node.js", "React"],
      image: "/images/Project5.jpeg",
      githubUrl: "https://github.com/erazane/IsmaBday",
      // liveUrl: "https://constance-weather.netlify.app"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {projects.map((project) => (
              <div className="embla__slide" key={project.id}>
                <div className="card">
                  <div style={{
                    height: '200px',
                    borderRadius: '6px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    background: project.image ? `url(${project.image}) center/cover no-repeat` : `linear-gradient(135deg, var(--midcentury-teal), var(--primary))`
                  }}>
                    {!project.image && project.title}
                  </div>

                  <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                    {project.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'var(--midcentury-cream)',
                          padding: '4px 12px',
                          margin: '2px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          color: 'var(--midcentury-teal)',
                          border: '1px solid var(--midcentury-teal)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--midcentury-teal)',
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--midcentury-orange)',
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls">
          <button className="embla__button embla__button--prev" onClick={scrollPrev} aria-label="Previous">
            <ArrowLeft size={24} />
          </button>
          <button className="embla__button embla__button--next" onClick={scrollNext} aria-label="Next">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;