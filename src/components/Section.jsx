import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mb-10">
        {eyebrow && <div className="chip mb-3">{eyebrow}</div>}
        {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
