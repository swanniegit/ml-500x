// Core application types
export interface LessonConcept {
  title: string;
  explanation: string;
  technical: string;
  example: string;
}

export interface LessonContent {
  introduction: string;
  concepts: LessonConcept[];
  practical: string;
  ubuntuConnection: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  objective: string;
  biome: Biome;
  difficulty: number;
  duration: number;
  completed: boolean;
  bioLumensReward: number;
  content?: LessonContent;
}

export interface Biome {
  id: string;
  name: string;
  description: string;
  color: string;
  lessons: number[];
  unlocked: boolean;
}

export interface UserProgress {
  currentLesson: number;
  bioLumens: number;
  completedLessons: number[];
  unlockedBiomes: string[];
  totalProgress: number;
}

export interface Narration {
  id: string;
  text: string;
  language: 'en' | 'zu' | 'xh';
  duration: number;
  audioFile?: string;
}

export interface UbuntuPrinciple {
  id: string;
  text: string;
  translation: {
    zu: string;
    xh: string;
  };
  lesson: number;
}

export interface AudioAsset {
  id: string;
  file: string;
  description: string;
  duration: number;
  loop: boolean;
  category: 'ambient' | 'narration' | 'sfx';
}

export interface VisualAsset {
  id: string;
  file: string;
  description: string;
  category: 'background' | 'character' | 'ui' | 'icon';
}

export interface GameState {
  isPlaying: boolean;
  isPaused: boolean;
  currentLesson: Lesson | null;
  userProgress: UserProgress;
  audioEnabled: boolean;
  language: 'en' | 'zu' | 'xh';
}

export interface AppConfig {
  version: string;
  supportedLanguages: string[];
  defaultLanguage: string;
  audioEnabled: boolean;
  pwaEnabled: boolean;
}

// Component prop types
export interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lesson: Lesson) => void;
  isActive: boolean;
}

export interface BiomeCardProps {
  biome: Biome;
  onSelect: (biome: Biome) => void;
  isUnlocked: boolean;
  isSelected?: boolean;
}

export interface NarrationProps {
  text: string;
  isVisible: boolean;
  onComplete: () => void;
}

export interface BioLumensDisplayProps {
  count: number;
  isAnimating: boolean;
}

export interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

// Hook types
export interface UseGameStateReturn {
  gameState: GameState;
  startLesson: (lesson: Lesson) => void;
  pauseGame: () => void;
  resumeGame: () => void;
  completeLesson: () => void;
  earnBioLumens: (amount: number) => void;
  updateProgress: (progress: Partial<UserProgress>) => void;
}

export interface UseAudioReturn {
  playSound: (assetId: string) => void;
  playNarration: (narrationId: string) => void;
  stopAudio: () => void;
  setVolume: (volume: number) => void;
  isAudioEnabled: boolean;
  toggleAudio: () => void;
}

// API types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface LessonApiResponse extends ApiResponse<Lesson> {}
export interface ProgressApiResponse extends ApiResponse<UserProgress> {}
export interface BiomesApiResponse extends ApiResponse<Biome[]> {} 