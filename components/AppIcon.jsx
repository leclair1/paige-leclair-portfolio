import React from 'react';
import { cn } from '../utils/cn.js';

// Minimal inline icon set to satisfy usage in Header/Button.
// These are simple placeholders drawn in a lucide-like style.
const paths = {
  Home: (
    <>
      <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" fill="none"/>
      <path d="M12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5L12 3z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </>
  ),
  Briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" ry="2"/>
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <path d="M3 12h18"/>
    </>
  ),
  BookOpen: (
    <>
      <path d="M3 5a2 2 0 0 1 2-2h6v16H5a2 2 0 0 1-2-2V5z"/>
      <path d="M21 5a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2V5z"/>
    </>
  ),
  Code: (
    <>
      <polyline points="8 4 3 12 8 20"/>
      <polyline points="16 4 21 12 16 20"/>
    </>
  ),
  Zap: (
    <>
      <polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"/>
    </>
  ),
  MoreHorizontal: (
    <>
      <circle cx="6" cy="12" r="2"/>
      <circle cx="12" cy="12" r="2"/>
      <circle cx="18" cy="12" r="2"/>
    </>
  ),
  Download: (
    <>
      <path d="M12 3v12"/>
      <polyline points="7 11 12 16 17 11"/>
      <path d="M21 21H3"/>
    </>
  ),
  Mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </>
  ),
  X: (
    <>
      <path d="M18 6L6 18"/>
      <path d="M6 6l12 12"/>
    </>
  ),
  Menu: (
    <>
      <path d="M3 6h18"/>
      <path d="M3 12h18"/>
      <path d="M3 18h18"/>
    </>
  ),
};

function Svg({ children, size, className }) {
  return (
    <svg
      className={cn(className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const AppIcon = ({ name, size = 16, className }) => {
  const content = paths[name];
  if (!content) {
    // Fallback: simple circle placeholder
    return (
      <Svg size={size} className={className}>
        <circle cx="12" cy="12" r="8" />
      </Svg>
    );
  }
  return (
    <Svg size={size} className={className}>
      {content}
    </Svg>
  );
};

export default AppIcon;

