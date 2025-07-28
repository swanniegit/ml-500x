import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGameState } from '@/hooks/useGameState';

const LoadingScreen: React.FC = () => {
  const { gameState: _, startGame } = useGameState();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing the Neural Savanna...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading African wisdom...' },
      { progress: 40, text: 'Preparing Ubuntu principles...' },
      { progress: 60, text: 'Awakening neural networks...' },
      { progress: 80, text: 'Connecting to the savanna...' },
      { progress: 100, text: 'Ready to begin your journey...' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingProgress(step.progress);
        setLoadingText(step.text);
        currentStep++;
      } else {
        clearInterval(interval);
        // Start the game after loading
        setTimeout(() => {
          startGame();
          console.log('Loading complete - game ready');
        }, 1000);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center savanna-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-forest-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-savanna-500 rounded-full opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-earth-500 rounded-full opacity-25"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* Logo/Title */}
        <motion.h1
          className="text-6xl font-bold mb-8 ubuntu-text text-shadow"
          animate={{
            textShadow: [
              "2px 2px 4px rgba(0,0,0,0.8)",
              "2px 2px 20px rgba(34,139,34,0.8)",
              "2px 2px 4px rgba(0,0,0,0.8)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          The Neural Savanna
        </motion.h1>

        <motion.p
          className="text-xl mb-12 african-text text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Learn AI through African wisdom and Ubuntu principles
        </motion.p>

        {/* Loading progress */}
        <div className="w-80 mx-auto mb-8">
          <div className="bg-night-800 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-forest-500 to-savanna-500"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.p
            className="text-sm text-gray-400 mt-2 african-text"
            key={loadingText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {loadingText}
          </motion.p>
        </div>

        {/* Bio-lumens particles */}
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-forest-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-gray-500 african-text">
          "I am because we are" - Ubuntu Philosophy
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen; 