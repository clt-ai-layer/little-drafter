import { AudioService } from '../../../src/features/drawing/services/AudioService';

/**
 * Unit tests for AudioService.
 * Mocks the Web Speech API.
 */
describe('AudioService', () => {
  let audioService: AudioService;
  let mockSynth: any;
  let mockUtterance: any;

  beforeEach(() => {
    // Mock SpeechSynthesis
    mockSynth = {
      speak: jest.fn(),
      cancel: jest.fn(),
      getVoices: jest.fn().mockReturnValue([
        { name: 'Google English', lang: 'en-US' },
        { name: 'System English', lang: 'en-GB' }
      ]),
    };

    // Mock SpeechSynthesisUtterance
    mockUtterance = jest.fn();
    (global as any).SpeechSynthesisUtterance = mockUtterance;
    (global as any).window = { speechSynthesis: mockSynth };

    // Reset singleton for testing
    (AudioService as any).instance = null;
    audioService = AudioService.getInstance();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('speak', () => {
    it('should call cancel before speaking', () => {
      audioService.speak('Hello');
      expect(mockSynth.cancel).toHaveBeenCalled();
    });

    it('should call speechSynthesis.speak with an utterance', () => {
      audioService.speak('Test instruction');
      expect(mockSynth.speak).toHaveBeenCalled();
      expect(mockUtterance).toHaveBeenCalledWith('Test instruction');
    });

    it('should prefer Google English voice if available', () => {
      audioService.speak('Hello');
      const utteranceInstance = mockSynth.speak.mock.calls[0][0];
      expect(utteranceInstance.voice.name).toBe('Google English');
    });

    it('should handle missing speechSynthesis gracefully', () => {
      // Setup missing API
      (global as any).window.speechSynthesis = null;
      (AudioService as any).instance = null;
      const serviceNoApi = AudioService.getInstance();
      
      const spy = jest.spyOn(console, 'warn').mockImplementation();
      
      serviceNoApi.speak('Hello');
      
      expect(mockSynth.speak).not.toHaveBeenCalled();
      spy.mockRestore();
    });
  });

  describe('cancel', () => {
    it('should call speechSynthesis.cancel', () => {
      audioService.cancel();
      expect(mockSynth.cancel).toHaveBeenCalled();
    });
  });
});
