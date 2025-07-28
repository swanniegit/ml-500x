import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameState } from '@/hooks/useGameState';
import { biomes, getLessonsByBiome } from '@/data/lessons';
import BioLumensDisplay from './BioLumensDisplay';
import LessonCard from './LessonCard';

const BiomeScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gameState } = useGameState();
  
  const biome = biomes.find(b => b.id === id);
  const lessons = biome ? getLessonsByBiome(biome.id) : [];

  if (!biome) {
    return <div>Biome not found</div>;
  }

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center p-6 backdrop-blur-savanna"
      >
        <div>
          <h1 className="text-2xl font-bold ubuntu-text">{biome.name}</h1>
          <p className="text-sm text-gray-400 african-text">{biome.description}</p>
        </div>
        <BioLumensDisplay 
          count={gameState.userProgress.bioLumens} 
          isAnimating={false}
        />
      </motion.header>

      {/* Biome description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6"
      >
        <div className="bg-night-800 rounded-lg p-6 border border-night-600">
          <h2 className="text-xl font-semibold mb-4 ubuntu-text">
            About {biome.name}
          </h2>
          <p className="text-gray-300 african-text leading-relaxed">
            {biome.description}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: biome.color }}
              />
              <span className="text-sm text-gray-400 african-text">
                {biome.lessons.length} lessons available
              </span>
            </div>
            <div className="text-sm text-gray-400 african-text">
              {gameState.userProgress.unlockedBiomes.includes(biome.id) ? '✅ Unlocked' : '🔒 Locked'}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lessons */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold ubuntu-text">Lessons</h2>
          <button
            onClick={() => navigate('/')}
            className="text-sm text-forest-400 hover:text-forest-300 african-text"
          >
            ← Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onSelect={(lesson) => navigate(`/lesson/${lesson.id}`)}
              isActive={gameState.userProgress.currentLesson === lesson.id}
            />
          ))}
        </div>

        {lessons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 african-text">
              No lessons available in this biome yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BiomeScreen; 