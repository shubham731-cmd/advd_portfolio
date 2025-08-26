import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="What I've accomplished">
      <div className="space-y-4">
        {site.achievements.map((e) => (
          <div key={e.org} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-semibold">{e.role} • {e.org}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{e.period}</p>
              </div>
              <div className="text-sm">{e.summary}</div>
            </div>

            {/* 🔽 Links Section (only if links exist) */}
            {e.links && (
              <div className="mt-4 flex gap-3">
                {e.links.demo && (
                  <a
                    className="btn-primary"
                    href={e.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                )}
                {e.links.repo && (
                  <a
                    className="btn-ghost"
                    href={e.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
