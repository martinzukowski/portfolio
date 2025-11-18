'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Projects.module.css'

// All Projects
const allProjects = [
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
    title: 'AI Tic Tac Toe',
    description:
      'An intelligent Tic Tac Toe game with AI opponents that always win or draw. Implemented minimax algorithm, Monte Carlo tree search, and game tree search for optimal play on 3x3, 4x4, and 5x5 grids. The AI evaluates all possible moves to ensure unbeatable performance at any difficulty level.',
    tech: ['JavaScript', 'HTML/CSS', 'Minimax Algorithm', 'Monte Carlo', 'Game AI'],
    link: null,
    github: 'https://github.com/martinzukowski/AITicTacToe',
    date: null,
    image: '/project-images/tictactoe.jpg',
  },
  {
    title: 'MDP Reinforcement Learning with Q-Learning',
    description:
      'Implemented Q-learning algorithm for Markov Decision Process (MDP) problems. Developed an agent that learns optimal policies through trial and error using value iteration and policy iteration. The agent explores the state-action space to maximize cumulative rewards while balancing exploration and exploitation strategies.',
    tech: ['Python', 'Q-Learning', 'Reinforcement Learning', 'MDP', 'NumPy'],
    link: null,
    github: 'https://github.com/martinzukowski/mdp-rl',
    date: null,
    image: '/project-images/mdprl.jpg',
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

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link: string | null
  github: string | null
  date?: string | null
  image?: string | null
}

function ProjectCard({ title, description, tech, link, github, date, image }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className={styles.projectImg}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <svg
              width="100%"
              height="200"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="400" height="200" fill="#f3f4f6" />
              <rect x="50" y="50" width="300" height="100" fill="#d1d5db" rx="8" />
              <text
                x="200"
                y="115"
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="16"
                fontFamily="system-ui, sans-serif"
              >
                {title}
              </text>
            </svg>
          </div>
        )}
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{title}</h3>
          {date && <span className={styles.projectDate}>{date}</span>}
        </div>
        <p className={styles.projectDescription}>{description}</p>
        {tech.length > 0 && (
          <div className={styles.projectTech}>
            {tech.map((techItem, techIndex) => (
              <span key={techIndex} className={styles.techTag}>
                {techItem}
              </span>
            ))}
          </div>
        )}
        <div className={styles.projectLinks}>
          {link && (
            <a
              href={link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo →
            </a>
          )}
          {github && (
            <a
              href={github}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(4)
  const visibleProjects = allProjects.slice(0, displayCount)
  const hasMore = displayCount < allProjects.length

  const handleShowMore = () => {
    setDisplayCount(allProjects.length)
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        
        <div className={styles.projectsGrid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>

        {hasMore && (
          <div className={styles.showMoreContainer}>
            <button onClick={handleShowMore} className={styles.showMoreBtn}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
