import React from 'react';
import { Code, Palette, Database, Cloud, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={20} />,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "SASS/SCSS", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      icon: <Palette size={20} />,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: <Server size={20} />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication"]
    },
    {
      icon: <Database size={20} />,
      title: "Databases",
      skills: ["MongoDB", "Firebase", "PostgreSQL", "Redis", "ORM/ODM"]
    },
    {
      icon: <Cloud size={20} />,
      title: "Tools & Platforms",
      skills: ["GitHub", "Docker", "Netlify", "Vercel", "VS Code", "Terminal"]
    },
    {
      icon: <Cpu size={20} />,
      title: "Technologies",
      skills: ["TypeScript", "Next.js", "Tailwind CSS", "Jest", "Webpack", "CI/CD"]
    }
  ];

  return (
    <div className="skills-section-wrapper">
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2>Skills & Technologies</h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical expertise across frontend, backend, and design
          </p>
          
          {/* Compact Skills Grid */}
          <div className="skills-grid-compact">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="skill-category-compact">
                {/* Header with Icon */}
                <div className="skill-header-compact">
                  <div className="skill-icon-wrapper-compact">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                {/* Skills List */}
                <div className="skills-list-compact">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag-compact">
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