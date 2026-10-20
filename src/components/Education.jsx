import React from "react";
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">Academic degrees and recognized industry learning credentials.</p>
      </div>

      <div className="edu-cert-layout">
        {/* Education Column */}
        <div className="edu-column">
          <div className="sub-header">
            <GraduationCap size={24} className="accent-icon" />
            <h3>Formal Education</h3>
          </div>

          <div className="edu-list">
            {education.map((item, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-header">
                  <h4>{item.degree}</h4>
                  <span className="edu-grade">{item.grade}</span>
                </div>
                <div className="edu-institution">{item.institution}</div>
                <div className="edu-meta">
                  <span><Calendar size={13} /> {item.period}</span>
                  <span><MapPin size={13} /> {item.location}</span>
                </div>
                <p className="edu-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="cert-column">
          <div className="sub-header">
            <Award size={24} className="accent-icon" />
            <h3>Certifications</h3>
          </div>

          <div className="cert-list">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <div className="cert-issuer">
                    {cert.issuer} • {cert.year}
                    {cert.id && <span className="cert-id-badge">ID: {cert.id}</span>}
                  </div>
                </div>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-cert-btn"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="cert-badge-coursework">Coursework Completed</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
