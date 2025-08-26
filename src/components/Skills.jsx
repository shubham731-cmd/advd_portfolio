import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use">
      <div className="card">
        <ul className="flex flex-wrap gap-2">
          {site.skills.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
      </div>
    </Section>
  )
}
