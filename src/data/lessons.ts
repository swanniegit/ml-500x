import { Lesson, Biome } from '@/types';

export const biomes: Biome[] = [
  {
    id: 'savanna',
    name: 'The Great Savanna',
    description: 'Where we begin our journey with basic neural network concepts',
    color: '#22c55e',
    lessons: [1, 2, 3, 4, 5],
    unlocked: true
  },
  {
    id: 'forest',
    name: 'The Sacred Forest',
    description: 'Deep learning and advanced neural network architectures',
    color: '#16a34a',
    lessons: [6, 7, 8, 9, 10],
    unlocked: true
  },
  {
    id: 'mountain',
    name: 'The Wisdom Mountains',
    description: 'Complex AI concepts and optimization techniques',
    color: '#0ea5e9',
    lessons: [11, 12, 13, 14, 15],
    unlocked: false
  },
  {
    id: 'ocean',
    name: 'The Knowledge Ocean',
    description: 'Deep learning applications and real-world implementations',
    color: '#0284c7',
    lessons: [16, 17, 18, 19, 20],
    unlocked: false
  },
  {
    id: 'cosmos',
    name: 'The Neural Cosmos',
    description: 'Advanced AI concepts and future of artificial intelligence',
    color: '#7c3aed',
    lessons: [21, 22, 23, 24, 25],
    unlocked: false
  }
];

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'The Acacia Tree: Understanding Neural Networks',
    description: 'Learn how neural networks work through the metaphor of the acacia tree\'s root system',
    objective: 'Understand basic neural network structure and function',
    biome: biomes[0],
    difficulty: 1,
    duration: 300,
    completed: false,
    bioLumensReward: 10,
    content: {
      introduction: 'In this lesson, you will learn how neural networks work through the wisdom of the acacia tree. Just as the acacia tree processes nutrients from the soil through its interconnected root system, neural networks process information through three distinct layers: input, hidden, and output.',
      concepts: [
        {
          title: 'The Acacia Root System: Input Layer',
          explanation: 'The acacia tree\'s roots spread deep into the soil, collecting water and nutrients from different depths and locations. Each root tip acts like a sensor, detecting what the tree needs. Some roots reach deep for water, others spread wide for minerals, and some stay near the surface for quick access to nutrients.',
          technical: 'Input Layer: The first layer of neurons that receives raw data (like images, text, or numbers). Each neuron in this layer represents a single feature or input value. For an image, each pixel becomes a neuron. For text, each character or word becomes a neuron. The input layer is like the tree\'s root tips - each one specialized for a specific type of information.',
          example: 'When you look at a photo, your eyes send signals about colors, shapes, and patterns to your brain. In a neural network, the input layer receives pixel values, text characters, or numerical data. Just as different roots collect different nutrients, different input neurons collect different pieces of information.'
        },
        {
          title: 'Nutrient Processing: Hidden Layers',
          explanation: 'As nutrients flow through the acacia\'s roots, they are transformed and combined. The tree doesn\'t just collect water - it processes it, mixing it with minerals and converting it into what the tree needs to grow. Deeper in the root system, simple nutrients combine to form complex compounds that the tree can use.',
          technical: 'Hidden Layers: Middle layers that process and transform the input data. These layers contain neurons that combine and analyze information from previous layers, creating increasingly complex representations. Each hidden layer builds upon the previous one, just as deeper roots process more complex nutrient combinations.',
          example: 'Just as the acacia combines water with minerals to create nutrients, hidden layers combine simple features to recognize patterns. They might combine edges to form shapes, or shapes to form objects. The first hidden layer might recognize edges, the second might recognize shapes, and deeper layers might recognize complex objects.'
        },
        {
          title: 'Growth and Output: Output Layer',
          explanation: 'The acacia tree uses the processed nutrients to grow leaves, flowers, and seeds. The final result - what the tree produces - depends on all the processing that happened in the roots. The tree doesn\'t just grow randomly; it produces specific structures based on the processed nutrients.',
          technical: 'Output Layer: The final layer that produces the network\'s prediction or decision. This layer takes the processed information and converts it into the desired output format. For classification tasks, it might output probabilities for different categories. For regression tasks, it might output a single number.',
          example: 'When you see a photo of a cat, your brain processes the visual information and outputs the decision "This is a cat." A neural network might output probabilities for different categories (90% cat, 5% dog, 3% rabbit) or a specific prediction like a price or a classification.'
        }
      ],
             practical: 'In this lesson, you saw how a simple neural network processes information, just like an acacia tree processes nutrients from the soil. Each layer has a specific role: input layers receive data, hidden layers process it, and output layers produce results.',
      ubuntuConnection: 'Just as the acacia tree thrives through the interconnectedness of its root system, neural networks succeed through the collaboration of all their layers. Each layer depends on the others, working together in harmony - a perfect example of Ubuntu in technology.'
    }
  },
  {
    id: 2,
    title: 'The Baobab\'s Roots: Deep Learning Connections',
    description: 'Explore deep learning through the interconnected root system of the baobab tree',
    objective: 'Learn about deep neural networks and their connections',
    biome: biomes[0],
    difficulty: 2,
    duration: 450,
    completed: false,
    bioLumensReward: 15,
    content: {
      introduction: 'In this lesson, you will explore deep learning through the wisdom of the baobab tree. The baobab\'s massive root system can extend hundreds of feet underground, creating a complex network that mirrors the intricate connections of deep neural networks. Just as the baobab\'s roots work together to support the entire tree, deep neural networks use multiple layers to process and understand complex information.',
      concepts: [
        {
          title: 'Depth: The Baobab\'s Many Layers',
          explanation: 'The baobab tree\'s root system extends through multiple soil layers, each serving a different purpose. Shallow roots spread wide to capture surface water and nutrients, while deeper roots reach down to groundwater sources. Middle layers process and transport nutrients between the surface and deep layers. This multi-layered approach allows the baobab to thrive in harsh environments, just as deep neural networks use multiple hidden layers to process complex information.',
          technical: 'Deep learning uses neural networks with many hidden layers (typically 10-100+ layers), allowing for hierarchical feature extraction and complex pattern recognition. Each layer builds upon the previous one, creating increasingly abstract representations. Early layers detect simple features like edges and textures, while deeper layers recognize complex patterns like objects and scenes. This depth enables the network to learn sophisticated relationships in the data.',
          example: 'When you look at a photo, your brain processes it through multiple stages: first detecting edges and shapes, then recognizing objects, and finally understanding the scene. A deep neural network does the same - shallow layers might detect edges in an image, middle layers might recognize shapes like circles and squares, and deeper layers might identify objects like faces or cars.'
        },
        {
          title: 'Feature Extraction: Root Specialization',
          explanation: 'Different parts of the baobab\'s root system have specialized functions. Some roots are thick and strong, providing structural support to keep the massive tree upright. Others are thin and fibrous, designed for maximum surface area to absorb water and nutrients efficiently. Still others are specialized for storing water during dry periods. Each type of root has evolved for its specific role, just as different layers in deep networks extract different types of features.',
          technical: 'Feature extraction in deep networks follows a hierarchical pattern. Early layers detect low-level features like edges, corners, and textures. Middle layers combine these to recognize shapes, patterns, and parts of objects. Deep layers integrate these into high-level concepts like objects, scenes, and abstract representations. This specialization allows the network to build complex understanding from simple building blocks.',
          example: 'In image recognition, the first layer might detect simple edges and gradients. The second layer might combine these to recognize shapes like circles and rectangles. Deeper layers might recognize parts like eyes, noses, and mouths. The final layers might combine these to recognize complete faces or objects. Each layer specializes in a different level of abstraction.'
        },
        {
          title: 'Backpropagation: Nutrient Flow',
          explanation: 'The baobab tree has an incredible ability to adapt its root system based on environmental conditions. When a branch needs more nutrients, signals flow back through the root system, causing roots to grow toward nutrient-rich areas or develop more efficient absorption structures. This feedback mechanism ensures the tree can respond to changing conditions, just as backpropagation allows neural networks to learn from their mistakes.',
          technical: 'Backpropagation is the algorithm that allows neural networks to learn from their errors. When the network makes a prediction, it compares the output to the correct answer and calculates how much each neuron contributed to the error. This error signal flows backward through the network, updating the weights to reduce future errors. The process involves calculating gradients and using them to adjust weights in the direction that minimizes the loss function.',
          example: 'Imagine teaching a child to recognize animals. When they mistake a cat for a dog, you provide feedback: "No, that\'s a cat because it has pointy ears and whiskers." The child adjusts their understanding. Similarly, when a neural network misclassifies an image, backpropagation provides feedback about what went wrong, allowing the network to adjust its internal representations and improve future predictions.'
        }
      ],
      practical: 'In this lesson, you will see how deep neural networks process information through multiple layers, just like the baobab tree\'s root system processes nutrients through different soil layers. Each layer has a specialized role: early layers detect simple features, middle layers combine them into patterns, and deep layers create complex representations.',
      ubuntuConnection: 'Just as the baobab\'s interconnected roots support the entire tree, deep neural networks demonstrate how collective intelligence emerges from individual connections. Each layer depends on the others, working together in harmony - a perfect example of Ubuntu in technology. The strength of the network comes not from individual neurons, but from their interconnected collaboration.'
    }
  },
  {
    id: 3,
    title: 'The Lion\'s Hunt: Training Neural Networks',
    description: 'Discover how neural networks learn through the hunting strategies of the lion',
    objective: 'Understand neural network training and optimization',
    biome: biomes[0],
    difficulty: 2,
    duration: 400,
    completed: false,
    bioLumensReward: 15,
    content: {
      introduction: 'Lions learn to hunt through trial and error, adjusting their strategies based on success and failure - exactly how neural networks learn.',
      concepts: [
        {
          title: 'Loss Function: The Hunt\'s Goal',
          explanation: 'Just as lions have a clear goal (catching prey), neural networks have a loss function that measures how far they are from their target.',
          technical: 'Loss functions quantify the difference between predicted and actual outputs, providing a target for optimization.',
          example: 'A lion measures success by whether it catches prey - the network measures success by how close its predictions are to reality.'
        },
        {
          title: 'Gradient Descent: The Lion\'s Strategy',
          explanation: 'Lions adjust their approach based on what works, moving toward better strategies - gradient descent moves toward better solutions.',
          technical: 'Gradient descent finds the direction of steepest descent in the loss landscape and updates weights accordingly.',
          example: 'If a lion\'s approach fails, it tries a different angle - the network adjusts its weights based on what reduces error.'
        },
        {
          title: 'Learning Rate: The Lion\'s Patience',
          explanation: 'Lions must balance speed with precision - too fast and they miss, too slow and prey escapes. Learning rate balances speed and accuracy.',
          technical: 'Learning rate controls how much weights are updated in each iteration - too high causes overshooting, too low causes slow convergence.',
          example: 'A lion must move quickly enough to catch prey but carefully enough to not alert it - the network must learn efficiently but accurately.'
        }
      ],
      practical: 'You\'ll see how networks learn through repeated attempts, gradually improving their performance through feedback.',
      ubuntuConnection: 'Lions hunt in prides, sharing knowledge and strategies - neural networks learn through the collective wisdom of many training examples.'
    }
  },
  {
    id: 4,
    title: 'The Waterhole: Data Flow in Networks',
    description: 'Learn about data flow through the metaphor of water in the savanna',
    objective: 'Master data flow and information processing in neural networks',
    biome: biomes[0],
    difficulty: 3,
    duration: 500,
    completed: false,
    bioLumensReward: 20,
    content: {
      introduction: 'Water flows through the savanna, connecting different areas and carrying information - just as data flows through neural networks.',
      concepts: [
        {
          title: 'Forward Propagation: Water\'s Journey',
          explanation: 'Water flows from source to destination, just as data flows from input through hidden layers to output.',
          technical: 'Forward propagation passes input data through the network, computing outputs at each layer using weights and activation functions.',
          example: 'Water flows from mountain springs through rivers to the ocean - data flows from input through layers to the final prediction.'
        },
        {
          title: 'Activation Functions: Water\'s Transformation',
          explanation: 'Water changes form as it flows - liquid, vapor, ice. Activation functions transform data as it flows through the network.',
          technical: 'Activation functions introduce non-linearity, allowing networks to learn complex patterns. Common functions include ReLU, sigmoid, and tanh.',
          example: 'Water can be calm (linear) or turbulent (non-linear) - activation functions add the non-linearity needed for complex learning.'
        },
        {
          title: 'Batch Processing: Multiple Streams',
          explanation: 'Multiple animals drink from the same waterhole simultaneously - networks process multiple examples together for efficiency.',
          technical: 'Batch processing allows parallel computation, improving efficiency and providing more stable gradient estimates.',
          example: 'Just as multiple animals can drink at once, multiple data points can be processed together, sharing computational resources.'
        }
      ],
      practical: 'You\'ll observe how data transforms as it flows through the network, seeing how each layer processes and transforms information.',
      ubuntuConnection: 'Water connects all life in the savanna - data flow connects all parts of the network, creating a unified system of intelligence.'
    }
  },
  {
    id: 5,
    title: 'The Elephant\'s Memory: Neural Network Memory',
    description: 'Explore memory in neural networks through the elephant\'s remarkable memory',
    objective: 'Understand how neural networks store and retrieve information',
    biome: biomes[0],
    difficulty: 3,
    duration: 550,
    completed: false,
    bioLumensReward: 20,
    content: {
      introduction: 'Elephants remember water sources, migration routes, and family members for decades - neural networks also have different types of memory.',
      concepts: [
        {
          title: 'Weights: The Elephant\'s Long-term Memory',
          explanation: 'Elephants remember important locations and relationships for years - neural network weights store learned patterns permanently.',
          technical: 'Weights are the primary form of memory in neural networks, storing learned relationships between inputs and outputs.',
          example: 'An elephant remembers where water sources are located - a network remembers which input patterns lead to which outputs.'
        },
        {
          title: 'Recurrent Networks: The Elephant\'s Sequence Memory',
          explanation: 'Elephants remember sequences of events - recurrent neural networks remember sequences of inputs.',
          technical: 'RNNs maintain hidden states that carry information from previous time steps, allowing them to process sequential data.',
          example: 'An elephant remembers the sequence of seasons and migration patterns - RNNs remember sequences of words or events.'
        },
        {
          title: 'Attention Mechanisms: The Elephant\'s Focus',
          explanation: 'Elephants focus attention on important stimuli while ignoring distractions - attention mechanisms focus on relevant parts of input.',
          technical: 'Attention mechanisms allow networks to focus on specific parts of input data, improving performance on complex tasks.',
          example: 'An elephant focuses on the sound of approaching predators while ignoring background noise - attention focuses on relevant information.'
        }
      ],
      practical: 'You\'ll explore how different types of memory work in neural networks, from simple weight storage to complex attention mechanisms.',
      ubuntuConnection: 'Elephants share memories across generations, teaching young ones important knowledge - neural networks share learned patterns across different tasks.'
    }
  }
];

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByBiome = (biomeId: string): Lesson[] => {
  return lessons.filter(lesson => lesson.biome.id === biomeId);
};

export const getNextLesson = (currentLessonId: number): Lesson | null => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null;
  }
  return lessons[currentIndex + 1];
}; 