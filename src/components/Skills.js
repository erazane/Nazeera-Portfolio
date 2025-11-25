import React from 'react';
import { Code, Palette, Database, Cloud } from 'lucide-react';


const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "SASS/SCSS", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: <Database size={24} />,
      title: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "Firebase", "REST APIs", "Express.js"]
    },
    {
      icon: <Cloud size={24} />,
      title: "Tools & Platforms",
      skills: ["GitHub", "Docker", "Netlify", "Vercel", "VS Code", "Terminal"]
    },
     {
      icon: <Database size={24} />,
      title: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "Firebase", "REST APIs", "Express.js"]
    },
     {
      icon: <Database size={24} />,
      title: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "Firebase", "REST APIs", "Express.js"]
    }
  ];

  return (
    <div className="skills-section-wrapper">
      <section id="skills" className="skills-section">
        <div>
          <h2>Skills & Technologies</h2>
          
          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-category">
                <div className="skill-icon">
                  {category.icon}
                </div>
                
                <h3>{category.title}</h3>
                
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
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