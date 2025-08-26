import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="space-y-4">
        {site.experience.map((e) => (
          <div key={e.org} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="font-semibold">{e.role} • {e.org}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{e.period}</p>
              </div>
              <div className="text-sm">{e.summary}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
