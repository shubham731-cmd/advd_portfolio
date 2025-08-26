import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m a {site.role} based in {site.location}. I love designing and building
            useful software, from fast backends to delightful frontends.
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            I focus on performance, accessibility, and clean architecture. Recently I’ve been
            exploring real‑time systems, computer vision, and data platforms. Feel free to reach out for any collaborations or just a friendly chat!
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-3">Quick facts</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 {site.location}</li>
            <li>📞 <a className="underline" >7676020345</a></li>
            <li>✉️ <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>💼 <a className="underline" href={site.socials.linkedin} target="_blank">LinkedIn</a></li>
            <li>💻 <a className="underline" href={site.socials.github} target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
