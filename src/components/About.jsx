import React from "react";
import { Code2, Server, Database, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Server size={22} />,
      title: "Backend & Microservices",
      desc: "Architecting reliable, scalable RESTful services using Java, Spring Boot, and Node.js with clean API design."
    },
    {
      icon: <Code2 size={22} />,
      title: "Interactive Frontend",
      desc: "Creating responsive, component-driven user interfaces in React.js and modern JavaScript with fast state updates."
    },
    {
      icon: <Database size={22} />,
      title: "Data & Systems Optimization",
      desc: "Designing relational and document database schemas in MySQL and MongoDB, with log debugging via OpenSearch."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate about clean architecture, scalable APIs, and intuitive user experiences.</p>
      </div>

      <div className="about-grid">
        <div className="about-card main-about">
          <h3>Engineering Philosophy</h3>
          <p>
            I am a full-stack engineer driven by a passion for solving complex software challenges. Currently at <strong>Almatar Software Solutions</strong>, I focus on analyzing and troubleshooting high-volume web service workflows, investigating integration bottlenecks, and ensuring high-availability performance across environments.
          </p>
          <p style={{ marginTop: "14px" }}>
            My foundation spans both <strong>Java/Spring Boot enterprise backends</strong> and <strong>React.js dynamic client interfaces</strong>. I value writing maintainable, well-tested code, following Agile/SDLC best practices, and building software that delivers genuine business value.
          </p>

          <div className="about-checks">
            <div className="check-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Clean Code & Modular Component Architecture</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Full-Stack Lifecycle: Requirements to Testing</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Deep Root-Cause Debugging & API Investigation</span>
            </div>
          </div>
        </div>

        <div className="about-pillars">
          {highlights.map((h, i) => (
            <div key={i} className="pillar-card">
              <div className="pillar-icon">{h.icon}</div>
              <div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
