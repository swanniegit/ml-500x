import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GameStateProvider } from '@/hooks/useGameState';
import HomeScreen from '@/components/HomeScreen';
import LessonScreen from '@/components/LessonScreen';
import BiomeScreen from '@/components/BiomeScreen';
import LoadingScreen from '@/components/LoadingScreen';
import { useGameState } from '@/hooks/useGameState';
import { useAudio } from '@/hooks/useAudio';

const AppContent: React.FC = () => {
  const { gameState } = useGameState();
  const { isAudioEnabled } = useAudio();

  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden savanna-gradient">
        <AnimatePresence mode="wait">
          {gameState.isPlaying ? (
            <motion.div
              key="game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/lesson/:id" element={<LessonScreen />} />
                <Route path="/biome/:id" element={<BiomeScreen />} />
              </Routes>
            </motion.div>
          ) : (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <LoadingScreen />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Audio indicator */}
        {!isAudioEnabled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 bg-night-800 text-white px-3 py-2 rounded-lg backdrop-blur-savanna"
          >
            🔇 Audio disabled
          </motion.div>
        )}
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <GameStateProvider>
      <AppContent />
    </GameStateProvider>
  );
};

export default App; 