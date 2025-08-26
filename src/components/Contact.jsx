import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Have a role, idea, or project in mind? I’m happy to help.
          </p>
          <a className="btn-primary mt-4" href={`mailto:${site.email}`}>Email me</a>
        </div>
        <form className="card" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="chip focus:outline-none" placeholder="Name" />
            <input className="chip focus:outline-none" placeholder="Email" />
          </div>
          <textarea className="chip w-full mt-4 h-32 focus:outline-none" placeholder="Message"></textarea>
          <button className="btn-primary mt-4" type="submit">Send (demo)</button>
        </form>
      </div>
    </Section>
  )
}
