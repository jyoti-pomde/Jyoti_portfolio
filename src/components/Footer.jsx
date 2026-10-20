import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="logo-badge">JP</span>
            <span className="footer-name">{personalInfo.name}</span>
          </div>
          <p className="footer-tagline">
            Building scalable backend services and responsive modern web applications.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode">
              <LeetcodeIcon size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon" title="Email">
              <Mail size={18} />
            </a>
          </div>

          <button className="back-to-top-btn" onClick={scrollToTop} title="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Jyoti Pomde. All rights reserved.</p>
        <p className="designed-line">Crafted with React, Vite & Tailwind principles.</p>
      </div>
    </footer>
  );
}
