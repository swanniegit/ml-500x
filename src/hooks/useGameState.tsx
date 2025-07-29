import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { GameState, UserProgress, Lesson } from '@/types';
import { lessons, biomes } from '@/data/lessons';

interface GameStateContextType {
  gameState: GameState;
  startGame: () => void;
  startLesson: (lesson: Lesson) => void;
  pauseGame: () => void;
  resumeGame: () => void;
  completeLesson: () => void;
  earnBioLumens: (amount: number) => void;
  updateProgress: (progress: Partial<UserProgress>) => void;
  clearGameState: () => void;
}

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

// Initial state
const initialState: GameState = {
  isPlaying: false,
  isPaused: false,
  currentLesson: null,
  userProgress: {
    currentLesson: 1,
    bioLumens: 0,
    completedLessons: [],
    unlockedBiomes: ['savanna', 'forest'],
    totalProgress: 0
  },
  audioEnabled: true,
  language: 'en'
};

// Action types
type GameAction =
  | { type: 'START_GAME' }
  | { type: 'PAUSE_GAME' }
  | { type: 'RESUME_GAME' }
  | { type: 'START_LESSON'; payload: Lesson }
  | { type: 'COMPLETE_LESSON' }
  | { type: 'EARN_BIO_LUMENS'; payload: number }
  | { type: 'UPDATE_PROGRESS'; payload: Partial<UserProgress> }
  | { type: 'TOGGLE_AUDIO' }
  | { type: 'SET_LANGUAGE'; payload: 'en' | 'zu' | 'xh' };

// Reducer
const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isPlaying: true,
        isPaused: false
      };
    
    case 'PAUSE_GAME':
      return {
        ...state,
        isPaused: true
      };
    
    case 'RESUME_GAME':
      return {
        ...state,
        isPaused: false
      };
    
    case 'START_LESSON':
      return {
        ...state,
        currentLesson: action.payload,
        isPlaying: true,
        isPaused: false
      };
    
    case 'COMPLETE_LESSON':
      if (!state.currentLesson) return state;
      
      const completedLessons = [...state.userProgress.completedLessons];
      if (!completedLessons.includes(state.currentLesson.id)) {
        completedLessons.push(state.currentLesson.id);
      }
      
      const totalProgress = (completedLessons.length / lessons.length) * 100;
      const unlockedBiomes = getUnlockedBiomes(completedLessons);
      
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          completedLessons,
          totalProgress,
          currentLesson: state.currentLesson.id + 1,
          unlockedBiomes
        }
      };
    
    case 'EARN_BIO_LUMENS':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          bioLumens: state.userProgress.bioLumens + action.payload
        }
      };
    
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          ...action.payload
        }
      };
    
    case 'TOGGLE_AUDIO':
      return {
        ...state,
        audioEnabled: !state.audioEnabled
      };
    
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };
    
    default:
      return state;
  }
};

// Helper function to check if a biome should be unlocked
const shouldUnlockBiome = (biomeId: string, completedLessons: number[]): boolean => {
  const biome = biomes.find(b => b.id === biomeId);
  if (!biome) return false;
  
  // Check if all lessons in the previous biome are completed
  const biomeIndex = biomes.findIndex(b => b.id === biomeId);
  if (biomeIndex === 0) return true; // First biome is always unlocked
  
  const previousBiome = biomes[biomeIndex - 1];
  if (!previousBiome) return false;
  
  // Check if all lessons in the previous biome are completed
  return previousBiome.lessons.every(lessonId => completedLessons.includes(lessonId));
};

// Helper function to get unlocked biomes based on progress
const getUnlockedBiomes = (completedLessons: number[]): string[] => {
  return biomes
    .filter(biome => shouldUnlockBiome(biome.id, completedLessons))
    .map(biome => biome.id);
};

// Provider component
export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('neural-savanna-state');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // Merge with initial state to ensure all properties exist
        Object.assign(state, parsedState);
      } catch (error) {
        console.error('Failed to load saved state:', error);
      }
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem('neural-savanna-state', JSON.stringify(state));
  }, [state]);

  const startGame = () => {
    dispatch({ type: 'START_GAME' });
  };

  const startLesson = (lesson: Lesson) => {
    dispatch({ type: 'START_LESSON', payload: lesson });
  };

  const pauseGame = () => {
    dispatch({ type: 'PAUSE_GAME' });
  };

  const resumeGame = () => {
    dispatch({ type: 'RESUME_GAME' });
  };

  const completeLesson = () => {
    dispatch({ type: 'COMPLETE_LESSON' });
  };

  const earnBioLumens = (amount: number) => {
    dispatch({ type: 'EARN_BIO_LUMENS', payload: amount });
  };

  const updateProgress = (progress: Partial<UserProgress>) => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: progress });
  };

  const clearGameState = () => {
    localStorage.removeItem('neural-savanna-state');
    window.location.reload();
  };

  const value: GameStateContextType = {
    gameState: state,
    startGame,
    startLesson,
    pauseGame,
    resumeGame,
    completeLesson,
    earnBioLumens,
    updateProgress,
    clearGameState
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};

// Hook
export const useGameState = (): GameStateContextType => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
}; 