import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Verified professional experience in software engineering and enterprise web development.</p>
      </div>

      <div className="timeline-wrapper">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-badge">
              <Briefcase size={18} />
            </div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <h4 className="company-title">{exp.company}</h4>
                </div>
                <div className="timeline-meta">
                  <span className="meta-badge">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="meta-badge">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="timeline-bullets">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx}>
                    <span className="bullet-point"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="timeline-tech">
                {exp.technologies.map((t, tIdx) => (
                  <span key={tIdx} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
