
import React from 'react';

interface IllustrationProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Illustration: React.FC<IllustrationProps> = ({ name, className = "" }) => {
  switch (name) {
    case 'yoga':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="52" r="13" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 65C100 65 78 82 65 118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 65C100 65 122 82 135 118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 65V108" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 108L78 140M100 108L122 140" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M55 165C75 157 125 157 145 165" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
        </svg>
      );
    case 'meditation':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" opacity="0.4" />
          <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
          <path d="M38 100H162" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
          <path d="M100 38V162" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
        </svg>
      );
    case 'dance':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 110C40 110 65 45 100 110C135 175 160 110 160 110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M55 130C55 130 80 65 115 130C150 195 175 130 175 130" stroke="currentColor" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
          <path d="M25 90C25 90 50 25 85 90C120 155 145 90 145 90" stroke="currentColor" strokeWidth="0.5" opacity="0.25" strokeLinecap="round" />
          <circle cx="100" cy="40" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        </svg>
      );
    case 'crystal':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 28L143 82L100 175L57 82L100 28Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M100 28V175" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M57 82H143" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M78 55L122 55" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      );
    case 'incense':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 165V90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M100 80C106 68 94 56 100 44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
            <animate attributeName="d" values="M100 80C106 68 94 56 100 44;M100 80C94 68 106 56 100 44;M100 80C106 68 94 56 100 44" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M88 165H112" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case 'oil':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 48C100 48 68 92 68 122C68 139.673 82.327 154 100 154C117.673 154 132 139.673 132 122C132 92 100 48 100 48Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <ellipse cx="100" cy="122" rx="12" ry="10" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      );
    case 'journal':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="58" y="46" width="84" height="108" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M58 70H68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <path d="M78 82H122" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M78 96H122" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M78 110H110" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M78 124H118" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M58 70H142" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      );
    case 'candle':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="72" y="95" width="56" height="75" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 95V82" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 76C103 68 97 60 100 52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
          <path d="M95 74C92 66 98 58 95 50" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    case 'blanket':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 68H142V132H58V68Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M58 88H142" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M58 108H142" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M78 68V132" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <path d="M122 68V132" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      );
    case 'bowl':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 78C48 119.421 70.386 148 100 148C129.614 148 152 119.421 152 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48 78H152" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <ellipse cx="100" cy="78" rx="52" ry="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M85 148L80 162H120L115 148" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinejoin="round" />
        </svg>
      );
    case 'palosanto':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="72" y="58" width="18" height="104" rx="3" transform="rotate(-20 72 58)" stroke="currentColor" strokeWidth="1.5" />
          <path d="M118 52C124 40 112 28 118 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
        </svg>
      );
    case 'abstract-spirit':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 6" opacity="0.35" />
          <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
          <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.2" />
          <path d="M100 52L148 100L100 148L52 100Z" stroke="currentColor" strokeWidth="0.6" opacity="0.3" strokeLinejoin="round" />
          <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.8" />
        </svg>
      );
    case 'connection':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="100" r="42" stroke="currentColor" strokeWidth="1" />
          <circle cx="130" cy="100" r="42" stroke="currentColor" strokeWidth="1" />
          <path d="M100 68V132" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
        </svg>
      );
    case 'ritual':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 28L172 100L100 172L28 100L100 28Z" stroke="currentColor" strokeWidth="0.8" opacity="0.5" strokeLinejoin="round" />
          <path d="M100 20V180" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
          <path d="M20 100H180" stroke="currentColor" strokeWidth="0.4" opacity="0.15" />
          <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.2" />
        </svg>
      );
    case 'sound-healing':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="95" rx="48" ry="18" stroke="currentColor" strokeWidth="1.5" />
          <path d="M52 95C52 130 148 130 148 95" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M62 120L58 140H142L138 120" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinejoin="round" />
          <path d="M70 65C70 65 62 52 70 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <path d="M100 60C100 60 92 47 100 37" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M130 65C130 65 122 52 130 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    case 'breathwork':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 30C100 30 60 60 60 100C60 140 100 170 100 170C100 170 140 140 140 100C140 60 100 30 100 30Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M100 30C100 30 80 60 80 100C80 140 100 170 100 170" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <path d="M100 30C100 30 120 60 120 100C120 140 100 170 100 170" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.7" />
        </svg>
      );
    case 'lotus':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 140C100 140 72 115 72 90C72 75 84 65 100 65C116 65 128 75 128 90C128 115 100 140 100 140Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 140C100 140 70 128 55 108C48 98 52 83 65 80C72 78 80 82 88 92" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <path d="M100 140C100 140 130 128 145 108C152 98 148 83 135 80C128 78 120 82 112 92" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <path d="M100 140C100 140 48 120 38 90C35 78 42 65 55 65C65 65 78 75 88 92" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
          <path d="M100 140C100 140 152 120 162 90C165 78 158 65 145 65C135 65 122 75 112 92" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
          <path d="M100 140V165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <path d="M85 165C85 165 95 158 100 165C105 172 115 165 115 165" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      );
    case 'acro-yoga':
      return (
        <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="75" r="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="120" cy="130" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M80 85L80 115L120 120" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M80 105L60 95M80 105L100 92" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M120 120L138 108M120 120L130 145" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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
