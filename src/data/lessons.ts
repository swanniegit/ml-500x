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
  },
  {
    id: 11,
    title: 'The Eagle\'s Vision: Attention Mechanisms',
    description: 'Learn about attention through the eagle\'s focused vision',
    objective: 'Understand attention mechanisms and their applications',
    biome: biomes[2],
    difficulty: 4,
    duration: 500,
    completed: false,
    bioLumensReward: 40,
    content: {
      introduction: 'The eagle soars high above the landscape, focusing its attention on specific targets while ignoring distractions. Attention mechanisms work similarly, allowing neural networks to focus on relevant parts of the input.',
      concepts: [
        {
          title: 'Selective Attention: The Eagle\'s Focus',
          explanation: 'The eagle can focus on a single prey animal while ignoring the rest of the landscape. Attention mechanisms allow networks to focus on specific parts of the input.',
          technical: 'Attention mechanisms compute attention weights that determine how much focus to place on each part of the input sequence.',
          example: 'Just as the eagle focuses on one target, attention mechanisms focus on the most relevant parts of the input.'
        },
        {
          title: 'Self-Attention: The Eagle\'s Context',
          explanation: 'The eagle considers the context of its environment when making decisions. Self-attention allows each position to attend to all other positions.',
          technical: 'Self-attention computes relationships between all positions in a sequence, allowing each position to understand its context.',
          example: 'Just as the eagle considers the full landscape, self-attention considers the full sequence.'
        },
        {
          title: 'Multi-Head Attention: The Eagle\'s Perspectives',
          explanation: 'The eagle can view the same scene from different angles and perspectives. Multi-head attention allows multiple attention mechanisms to work in parallel.',
          technical: 'Multi-head attention runs multiple attention mechanisms simultaneously, each learning different types of relationships.',
          example: 'Just as the eagle sees from multiple perspectives, multi-head attention captures multiple types of relationships.'
        }
      ],
      practical: 'You\'ll explore how attention mechanisms allow networks to focus on relevant information and understand context.',
      ubuntuConnection: 'The eagle teaches us that focused attention leads to better understanding - attention mechanisms show us that focused processing leads to better performance.'
    }
  },
  {
    id: 12,
    title: 'The Ant Colony: Reinforcement Learning',
    description: 'Discover reinforcement learning through ant colony behavior',
    objective: 'Understand reinforcement learning principles and algorithms',
    biome: biomes[2],
    difficulty: 4,
    duration: 550,
    completed: false,
    bioLumensReward: 40,
    content: {
      introduction: 'Ant colonies learn optimal paths through trial and error, with each ant contributing to the colony\'s collective knowledge. Reinforcement learning works similarly, learning optimal strategies through exploration and exploitation.',
      concepts: [
        {
          title: 'Exploration vs Exploitation: The Ant\'s Dilemma',
          explanation: 'Ants must balance exploring new paths with using known good paths. Reinforcement learning balances exploration of new actions with exploitation of known good actions.',
          technical: 'The exploration-exploitation trade-off is fundamental to reinforcement learning, requiring algorithms to balance trying new actions with using known good actions.',
          example: 'Just as ants explore new paths while using pheromone trails, RL agents explore new actions while using learned policies.'
        },
        {
          title: 'Q-Learning: The Ant\'s Memory',
          explanation: 'Ants remember which paths lead to food through pheromone trails. Q-learning remembers which actions lead to rewards through Q-values.',
          technical: 'Q-learning maintains a table of Q-values that represent the expected future reward for each state-action pair.',
          example: 'Just as pheromone trails guide ants to food, Q-values guide agents to rewards.'
        },
        {
          title: 'Policy Gradient: The Ant\'s Adaptation',
          explanation: 'Ants adapt their behavior based on success and failure. Policy gradient methods directly optimize the policy based on rewards.',
          technical: 'Policy gradient methods update the policy parameters in the direction that increases expected reward.',
          example: 'Just as ants adapt their behavior based on outcomes, policy gradient adapts the policy based on rewards.'
        }
      ],
      practical: 'You\'ll explore how reinforcement learning agents learn optimal strategies through interaction with their environment.',
      ubuntuConnection: 'Ant colonies demonstrate collective learning - each ant contributes to the colony\'s knowledge. RL shows how individual agents can learn collectively.'
    }
  },
  {
    id: 13,
    title: 'The Chameleon\'s Adaptation: Transfer Learning',
    description: 'Learn about transfer learning through the chameleon\'s adaptation',
    objective: 'Understand transfer learning and domain adaptation',
    biome: biomes[2],
    difficulty: 5,
    duration: 600,
    completed: false,
    bioLumensReward: 45,
    content: {
      introduction: 'The chameleon adapts its appearance to blend into different environments. Transfer learning allows neural networks to adapt knowledge learned in one domain to another.',
      concepts: [
        {
          title: 'Feature Transfer: The Chameleon\'s Skills',
          explanation: 'The chameleon\'s ability to change color works in many environments. Transfer learning transfers learned features to new domains.',
          technical: 'Transfer learning reuses features learned on a source task to improve performance on a target task.',
          example: 'Just as the chameleon\'s color-changing works in many environments, learned features work in many domains.'
        },
        {
          title: 'Fine-tuning: The Chameleon\'s Adjustment',
          explanation: 'The chameleon makes small adjustments to match specific environments. Fine-tuning makes small adjustments to pre-trained models.',
          technical: 'Fine-tuning updates a pre-trained model on a new task with a small learning rate to preserve learned features.',
          example: 'Just as the chameleon adjusts to specific environments, fine-tuning adjusts to specific tasks.'
        },
        {
          title: 'Domain Adaptation: The Chameleon\'s Environment',
          explanation: 'The chameleon adapts to different environments while maintaining its core abilities. Domain adaptation adapts models to new domains.',
          technical: 'Domain adaptation techniques help models generalize from a source domain to a target domain with different distributions.',
          example: 'Just as the chameleon adapts to new environments, domain adaptation adapts to new domains.'
        }
      ],
      practical: 'You\'ll explore how transfer learning allows models to leverage knowledge from one domain to improve performance in another.',
      ubuntuConnection: 'The chameleon teaches us that adaptation is key to survival - transfer learning shows us that adaptation is key to generalization.'
    }
  },
  {
    id: 14,
    title: 'The Giraffe\'s Perspective: Multi-Task Learning',
    description: 'Explore multi-task learning through the giraffe\'s unique perspective',
    objective: 'Understand multi-task learning and shared representations',
    biome: biomes[2],
    difficulty: 5,
    duration: 650,
    completed: false,
    bioLumensReward: 45,
    content: {
      introduction: 'The giraffe\'s height gives it a unique perspective on the savanna, allowing it to see multiple things at once. Multi-task learning allows neural networks to learn multiple tasks simultaneously.',
      concepts: [
        {
          title: 'Shared Representations: The Giraffe\'s View',
          explanation: 'The giraffe\'s height allows it to see multiple aspects of the landscape simultaneously. Multi-task learning shares representations across multiple tasks.',
          technical: 'Multi-task learning trains a single model on multiple related tasks, sharing representations to improve performance on all tasks.',
          example: 'Just as the giraffe sees multiple aspects at once, multi-task learning learns multiple tasks at once.'
        },
        {
          title: 'Task Balancing: The Giraffe\'s Focus',
          explanation: 'The giraffe must balance attention between different aspects of its environment. Multi-task learning must balance learning across different tasks.',
          technical: 'Task balancing ensures that all tasks receive appropriate attention during training, preventing some tasks from dominating.',
          example: 'Just as the giraffe balances attention, multi-task learning balances task learning.'
        },
        {
          title: 'Transfer Between Tasks: The Giraffe\'s Knowledge',
          explanation: 'The giraffe\'s knowledge of one aspect of the environment helps it understand others. Multi-task learning transfers knowledge between tasks.',
          technical: 'Knowledge learned on one task can improve performance on related tasks through shared representations.',
          example: 'Just as the giraffe\'s knowledge transfers across aspects, task knowledge transfers across tasks.'
        }
      ],
      practical: 'You\'ll explore how multi-task learning allows models to learn multiple related tasks simultaneously.',
      ubuntuConnection: 'The giraffe teaches us that a broader perspective leads to better understanding - multi-task learning shows us that shared knowledge leads to better performance.'
    }
  },
  {
    id: 15,
    title: 'The Rhino\'s Strength: Model Compression',
    description: 'Learn about model compression through the rhino\'s strength and efficiency',
    objective: 'Understand model compression and efficient neural networks',
    biome: biomes[2],
    difficulty: 5,
    duration: 700,
    completed: false,
    bioLumensReward: 50,
    content: {
      introduction: 'The rhino is powerful yet efficient, using its strength wisely. Model compression makes neural networks more efficient while maintaining performance.',
      concepts: [
        {
          title: 'Pruning: The Rhino\'s Efficiency',
          explanation: 'The rhino uses only the energy it needs, avoiding waste. Pruning removes unnecessary connections from neural networks.',
          technical: 'Pruning removes weights that contribute little to the model\'s performance, reducing model size and computational cost.',
          example: 'Just as the rhino conserves energy, pruning conserves computational resources.'
        },
        {
          title: 'Quantization: The Rhino\'s Precision',
          explanation: 'The rhino uses precise movements despite its size. Quantization reduces precision while maintaining performance.',
          technical: 'Quantization reduces the number of bits used to represent weights and activations, reducing memory and computational requirements.',
          example: 'Just as the rhino is precise despite its size, quantized models are efficient despite reduced precision.'
        },
        {
          title: 'Knowledge Distillation: The Rhino\'s Teaching',
          explanation: 'The rhino teaches its young efficient survival strategies. Knowledge distillation transfers knowledge from large models to smaller ones.',
          technical: 'Knowledge distillation trains a smaller student model to mimic the behavior of a larger teacher model.',
          example: 'Just as the rhino teaches its young, the teacher model teaches the student model.'
        }
      ],
      practical: 'You\'ll explore how model compression techniques make neural networks more efficient while maintaining performance.',
      ubuntuConnection: 'The rhino teaches us that strength and efficiency can coexist - model compression shows us that performance and efficiency can coexist.'
    }
  },
  {
    id: 16,
    title: 'The Dolphin\'s Communication: Natural Language Processing',
    description: 'Discover NLP through the dolphin\'s sophisticated communication',
    objective: 'Understand natural language processing and language models',
    biome: biomes[3],
    difficulty: 5,
    duration: 600,
    completed: false,
    bioLumensReward: 50,
    content: {
      introduction: 'Dolphins communicate using complex vocalizations and body language, understanding context and meaning. Natural Language Processing (NLP) helps computers understand human language.',
      concepts: [
        {
          title: 'Word Embeddings: The Dolphin\'s Vocabulary',
          explanation: 'Dolphins have a rich vocabulary of sounds and gestures. Word embeddings represent words as vectors in a continuous space.',
          technical: 'Word embeddings map words to dense vectors that capture semantic relationships and meaning.',
          example: 'Just as dolphin sounds have meaning, word embeddings capture word meaning.'
        },
        {
          title: 'Sequence Models: The Dolphin\'s Conversation',
          explanation: 'Dolphins understand the flow of conversation and context. Sequence models understand the order and context of words.',
          technical: 'Sequence models like RNNs and Transformers process text in order, maintaining context and understanding relationships.',
          example: 'Just as dolphins understand conversation flow, sequence models understand text flow.'
        },
        {
          title: 'Attention in Language: The Dolphin\'s Focus',
          explanation: 'Dolphins focus on relevant parts of communication. Attention mechanisms help models focus on relevant parts of text.',
          technical: 'Attention mechanisms allow models to focus on specific words or phrases when processing language.',
          example: 'Just as dolphins focus on important sounds, attention focuses on important words.'
        }
      ],
      practical: 'You\'ll explore how NLP models understand and generate human language.',
      ubuntuConnection: 'Dolphins communicate for the good of the pod - NLP helps computers communicate for the good of humans.'
    }
  },
  {
    id: 17,
    title: 'The Whale\'s Song: Speech Recognition',
    description: 'Learn about speech recognition through the whale\'s complex vocalizations',
    objective: 'Understand speech recognition and audio processing',
    biome: biomes[3],
    difficulty: 5,
    duration: 650,
    completed: false,
    bioLumensReward: 55,
    content: {
      introduction: 'Whales communicate through complex songs that travel vast distances underwater. Speech recognition systems convert human speech into text.',
      concepts: [
        {
          title: 'Audio Features: The Whale\'s Sound',
          explanation: 'Whales produce complex sounds with specific frequencies and patterns. Audio features extract meaningful information from sound waves.',
          technical: 'Audio features like MFCCs and spectrograms represent audio signals in ways that highlight important characteristics.',
          example: 'Just as whale sounds have specific characteristics, audio features capture sound characteristics.'
        },
        {
          title: 'Acoustic Models: The Whale\'s Hearing',
          explanation: 'Whales can distinguish between different sounds and patterns. Acoustic models learn to recognize speech sounds.',
          technical: 'Acoustic models learn the relationship between audio features and phonemes or words.',
          example: 'Just as whales recognize different sounds, acoustic models recognize different speech sounds.'
        },
        {
          title: 'Language Models: The Whale\'s Grammar',
          explanation: 'Whales follow patterns in their communication. Language models understand grammar and word relationships.',
          technical: 'Language models predict the probability of word sequences, helping speech recognition systems choose the most likely interpretation.',
          example: 'Just as whales follow communication patterns, language models follow language patterns.'
        }
      ],
      practical: 'You\'ll explore how speech recognition systems convert spoken words into text.',
      ubuntuConnection: 'Whales communicate across vast distances - speech recognition helps humans communicate across barriers.'
    }
  },
  {
    id: 18,
    title: 'The Octopus\'s Intelligence: Computer Vision',
    description: 'Explore computer vision through the octopus\'s visual intelligence',
    objective: 'Understand computer vision and image understanding',
    biome: biomes[3],
    difficulty: 5,
    duration: 700,
    completed: false,
    bioLumensReward: 55,
    content: {
      introduction: 'The octopus has remarkable visual intelligence, able to recognize objects, patterns, and even solve visual puzzles. Computer vision gives machines the ability to understand images.',
      concepts: [
        {
          title: 'Image Understanding: The Octopus\'s Vision',
          explanation: 'The octopus can recognize objects, textures, and patterns in its environment. Computer vision systems learn to understand visual content.',
          technical: 'Computer vision uses deep learning to extract features from images and understand their content.',
          example: 'Just as the octopus understands what it sees, computer vision understands image content.'
        },
        {
          title: 'Object Detection: The Octopus\'s Recognition',
          explanation: 'The octopus can identify and locate objects in its environment. Object detection finds and localizes objects in images.',
          technical: 'Object detection identifies objects in images and determines their locations using bounding boxes.',
          example: 'Just as the octopus recognizes objects, object detection recognizes objects in images.'
        },
        {
          title: 'Image Segmentation: The Octopus\'s Detail',
          explanation: 'The octopus can distinguish fine details and boundaries. Image segmentation divides images into meaningful regions.',
          technical: 'Image segmentation assigns each pixel to a class, creating detailed maps of image content.',
          example: 'Just as the octopus sees fine details, segmentation sees pixel-level details.'
        }
      ],
      practical: 'You\'ll explore how computer vision systems understand and analyze images.',
      ubuntuConnection: 'The octopus sees the world in detail - computer vision helps machines see the world clearly.'
    }
  },
  {
    id: 19,
    title: 'The Sea Turtle\'s Navigation: Robotics and Control',
    description: 'Learn about robotics through the sea turtle\'s navigation abilities',
    objective: 'Understand robotics, control systems, and autonomous navigation',
    biome: biomes[3],
    difficulty: 6,
    duration: 750,
    completed: false,
    bioLumensReward: 60,
    content: {
      introduction: 'Sea turtles navigate vast ocean distances using internal compasses and environmental cues. Robotics systems enable machines to navigate and interact with the physical world.',
      concepts: [
        {
          title: 'Sensors and Perception: The Turtle\'s Senses',
          explanation: 'The turtle uses multiple senses to understand its environment. Robots use sensors to perceive their surroundings.',
          technical: 'Robots use cameras, lidar, and other sensors to build representations of their environment.',
          example: 'Just as the turtle senses its environment, robots sense their environment.'
        },
        {
          title: 'Path Planning: The Turtle\'s Route',
          explanation: 'The turtle plans efficient routes across the ocean. Path planning algorithms find optimal routes for robots.',
          technical: 'Path planning algorithms find collision-free paths from start to goal positions.',
          example: 'Just as the turtle plans its route, robots plan their paths.'
        },
        {
          title: 'Control Systems: The Turtle\'s Movement',
          explanation: 'The turtle controls its movement precisely despite ocean currents. Control systems enable robots to execute planned actions.',
          technical: 'Control systems translate high-level commands into low-level motor commands.',
          example: 'Just as the turtle controls its movement, robots control their movements.'
        }
      ],
      practical: 'You\'ll explore how robots perceive, plan, and act in the physical world.',
      ubuntuConnection: 'The turtle navigates for the good of its species - robots navigate for the good of humanity.'
    }
  },
  {
    id: 20,
    title: 'The Coral Reef: Generative AI',
    description: 'Discover generative AI through the coral reef\'s creative ecosystem',
    objective: 'Understand generative models and creative AI',
    biome: biomes[3],
    difficulty: 6,
    duration: 800,
    completed: false,
    bioLumensReward: 60,
    content: {
      introduction: 'Coral reefs are incredibly diverse and creative ecosystems, constantly generating new forms of life. Generative AI creates new content, from images to music to text.',
      concepts: [
        {
          title: 'Generative Models: The Reef\'s Creation',
          explanation: 'The coral reef creates new forms of life through natural processes. Generative models create new content through learned patterns.',
          technical: 'Generative models learn the distribution of training data and can generate new samples from that distribution.',
          example: 'Just as the reef creates new life, generative models create new content.'
        },
        {
          title: 'GANs: The Reef\'s Competition',
          explanation: 'Different species in the reef compete and cooperate, driving evolution. GANs use competition between networks to improve generation.',
          technical: 'Generative Adversarial Networks use a generator and discriminator that compete to create realistic content.',
          example: 'Just as reef species compete and evolve, GANs compete and improve.'
        },
        {
          title: 'Creative Applications: The Reef\'s Diversity',
          explanation: 'The reef supports incredible diversity of life forms. Generative AI supports diverse creative applications.',
          technical: 'Generative AI can create art, music, text, and other creative content across many domains.',
          example: 'Just as the reef supports diverse life, generative AI supports diverse creativity.'
        }
      ],
      practical: 'You\'ll explore how generative AI creates new and creative content.',
      ubuntuConnection: 'The coral reef creates life for the good of the ocean - generative AI creates content for the good of humanity.'
    }
  },
  {
    id: 21,
    title: 'The Constellation: Large Language Models',
    description: 'Explore LLMs through the patterns of the stars',
    objective: 'Understand large language models and their capabilities',
    biome: biomes[4],
    difficulty: 6,
    duration: 700,
    completed: false,
    bioLumensReward: 65,
    content: {
      introduction: 'Constellations connect stars into meaningful patterns that tell stories across cultures. Large Language Models (LLMs) connect words into meaningful patterns that understand and generate human language.',
      concepts: [
        {
          title: 'Scale and Emergence: The Constellation\'s Pattern',
          explanation: 'Individual stars form patterns when viewed together. LLMs show emergent abilities when scaled to billions of parameters.',
          technical: 'LLMs demonstrate emergent abilities like reasoning and few-shot learning that aren\'t present in smaller models.',
          example: 'Just as stars form patterns together, parameters form intelligence together.'
        },
        {
          title: 'Context Understanding: The Constellation\'s Story',
          explanation: 'Constellations tell stories that depend on cultural context. LLMs understand context and meaning in language.',
          technical: 'LLMs use attention mechanisms to understand relationships between words and maintain context across long sequences.',
          example: 'Just as constellations tell stories, LLMs understand language stories.'
        },
        {
          title: 'Few-Shot Learning: The Constellation\'s Adaptation',
          explanation: 'Different cultures see different patterns in the same stars. LLMs can adapt to new tasks with few examples.',
          technical: 'Few-shot learning allows models to perform new tasks with minimal training examples.',
          example: 'Just as constellations adapt to cultures, LLMs adapt to tasks.'
        }
      ],
      practical: 'You\'ll explore how large language models understand and generate human language.',
      ubuntuConnection: 'Constellations connect stars across the universe - LLMs connect knowledge across humanity.'
    }
  },
  {
    id: 22,
    title: 'The Galaxy: Multimodal AI',
    description: 'Learn about multimodal AI through the galaxy\'s diverse elements',
    objective: 'Understand multimodal learning and cross-modal understanding',
    biome: biomes[4],
    difficulty: 6,
    duration: 750,
    completed: false,
    bioLumensReward: 65,
    content: {
      introduction: 'Galaxies contain diverse elements - stars, planets, gas, and dust - that interact in complex ways. Multimodal AI combines different types of data - text, images, audio - to create richer understanding.',
      concepts: [
        {
          title: 'Cross-Modal Learning: The Galaxy\'s Harmony',
          explanation: 'Different elements in the galaxy interact and influence each other. Multimodal AI learns relationships between different types of data.',
          technical: 'Multimodal models learn to align and relate information from different modalities like text and images.',
          example: 'Just as galaxy elements interact, multimodal data interacts.'
        },
        {
          title: 'Fusion Strategies: The Galaxy\'s Integration',
          explanation: 'The galaxy integrates diverse elements into a coherent system. Multimodal AI integrates diverse data types into coherent understanding.',
          technical: 'Fusion strategies combine information from different modalities at different stages of processing.',
          example: 'Just as the galaxy integrates elements, multimodal AI integrates data types.'
        },
        {
          title: 'Zero-Shot Learning: The Galaxy\'s Discovery',
          explanation: 'The galaxy reveals new phenomena that weren\'t expected. Multimodal AI can perform tasks it wasn\'t explicitly trained for.',
          technical: 'Zero-shot learning allows models to perform new tasks without specific training examples.',
          example: 'Just as the galaxy reveals surprises, multimodal AI reveals new capabilities.'
        }
      ],
      practical: 'You\'ll explore how multimodal AI combines different types of data for richer understanding.',
      ubuntuConnection: 'The galaxy unites diverse elements - multimodal AI unites diverse knowledge.'
    }
  },
  {
    id: 23,
    title: 'The Black Hole: AI Ethics and Safety',
    description: 'Explore AI ethics through the metaphor of the black hole',
    objective: 'Understand AI safety, ethics, and responsible development',
    biome: biomes[4],
    difficulty: 7,
    duration: 800,
    completed: false,
    bioLumensReward: 70,
    content: {
      introduction: 'Black holes are powerful forces that must be understood and respected. AI systems are powerful tools that must be developed and used responsibly.',
      concepts: [
        {
          title: 'Alignment: The Black Hole\'s Gravity',
          explanation: 'The black hole\'s gravity affects everything around it. AI alignment ensures AI systems pursue goals aligned with human values.',
          technical: 'AI alignment research aims to ensure AI systems act in accordance with human intentions and values.',
          example: 'Just as black hole gravity affects nearby objects, AI alignment affects human society.'
        },
        {
          title: 'Bias and Fairness: The Black Hole\'s Neutrality',
          explanation: 'The black hole treats all matter equally, but its effects can be different. AI systems must be fair and unbiased.',
          technical: 'AI fairness research aims to ensure AI systems don\'t discriminate based on protected attributes.',
          example: 'Just as the black hole is neutral, AI should be fair.'
        },
        {
          title: 'Transparency: The Black Hole\'s Mystery',
          explanation: 'Black holes are mysterious but their effects are observable. AI systems should be transparent and interpretable.',
          technical: 'Explainable AI research aims to make AI systems understandable and interpretable.',
          example: 'Just as black hole effects are observable, AI decisions should be explainable.'
        }
      ],
      practical: 'You\'ll explore the ethical considerations and safety measures needed for responsible AI development.',
      ubuntuConnection: 'The black hole teaches us to respect powerful forces - AI ethics teaches us to respect powerful technology.'
    }
  },
  {
    id: 24,
    title: 'The Supernova: AI for Good',
    description: 'Discover AI applications for social good through the supernova',
    objective: 'Understand AI applications that benefit humanity and society',
    biome: biomes[4],
    difficulty: 7,
    duration: 850,
    completed: false,
    bioLumensReward: 70,
    content: {
      introduction: 'Supernovas create elements that form new stars and planets, enriching the universe. AI for Good creates solutions that enrich human society and solve important problems.',
      concepts: [
        {
          title: 'Healthcare AI: The Supernova\'s Healing',
          explanation: 'Supernovas create elements essential for life. Healthcare AI creates tools essential for human health.',
          technical: 'AI in healthcare includes diagnosis, drug discovery, personalized medicine, and medical image analysis.',
          example: 'Just as supernovas create life-giving elements, healthcare AI creates life-saving tools.'
        },
        {
          title: 'Climate AI: The Supernova\'s Energy',
          explanation: 'Supernovas release enormous energy that shapes galaxies. Climate AI helps understand and address climate change.',
          technical: 'AI for climate includes weather prediction, carbon monitoring, renewable energy optimization, and climate modeling.',
          example: 'Just as supernovas shape galaxies, climate AI shapes our planet\'s future.'
        },
        {
          title: 'Education AI: The Supernova\'s Knowledge',
          explanation: 'Supernovas create knowledge about the universe. Education AI creates knowledge for human learning.',
          technical: 'AI in education includes personalized learning, automated tutoring, and educational content generation.',
          example: 'Just as supernovas create cosmic knowledge, education AI creates human knowledge.'
        }
      ],
      practical: 'You\'ll explore how AI can be used to solve important social and environmental problems.',
      ubuntuConnection: 'The supernova enriches the universe - AI for Good enriches humanity.'
    }
  },
  {
    id: 25,
    title: 'The Universe: The Future of AI',
    description: 'Explore the future of AI through the vastness of the universe',
    objective: 'Understand emerging AI trends and future possibilities',
    biome: biomes[4],
    difficulty: 7,
    duration: 900,
    completed: false,
    bioLumensReward: 75,
    content: {
      introduction: 'The universe is vast and full of possibilities, constantly expanding and evolving. The future of AI is similarly vast, with endless possibilities for advancement and discovery.',
      concepts: [
        {
          title: 'Artificial General Intelligence: The Universe\'s Intelligence',
          explanation: 'The universe contains intelligence in many forms. AGI aims to create intelligence as general as human intelligence.',
          technical: 'AGI research aims to create AI systems that can perform any intellectual task that humans can perform.',
          example: 'Just as the universe contains diverse intelligence, AGI would be diverse and general.'
        },
        {
          title: 'Consciousness and AI: The Universe\'s Awareness',
          explanation: 'The universe contains conscious beings. AI consciousness research explores whether machines can be conscious.',
          technical: 'AI consciousness research examines whether AI systems could develop subjective experience and awareness.',
          example: 'Just as the universe contains consciousness, AI might one day contain consciousness.'
        },
        {
          title: 'Human-AI Collaboration: The Universe\'s Harmony',
          explanation: 'The universe thrives through the harmony of its many elements. Human-AI collaboration creates harmony between human and artificial intelligence.',
          technical: 'Human-AI collaboration research explores how humans and AI can work together to solve complex problems.',
          example: 'Just as the universe thrives through harmony, humanity thrives through human-AI collaboration.'
        }
      ],
      practical: 'You\'ll explore the exciting possibilities and challenges of AI\'s future.',
      ubuntuConnection: 'The universe teaches us that we are all connected - the future of AI teaches us that human and artificial intelligence can be connected for the good of all.'
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