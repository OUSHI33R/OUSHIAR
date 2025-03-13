'use client'

import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/Badge'

export function SelectedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const projects = [
    {
      title: 'TIDUKLA',
      description:
        'A modern e-commerce platform with advanced search capabilities and personalized recommendations.',
      category: 'Development',
      year: '2024',
      image: 'https://i.ibb.co/WWyg0Y7w/image.png', // Replace with actual image path
      bgColor: 'bg-[#ffbd59]',
      link: 'https://TIDDUKLA.ma',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Prisma'],
    },
    {
      title: 'Auto Ecole Elaatik II',
      description:
        'A responsive portfolio website showcasing creative work and professional experience.',
      category: 'Development & Design',
      year: '2024',
      image: 'https://i.ibb.co/SXrcZNLH/image.png', // Replace with actual image path
      bgColor: 'bg-[#0369A1]',
      link: 'https://elaatik.ma',
      technologies: ['React', 'Framer Motion', 'Three.js'],
    },
    {
      title: 'DAKAEI.MA (Comming Soon...)',
      description:
        'A tool for developers to create beautiful code screenshots for documentation and social media.',
      category: 'Development & Design',
      year: '2024',
      image: 'https://i.ibb.co/6GFhQjv/image.png', // Replace with actual image path
      bgColor: 'bg-pink-100 dark:bg-pink-900/20',
      link: 'https://Dakaei.ma',
      technologies: ['TypeScript', 'React', 'Canvas API'],
    },
    {
      title: 'DARIJA GPT BY DAKAEI',
      description:
        'A productivity application for managing tasks, projects, and team collaboration.',
      category: 'Development',
      year: '2023',
      image: 'https://i.ibb.co/M5DLYd6v/image.png', // Replace with actual image path
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      link: 'https://Darijagpt.ma',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    },
  ]

  return (
    <section className=" px-6 py-16 text-gray-900  dark:text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 text-left text-sm font-semibold uppercase text-green-600 dark:text-green-400">
          My Work
        </h2>
        <h1 className="mb-4 text-left text-4xl font-bold">Selected Projects</h1>
        <p className="mb-12 text-left text-gray-600 dark:text-gray-400">
          Here&apos;s a curated selection showcasing my expertise and the achieved
          results.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              translateY={
                index % 2 === 0
                  ? 'translate-y-8 md:translate-y-12'
                  : '-translate-y-8 md:-translate-y-12'
              }
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    category: string
    year: string
    image: string
    bgColor: string
    link: string
    technologies: string[]
    description: string
  }
  translateY: string
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
}

function ProjectCard({
  project,
  translateY,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ProjectCardProps) {
  const isHovered = hoveredIndex === index
  const isAnyHovered = hoveredIndex !== null
  const shouldApplyOverlay = isAnyHovered && !isHovered

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return '⚛️'
      case 'next.js':
        return '▲'
      case 'tailwind css':
        return '🌊'
      case 'prisma':
        return '◮'
      case 'typescript':
        return '𝐓𝐒'
      case 'vue.js':
        return '🟢'
      case 'firebase':
        return '🔥'
      case 'three.js':
        return '3️⃣'
      case 'framer motion':
        return '🔄'
      case 'canvas api':
        return '🎨'
      default:
        return '💻'
    }
  }

  return (
    <div className={`relative ${translateY} transition-transform duration-500`}>
      <Card
        className={`relative overflow-hidden rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 ${
          shouldApplyOverlay ? 'opacity-70' : 'opacity-100'
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {shouldApplyOverlay && (
          <div className="absolute inset-0 z-10 bg-black/40 transition-opacity duration-300" />
        )}
        <CardHeader
          className={`pb-2 ${shouldApplyOverlay ? 'relative z-20' : ''}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                {project.title}
              </CardTitle>
              <CardDescription
                className={`mt-1 text-gray-600 dark:text-gray-400 ${shouldApplyOverlay ? 'opacity-70' : 'opacity-100'}`}
              >
                {project.category}
              </CardDescription>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10"
              asChild
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} project`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent
          className={`pb-4 ${shouldApplyOverlay ? 'relative z-20' : ''}`}
        >
          <div className="relative mb-4 h-[240px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-80'
              }`}
              style={{
                backgroundImage: `url(${project.image || '/placeholder.svg?height=400&width=600'})`,
                transformOrigin: 'center',
              }}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-3 inline-flex items-center text-sm font-medium text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <p
            className={`mb-4 text-sm text-gray-700 dark:text-gray-300 ${
              shouldApplyOverlay ? 'opacity-70' : 'opacity-100'
            }`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className={`bg-white/50 text-gray-800 transition-opacity duration-300 dark:bg-gray-800/50 dark:text-gray-200 ${
                  shouldApplyOverlay ? 'opacity-60' : 'opacity-100'
                }`}
              >
                <span className="mr-1">{getTechIcon(tech)}</span> {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter
          className={`border-t border-gray-200 pt-0 dark:border-gray-800 ${shouldApplyOverlay ? 'relative z-20 opacity-70' : 'opacity-100'}`}
        >
          <div className="flex w-full items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.year}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
              asChild
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
