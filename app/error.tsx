'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-primary-300 mb-4">Something went wrong!</h1>
        <p className="text-white mb-6">{error.message || 'An unexpected error occurred'}</p>
        <button
          onClick={reset}
          className="bg-primary-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

