import React from "react";
import { Server, Layout, Database, Wrench } from "lucide-react";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const categories = [
    {
      title: "Backend & APIs",
      icon: <Server size={20} />,
      skills: skillsData.backend
    },
    {
      title: "Frontend & UI",
      icon: <Layout size={20} />,
      skills: skillsData.frontend
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      skills: skillsData.database
    },
    {
      title: "Tools & Methodologies",
      icon: <Wrench size={20} />,
      skills: skillsData.tools
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Core programming languages, frameworks, databases, and engineering tools.</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
            </div>

            <div className="skill-items">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-pill">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
