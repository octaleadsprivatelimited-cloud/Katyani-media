import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-primary-300 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Service Not Found</h2>
        <p className="text-lg text-white mb-8">
          The service page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-primary-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors flex items-center justify-center space-x-2"
          >
            <FiArrowLeft />
            <span>Back to Services</span>
          </Link>
          <Link
            href="/"
            className="border-2 border-primary-500 text-primary-300 px-6 py-3 rounded-full font-semibold hover:bg-primary-500 hover:text-black transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

