export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  fork: boolean
  created_at: string
  updated_at: string
}

export async function fetchGitHubRepos(
  username: string,
  maxRepos: number = 6
): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos')
    }

    const repos: GitHubRepo[] = await response.json()
    
    // Filter out forks and return only original repos
    return repos.filter((repo) => !repo.fork)
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export function extractTechStack(description: string | null, topics: string[]): string[] {
  const techKeywords = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Python',
    'Django',
    'Flask',
    'Vue',
    'Angular',
    'Svelte',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'GCP',
    'Tailwind',
    'CSS',
    'SCSS',
    'HTML',
    'GraphQL',
    'REST',
    'WebSocket',
    'TensorFlow',
    'PyTorch',
    'Machine Learning',
    'AI',
  ]

  const foundTech: string[] = []
  const searchText = `${description || ''} ${topics.join(' ')}`.toLowerCase()

  techKeywords.forEach((tech) => {
    if (searchText.includes(tech.toLowerCase())) {
      foundTech.push(tech)
    }
  })

  // Also add topics that look like tech stack items
  topics.forEach((topic) => {
    if (
      !foundTech.includes(topic) &&
      techKeywords.some((keyword) =>
        keyword.toLowerCase() === topic.toLowerCase()
      )
    ) {
      foundTech.push(topic)
    }
  })

  return foundTech.slice(0, 4) // Limit to 4 tech items
}

