import React from 'react';
import { motion } from 'framer-motion';
import { LessonCardProps } from '@/types';

const LessonCard: React.FC<LessonCardProps> = ({ lesson, onSelect, isActive }) => {
  const isCompleted = false; // This would come from game state

  return (
    <motion.div
      className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-forest-800 border-2 border-forest-500' 
          : isCompleted
          ? 'bg-night-700 border border-forest-600'
          : 'bg-night-800 hover:bg-night-700 border border-night-600'
      }`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(lesson)}
    >
      {/* Status indicator */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          {isCompleted ? (
            <div className="w-4 h-4 bg-forest-500 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          ) : isActive ? (
            <motion.div
              className="w-4 h-4 bg-forest-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ) : (
            <div className="w-4 h-4 bg-night-600 rounded-full" />
          )}
          <span className="text-xs text-gray-400 african-text">
            Lesson {lesson.id}
          </span>
        </div>
        <div className="text-xs text-forest-400 font-semibold">
          {lesson.bioLumensReward} bio-lumens
        </div>
      </div>

      <h3 className="font-semibold mb-2 ubuntu-text">{lesson.title}</h3>
      <p className="text-sm text-gray-400 african-text mb-3">
        {lesson.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(lesson.difficulty)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-forest-500 rounded-full"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 african-text">
            {Math.round(lesson.duration / 60)} min
          </span>
        </div>
        
        {isActive && (
          <motion.div
            className="text-xs text-forest-400 font-semibold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Active
          </motion.div>
        )}
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-forest-500 opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default LessonCard; 