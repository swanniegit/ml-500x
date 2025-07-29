import { GameState, UserProgress } from '@/types';
import { biomes } from '@/data/lessons';

// Reset game state to initial values
export const resetGameState = (): GameState => {
  return {
    isPlaying: false,
    isPaused: false,
    currentLesson: null,
    userProgress: {
      currentLesson: 1,
      bioLumens: 0,
      completedLessons: [],
      unlockedBiomes: ['savanna', 'forest'], // Both biomes unlocked
      totalProgress: 0
    },
    audioEnabled: true,
    language: 'en'
  };
};

// Unlock specific biomes
export const unlockBiomes = (biomeIds: string[]): Partial<UserProgress> => {
  return {
    unlockedBiomes: biomeIds
  };
};

// Check if a biome is unlocked based on user progress
export const isBiomeUnlocked = (biomeId: string, unlockedBiomes: string[]): boolean => {
  return unlockedBiomes.includes(biomeId);
};

// Get all unlocked biomes based on lesson completion
export const getUnlockedBiomesFromProgress = (completedLessons: number[]): string[] => {
  return biomes
    .filter(biome => {
      const biomeIndex = biomes.findIndex(b => b.id === biome.id);
      if (biomeIndex === 0) return true; // First biome is always unlocked
      
      const previousBiome = biomes[biomeIndex - 1];
      if (!previousBiome) return false;
      
      // Check if all lessons in the previous biome are completed
      return previousBiome.lessons.every(lessonId => completedLessons.includes(lessonId));
    })
    .map(biome => biome.id);
};

// Debug function to log current game state
export const debugGameState = (gameState: GameState): void => {
  console.log('=== Game State Debug ===');
  console.log('Current Lesson:', gameState.userProgress.currentLesson);
  console.log('Completed Lessons:', gameState.userProgress.completedLessons);
  console.log('Unlocked Biomes:', gameState.userProgress.unlockedBiomes);
  console.log('Bio Lumens:', gameState.userProgress.bioLumens);
  console.log('Total Progress:', gameState.userProgress.totalProgress);
  console.log('========================');
};