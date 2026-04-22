'use client'

import { useState, FormEvent } from 'react'
import { FiSend, FiMail, FiPhone } from 'react-icons/fi'

export default function SideContactForm() {
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
    <div className="bg-black border border-primary-800 p-6 rounded-lg shadow-lg sticky top-24">
      <h3 className="text-xl font-bold text-primary-300 mb-4">Get a Quote</h3>
      <p className="text-sm text-white mb-6">
        Fill out the form below and we'll get back to you soon.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="side-name" className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="side-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-primary-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm text-white placeholder-primary-600"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="side-email" className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="side-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-primary-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm text-white placeholder-primary-600"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="side-phone" className="block text-sm font-medium text-white mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="side-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-primary-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm text-white placeholder-primary-600"
            placeholder="+1 (234) 567-890"
          />
        </div>
        <div>
          <label htmlFor="side-message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea
            id="side-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-black border border-primary-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none text-sm text-white placeholder-primary-600"
            placeholder="Tell us about your requirements..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <FiSend size={16} />
        </button>
        {submitStatus === 'success' && (
          <div className="bg-primary-900/50 border border-primary-700 text-white px-3 py-2 rounded-lg text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-3 py-2 rounded-lg text-sm">
            Sorry, there was an error. Please try again.
          </div>
        )}
      </form>

      <div className="mt-6 pt-6 border-t border-primary-800">
        <div className="space-y-3">
          <a href="tel:+919390809997" className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors text-sm">
            <FiPhone size={16} />
            <span>+91-9390809997</span>
          </a>
          <a href="mailto:info@katyanimedia.com" className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors text-sm">
            <FiMail size={16} />
            <span>info@katyanimedia.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

