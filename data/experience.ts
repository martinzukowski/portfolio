export type ExperienceItem = {
  role: string
  company: string
  companyUrl?: string | null
  logo?: string | null
  location: string
  date: string
  highlights: string[]
  tech?: string[]
}

/** Ordered from most recent to oldest */
export const allExperience: ExperienceItem[] = [
  {
    role: 'ML Engineer Intern',
    company: 'ThoughtsWin Systems',
    companyUrl: 'https://thoughtswinsystems.com/',
    logo: '/project-images/Logo-1-e1698794155830.png',
    location: 'Surrey, BC',
    date: 'June 2026 – Present',
    highlights: [
      'Designed and integrated APIs for Amplifi (RAG platform), built ingestion pipelines, and tuned vector search to improve retrieval accuracy.',
      'Developed agent-layer tools for Sharpi and shipped internal proof-of-concept demos with unit tests for model reliability.',
    ],
    tech: ['Python', 'RAG', 'REST API', 'Docker', 'Kubernetes', 'Vector Search'],
  },
  {
    role: 'Systems Support Solutions Analyst',
    company: 'Aritzia',
    companyUrl: 'https://www.aritzia.com/',
    logo: '/project-images/Aritzia.png',
    location: 'Delta, BC',
    date: 'November 2025 – June 2026',
    highlights: [
      'Diagnosed operational and systems issues and configured hardware at an automated distribution center supporting daily warehouse operations.',
    ],
    tech: ['Systems Support', 'Hardware', 'Operations'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Hyland',
    companyUrl: 'https://www.hyland.com/',
    logo: '/project-images/hyland.png',
    location: 'Remote (Westlake, OH)',
    date: 'July 2025 – November 2025',
    highlights: [
      'Built Python microservices for AI-driven automation in Docker, cut integration failure rates by 18%, and scripted API workflows across 15+ engineering tools.',
    ],
    tech: ['Python', 'Docker', 'REST API', 'Microservices'],
  },
  {
    role: 'Junior Software Developer',
    company: 'Jellyfish Inc',
    logo: '/project-images/jelly.webp',
    location: 'Remote (Tokyo, Japan)',
    date: 'January 2025 – May 2025',
    highlights: [
      'Built and optimized Django REST APIs for internal automation and customer-facing services, with pytest and GitHub Actions CI pipelines.',
    ],
    tech: ['Python', 'Django', 'pytest', 'GitHub Actions'],
  },
]
