
import React from 'react';

const SocialIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.4-1.2 1.1-2.8 2-4 2 .4-1.3.4-3.5.2-4.5-.3-.9-1.3-2-2.3-2.5-.8-.4-1.6-.4-2.5-.2-1.3.2-2.9 1.1-3.3 2.8-.4 1.4-.4 3.3.3 4.6 1.1 2 3.3 3.3 5.5 3.3 1.1 0 2-.3 2.8-.7.1-.1.2-.2.3-.3.1 0 .2-.1.3-.1" />
    <path d="M18 9.5c.3-.3.6-.7.8-1" />
    <path d="M2 17.5c1.1-1 2.3-2 3-3" />
    <path d="M7 11.5c1.6-1.6 3.5-3 5-4" />
  </svg>
);

export default SocialIcon;
