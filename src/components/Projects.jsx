import React from 'react'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { site } from '../data/site.js'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
