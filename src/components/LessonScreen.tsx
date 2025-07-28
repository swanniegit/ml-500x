import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useGameState } from '@/hooks/useGameState';
import { useAudio } from '@/hooks/useAudio';
import { getLessonById, getNextLesson } from '@/data/lessons';
import { getNarrationById } from '@/data/narrations';
import BioLumensDisplay from './BioLumensDisplay';

const LessonScreen: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gameState, completeLesson, earnBioLumens, startLesson } = useGameState();
  const { playSound, playNarration } = useAudio();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [narration, setNarration] = useState('');
  const [isNarrationVisible, setIsNarrationVisible] = useState(false);
  const [biolumensCollected, setBiolumensCollected] = useState(0);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const lesson = getLessonById(Number(id));

  // Add keyboard shortcut for scrolling to button
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space' && showContinueButton && currentStep === 0) {
        event.preventDefault();
        if (contentRef.current) {
          contentRef.current.scrollTo({
            top: contentRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showContinueButton, currentStep]);



  useEffect(() => {
    if (!lesson) {
      navigate('/');
      return;
    }

    // Start lesson narration
    const introNarration = getNarrationById(`lesson${lesson.id}-intro`);
    if (introNarration) {
      setNarration(introNarration.text);
      setIsNarrationVisible(true);
      playNarration(introNarration.id);
      
      // Show continue button after narration duration
      const timer = setTimeout(() => {
        setShowContinueButton(true);
      }, introNarration.duration);
      
      return () => clearTimeout(timer);
    }
  }, [lesson, navigate, playNarration]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (currentStep === 1) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Create bio-lumen particle at click position
      createBiolumenParticle(x, y);
      
      // Earn bio-lumens
      const earned = Math.floor(Math.random() * 3) + 1;
      earnBioLumens(earned);
      setBiolumensCollected(prev => prev + earned);
      
      // Add visual feedback
      const canvas = event.currentTarget;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (lesson?.id === 1) {
          // Special neural network spark effect for Lesson 1
          createNeuralSpark(ctx, x, y, canvas.width, canvas.height);
        } else {
          // Regular sparkle effect for other lessons
          ctx.save();
          
          // Outer glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 40);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 1)'); // forest-500
          gradient.addColorStop(0.5, 'rgba(16, 185, 129, 0.5)');
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 40, 0, 2 * Math.PI);
          ctx.fill();
          
          // Inner bright circle
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, 2 * Math.PI);
          ctx.fill();
          
          // Add some sparkles around
          for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * 2 * Math.PI;
            const sparkleX = x + Math.cos(angle) * 30;
            const sparkleY = y + Math.sin(angle) * 30;
            
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = '#34d399'; // forest-400
            ctx.beginPath();
            ctx.arc(sparkleX, sparkleY, 3, 0, 2 * Math.PI);
            ctx.fill();
          }
          
          ctx.restore();
          
          // Animate the effect
          let opacity = 1;
          const animate = () => {
            if (opacity > 0) {
              ctx.save();
              ctx.globalAlpha = opacity;
              ctx.fillStyle = '#10b981';
              ctx.beginPath();
              ctx.arc(x, y, 20, 0, 2 * Math.PI);
              ctx.fill();
              ctx.restore();
              
              opacity -= 0.05;
              setTimeout(animate, 50);
            } else {
              // Redraw background in the area
              const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
              gradient.addColorStop(0, '#0f172a');
              gradient.addColorStop(0.5, '#064e3b');
              gradient.addColorStop(1, '#78350f');
              ctx.fillStyle = gradient;
              ctx.fillRect(x - 50, y - 50, 100, 100);
            }
          };
          setTimeout(animate, 500);
        }
      }
      
      try {
        playSound('biolumen-collect');
      } catch (error) {
        console.log('Sound failed to play');
      }

             // Immediately complete lesson on first click
       setTimeout(() => {
         setCurrentStep(2);
         const completionNarration = getNarrationById(`lesson${lesson?.id}-complete`);
         if (completionNarration) {
           setNarration(completionNarration.text);
           setIsNarrationVisible(true);
           try {
             playNarration(completionNarration.id);
           } catch (error) {
             console.log('Completion narration failed');
           }
         }
       }, 1000);
    }
  };

  const createBiolumenParticle = (x: number, y: number) => {
    // This would create visual particles in a real implementation
    console.log(`Created bio-lumen particle at (${x}, ${y})`);
  };

  // Setup canvas when entering interactive phase
  useEffect(() => {
    if (currentStep === 1) {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Set canvas size
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
          
          // Animation loop for Lesson 1 neural network
          if (lesson?.id === 1) {
            let animationId: number;
            
            const animate = () => {
              // Draw background gradient
              const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
              gradient.addColorStop(0, '#0f172a'); // night-900
              gradient.addColorStop(0.5, '#064e3b'); // forest-900
              gradient.addColorStop(1, '#78350f'); // savanna-900
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              // Draw neural network with animation
              drawNeuralNetwork(ctx, canvas.width, canvas.height);
              
              animationId = requestAnimationFrame(animate);
            };
            
            animate();
            
            return () => {
              if (animationId) {
                cancelAnimationFrame(animationId);
              }
            };
          } else {
            // Draw background gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#0f172a'); // night-900
            gradient.addColorStop(0.5, '#064e3b'); // forest-900
            gradient.addColorStop(1, '#78350f'); // savanna-900
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw some floating particles for other lessons
            for (let i = 0; i < 20; i++) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              const size = Math.random() * 3 + 1;
              
              ctx.save();
              ctx.globalAlpha = 0.3;
              ctx.fillStyle = '#10b981'; // forest-500
              ctx.beginPath();
              ctx.arc(x, y, size, 0, 2 * Math.PI);
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }
    }
  }, [currentStep, lesson]);

  const drawNeuralNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Input layer (bottom) - Red arrows pointing up
    const inputY = height * 0.8;
    const inputNodes = 5;
    const inputSpacing = width / (inputNodes + 1);
    
    for (let i = 0; i < inputNodes; i++) {
      const x = inputSpacing * (i + 1);
      
      // Draw input node
      ctx.save();
      ctx.fillStyle = '#ef4444'; // red-500
      ctx.beginPath();
      ctx.arc(x, inputY, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
      
      // Draw arrow pointing up
      ctx.save();
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, inputY - 8);
      ctx.lineTo(x, inputY - 40);
      ctx.stroke();
      
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(x - 4, inputY - 36);
      ctx.lineTo(x, inputY - 40);
      ctx.lineTo(x + 4, inputY - 36);
      ctx.stroke();
      ctx.restore();
    }
    
    // Hidden layer (middle) - Rotating circle
    const hiddenY = centerY;
    const rotationSpeed = 0.02;
    const time = Date.now() * rotationSpeed;
    
    // Draw rotating circle
    ctx.save();
    ctx.translate(centerX, hiddenY);
    ctx.rotate(time);
    
    // Outer ring
    ctx.strokeStyle = '#10b981'; // forest-500
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Inner circle
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, 2 * Math.PI);
    ctx.fill();
    
    // Rotating dots around the circle
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * 2 * Math.PI + time;
      const x = Math.cos(angle) * 60;
      const y = Math.sin(angle) * 60;
      
      ctx.fillStyle = '#34d399'; // forest-400
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    ctx.restore();
    
    // Output layer (top) - Arrows pointing to output
    const outputY = height * 0.2;
    const outputNodes = 3;
    const outputSpacing = width / (outputNodes + 1);
    
    for (let i = 0; i < outputNodes; i++) {
      const x = outputSpacing * (i + 1);
      
      // Draw output node
      ctx.save();
      ctx.fillStyle = '#3b82f6'; // blue-500
      ctx.beginPath();
      ctx.arc(x, outputY, 8, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
      
      // Draw arrow pointing to output
      ctx.save();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, outputY + 8);
      ctx.lineTo(x, outputY + 40);
      ctx.stroke();
      
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(x - 4, outputY + 36);
      ctx.lineTo(x, outputY + 40);
      ctx.lineTo(x + 4, outputY + 36);
      ctx.stroke();
      ctx.restore();
    }
    
    // Connection lines from input to hidden layer
    ctx.save();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.6;
    
    for (let i = 0; i < inputNodes; i++) {
      const inputX = inputSpacing * (i + 1);
      ctx.beginPath();
      ctx.moveTo(inputX, inputY - 40);
      ctx.lineTo(centerX, hiddenY - 60);
      ctx.stroke();
    }
    ctx.restore();
    
    // Connection lines from hidden to output layer
    ctx.save();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.6;
    
    for (let i = 0; i < outputNodes; i++) {
      const outputX = outputSpacing * (i + 1);
      ctx.beginPath();
      ctx.moveTo(centerX, hiddenY + 60);
      ctx.lineTo(outputX, outputY + 40);
      ctx.stroke();
    }
         ctx.restore();
   };

   const createNeuralSpark = (ctx: CanvasRenderingContext2D, clickX: number, clickY: number, width: number, height: number) => {
     const centerX = width / 2;
     const centerY = height / 2;
     
     // Create traveling sparks that follow the neural network connections
     const sparks: Array<{x: number, y: number, vx: number, vy: number, life: number, color: string}> = [];
     
     // Add initial spark at click position
     sparks.push({
       x: clickX,
       y: clickY,
       vx: (centerX - clickX) * 0.02,
       vy: (centerY - clickY) * 0.02,
       life: 1,
       color: '#ef4444'
     });
     
     // Animate sparks traveling through the network
     const animateSparks = () => {
       ctx.save();
       
       for (let i = sparks.length - 1; i >= 0; i--) {
         const spark = sparks[i];
         
         // Update spark position
         spark.x += spark.vx;
         spark.y += spark.vy;
         spark.life -= 0.02;
         
         // Draw spark
         ctx.globalAlpha = spark.life;
         ctx.fillStyle = spark.color;
         ctx.beginPath();
         ctx.arc(spark.x, spark.y, 3, 0, 2 * Math.PI);
         ctx.fill();
         
         // Add glow effect
         const gradient = ctx.createRadialGradient(spark.x, spark.y, 0, spark.x, spark.y, 10);
         gradient.addColorStop(0, spark.color);
         gradient.addColorStop(1, 'transparent');
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(spark.x, spark.y, 10, 0, 2 * Math.PI);
         ctx.fill();
         
         // Remove dead sparks
         if (spark.life <= 0) {
           sparks.splice(i, 1);
         }
         
         // Create new sparks when reaching the hidden layer
         const distanceToCenter = Math.sqrt((spark.x - centerX) ** 2 + (spark.y - centerY) ** 2);
         if (distanceToCenter < 80 && spark.color === '#ef4444') {
           // Create blue sparks going to output
           for (let j = 0; j < 3; j++) {
             const outputY = height * 0.2;
             const outputX = (width / 4) * (j + 1);
             
             sparks.push({
               x: centerX,
               y: centerY,
               vx: (outputX - centerX) * 0.02,
               vy: (outputY - centerY) * 0.02,
               life: 1,
               color: '#3b82f6'
             });
           }
         }
       }
       
       ctx.restore();
       
       if (sparks.length > 0) {
         requestAnimationFrame(animateSparks);
       }
     };
     
     animateSparks();
   };

  const handleComplete = () => {
    if (lesson) {
      completeLesson();
      earnBioLumens(lesson.bioLumensReward);
      playSound('lesson-complete');
      
      // Try to navigate to the next lesson
      const nextLesson = getNextLesson(lesson.id);
      if (nextLesson) {
        // Start the next lesson and navigate to it
        startLesson(nextLesson);
        navigate(`/lesson/${nextLesson.id}`);
      } else {
        // If no next lesson, go back to home
        navigate('/');
      }
    }
  };

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="h-full w-full flex flex-col">
                           {/* Compact Header */}
         <motion.header
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="p-3 backdrop-blur-savanna border-b border-forest-500/20"
         >
           {/* Top row: Home, Exit, Bio-lumens */}
           <div className="flex justify-between items-center mb-3">
             <div className="flex items-center space-x-3">
               <motion.button
                 className="bg-night-800 hover:bg-night-700 p-2 rounded-lg border border-forest-500/30 transition-colors"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => navigate('/')}
                 title="Return to Home"
               >
                 <span className="text-lg">🏠</span>
               </motion.button>
               <motion.button
                 className="bg-night-800 hover:bg-night-700 p-2 rounded-lg border border-forest-500/30 transition-colors"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => window.close()}
                 title="Exit App"
               >
                 <span className="text-lg">❌</span>
               </motion.button>
             </div>
             <BioLumensDisplay 
               count={gameState.userProgress.bioLumens} 
               isAnimating={biolumensCollected > 0}
             />
           </div>
           
           {/* Bottom row: Full width lesson title and objective */}
           <div className="w-full">
             <h1 className="text-lg font-bold ubuntu-text leading-tight">{lesson.title}</h1>
             <p className="text-sm text-gray-400 african-text leading-tight">{lesson.objective}</p>
           </div>
         </motion.header>

             {/* Content Section */}
       {lesson.content && currentStep === 0 && (
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
                                                                                               className="flex-1 overflow-y-auto p-8 pb-32"
                        ref={contentRef}
         >
                       <div className="max-w-5xl mx-auto space-y-8">
                          {/* What You'll Learn - Prominent Introduction */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-forest-900/50 to-savanna-900/50 rounded-xl p-10 backdrop-blur-savanna border-2 border-forest-500/30 shadow-xl"
              >
                <h2 className="text-4xl font-bold mb-6 ubuntu-text text-forest-300 text-center">
                  🌱 In This Lesson
                </h2>
                <p className="text-2xl african-text text-gray-200 leading-relaxed text-center">
                  {lesson.content.introduction}
                </p>
              </motion.div>

                                                   {/* Detailed Concepts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-8"
              >
                <h3 className="text-3xl font-bold ubuntu-text text-savanna-300 mb-4">
                  📚 Key Concepts
                </h3>
                <p className="text-lg text-gray-400 african-text">
                  Explore these fundamental ideas that connect African wisdom to neural networks
                </p>
              </motion.div>
              
              <div className="space-y-8">
                               {lesson.content.concepts.map((concept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-night-800/50 rounded-xl p-8 backdrop-blur-savanna border border-forest-500/20 cursor-pointer"
                    onClick={() => {
                      if (contentRef.current) {
                        contentRef.current.scrollTo({
                          top: contentRef.current.scrollHeight,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                   <h3 className="text-2xl font-semibold mb-6 ubuntu-text text-forest-300">
                     {concept.title}
                   </h3>
                   
                   <div className="space-y-6">
                     <div>
                       <h4 className="text-lg font-medium text-savanna-400 mb-3">
                         Understanding
                       </h4>
                       <p className="text-lg text-gray-300 african-text leading-relaxed">
                         {concept.explanation}
                       </p>
                     </div>
                     
                     <div>
                       <h4 className="text-lg font-medium text-savanna-400 mb-3">
                         Technical Details
                       </h4>
                       <p className="text-base text-gray-400 african-text leading-relaxed font-mono">
                         {concept.technical}
                       </p>
                     </div>
                     
                     <div>
                       <h4 className="text-lg font-medium text-savanna-400 mb-3">
                         Real-World Example
                       </h4>
                                               <p className="text-lg text-gray-300 african-text leading-relaxed">
                          {concept.example}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Click to scroll down and reveal the Continue button
                    </p>
                  </motion.div>
                ))}
             </div>

                                                   

                                                   {/* Ubuntu Connection */}
                             <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.9 }}
                 className="p-8 bg-savanna-900/30 rounded-xl border border-savanna-500/30 cursor-pointer"
                 onClick={() => {
                   if (contentRef.current) {
                     contentRef.current.scrollTo({
                       top: contentRef.current.scrollHeight,
                       behavior: 'smooth'
                     });
                   }
                 }}
               >
                <h3 className="text-2xl font-semibold mb-4 ubuntu-text text-savanna-300">
                  Ubuntu Connection
                </h3>
                <p className="text-lg text-gray-300 african-text leading-relaxed italic">
                  "{lesson.content.ubuntuConnection}"
                </p>
                                 <p className="text-sm text-gray-500 mt-4 text-center">
                   Click to scroll down and reveal the Continue button
                 </p>
               </motion.div>

              {/* Narration content integrated into scrollable text */}
              {isNarrationVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-night-800/50 rounded-xl p-6 backdrop-blur-savanna border border-forest-500/20"
                >
                  <div className="flex items-start space-x-2 lg:space-x-4">
                    <div className="text-lg lg:text-2xl">🗣️</div>
                    <div className="flex-1">
                      <p className="text-sm lg:text-lg african-text leading-relaxed">
                        {narration}
                      </p>
                      <div className="mt-2 lg:mt-4 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-forest-400 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-400 african-text">
                          Ubuntu wisdom
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
                          
          </div>
        </motion.div>
      )}

             {/* Main canvas area */}
       {currentStep >= 1 && (
         <div className="flex-1 relative bg-gradient-to-br from-night-900 via-forest-900 to-savanna-900">
           <canvas
             className="w-full h-full cursor-pointer"
             onClick={handleCanvasClick}
           >
             {/* Canvas content would be rendered here */}
           </canvas>

                                   {/* Interactive overlay */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-center bg-night-900/20 backdrop-blur-sm p-8 rounded-2xl border border-forest-500/20">
                <motion.div
                  className="text-8xl mb-6"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🌱
                </motion.div>
                                 <p className="text-xl african-text text-white text-shadow mb-4">
                   Tap anywhere to complete the lesson
                 </p>
                 <p className="text-sm text-gray-300 african-text">
                   Click to earn bio-lumens and continue
                 </p>
                                  <div className="mt-4">
                    <div className="mt-3 p-2 bg-forest-900/50 rounded-lg">
                      <p className="text-sm text-forest-300 font-semibold">
                        Bio-lumens collected: {biolumensCollected}
                      </p>
                    </div>
                  </div>
              </div>
            </motion.div>
          )}

                 {/* Completion overlay */}
         {currentStep === 2 && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="absolute inset-0 flex items-center justify-center z-[9999]"
           >
            <div className="text-center bg-night-800 p-8 rounded-lg backdrop-blur-savanna">
              <motion.div
                className="text-6xl mb-4"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360, 0]
                }}
                transition={{ duration: 1 }}
              >
                ✨
              </motion.div>
              <h2 className="text-2xl font-bold mb-4 ubuntu-text">
                Lesson Complete!
              </h2>
              <p className="text-gray-300 mb-6 african-text">
                You earned {biolumensCollected} bio-lumens
              </p>
              <motion.button
                className="bg-forest-600 hover:bg-forest-500 px-6 py-3 rounded-lg font-semibold ubuntu-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleComplete}
              >
                Continue Journey
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
      )}


       
               {/* Continue button - moved to end of scrollable content */}
             {showContinueButton && currentStep === 0 && (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-center mt-8 p-6 bg-night-900/50 rounded-xl border border-forest-500/30"
               >
                 <motion.button
                   className="bg-forest-600 hover:bg-forest-500 px-8 py-4 rounded-xl font-semibold ubuntu-text text-lg shadow-lg"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => {
                     console.log('Continue button clicked, transitioning to step 1');
                     setShowContinueButton(false);
                     setIsNarrationVisible(false);
                     
                     // Always transition to interactive phase, even if narration fails
                     setCurrentStep(1);
                     
                     // Try to start the interactive narration, but don't block if it fails
                     const interactiveNarration = getNarrationById(`lesson${lesson?.id}-interactive`);
                     console.log('Interactive narration found:', interactiveNarration);
                     if (interactiveNarration) {
                       setNarration(interactiveNarration.text);
                       setIsNarrationVisible(true);
                       try {
                         playNarration(interactiveNarration.id);
                       } catch (error) {
                         console.log('Narration failed, continuing to interactive phase');
                       }
                     } else {
                       console.log('No interactive narration found, continuing to interactive phase');
                     }
                   }}
                 >
                   Continue
                 </motion.button>
                 <p className="text-xs text-gray-400 mt-2 text-center">
                   Press SPACEBAR to scroll down quickly
                 </p>
               </motion.div>
             )}


     </div>
   );
 };

export default LessonScreen; 