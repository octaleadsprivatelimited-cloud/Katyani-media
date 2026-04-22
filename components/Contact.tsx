'use client'

import { useState, FormEvent } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mblqyzbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        const data = await response.json()
        console.error('Formspree error:', data)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Contact Info - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="tel:+919390809997" className="group flex flex-col items-center text-center p-6 border border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:bg-primary-900/10">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/30 transition-colors">
              <FiPhone className="text-primary-400 group-hover:text-primary-300" size={20} />
            </div>
            <p className="text-primary-400 text-sm mb-1">Phone</p>
            <p className="text-white font-medium">+91-9390809997</p>
          </a>
          <a href="mailto:info@katyanimedia.com" className="group flex flex-col items-center text-center p-6 border border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:bg-primary-900/10">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/30 transition-colors">
              <FiMail className="text-primary-400 group-hover:text-primary-300" size={20} />
            </div>
            <p className="text-primary-400 text-sm mb-1">Email</p>
            <p className="text-white font-medium text-sm">info@katyanimedia.com</p>
          </a>
          <div className="group flex flex-col items-center text-center p-6 border border-white rounded-lg hover:border-white/80 transition-all duration-300 hover:bg-primary-900/10">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mb-3 group-hover:bg-primary-500/30 transition-colors">
              <FiMapPin className="text-primary-400 group-hover:text-primary-300" size={20} />
            </div>
            <p className="text-primary-400 text-sm mb-1">Address</p>
            <p className="text-white font-medium text-xs">T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500032</p>
          </div>
        </div>

        {/* Minimal Creative Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-300 mb-2">
              Send us a message
            </h2>
            <p className="text-white/70 text-sm">
              We&apos;ll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-primary-800 focus:border-primary-500 outline-none transition-all text-white placeholder-transparent peer"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-primary-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary-400 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-primary-800 focus:border-primary-500 outline-none transition-all text-white placeholder-transparent peer"
                placeholder="your.email@example.com"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-primary-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary-400 peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="relative group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-primary-800 focus:border-primary-500 outline-none transition-all text-white placeholder-transparent peer"
                placeholder="+91-9390809997"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-primary-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary-400 peer-focus:text-sm"
              >
                Phone (Optional)
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-primary-800 focus:border-primary-500 outline-none transition-all resize-none text-white placeholder-transparent peer"
                placeholder="Tell us about your project..."
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-primary-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primary-400 peer-focus:text-sm"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-primary-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FiSend className={isSubmitting ? 'animate-pulse' : ''} />
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-primary-900/30 border border-primary-700 text-white rounded-lg text-center animate-fade-in">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-900/30 border border-red-700 text-red-200 rounded-lg text-center animate-fade-in">
                ✗ Sorry, there was an error. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

