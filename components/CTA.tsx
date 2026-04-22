'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 border-t border-primary-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create powerful offline marketing campaigns that drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <FiArrowRight />
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

