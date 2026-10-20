import React from "react";
import { X, Download, FileText } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div className="modal-header-left">
            <FileText size={20} className="accent-icon" />
            <h3>Resume Preview — {personalInfo.name}</h3>
          </div>
          <div className="modal-header-actions">
            <a
              href={personalInfo.resumeUrl}
              download="Jyoti_Pomde_Resume.pdf"
              className="btn btn-primary download-btn"
            >
              <Download size={16} /> Download PDF
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="resume-viewer-container">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=1`}
            title="Jyoti Pomde Resume"
            className="resume-iframe"
          />
        </div>
      </div>
    </div>
  );
}
