'use client'

import { useEffect, useState } from 'react'
import { FiUsers, FiAward, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { icon: <FiUsers size={40} />, value: '500', suffix: '+', label: 'Happy Clients' },
  { icon: <FiAward size={40} />, value: '1000', suffix: '+', label: 'Projects Completed' },
  { icon: <FiTrendingUp size={40} />, value: '95', suffix: '%', label: 'Success Rate' },
  { icon: <FiCheckCircle size={40} />, value: '9', suffix: '+', label: 'Years Experience' },
]

export default function Stats() {
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    setCounted(true)
    
    const section = document.getElementById('stats')
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounted(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(section)

    return () => {
      observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="stats"
      className="py-16 bg-black border-b border-primary-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-primary-900/20 transition-colors border border-primary-800"
            >
              <div className="flex justify-center mb-4 text-primary-400">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

