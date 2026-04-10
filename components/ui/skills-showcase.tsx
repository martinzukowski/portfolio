'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export type SkillCategory = {
  name: string
  items: string[]
}

const defaultCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'Tailwind',
      'ThreeJS',
      'Bootstrap',
    ],
  },
  {
    name: 'Backend',
    items: [
      'Python',
      'Go',
      'C/C++',
      'Node.js',
      'Express',
      'Spring Boot',
      'REST API',
      'Assembly',
    ],
  },
  {
    name: 'Database & Tools',
    items: [
      'MongoDB',
      'SQL',
      'Git',
      'Docker',
      'AWS',
      'Vercel',
      'Render',
      'Figma',
      'LaTeX',
      'OpenAI API',
      'Finnhub API',
    ],
  },
]

type SkillsShowcaseProps = {
  categories?: SkillCategory[]
  className?: string
}

export function SkillsShowcase({
  categories = defaultCategories,
  className,
}: SkillsShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('flex w-full max-w-3xl flex-col', className)}>
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px w-12 bg-foreground/20" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Expertise
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                'relative -mx-4 flex cursor-pointer flex-col gap-3 rounded-lg px-4 py-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:flex-row sm:items-center sm:justify-between sm:gap-4',
                hoveredIndex === index ? 'bg-foreground/[0.03]' : 'bg-transparent',
              )}
            >
              {/* Category label */}
              <div className="relative flex min-w-0 shrink-0 items-center gap-4 sm:max-w-[40%]">
                <div
                  className={cn(
                    'h-5 w-0.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    hoveredIndex === index
                      ? 'scale-y-100 bg-accent opacity-100'
                      : 'scale-y-50 bg-border opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'text-base font-medium tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    hoveredIndex === index
                      ? 'translate-x-0 text-foreground'
                      : '-translate-x-5 text-muted-foreground',
                  )}
                >
                  {category.name}
                </span>
              </div>

              {/* Tech tags — slide in on hover (desktop); always visible on small screens */}
              <div className="relative min-h-[1.75rem] flex-1 sm:min-h-0 sm:overflow-visible">
                <div
                  className={cn(
                    'flex flex-wrap items-center gap-2',
                    'max-sm:relative max-sm:justify-start',
                    'sm:absolute sm:right-0 sm:top-1/2 sm:z-10 sm:-translate-y-1/2 sm:justify-end',
                    'sm:transition-[max-width,opacity] sm:duration-500 sm:ease-[cubic-bezier(0.16,1,0.3,1)]',
                    hoveredIndex === index
                      ? 'sm:max-w-[min(100%,36rem)] sm:opacity-100'
                      : 'sm:max-w-0 sm:overflow-hidden sm:opacity-0',
                  )}
                >
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className={cn(
                        'inline-flex whitespace-nowrap rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground/90 shadow-sm backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                        'max-sm:translate-x-0 max-sm:opacity-100',
                        'sm:translate-x-3 sm:opacity-0',
                        hoveredIndex === index &&
                          'sm:translate-x-0 sm:opacity-100',
                      )}
                      style={{
                        transitionDelay:
                          hoveredIndex === index ? `${itemIndex * 45}ms` : '0ms',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {index < categories.length - 1 && (
              <div
                className={cn(
                  'mx-4 h-px transition-all duration-500',
                  hoveredIndex === index || hoveredIndex === index + 1
                    ? 'bg-transparent'
                    : 'bg-border/30',
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-3 border-t border-border/30 pt-6">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60" />
        <p className="text-[11px] tracking-wide text-muted-foreground">
          <span className="max-sm:hidden">Hover a category to explore technologies</span>
          <span className="sm:hidden">Technologies listed under each area</span>
        </p>
      </div>
    </div>
  )
}
