import React from 'react';

/** Decorative smile linework, intentionally excluded from the accessibility tree. */
export const SmileMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 240 180" fill="none" aria-hidden="true" focusable="false">
    <path d="M20 45C48 162 190 167 220 45M43 40C69 128 171 132 197 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M186 8v28M172 22h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SparkMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false">
    <path d="M40 2C43 29 51 37 78 40C51 43 43 51 40 78C37 51 29 43 2 40C29 37 37 29 40 2Z" fill="currentColor" />
  </svg>
);

/** Broad contour ribbons used as section backdrops. */
export const ContourBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`contour-backdrop ${className}`} viewBox="0 0 900 600" fill="none" aria-hidden="true" focusable="false">
    {[0, 1, 2, 3, 4, 5].map((line) => (
      <path key={line} d={`M${-160 + line * 32} -100C${460 + line * 32} 40 ${-120 + line * 32} 380 ${520 + line * 32} 700`} stroke="currentColor" strokeWidth="2" />
    ))}
  </svg>
);
