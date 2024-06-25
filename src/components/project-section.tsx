import { cn } from '@/lib/utils'
import { ProjectCard } from './project-card'
import projects from '@/data/projects.json'

interface ProjectSectionProps {
  className?: string
}

export function ProjectSection({ className }: ProjectSectionProps) {
  return (
    <section className={cn('grid grid-cols-1 md:grid-cols-2 gap-2', className)}>
      <div className="">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <div className="">
        {projects.slice(3, 6).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}
