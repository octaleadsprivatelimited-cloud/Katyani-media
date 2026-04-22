import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Katyani Media - Leading offline marketing agency in Hyderabad, Telangana. Specializing in bus advertising, metro ads, corporate events, pamphlet distribution, and political campaigns. Trusted by 500+ clients since 2017. Get expert marketing solutions in Madhapur, Hyderabad.',
  keywords: 'offline marketing agency Hyderabad, advertising agency Telangana, bus advertising Hyderabad, metro advertising, corporate events Hyderabad, pamphlet distribution, political campaigns Telangana, marketing services Madhapur',
  openGraph: {
    title: 'Katyani Media - Best Offline Marketing Agency in Hyderabad | Telangana',
    description: 'Leading offline marketing agency in Hyderabad offering comprehensive advertising and marketing solutions. Trusted by 500+ clients since 2017.',
    url: 'https://katyanimedia.com',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Clients />
      <About />
      <Portfolio />
      <CTA />
    </>
  )
}

