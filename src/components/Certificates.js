import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates = () => {
  const certificatesList = [
    {
      id: 1,
      title: "Frontend Development Certification",
      issuer: "FreeCodeCamp",
      date: "March 2023",
      link: "https://www.freecodecamp.org/certification/yourusername/frontend-development"
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "June 2022",
      link: "https://www.freecodecamp.org/certification/yourusername/javascript-algorithms-and-data-structures"
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "January 2022",
      link: "https://www.freecodecamp.org/certification/yourusername/responsive-web-design"
    }
  ];

  return (
    <section id="certificates" className="section">
      <div>
        <h2>Certifications & Education</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {certificatesList.map((cert, index) => (
            <div 
              key={cert.id} 
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                padding: '2rem',
                borderLeft: '4px solid var(--midcentury-orange)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                background: 'var(--midcentury-teal)',
                borderRadius: '50%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={24} color="white" />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  marginBottom: '0.5rem',
                  color: 'var(--midcentury-teal)'
                }}>
                  {cert.title}
                </h3>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Building size={16} color="var(--midcentury-warmgray)" />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} color="var(--midcentury-warmgray)" />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      {cert.date}
                    </span>
                  </div>
                </div>

                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--midcentury-orange)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'var(--midcentury-orange)';
                  }}
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Education Section */}
        <div style={{ 
          marginTop: '4rem',
          padding: '2rem',
          background: 'var(--midcentury-cream)',
          borderRadius: '8px',
          border: '2px dashed var(--midcentury-teal)'
        }}>
          <h3 style={{ 
            textAlign: 'center', 
            color: 'var(--midcentury-teal)',
            marginBottom: '1rem'
          }}>
            Additional Education
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--midcentury-orange)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                4+
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Years Learning</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--midcentury-teal)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                50+
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Courses Completed</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--secondary)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                10+
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;