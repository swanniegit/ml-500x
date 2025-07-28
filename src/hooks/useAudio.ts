import { useState, useEffect, useCallback } from 'react';

export const useAudio = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [currentAudio, setCurrentAudio] = useState<AudioBufferSourceNode | null>(null);

  // Initialize audio context
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AudioContext) {
      const context = new AudioContext();
      setAudioContext(context);
    }
  }, []);

  // Play sound effect
  const playSound = useCallback((assetId: string) => {
    if (!isAudioEnabled || !audioContext) return;

    // For now, we'll create a simple tone
    // In a real implementation, you'd load actual audio files
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Different sounds for different assets
    switch (assetId) {
      case 'biolumen-collect':
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        break;
      case 'lesson-complete':
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
        break;
      case 'button-click':
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);
        break;
      default:
        oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
    }

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);

    console.log(`Playing African sound: ${assetId}`);
  }, [isAudioEnabled, audioContext]);

  // Play narration
  const playNarration = useCallback((narrationId: string) => {
    if (!isAudioEnabled || !audioContext) return;

    // Stop current narration if playing
    if (currentAudio) {
      currentAudio.stop();
    }

    // Create a simple narration sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Narration tone
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, audioContext.currentTime + 2);

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 3);

    setCurrentAudio(null);

    console.log(`Playing narration: ${narrationId}`);
  }, [isAudioEnabled, audioContext, currentAudio]);

  // Stop all audio
  const stopAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.stop();
      setCurrentAudio(null);
    }
  }, [currentAudio]);

  // Set volume
  const setVolume = useCallback((volume: number) => {
    if (audioContext) {
      // In a real implementation, you'd control the master gain
      console.log(`Volume set to: ${volume}`);
    }
  }, [audioContext]);

  // Toggle audio
  const toggleAudio = useCallback(() => {
    setIsAudioEnabled(prev => !prev);
    if (isAudioEnabled) {
      stopAudio();
    }
  }, [isAudioEnabled, stopAudio]);

  return {
    playSound,
    playNarration,
    stopAudio,
    setVolume,
    isAudioEnabled,
    toggleAudio
  };
}; 