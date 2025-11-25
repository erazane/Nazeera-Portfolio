import React from 'react';
import { MapPin, Calendar, ArrowRight, Award, Users, Code2 } from 'lucide-react';

const About = () => {
  const experience = [
    {
      period: "2018 - Present",
      title: "Back-End Developer",
      company: "Tripian Inc.",
      location: "Remote",
      highlights: ["Core team", "PHP/Python", "API design", "AWS"]
    },
    {
      period: "2016 - Present",
      title: "Full-Stack Developer",
      company: "RadKod",
      location: "Freelance",
      highlights: ["Developer collective", "Flutter apps", "Open source"]
    },
    {
      period: "2015 - 2017",
      title: "Back-End Developer",
      company: "AvantajBizde",
      location: "Turkey",
      highlights: ["E-commerce", "Laravel", "System architecture"]
    }
  ];

  const keyMetrics = [
    {
      icon: <Calendar size={18} />,
      value: "8+ Years",
      label: "Experience"
    },
    {
      icon: <Code2 size={18} />,
      value: "50+",
      label: "Projects"
    },
    {
      icon: <Users size={18} />,
      value: "10+",
      label: "Teams"
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
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--midcentury-orange), var(--accent))',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                CN
              </div>
              
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-dark)' }}>
                Constance
              </h3>
              
              <p style={{ 
                margin: '0 0 1rem 0', 
                color: 'var(--midcentury-orange)',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                Full-Stack Developer
              </p>

              <p style={{ 
                lineHeight: '1.6', 
                color: 'var(--text-light)',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                8+ years building scalable web applications with focus on clean code and user experience.
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
                <span>Montreal, Canada</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1rem',
                textAlign: 'center'
              }}>
                {keyMetrics.map((metric, index) => (
                  <div key={index}>
                    <div style={{ 
                      color: 'var(--midcentury-orange)',
                      marginBottom: '0.5rem'
                    }}>
                      {metric.icon}
                    </div>
                    <div style={{ 
                      fontSize: '1rem', 
                      fontWeight: 'bold',
                      color: 'var(--text-dark)',
                      marginBottom: '0.25rem'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--text-light)'
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
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