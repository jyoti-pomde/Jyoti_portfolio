import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Production-grade applications and systems demonstrating full-stack engineering proficiency.</p>
      </div>

      {/* Filter Tabs */}
      <div className="project-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-top">
              <span className="project-cat-badge">{project.category}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn"
                title="View GitHub Repository"
              >
                <GithubIcon size={18} />
              </a>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="view-code-link"
              >
                <span>View Repository</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
