import React from 'react'
import { site } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">© {year} {site.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:underline" href={site.socials.github} target="_blank">GitHub</a>
          <a className="hover:underline" href={site.socials.linkedin} target="_blank">LinkedIn</a>
          <a className="hover:underline" href={site.socials.twitter} target="_blank">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
