import React from "react";

export function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.728-1.797.728s-1.331-.261-1.797-.728L4.475 15.2c-.466-.467-.728-1.112-.728-1.798 0-.686.262-1.331.728-1.798l5.336-5.265c.466-.467 1.112-.728 1.798-.728.686 0 1.331.261 1.797.728l2.697 2.607a1.07 1.07 0 001.514 0 1.07 1.07 0 000-1.514L14.92 4.825a3.614 3.614 0 00-2.525-1.025c-.966 0-1.879.377-2.525 1.025L4.534 10.09c-.672.672-1.042 1.566-1.042 2.518 0 .951.37 1.846 1.042 2.518l5.336 5.265c.672.672 1.566 1.042 2.518 1.042.951 0 1.846-.37 2.518-1.042l2.697-2.607a1.07 1.07 0 000-1.514 1.07 1.07 0 00-1.501-.34z" />
      <path d="M10.825 12.012h8.56a1.07 1.07 0 001.07-1.07 1.07 1.07 0 00-1.07-1.07h-8.56a1.07 1.07 0 00-1.07 1.07 1.07 1.07 0 001.07 1.07z" />
    </svg>
  );
}
