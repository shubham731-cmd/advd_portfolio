import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { site } from '../data/site.js'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg">{site.name}</a>
        <nav className="hidden md:flex items-center gap-6">
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#education">Education</a>
          <a className="hover:underline" href="#experience">Experience</a>
          <a className="hover:underline" href="#skills">Skills</a>
          <a className="hover:underline" href="#achievements">Achievements</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.resumeUrl} target="_blank" className="btn-primary hidden sm:inline-flex">View Resume</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
