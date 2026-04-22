'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Something went wrong!</h1>
            <p className="text-white mb-6">{error.message || 'An unexpected error occurred'}</p>
            <button
              onClick={reset}
              className="bg-primary-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-primary-400 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

