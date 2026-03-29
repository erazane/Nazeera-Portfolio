import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A modern online store with shopping cart, product filtering, and responsive design. Built with React and modern CSS practices.",
      technologies: ["React", "CSS3", "JavaScript", "Context API"],
      image: "/images/project1.jpg",
      githubUrl: "https://github.com/constance/ecommerce",
      // liveUrl: "https://constance-ecommerce.netlify.app"
    },
    {
      id: 2,
      title: "CommuniHub: Neighbourhood Management System",
      description: "Productivity application for managing daily tasks with drag-and-drop functionality and local storage persistence.",
      technologies: ["React", "Local Storage", "Custom Hooks", "CSS Grid"],
      image: "/images/project2.jpg",
      githubUrl: "https://github.com/constance/taskapp",
      // liveUrl: "https://constance-tasks.netlify.app"
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application with location detection, 5-day forecast, and beautiful data visualizations.",
    //   technologies: ["React", "API Integration", "Chart.js", "Geolocation"],
    //   image: "/images/project3.jpg",
    //   githubUrl: "https://github.com/constance/weather-app",
    //   liveUrl: "https://constance-weather.netlify.app"
    // }
  ];

  return (
    <section id="projects" className="section">
      <div>
        <h2>Featured Projects</h2>
        <div className="grid grid-2">
          {projects.map((project) => (
            <div key={project.id} className="card">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;