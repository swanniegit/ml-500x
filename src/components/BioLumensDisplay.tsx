import React from 'react';
import { motion } from 'framer-motion';
import { BioLumensDisplayProps } from '@/types';

const BioLumensDisplay: React.FC<BioLumensDisplayProps> = ({ count, isAnimating }) => {
  return (
    <motion.div
      className="flex items-center space-x-1 bg-night-800 px-2 py-2 rounded-lg backdrop-blur-savanna border border-forest-500/30"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-3 h-3 bg-forest-400 rounded-full"
        animate={isAnimating ? {
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        } : {}}
        transition={{
          duration: 1,
          repeat: isAnimating ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      <span className="font-semibold text-forest-400 ubuntu-text text-sm">
        {count}
      </span>
    </motion.div>
  );
};

export default BioLumensDisplay; 