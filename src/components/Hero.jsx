import React from "react";
import { ArrowRight, FileText, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>Software Engineer at Almatar</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        <div className="hero-role-wrapper">
          <span className="dynamic-role">I am a Software Engineer</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore Work <ArrowRight size={18} />
          </a>
          <button className="btn btn-secondary" onClick={onOpenResume}>
            <FileText size={18} /> View Resume
          </button>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LeetCode Profile"
          >
            <LeetcodeIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-icon"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <span className="location-tag">
            <MapPin size={16} /> {personalInfo.location}
          </span>
        </div>

        <div className="hero-stats">
          {personalInfo.stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
