
import React from 'react';

interface IllustrationProps {
  name: string;
  className?: string;
}

export const Illustration: React.FC<IllustrationProps> = ({ name, className = "" }) => {
  switch (name) {
    case 'yoga':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="60" r="15" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 75C100 75 80 90 70 120M100 75C100 75 120 90 130 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 75V110M100 110L80 140M100 110L120 140" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 160C100 150 140 160 140 160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
    case 'meditation':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
          <path d="M40 100H160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <path d="M100 40V160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      );
    case 'dance':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 100C40 100 70 40 100 100C130 160 160 100 160 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M60 120C60 120 90 60 120 120C150 180 180 120 180 120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M20 80C20 80 50 20 80 80C110 140 140 80 140 80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      );
    case 'crystal':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30L140 80L100 170L60 80L100 30Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 30V170" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M60 80H140" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'incense':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 160L100 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 70C105 60 95 50 100 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6">
            <animate attributeName="d" values="M100 70C105 60 95 50 100 40;M100 70C95 60 105 50 100 40;M100 70C105 60 95 50 100 40" dur="3s" repeatCount="indefinite" />
          </path>
        </svg>
      );
    case 'oil':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50C100 50 70 90 70 120C70 136.569 83.4315 150 100 150C116.569 150 130 136.569 130 120C130 90 100 50 100 50Z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="120" r="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'journal':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="50" width="80" height="100" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80 80H120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M80 100H120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M80 120H100" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'candle':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="75" y="90" width="50" height="70" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 90V80" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 75C102 70 98 65 100 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case 'blanket':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 70H140V130H60V70Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M60 90H140" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M60 110H140" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M80 70V130" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>
      );
    case 'bowl':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 80C50 118.66 81.3401 150 120 150C158.66 150 190 118.66 190 80" stroke="currentColor" strokeWidth="1.5" transform="translate(-35, 0)" />
          <path d="M65 80H135" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'palosanto':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="60" width="20" height="100" rx="2" transform="rotate(-30 70 60)" stroke="currentColor" strokeWidth="1.5" />
          <path d="M110 60C115 50 105 40 110 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    case 'abstract-spirit':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 40C133.137 40 160 66.8629 160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100C40 66.8629 66.8629 40 100 40Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M100 60C122.091 60 140 77.9086 140 100C140 122.091 122.091 140 100 140C77.9086 140 60 122.091 60 100C60 77.9086 77.9086 60 100 60Z" stroke="currentColor" strokeWidth="1" />
          <path d="M100 80C111.046 80 120 88.9543 120 100C120 111.046 111.046 120 100 120C88.9543 120 80 111.046 80 100C80 88.9543 88.9543 80 100 80Z" fill="currentColor" opacity="0.2" />
        </svg>
      );
    case 'connection':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="130" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
          <path d="M100 70V130" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      );
    case 'ritual':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20V180" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <path d="M20 100H180" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 30L170 100L100 170L30 100L100 30Z" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      );
  }
};
