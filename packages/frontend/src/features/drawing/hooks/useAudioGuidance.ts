import { useEffect } from 'react';
import { audioService } from '../services/AudioService';

/**
 * Hook to provide audio guidance for drawing steps.
 * Automatically speaks the instruction when it changes.
 * 
 * @param {string | undefined} instruction - The current step instruction.
 */
export const useAudioGuidance = (instruction: string | undefined): void => {
  useEffect(() => {
    if (instruction) {
      audioService.speak(instruction);
    }

    return () => {
      audioService.cancel();
    };
  }, [instruction]);
};
