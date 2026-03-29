import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const About = () => {
  // Use a built-in profile image from the public folder (replace with your photo if desired)
  // Put your photo at: public/profile.jpg
  // The project contains `public/profile.JPG` — use that exact filename
  const profileSrc = '/profile.JPG';

  const experience = [
  
    {
      period: "2025 - Present",
      title: "RPA Developer | Business Analyst",
      company: "Cognitive Consulting Sdn Bhd",
      location: "Kuala Lumpur, Malaysia",
      highlights: ["Robotic Process Automation", "Low-code development", "OpenAI integration", "Solution design","Process analysis","Business requirements gathering"]
    },
    {
      period: "2024 - 2025",
      title: "Technology Intern ",
      company: "Petrolium National Berhad (PETRONAS)",
      location: "Kuala Lumpur, Malaysia",
      highlights: ["PowerApps", "Power Automate", "Process automation", "Low-code solutions","Software development lifecycle","SAP ARIBA"]
    }
  ];

 

  return (
    <section id="about" className="section">
      <div>
        <h2>About Me</h2>

        <div className="grid grid-2" style={{ gap: '2rem', alignItems: 'start' }}>
          {/* Left Column - Profile */}
          <div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 0.75rem',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--midcentury-orange), var(--accent))'
                }}>
                  <img
                    src={profileSrc}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo512.png'; }}
                  />
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--midcentury-warmgray)' }}>
                  Profile photo
                </div>
              </div>

              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-dark)' }}>
                Nazeera Nasharuddin
              </h3>

              <p style={{ 
                margin: '0 0 1rem 0', 
                color: 'var(--midcentury-orange)',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                RPA Developer | Business Analyst
              </p>

              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-light)',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                A software engineering graduate with a passion of web development and automation. I am a highly motivated and detail-oriented individual with a strong foundation in software development principles and practices. I have experience in developing web applications using various programming languages and frameworks, and I am always eager to learn new technologies and improve my skills. I am a team player who enjoys collaborating with others to solve complex problems and deliver high-quality solutions.
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                color: 'var(--midcentury-warmgray)',
                fontSize: '0.85rem'
              }}>
                <MapPin size={14} />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div>
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ color: 'var(--midcentury-teal)', margin: 0, fontSize: '1.2rem' }}>
                  Experience
                </h3>
                <a 
                  href="/experience" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--midcentury-orange)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '500'
                  }}
                >
                  View All
                  <ArrowRight size={14} />
                </a>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '15px',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  background: 'var(--midcentury-orange)',
                  opacity: 0.3
                }}></div>

                {experience.map((job, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      marginBottom: '1.5rem',
                      paddingLeft: '2.5rem'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: '8px',
                      top: '6px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'var(--midcentury-orange)',
                      border: '3px solid white'
                    }}></div>

                    <div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '0.5rem',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        <h4 style={{ 
                          margin: 0, 
                          color: 'var(--text-dark)',
                          fontSize: '1rem'
                        }}>
                          {job.title}
                        </h4>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          color: 'var(--midcentury-orange)',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>
                          <Calendar size={12} />
                          {job.period}
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{
                          color: 'var(--midcentury-teal)',
                          fontWeight: '600',
                          fontSize: '0.85rem'
                        }}>
                          {job.company}
                        </span>
                        {job.location && (
                          <span style={{ 
                            color: 'var(--text-light)', 
                            fontSize: '0.8rem' 
                          }}>
                            • {job.location}
                          </span>
                        )}
                      </div>

                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.4rem'
                      }}>
                        {job.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            style={{
                              background: 'var(--midcentury-cream)',
                              color: 'var(--text-dark)',
                              padding: '0.2rem 0.5rem',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;