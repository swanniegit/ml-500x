import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useGameState } from '@/hooks/useGameState';
import { useAudio } from '@/hooks/useAudio';
import { biomes, lessons } from '@/data/lessons';
import BioLumensDisplay from './BioLumensDisplay';
import BiomeCard from './BiomeCard';
import LessonCard from './LessonCard';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { gameState, startLesson } = useGameState();
  const { playSound } = useAudio();
  const [selectedBiome, setSelectedBiome] = useState(biomes[0]);

  const handleBiomeSelect = (biome: any) => {
    console.log('Biome selected:', biome.name, biome.id);
    setSelectedBiome(biome);
    playSound('button-click');
    
    // On mobile, navigate directly to the first lesson of the selected biome
    if (window.innerWidth < 1024) { // lg breakpoint
      const availableLessons = lessons.filter(lesson => lesson.biome.id === biome.id);
      if (availableLessons.length > 0) {
        const firstLesson = availableLessons[0];
        startLesson(firstLesson);
        navigate(`/lesson/${firstLesson.id}`);
      }
    }
  };

  const handleLessonSelect = (lesson: any) => {
    startLesson(lesson);
    playSound('button-click');
    navigate(`/lesson/${lesson.id}`);
  };

  const availableLessons = lessons.filter(lesson => 
    lesson.biome.id === selectedBiome.id
  );
   
  console.log('Selected biome:', selectedBiome.name, selectedBiome.id);
  console.log('Available lessons:', availableLessons.length);

  return (
    <div className="h-full w-full flex flex-col">
             {/* Compact Header */}
       <motion.header
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="flex justify-between items-center p-3 backdrop-blur-savanna border-b border-forest-500/20"
       >
         <div>
           <h1 className="text-lg font-bold ubuntu-text leading-tight">The Neural Savanna</h1>
           <p className="text-xs text-gray-400 african-text leading-tight">Your AI Learning Journey</p>
         </div>
         <BioLumensDisplay 
           count={gameState.userProgress.bioLumens} 
           isAnimating={false}
         />
       </motion.header>

      {/* Main content - Mobile-first approach */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Biome selection - Full width on mobile, sidebar on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/3 p-4 lg:p-6 lg:overflow-y-auto"
        >
          <h2 className="text-xl font-semibold mb-4 ubuntu-text">Choose Your Biome</h2>
          <div className="space-y-3">
            {biomes.map((biome) => (
              <BiomeCard
                key={biome.id}
                biome={biome}
                onSelect={handleBiomeSelect}
                isUnlocked={biome.unlocked}
                isSelected={selectedBiome.id === biome.id}
              />
            ))}
          </div>
        </motion.div>

        {/* Lessons - Hidden on mobile, shown on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex flex-1 p-4 lg:p-6 overflow-y-auto"
        >
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold ubuntu-text">
                Lessons in {selectedBiome.name}
              </h2>
              <div className="text-sm text-gray-400 african-text">
                {availableLessons.filter(l => gameState.userProgress.completedLessons.includes(l.id)).length} / {availableLessons.length} completed
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {availableLessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onSelect={handleLessonSelect}
                  isActive={gameState.userProgress.currentLesson === lesson.id}
                />
              ))}
            </div>
            
            {availableLessons.length === 0 && (
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
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen; 