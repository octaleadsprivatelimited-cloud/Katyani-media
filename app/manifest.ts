import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Katyani Media - Offline Marketing Agency Hyderabad',
    short_name: 'Katyani Media',
    description: 'Leading offline marketing agency in Hyderabad, Telangana. Bus advertising, metro ads, corporate events, and comprehensive marketing solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

