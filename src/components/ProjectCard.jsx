import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="card h-full flex flex-col">
    {project.image ? (
      <img 
      src={project.image} 
      alt={project.title} 
      className="rounded-xl h-40 w-full object-cover mb-4" 
    />
    ) : (
    <div className="rounded-xl h-40 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 mb-4" />
  )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-3">
        {project.links?.demo && <a className="btn-primary" href={project.links.demo} target="_blank">Live Demo</a>}
        {project.links?.repo && <a className="btn-ghost" href={project.links.repo} target="_blank">Github</a>}
      </div>
    </div>
  )
}
