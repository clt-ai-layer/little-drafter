/**
 * AudioService provides Text-to-Speech capabilities using the Web Speech API.
 * It is designed as a singleton to manage the speech queue and browser resources.
 */
export class AudioService {
  private static instance: AudioService;
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  private constructor() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      this.synth = window.speechSynthesis;
    } else {
      console.warn('SpeechSynthesis API is not supported in this browser.');
    }
  }

  /**
   * Gets the singleton instance of AudioService.
   * 
   * @returns {AudioService} The AudioService instance.
   */
  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  /**
   * Speaks the provided text using the Web Speech API.
   * Cancels any ongoing speech before starting the new one.
   * 
   * @param {string} text - The text to speak.
   */
  public speak(text: string): void {
    if (!this.synth) return;

    this.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Voice selection - prefer natural sounding French voices
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(v => v.lang.startsWith('fr') && v.name.includes('Google')) || 
                           voices.find(v => v.lang.startsWith('fr')) || 
                           voices[0];
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.9; // Slightly slower for better clarity for kids
    utterance.pitch = 1.0;
    
    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  /**
   * Cancels all current and queued speech.
   */
  public cancel(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }
}

export const audioService = AudioService.getInstance();
