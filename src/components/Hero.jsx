import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="chip mb-4">Available for internships and full‑time roles</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Hey, I’m {site.name}.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {site.tagline}
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {site.hero.highlights.map((h, idx) => (
                <li key={idx} className="chip">{h}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="#projects">View Projects</a>
              <a className="btn-ghost" href={`mailto:${site.email}`}>Contact Me</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-80 md:h-96"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 blur-3xl opacity-20 animate-float"></div>
            <div className="absolute inset-0 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur flex items-center justify-center">
              <span className="text-7xl">👋</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
