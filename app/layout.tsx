import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://katyanimedia.com'),
  title: {
    default: 'Katyani Media - Best Offline Marketing Agency in Hyderabad | Telangana',
    template: '%s | Katyani Media - Offline Marketing Agency Hyderabad'
  },
  description: 'Katyani Media is a leading offline marketing agency in Hyderabad, Telangana. We specialize in bus advertising, metro ads, corporate events, pamphlet distribution, and political campaigns. Trusted by 500+ clients since 2017.',
  keywords: [
    'offline marketing agency Hyderabad',
    'advertising agency Telangana',
    'bus advertising Hyderabad',
    'metro advertising Hyderabad',
    'corporate events Hyderabad',
    'pamphlet distribution Hyderabad',
    'political campaign management Telangana',
    'outdoor advertising Hyderabad',
    'brand promotion Hyderabad',
    'marketing services Madhapur',
    'RWA activities Hyderabad',
    'gate board advertising',
    'cycle advertising',
    'radio ads Hyderabad',
    'television ads Telangana',
    'look walker advertising',
    'street marketing Hyderabad',
    'local marketing agency',
    'offline advertising services',
    'marketing agency near me'
  ],
  authors: [{ name: 'Katyani Media' }],
  creator: 'Katyani Media',
  publisher: 'Katyani Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://katyanimedia.com',
    siteName: 'Katyani Media',
    title: 'Katyani Media - Best Offline Marketing Agency in Hyderabad | Telangana',
    description: 'Leading offline marketing agency in Hyderabad offering bus advertising, metro ads, corporate events, and comprehensive marketing solutions across Telangana.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Katyani Media - Offline Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katyani Media - Best Offline Marketing Agency in Hyderabad',
    description: 'Leading offline marketing agency in Hyderabad offering comprehensive advertising and marketing solutions across Telangana.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://katyanimedia.com',
  },
  category: 'Marketing & Advertising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://katyanimedia.com" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.4486;78.3908" />
        <meta name="ICBM" content="17.4486, 78.3908" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Katyani Media",
              "image": "https://katyanimedia.com/logo.png",
              "@id": "https://katyanimedia.com",
              "url": "https://katyanimedia.com",
              "telephone": "+91-9390809997",
              "email": "info@katyanimedia.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500032",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4486,
                "longitude": 78.3908
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/katyani-media/"
              ],
              "priceRange": "$$",
              "description": "Katyani Media is a leading offline marketing agency in Hyderabad, Telangana, specializing in bus advertising, metro ads, corporate events, pamphlet distribution, and political campaigns.",
              "foundingDate": "2017",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "11-50"
              },
              "areaServed": {
                "@type": "State",
                "name": "Telangana"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 17.4486,
                  "longitude": 78.3908
                },
                "geoRadius": {
                  "@type": "Distance",
                  "name": "Telangana"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Offline Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bus Advertising",
                      "description": "Effective bus advertising solutions in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Metro Advertising",
                      "description": "Strategic metro advertising in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Corporate Events",
                      "description": "Complete corporate event management in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pamphlet Distribution",
                      "description": "Professional pamphlet distribution services in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Political Campaign",
                      "description": "Comprehensive political campaign management in Telangana"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }} suppressHydrationWarning>
        <div id="root-layout" className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-1 w-full relative pt-16 lg:pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

