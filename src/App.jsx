import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { site } from './data/site.js'

export default function App() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
