'use client';

import React from 'react';

interface NavigationBarProps {
  onNext: () => void;
  onBack: () => void;
  onHome: () => void;
  canNext: boolean;
  canBack: boolean;
}

/**
 * NavigationBar component for the drawing session.
 * Features large, high-contrast buttons for toddler-friendly interaction.
 * 
 * @param {NavigationBarProps} props - Component props.
 * @returns {JSX.Element} The rendered navigation bar.
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  onNext,
  onBack,
  onHome,
  canNext,
  canBack,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-white border-t-2 border-gray-100 flex items-center justify-between px-8 shadow-lg">
      <button
        onClick={onBack}
        disabled={!canBack}
        className={`w-32 h-16 rounded-2xl flex items-center justify-center transition-transform active:scale-95 ${
          canBack ? 'bg-orange-500 hover:bg-orange-600 shadow-md' : 'bg-gray-200 cursor-not-allowed opacity-50'
        }`}
        aria-label="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={onHome}
        className="w-32 h-16 rounded-2xl flex items-center justify-center transition-transform active:scale-95 bg-blue-500 hover:bg-blue-600 shadow-md"
        aria-label="Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="white"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </button>

      <button
        onClick={onNext}
        disabled={!canNext}
        className={`w-40 h-16 rounded-2xl flex items-center justify-center transition-transform active:scale-95 ${
          canNext ? 'bg-green-500 hover:bg-green-600 shadow-md animate-pulse' : 'bg-gray-200 cursor-not-allowed opacity-50'
        }`}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="white"
          className="w-12 h-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};
