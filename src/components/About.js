import React from 'react';
import { Code2, Palette, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code following best practices.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Focus',
      description: 'Creating interfaces that are not just beautiful, but intuitive and user-friendly.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative',
      description: 'Working effectively in teams with designers, developers, and stakeholders.'
    }
  ];

  return (
    <section id="about" className="section">
      <div>
        <h2>About Me</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>My Journey</h3>
            <p>
              Hello! I'm Constance, a frontend developer based in Montreal with a passion 
              for creating digital experiences that blend beautiful design with solid 
              functionality. My background in design gives me a unique perspective on 
              frontend development, allowing me to bridge the gap between design and 
              technical implementation.
            </p>
            <p>
              I specialize in React, modern JavaScript, and responsive design. I believe 
              in writing clean, maintainable code and creating interfaces that are 
              accessible to everyone.
            </p>
          </div>
          
          <div>
            <h3>What I Bring</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card"
                >
                  <div style={{ color: 'var(--midcentury-orange)', marginBottom: '1rem' }}>
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;