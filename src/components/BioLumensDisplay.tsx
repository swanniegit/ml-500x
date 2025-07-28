import React from 'react';
import { motion } from 'framer-motion';
import { BioLumensDisplayProps } from '@/types';

const BioLumensDisplay: React.FC<BioLumensDisplayProps> = ({ count, isAnimating }) => {
  return (
    <motion.div
      className="flex items-center space-x-2 bg-night-800 px-4 py-2 rounded-lg backdrop-blur-savanna"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-forest-400 rounded-full"
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
      <span className="font-semibold text-forest-400 ubuntu-text">
        {count}
      </span>
      <span className="text-sm text-gray-400 african-text">
        Bio-lumens
      </span>
    </motion.div>
  );
};

export default BioLumensDisplay; 