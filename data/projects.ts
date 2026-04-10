export type ProjectItem = {
  title: string
  description: string
  tech: string[]
  link: string | null
  github: string | null
  date?: string | null
  image?: string | null
}

/** Ordered from most recent to oldest */
export const allProjects: ProjectItem[] = [
  {
    title: 'Interactive Particle System',
    description:
      'A beautiful web-based particle simulation where 300 red particles react dynamically to mouse movement on a navy blue canvas. Features smooth 60 FPS animation, real-time FPS counter, and modern UI with glassmorphism effects. Particles are attracted to the cursor and bounce off canvas edges, creating an engaging interactive experience.',
    tech: ['HTML5 Canvas', 'JavaScript', 'CSS3'],
    link: 'https://particle-system-ten.vercel.app/',
    github: 'https://github.com/martinzukowski/particle-system',
    date: 'November 2025',
    image: '/project-images/particle.jpg',
  },
  {
    title: 'Image Filtering and Edge Detection',
    description:
      'Implemented image filtering and analysis in both spatial and frequency domains. Created Sobel, Gaussian, and derivative-of-Gaussian (DoG) kernels for filtering operations. Analyzed anti-aliasing techniques using Gaussian filters for subsampling operations. Implemented and optimized Canny edge detection with threshold parameter tuning for optimal edge representation in high and low frequency images.',
    tech: ['MATLAB', 'Image Processing', 'Fourier Transform', 'Edge Detection', 'Filtering'],
    link: null,
    github: 'https://github.com/martinzukowski/image-filtering',
    date: 'November 2025 | CMPT 361, SFU',
    image: '/project-images/Ifiltering.png',
  },
  {
    title: 'Image Stitching with FAST Feature Detection',
    description:
      'Implemented FAST (Features from Accelerated Segment Test) interest point detector and used it to generate panoramas. Enhanced FAST with Harris cornerness metric for robust feature detection. Implemented feature matching using ORB/SURF/FREAK descriptors and used RANSAC to compute homographies for stitching multiple images together. Successfully created panoramas from 2 and 4 image sets with optimal parameter tuning.',
    tech: ['MATLAB', 'Computer Vision', 'FAST Detector', 'RANSAC', 'Image Processing'],
    link: null,
    github: 'https://github.com/martinzukowski/image-stitching',
    date: 'October 2025 | CMPT 361, SFU',
    image: '/project-images/IStitch.jpg',
  },
  {
    title: 'Rasterization: Lines and Triangles',
    description:
      'Implemented rasterization algorithms for drawing lines and solid triangles with interpolated colors. Developed DDA line rasterization algorithm handling all orientations, implemented color interpolation along lines, and created triangle inside-outside test using half-plane algorithm. Implemented barycentric color interpolation for smooth color gradients across triangles, following the top-left rule for proper edge handling.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Computer Graphics', 'Rasterization'],
    link: null,
    github: 'https://github.com/martinzukowski/rasterization',
    date: 'September 2025 | CMPT 361, SFU',
    image: '/project-images/rasterization.jpg',
  },
  {
    title: 'MDP Reinforcement Learning with Q-Learning',
    description:
      'Implemented Q-learning algorithm for Markov Decision Process (MDP) problems. Developed an agent that learns optimal policies through trial and error using value iteration and policy iteration. The agent explores the state-action space to maximize cumulative rewards while balancing exploration and exploitation strategies.',
    tech: ['Python', 'Q-Learning', 'Reinforcement Learning', 'MDP', 'NumPy'],
    link: null,
    github: 'https://github.com/martinzukowski/mdp-rl',
    date: 'May 2025 | CMPT 310, SFU',
    image: '/project-images/mdprl.jpg',
  },
  {
    title: 'Machine Learning and Neural Network Models',
    description:
      'Built and trained supervised models to solve digit & binary classification, regression, and language identification. Implemented Naive Bayes with Laplace smoothing, Perceptron, and custom neural networks (FFNN and RNN) using autograd, achieving 97.5%+ and 85%+ accuracy on MNIST and language tasks respectively. Tuned hyperparameters (learning rate, layer size, activation) and applied gradient-based optimization with backpropagation.',
    tech: ['Python', 'Machine Learning', 'Neural Networks', 'Autograd', 'NumPy'],
    link: null,
    github: 'https://github.com/martinzukowski/neural-network',
    date: 'April 2025 | CMPT 310, SFU',
    image: '/project-images/ml-models.jpg',
  },
  {
    title: 'AI Stock Advisor',
    description:
      'A real-time stock recommendation platform using Next.js, Express, and MongoDB; deployed via Vercel and Render. Processed over 1,000 live price updates/day with Finnhub and OpenAI APIs for sentiment-driven suggestions. Improved user decision time by 70% via grouped portfolio insights, autocomplete ticker search, and AI summaries.',
    tech: ['Next.js', 'Express', 'MongoDB', 'OpenAI API', 'Finnhub API', 'Vercel', 'Render'],
    link: 'https://stock-ai-app.vercel.app',
    github: 'https://github.com/martinzukowski/stock-ai-app',
    date: 'March 2025',
    image: '/project-images/ai-stock-advisor.jpg',
  },
  {
    title: 'AI Tic Tac Toe',
    description:
      'An intelligent Tic Tac Toe game with AI opponents that always win or draw. Implemented minimax algorithm, Monte Carlo tree search, and game tree search for optimal play on 3x3, 4x4, and 5x5 grids. The AI evaluates all possible moves to ensure unbeatable performance at any difficulty level.',
    tech: ['JavaScript', 'HTML/CSS', 'Minimax Algorithm', 'Monte Carlo', 'Game AI'],
    link: null,
    github: 'https://github.com/martinzukowski/AITicTacToe',
    date: 'March 2025 | CMPT 310, SFU',
    image: '/project-images/tictactoe.jpg',
  },
  {
    title: 'Akwraps.ca - Full Stack Website',
    description:
      'Developed a web service and database used by over 500 customers, increasing website impressions by 250%. Implemented Thymeleaf for server-side rendering, enhancing deployment efficiency by 30% using Docker. Utilized ThreeJS to create interactive car models and wraps to enhance user experience.',
    tech: ['Thymeleaf', 'ThreeJS', 'Docker', 'Springboot', 'SQL'],
    link: 'https://akwraps.ca',
    github: 'https://github.com/martinzukowski/AkWraps',
    date: 'August 2024',
    image: '/project-images/akwraps.jpg',
  },
  {
    title: 'RISC-V Disassembler',
    description:
      'Developed a RISC-V processor to explore how processors execute instructions at the hardware level. Implemented custom SLT-type instructions using C/C++/Assembly to extend base functions, enhancing processing capabilities by 15%.',
    tech: ['C/C++', 'Assembly', 'RISC-V'],
    link: null,
    github: null,
    date: 'December 2023 | CMPT 295, SFU',
    image: '/project-images/risc-v.jpg',
  },
]
