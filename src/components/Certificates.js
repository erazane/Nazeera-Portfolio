import React from 'react';
import { Award, ExternalLink, Calendar, Building, Star, Zap, Trophy } from 'lucide-react';

const Certificates = () => {
  const certificatesList = [
    {
      id: 1,
      title: "App Development with Swift  Associate",
      image: "/images/swift.jpeg",
      issuer: "Certiport",
      date: "August 2024",
      // link: "https://www.credly.com/badges/95e69af9-0a3b-4cec-b390-f9e0d3b1e6fd/linked_in_profile",
      skills: ["Swift", "Xcode"],
      level: "Intermediate",
      featured: true
    },
    {
      id: 2,
      title: "Mern FullStack Developer",
      image: "/images/mern.png",
      issuer: "Logical Operations",
      date: "August 2025",
      // link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures",
      skills: ["Mongo", "Express", "React", "Node"],
      level: "Intermediate",
      featured: true
    },
    {
      id: 3,
      title: "CGM Academy for Youth ",
      image: "/images/cgm.jpeg",
      issuer: "Coursera",
      date: "January 2022",
      // link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design",
      skills: ["Management", "Agile", "Scrum", "Planning"],
      level: "Beginner",
      featured: false
    },
    {
      id: 4,
      title: "Foundations In CyberSecurity",
      image: "/images/Cyber.jpeg",
      issuer: "Coursera",
      date: "July 2025",
      link: "#",
      skills: ["CyberSecurity", "Networking", "Cryptography"],
      level: "Beginner",
      featured: true
    },
    {
      id: 5,
      title: "AI For My Future",
      image: "/images/ai.jpeg",
      issuer: "Microsoft",
      date: "July 2025",
      link: "#",
      skills: ["AI", "ML", "Data Science"],
      level: "Beginner",
      featured: false
    },
    {
      id: 6,
      title: "Backend Career Essentials in Sustainable Tech ",
      image: "/images/sustech.png",
      issuer: "Microsft and LinkedIn",
      date: "May 2025",
      link: "#",
      skills: ["CRM", "Sustainable Tech", "ESG"],
      level: "Beginner",
      featured: false
    }
  ];

  const featuredCerts = certificatesList.filter(cert => cert.featured);
  const otherCerts = certificatesList.filter(cert => !cert.featured);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return '#c44536';
      case 'Intermediate': return '#d4af37';
      default: return '#2a5d67';
    }
  };

  return (
    <div className="certificates-section-wrapper">
      <style>{`
        .certificates-section-wrapper {
          background: linear-gradient(135deg, var(--midcentury-cream) 0%, #f0e6d2 100%);
          position: relative;
          overflow: hidden;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
        }
        .cert-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .cert-pdf-link {
          display: inline-block;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: var(--midcentury-teal);
          color: white;
          border-radius: 6px;
          text-decoration: none;
        }
        .cert-pdf-link:hover {
          background: var(--midcentury-orange);
        }
      `}</style>
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
                  {cert.image && cert.image.endsWith('.pdf') ? (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="cert-pdf-link">View Document</a>
                  ) : (
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  )}
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
                  {cert.image && cert.image.endsWith('.pdf') ? (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" className="cert-pdf-link">View Document</a>
                  ) : (
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  )}
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


