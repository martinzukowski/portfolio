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
    title: 'Resume Tailor',
    description:
      'CLI tool that searches Indeed job postings, tailors your resume and cover letter with a local LLM (Ollama), and walks you through a human review step before you apply. Syncs public GitHub repos into a master resume, exports PDFs, and supports OpenAI as a fallback provider.',
    tech: ['Python', 'Ollama', 'Playwright', 'LLM', 'PDF Export', 'CLI'],
    link: null,
    github: 'https://github.com/martinzukowski/resume-tailor',
    date: 'July 2026',
    image: '/project-images/tailor-resume-example-791x1024.png',
  },
  {
    title: 'Mini RAG Demo',
    description:
      'End-to-end retrieval-augmented generation pipeline that chunks documents, embeds them in ChromaDB, retrieves relevant context, and generates grounded answers with Ollama. Includes a Streamlit chat UI, CLI tools, an MCP server for Cursor, and an optional tool-calling agent.',
    tech: ['Python', 'RAG', 'Ollama', 'ChromaDB', 'Streamlit', 'MCP', 'OCR'],
    link: 'https://rag-project-3.streamlit.app/',
    github: 'https://github.com/martinzukowski/RAG-project',
    date: 'July 2026',
    image: '/project-images/rag-pipeline.png',
  },
  {
    title: 'Multi-View Stereo & 3D Reconstruction',
    description:
      'Built sparse and dense 3D reconstruction pipelines from multi-view images. Implemented the eight-point algorithm for fundamental matrix estimation, epipolar correspondence, essential matrix recovery, triangulation, and stereo rectification. Computed disparity and depth maps, estimated camera pose via DLT, and extended the pipeline to multi-view stereo with depth-map fusion and OBJ point-cloud export.',
    tech: [
      'Python',
      'NumPy',
      'SciPy',
      'Computer Vision',
      'Stereo Vision',
      'SVD',
      '3D Reconstruction',
    ],
    link: null,
    github: 'https://github.com/martinzukowski/pointcloud-calc',
    date: 'May 2026 | CMPT 412/762, SFU',
    image: '/project-images/pointcloud-calc.png',
  },
  {
    title: 'Homography Estimation & Augmented Reality',
    description:
      'Implemented homography estimation with FAST feature detection and BRIEF descriptors. Built direct linear transform (DLT) and normalized homography solvers, RANSAC for robust matching, and perspective warping with background compositing. Developed an augmented reality application that tracks a textbook in video and overlays dynamic content frame by frame.',
    tech: [
      'Python',
      'NumPy',
      'SciPy',
      'OpenCV',
      'FAST',
      'BRIEF',
      'RANSAC',
      'Homography',
    ],
    link: null,
    github: 'https://github.com/martinzukowski/homography',
    date: 'May 2026 | CMPT 412, SFU',
    image: '/project-images/homography.png',
  },
  {
    title: 'LeNet CNN Digit Recognition',
    description:
      'Implemented LeNet-style convolutional neural networks from scratch in NumPy for MNIST digit classification. Built forward and backward passes for convolution, max-pooling, ReLU, and fully connected layers; trained the network and evaluated with confusion matrices. Extended the model to optical character recognition on real-world images and visualized intermediate feature maps from convolutional and ReLU layers.',
    tech: [
      'Python',
      'NumPy',
      'CNN',
      'LeNet',
      'MNIST',
      'OpenCV',
      'Backpropagation',
    ],
    link: null,
    github: 'https://github.com/martinzukowski/rnn-cnn',
    date: 'May 2026 | CMPT 412, SFU',
    image: '/project-images/mnist-hw1.png',
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
    title: 'Vancouver Amenities Map',
    description:
      'Interactive map of public washrooms and parking meters across Vancouver. Fetches open city data and renders amenity locations on a Leaflet map with toggleable layers for washrooms and parking meters.',
    tech: ['React', 'TypeScript', 'Leaflet', 'Vite', 'Open Data'],
    link: 'https://van-amenities.vercel.app/',
    github: 'https://github.com/martinzukowski/vanAmenities',
    date: 'July 2026',
    image: '/project-images/van-amenities.png',
  },
  {
    title: 'Pocket Pet',
    description:
      'Manifest V3 browser extension that spawns a small cat on any webpage every few minutes. Pet it with your cursor to fill a happiness bar, trigger a hearts celebration at 100%, and customize spawn frequency from the popup settings.',
    tech: ['JavaScript', 'Chrome Extension', 'Manifest V3', 'CSS'],
    link: null,
    github: 'https://github.com/martinzukowski/catExtendo',
    date: 'July 2026',
    image: '/project-images/pocket-pet.png',
  },
  {
    title: 'PitchIQ',
    description:
      'Free, local soccer clip analyzer that uploads match footage and produces a player performance map with team-aware ratings. Uses YOLOv8n for player detection, shot-boundary detection for camera cuts, and jersey-color clustering to assign teams.',
    tech: ['JavaScript', 'Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'Vite'],
    link: null,
    github: 'https://github.com/martinzukowski/pitchIQ',
    date: 'July 2026',
    image: '/project-images/pitchiq.png',
  },
  {
    title: 'ASL Fingerspelling Teacher',
    description:
      'Real-time ASL fingerspelling teacher using webcam hand tracking with MediaPipe and OpenCV. Detects 15 ASL letters from hand landmarks, builds fingerspelled words with practice prompts, and includes interactive pose-detection easter eggs.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'Computer Vision'],
    link: null,
    github: 'https://github.com/martinzukowski/ASLproject',
    date: 'July 2026',
    image: '/project-images/asl-project.png',
  },
  {
    title: 'Interview Prep Assistant',
    description:
      'AI-powered interview preparation tool that analyzes your resume against a job posting. Generates tailored behavioral and technical questions, STAR-format answers, an ATS compatibility score, and voice practice with feedback on clarity and structure.',
    tech: ['TypeScript', 'Next.js', 'Ollama', 'LLM', 'PDF Parsing'],
    link: null,
    github: 'https://github.com/martinzukowski/interviewPrep',
    date: 'July 2026',
    image: '/project-images/interview-prep.png',
  },
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
