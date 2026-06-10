import React from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  Cpu,
  Briefcase
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={20} />,
      title: 'Frontend Development',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'Responsive Design',
        'PrimeReact'
      ]
    },
    {
      icon: <Server size={20} />,
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express.js',
        'Java',
        'Spring Boot',
        'PHP',
        'Laravel',
        'REST APIs',
        'JWT Authentication'
      ]
    },
    {
      icon: <Database size={20} />,
      title: 'Databases',
      skills: [
        'MongoDB',
        'MySQL',
        'Database Design',
        'CRUD Operations'
      ]
    },
    {
      icon: <Cloud size={20} />,
      title: 'Cloud & DevOps',
      skills: [
        'AWS EC2',
        'Vercel',
        'Git',
        'GitHub',
        'Linux',
        'Terminal'
      ]
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Business Applications',
      skills: [
        'Power Apps',
        'Power Automate',
        'SharePoint',
        'SAP Ariba',
        'Business Process Automation',
        'UAT Testing'
      ]
    },
    {
      icon: <Cpu size={20} />,
      title: 'Professional Skills',
      skills: [
        'Problem Solving',
        'Requirements Gathering',
        'Client Communication',
        'Agile Development',
        'Full Stack Development',
        'System Documentation'
      ]
    }
  ];

  return (
    <div className="skills-section-wrapper">
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2>Skills & Technologies</h2>

          <p className="skills-subtitle">
            Technical skills developed through academic projects,
            professional experience, and full-stack web application
            development.
          </p>

          <div className="skills-grid-compact">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="skill-category-compact"
              >
                <div className="skill-header-compact">
                  <div className="skill-icon-wrapper-compact">
                    {category.icon}
                  </div>

                  <h3>{category.title}</h3>
                </div>

                <div className="skills-list-compact">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag-compact"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;