import React from 'react';
import { motion } from 'framer-motion';
import { BiomeCardProps } from '@/types';

const BiomeCard: React.FC<BiomeCardProps> = ({ biome, onSelect, isUnlocked, isSelected }) => {
  return (
    <motion.div
      className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isUnlocked 
          ? isSelected
            ? 'bg-forest-700 border-2 border-forest-500 shadow-lg'
            : 'bg-night-800 hover:bg-night-700 border border-night-600' 
          : 'bg-night-900 border border-night-700 opacity-50'
      }`}
      whileHover={isUnlocked ? { scale: 1.02, y: -2 } : {}}
      whileTap={isUnlocked ? { scale: 0.98 } : {}}
      onClick={() => isUnlocked && onSelect(biome)}
    >
      {/* Biome color indicator */}
      <div 
        className="w-3 h-3 rounded-full mb-3"
        style={{ backgroundColor: biome.color }}
      />
      
      <h3 className="font-semibold mb-2 ubuntu-text">{biome.name}</h3>
      <p className="text-sm text-gray-400 african-text mb-3">
        {biome.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500 african-text">
          {biome.lessons.length} lessons
        </span>
        {!isUnlocked && (
          <span className="text-xs text-gray-500 african-text">
            🔒 Locked
          </span>
        )}
        {isUnlocked && window.innerWidth < 1024 && (
          <span className="text-xs text-forest-400 african-text">
            👆 Tap to start
          </span>
        )}
      </div>

      {/* Hover effect */}
      {isUnlocked && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-forest-500 opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default BiomeCard; 