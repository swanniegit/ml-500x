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
  },
  {
    id: 6,
    title: 'The Baobab\'s Wisdom: Deep Learning Foundations',
    description: 'Discover deep learning through the ancient wisdom of the baobab tree',
    objective: 'Understand the fundamentals of deep learning and neural network depth',
    biome: biomes[1],
    difficulty: 2,
    duration: 400,
    completed: false,
    bioLumensReward: 25,
    content: {
      introduction: 'The baobab tree stands as a symbol of wisdom and depth in African culture. Just as the baobab\'s roots reach deep into the earth, deep learning networks reach deep into data to find hidden patterns.',
      concepts: [
        {
          title: 'Depth: The Baobab\'s Many Layers',
          explanation: 'The baobab tree has multiple layers - bark, wood, and roots that extend deep underground. Deep neural networks have multiple hidden layers that process information at different levels of abstraction.',
          technical: 'Deep learning uses neural networks with many hidden layers (typically 10-100+ layers), allowing for hierarchical feature extraction and complex pattern recognition.',
          example: 'Just as a baobab\'s roots process nutrients at different depths, deep networks process information at different levels - from simple edges to complex objects.'
        },
        {
          title: 'Feature Hierarchy: The Baobab\'s Growth Pattern',
          explanation: 'The baobab grows in stages - first roots, then trunk, then branches, then leaves. Deep networks build features in stages - simple features combine to form complex ones.',
          technical: 'Early layers detect low-level features like edges and textures. Middle layers combine these into shapes and patterns. Deep layers recognize complex objects and concepts.',
          example: 'A baobab\'s growth mirrors how deep networks learn - from simple building blocks to complex structures.'
        },
        {
          title: 'Representation Learning: The Baobab\'s Adaptation',
          explanation: 'The baobab adapts its structure to survive in harsh environments. Deep networks learn representations that are useful for their specific tasks.',
          technical: 'Representation learning allows networks to automatically discover useful features from raw data, rather than requiring manual feature engineering.',
          example: 'Just as the baobab adapts to its environment, deep networks adapt their internal representations to their specific tasks.'
        }
      ],
      practical: 'You\'ll explore how deep networks process information through multiple layers, building increasingly complex representations.',
      ubuntuConnection: 'The baobab teaches us that wisdom comes from deep roots and many layers of experience - deep learning shows us that intelligence comes from many layers of processing.'
    }
  },
  {
    id: 7,
    title: 'The Weaver Bird\'s Nest: Convolutional Neural Networks',
    description: 'Learn about CNNs through the intricate nest-building of weaver birds',
    objective: 'Understand convolutional neural networks and their applications',
    biome: biomes[1],
    difficulty: 3,
    duration: 450,
    completed: false,
    bioLumensReward: 30,
    content: {
      introduction: 'Weaver birds create intricate nests by weaving together many small pieces. Convolutional Neural Networks (CNNs) work similarly, combining many small patterns to recognize complex images.',
      concepts: [
        {
          title: 'Convolution: The Weaver\'s Pattern',
          explanation: 'Weaver birds repeat the same weaving pattern many times to build their nests. Convolution applies the same filter pattern across the entire image.',
          technical: 'Convolution uses small filters that slide across the input, detecting features like edges, textures, and patterns regardless of their location.',
          example: 'Just as a weaver bird uses the same technique to weave each part of the nest, convolution uses the same filter to detect patterns anywhere in the image.'
        },
        {
          title: 'Pooling: The Weaver\'s Selection',
          explanation: 'Weaver birds select the strongest materials for their nests. Pooling selects the most important features from each region.',
          technical: 'Pooling reduces the spatial dimensions of the feature maps, keeping only the most important information and making the network more robust.',
          example: 'Just as a weaver bird chooses the best materials, pooling chooses the most important features from each area.'
        },
        {
          title: 'Feature Maps: The Weaver\'s Blueprint',
          explanation: 'Weaver birds follow a mental blueprint to create their nests. Feature maps are the network\'s blueprint for recognizing patterns.',
          technical: 'Feature maps show how the network "sees" the input at different levels of abstraction, from simple edges to complex objects.',
          example: 'Each feature map is like a different blueprint showing how the network recognizes specific patterns in the image.'
        }
      ],
      practical: 'You\'ll see how CNNs process images through convolution and pooling, building up from simple patterns to complex objects.',
      ubuntuConnection: 'Weaver birds work together in colonies, each contributing to the community - CNNs work together, each layer contributing to the final understanding.'
    }
  },
  {
    id: 8,
    title: 'The Termite Colony: Recurrent Neural Networks',
    description: 'Explore RNNs through the collective intelligence of termite colonies',
    objective: 'Understand recurrent neural networks and sequential data processing',
    biome: biomes[1],
    difficulty: 3,
    duration: 500,
    completed: false,
    bioLumensReward: 30,
    content: {
      introduction: 'Termite colonies work together over time, with each termite\'s actions influencing the future behavior of the colony. Recurrent Neural Networks (RNNs) work similarly, with each step influencing the next.',
      concepts: [
        {
          title: 'Sequential Processing: The Termite\'s Memory',
          explanation: 'Termites remember what happened before and use that information to decide what to do next. RNNs maintain memory of previous inputs to process sequences.',
          technical: 'RNNs have hidden states that carry information from previous time steps, allowing them to process sequential data like text, speech, or time series.',
          example: 'Just as termites remember the colony\'s history, RNNs remember the sequence of inputs they\'ve processed.'
        },
        {
          title: 'Hidden States: The Colony\'s Knowledge',
          explanation: 'The termite colony maintains collective knowledge about its environment and history. RNNs maintain hidden states that encode information about the sequence.',
          technical: 'Hidden states are the network\'s internal memory, containing information about all previous inputs in a compressed form.',
          example: 'The hidden state is like the colony\'s collective memory, containing information about everything that has happened before.'
        },
        {
          title: 'Backpropagation Through Time: The Colony\'s Learning',
          explanation: 'Termite colonies learn from their mistakes and adapt their behavior. RNNs learn by backpropagating errors through time.',
          technical: 'BPTT allows RNNs to learn from sequences by propagating gradients backward through the entire sequence.',
          example: 'Just as the colony learns from past experiences, RNNs learn from the entire sequence of inputs.'
        }
      ],
      practical: 'You\'ll explore how RNNs process sequential data, maintaining memory and learning from the entire sequence.',
      ubuntuConnection: 'Termite colonies demonstrate collective intelligence - each individual contributes to the whole. RNNs show how individual neurons contribute to the network\'s understanding of sequences.'
    }
  },
  {
    id: 9,
    title: 'The Honey Badger\'s Strategy: Optimization Algorithms',
    description: 'Learn about optimization through the honey badger\'s relentless pursuit',
    objective: 'Master different optimization algorithms and their applications',
    biome: biomes[1],
    difficulty: 4,
    duration: 550,
    completed: false,
    bioLumensReward: 35,
    content: {
      introduction: 'The honey badger is known for its relentless pursuit of goals, adapting its strategy based on what works. Optimization algorithms work similarly, continuously adjusting to find the best solution.',
      concepts: [
        {
          title: 'Gradient Descent: The Badger\'s Path',
          explanation: 'The honey badger follows the scent trail, always moving toward stronger signals. Gradient descent follows the gradient, always moving toward better solutions.',
          technical: 'Gradient descent finds the direction of steepest descent in the loss landscape and updates parameters accordingly.',
          example: 'Just as the badger follows the strongest scent, gradient descent follows the steepest path toward the minimum.'
        },
        {
          title: 'Momentum: The Badger\'s Persistence',
          explanation: 'The honey badger maintains momentum even when obstacles appear. Momentum helps optimization algorithms maintain direction through difficult terrain.',
          technical: 'Momentum adds a fraction of the previous update to the current update, helping the algorithm overcome local minima and plateaus.',
          example: 'Just as the badger doesn\'t stop for every obstacle, momentum helps the algorithm continue through difficult regions.'
        },
        {
          title: 'Adaptive Learning: The Badger\'s Intelligence',
          explanation: 'The honey badger adapts its strategy based on the terrain and prey. Adaptive optimization algorithms adjust their learning rates based on the problem.',
          technical: 'Algorithms like Adam and RMSprop adapt their learning rates for each parameter, improving convergence on complex problems.',
          example: 'Just as the badger adapts to different situations, adaptive algorithms adapt to different types of problems.'
        }
      ],
      practical: 'You\'ll explore different optimization algorithms and see how they navigate the complex landscape of neural network training.',
      ubuntuConnection: 'The honey badger teaches us that persistence and adaptation lead to success - optimization algorithms show us that intelligent search strategies lead to better solutions.'
    }
  },
  {
    id: 10,
    title: 'The Leopard\'s Precision: Regularization Techniques',
    description: 'Discover regularization through the leopard\'s precise hunting techniques',
    objective: 'Understand regularization methods to prevent overfitting',
    biome: biomes[1],
    difficulty: 4,
    duration: 600,
    completed: false,
    bioLumensReward: 35,
    content: {
      introduction: 'The leopard is a master of precision, using exactly the right amount of force and energy for each hunt. Regularization techniques help neural networks use exactly the right amount of complexity.',
      concepts: [
        {
          title: 'Dropout: The Leopard\'s Adaptability',
          explanation: 'The leopard adapts its hunting strategy based on the prey and environment. Dropout randomly deactivates neurons during training, forcing the network to adapt.',
          technical: 'Dropout randomly sets a fraction of neurons to zero during training, preventing the network from becoming too dependent on specific neurons.',
          example: 'Just as the leopard adapts to different situations, dropout forces the network to adapt to different combinations of neurons.'
        },
        {
          title: 'Weight Decay: The Leopard\'s Efficiency',
          explanation: 'The leopard uses only the energy it needs, avoiding waste. Weight decay penalizes large weights, encouraging the network to use only the complexity it needs.',
          technical: 'Weight decay adds a penalty term to the loss function that encourages smaller weights, preventing overfitting.',
          example: 'Just as the leopard conserves energy, weight decay conserves model complexity.'
        },
        {
          title: 'Early Stopping: The Leopard\'s Timing',
          explanation: 'The leopard knows exactly when to strike - not too early, not too late. Early stopping stops training when the model starts to overfit.',
          technical: 'Early stopping monitors validation performance and stops training when it starts to degrade, preventing overfitting.',
          example: 'Just as the leopard times its attack perfectly, early stopping times the end of training perfectly.'
        }
      ],
      practical: 'You\'ll explore different regularization techniques and see how they help neural networks generalize better.',
      ubuntuConnection: 'The leopard teaches us that precision and restraint lead to success - regularization shows us that controlled complexity leads to better generalization.'
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