'use client';

import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar';
import { DrawingCanvas } from './DrawingCanvas';
import { useAudioGuidance } from '../hooks/useAudioGuidance';

// Mock types until shared domain is ready
interface DrawingStep {
  index: number;
  pathData: string;
  instruction: string;
}

interface Template {
  id: string;
  name: string;
  steps: DrawingStep[];
}

interface DrawingSessionProps {
  template: Template;
  onClose: () => void;
  onNextDrawing?: () => void;
}

/**
 * DrawingSession main component.
 * Manages the guided drawing experience, coordinating the canvas and navigation.
 * 
 * @param {DrawingSessionProps} props - Component props.
 * @returns {JSX.Element} The rendered drawing session.
 */
export const DrawingSession: React.FC<DrawingSessionProps> = ({ template, onClose, onNextDrawing }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset completion state if template changes
  React.useEffect(() => {
    setCurrentStepIndex(0);
    setIsCompleted(false);
  }, [template.id]);

  // Audio Guidance
  useAudioGuidance(template.steps[currentStepIndex]?.instruction);

  const handleNext = () => {
    if (currentStepIndex < template.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      // TODO: Dispatch ProgressStep command to backend
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      // TODO: Dispatch UndoStep command to backend
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white relative">
      {/* Completion Overlay */}
      {isCompleted && (
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-50 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center animate-in fade-in slide-in-from-right-8 duration-500 border-4 border-orange-200">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-8 animate-bounce drop-shadow-md">
            Bravo ! 🎉
          </h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={onClose}
              className="px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              Menu Principal
            </button>
            {onNextDrawing && (
              <button
                onClick={onNextDrawing}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center space-x-2 animate-pulse"
              >
                <span>Dessin Suivant</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Header with Drawing Name */}
      <header className="h-16 flex items-center justify-center border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
          Drawing: {template.name}
        </h1>
      </header>

      {/* Main Drawing Area */}
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-4xl p-4 text-center h-20 flex items-center justify-center">
          <p className="text-xl font-medium text-blue-600 animate-bounce">
            {template.steps[currentStepIndex]?.instruction || 'Loading...'}
          </p>
        </div>
        
        <DrawingCanvas 
          steps={template.steps} 
          currentStepIndex={currentStepIndex} 
        />
      </main>

      {/* Bottom Navigation */}
      <NavigationBar 
        onNext={handleNext}
        onBack={handleBack}
        onHome={onClose}
        canNext={!isCompleted}
        canBack={currentStepIndex > 0}
      />
    </div>
  );
};
