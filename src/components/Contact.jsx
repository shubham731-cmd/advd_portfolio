import React from 'react'
import Section from './Section.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s talk">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Contact Info + Map */}
        <div className="card space-y-4">
          <h3 className="font-semibold mb-3">Get in touch</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Have a role, idea, or project in mind? I’m happy to help.
          </p>
          <a className="btn-primary mt-4 inline-block" href={`mailto:${site.email}`}>
            Email me
          </a>

          {/* Google Map Embed */}
          <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299311!3d12.953945614011563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1758385386539!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Bengaluru"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="card"
          onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:shubhamkr6485@gmail.com?subject=New Message&body=Message from your portfolio site`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input id="name" className="chip focus:outline-none" placeholder="Name" />
            <input id="email" className="chip focus:outline-none" placeholder="Email" />
          </div>
          <textarea
            id="message"
            className="chip w-full mt-4 h-32 focus:outline-none"
            placeholder="Message"
          ></textarea>

        <button className="btn-primary mt-4" type="submit">
          Send
        </button>
      </form>

      </div>
    </Section>
  )
}
