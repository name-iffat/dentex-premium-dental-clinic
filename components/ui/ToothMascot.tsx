import React from 'react';

/** A small decorative companion for the contact link. */
export const ToothMascot: React.FC = () => (
  <span className="contact-mascot" aria-hidden="true">
    <span className="mascot-greeting">A little help with your smile?</span>
    <svg className="mascot-tooth" viewBox="0 0 84 90" fill="none" focusable="false">
      <path d="M16 13C25 5 35 12 42 12C49 12 59 5 68 13C80 24 72 43 68 53C63 67 63 80 57 80C51 80 51 60 42 60C33 60 33 80 27 80C21 80 21 67 16 53C12 43 4 24 16 13Z" fill="#edf8f2" stroke="#a3cebe" strokeWidth="2" />
      <path d="M20 18C24 15 29 16 32 18" stroke="#fafdfb" strokeWidth="4" strokeLinecap="round" />
      <g className="mascot-eyes" fill="#153c35"><ellipse cx="30" cy="33" rx="3" ry="4" /><ellipse cx="54" cy="33" rx="3" ry="4" /></g>
      <ellipse cx="23" cy="42" rx="5" ry="3" fill="#edb9ad" /><ellipse cx="61" cy="42" rx="5" ry="3" fill="#edb9ad" />
      <path d="M35 43Q42 51 49 43" stroke="#153c35" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 55C8 50 3 53 5 59C7 64 14 64 18 60M66 60C72 64 79 63 79 58C79 53 72 51 68 55" fill="#edf8f2" stroke="#a3cebe" strokeWidth="2" />
    </svg>
  </span>
);
