import React from 'react';
import { Award, ExternalLink, Calendar, Building, Star, Zap, Trophy } from 'lucide-react';

const Certificates = () => {
  const certificatesList = [
    {
      id: 1,
      title: "Frontend Development Certification",
      issuer: "FreeCodeCamp",
      date: "March 2023",
      link: "https://www.freecodecamp.org/certification/yourusername/frontend-development",
      skills: ["React", "JavaScript", "CSS3", "HTML5"],
      level: "Advanced",
      featured: true
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "June 2022",
      link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures",
      skills: ["Algorithms", "Data Structures", "Problem Solving"],
      level: "Intermediate",
      featured: true
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "January 2022",
      link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design",
      skills: ["CSS Grid", "Flexbox", "Media Queries"],
      level: "Intermediate",
      featured: false
    },
    {
      id: 4,
      title: "React & Redux Certification",
      issuer: "Meta",
      date: "September 2023",
      link: "#",
      skills: ["React", "Redux", "Hooks", "State Management"],
      level: "Advanced",
      featured: true
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      issuer: "Google",
      date: "April 2023",
      link: "#",
      skills: ["Figma", "Wireframing", "User Research"],
      level: "Intermediate",
      featured: false
    },
    {
      id: 6,
      title: "Backend Development",
      issuer: "The Odin Project",
      date: "November 2022",
      link: "#",
      skills: ["Node.js", "Express", "MongoDB"],
      level: "Intermediate",
      featured: false
    }
  ];

  const featuredCerts = certificatesList.filter(cert => cert.featured);
  const otherCerts = certificatesList.filter(cert => !cert.featured);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Advanced': return '#c44536';
      case 'Intermediate': return '#d4af37';
      default: return '#2a5d67';
    }
  };

  return (
    <div className="certificates-section-wrapper">
      <section id="certificates" className="certificates-section">
        <div className="certificates-container">
          <h2>Certifications & Achievements</h2>
          {/* <p className="certificates-subtitle">
            Validating my expertise through continuous learning and professional development
          </p> */}

          {/* Featured Certificates Grid */}
          <div className="featured-certificates">
            <h3 style={{ 
              textAlign: 'center', 
              color: 'var(--midcentury-teal)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Trophy size={24} />
              Featured Certifications
            </h3>
            
            <div className="featured-grid">
              {featuredCerts.map((cert) => (
                <div key={cert.id} className="featured-cert-card">
                  <div className="cert-badge">
                    <Award size={20} />
                  </div>
                  
                  {cert.featured && (
                    <div className="featured-tag">
                      <Star size={14} fill="currentColor" />
                      Featured
                    </div>
                  )}
                  
                  <h3>{cert.title}</h3>
                  
                  <div className="cert-meta">
                    <div className="meta-item">
                      <Building size={16} />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="level-badge" style={{ background: getLevelColor(cert.level) }}>
                    <Zap size={14} />
                    {cert.level}
                  </div>

                  <div className="skills-tags">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <ExternalLink size={16} />
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Other Certificates */}
          <div className="other-certificates">
            <h3 style={{ 
              textAlign: 'center', 
              color: 'var(--midcentury-teal)',
              marginBottom: '2rem'
            }}>
              Additional Certifications
            </h3>
            
            <div className="certificates-grid">
              {otherCerts.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-header">
                    <div className="cert-icon">
                      <Award size={18} />
                    </div>
                    <h4>{cert.title}</h4>
                  </div>
                  
                  <div className="cert-details">
                    <div className="detail-item">
                      <Building size={14} />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="detail-item">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <div className="level" style={{ color: getLevelColor(cert.level) }}>
                      {cert.level}
                    </div>
                  </div>

                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-link"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Certificates;