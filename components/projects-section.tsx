'use client'

import { ArrowRight } from 'lucide-react'
import {
  siGithub,
  siNextdotjs,
  siTailwindcss,
  siSpringboot,
  siSpringsecurity,
  siGoogle,
  siCursor,
  siV0,
  type SimpleIcon,
  siVercel,
} from 'simple-icons'
import { Separator } from './ui/separator'
import { TechIcon } from './tech-icon'

type Project = {
  title: string
  description: string
  repo?: string
  live?: string 
  stack: SimpleIcon[]
}

const DEEP_DIVES: Project[] = [
  {
    title: 'Admin Approved SSO Login',
    description: 'Authentication management using Spring Security and Google OAuth.',
    repo: 'https://github.com/VFdo/Auth-Enabled-Web-App',
    stack: [siSpringsecurity, siGoogle],
  },
  {
    title: 'Spring Boot Starter',
    description: 'A starter platform for a Spring Boot Project.',
    repo: 'https://github.com/VFdo/JavaBEModule',
    stack: [siSpringboot],
  },
  {
    title: 'A Veterinary Clinic Management System',
    description: 'A clinic management system with integrated features.',
    repo: 'https://github.com/VFdo/CrystalWeb-BE',
    stack: [siSpringboot]
  },
]

const VIBE_CODE_LAB: Project[] = [
  {
    title: 'Fuel Budget App - Sri Lanka',
    description: 'A monthly fuel budget planner for Sri Lankans.',
    live: 'https://fuel-calc-app-xi.vercel.app',
    stack: [siNextdotjs, siTailwindcss, siCursor],
  },
  {
    title: 'My Portfolio Website',
    description: 'This website, with a dynamic backdrop of my local daytime and weather.',
    live: '#',
    stack: [siNextdotjs, siTailwindcss, siV0],
  },
]

function ProjectGroup({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <div>
      {/* // TODO: to enable when more projects are added. */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        {/* <button
          type="button"
          className="inline-flex items-center gap-1 text-sm text-foreground transition-opacity hover:opacity-60"
        >
          More
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button> */}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-border bg-card p-5"
          >
            <h4 className="mb-2 text-sm font-medium">{project.title}</h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                {project.stack.map((icon) => (
                  <TechIcon key={icon.title} icon={icon} />
                ))}
              </div>
              {project.repo && 
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d={siGithub.path} />
                  </svg>
                  Repo
                </a>
              }
              {project.live &&
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title}`}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d={siVercel.path} />
                  </svg>
                  Web
              </a>
              }
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-10 text-2xl font-medium tracking-tight">Projects</h2>
      <div className="flex flex-col gap-14">
        <ProjectGroup title="Deep Dives" projects={DEEP_DIVES} />
        <ProjectGroup title="Vibe Code Lab" projects={VIBE_CODE_LAB} />
      </div>
      <Separator />
    </section>
  )
}
