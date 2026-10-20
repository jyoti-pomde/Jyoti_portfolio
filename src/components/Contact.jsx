import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";
import confetti from "canvas-confetti";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Interested in collaborating or discussing full-stack software opportunities? Let's connect.</p>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out directly via email or connect on LinkedIn and GitHub. I respond promptly to engineering inquiries and collaboration requests.
          </p>

          <div className="contact-detail-items">
            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value-row">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  <button className="copy-btn" onClick={handleCopyEmail} title="Copy email address">
                    {copied ? <CheckCircle size={14} color="#10B981" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><LinkedinIcon size={20} /></div>
              <div>
                <div className="contact-label">LinkedIn</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jyotipomde
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><LeetcodeIcon size={20} /></div>
              <div>
                <div className="contact-label">LeetCode</div>
                <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer">
                  leetcode.com/u/Jyoti_Pomde
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><GithubIcon size={20} /></div>
              <div>
                <div className="contact-label">GitHub</div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  github.com/jyoti-pomde
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <div className="contact-label">Location</div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          {submitted ? (
            <div className="form-success">
              <CheckCircle size={40} color="#10B981" />
              <h4>Thank you for reaching out!</h4>
              <p>Your message has been captured. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Software Engineer Opportunity / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the role or project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
