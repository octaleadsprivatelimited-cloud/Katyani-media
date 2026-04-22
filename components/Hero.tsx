'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden -mt-16 lg:-mt-16">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
          alt="Transform Your Business with Offline Marketing Excellence"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary-300">
            Transform Your Business with
            <span className="block text-primary-400 mt-2">Offline Marketing Excellence</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
            We deliver powerful offline marketing strategies that connect your brand with customers and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-primary-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started Today</span>
              <FiArrowRight />
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary-500 text-primary-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-black transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

