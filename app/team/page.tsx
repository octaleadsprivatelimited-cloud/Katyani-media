import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented team behind Katyani Media - dedicated marketing professionals in Hyderabad, Telangana. Led by Founder & CEO Santhosh Reddy Ch and HR Manager Ruchitha Reddy. Expert team committed to your marketing success.',
  keywords: 'Katyani Media team, marketing team Hyderabad, advertising professionals Telangana, marketing experts, offline marketing specialists, marketing agency team',
  openGraph: {
    title: 'Our Team - Katyani Media | Marketing Professionals Hyderabad',
    description: 'Meet the talented team behind Katyani Media - dedicated marketing professionals in Hyderabad.',
    url: 'https://katyanimedia.com/team',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://katyanimedia.com/team',
  },
}

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Santhosh Reddy Ch',
      position: 'Founder & CEO',
      description: 'Visionary leader and founder of Katyani Media, driving the company\'s mission to deliver exceptional offline marketing solutions. With extensive experience in marketing and business development, Santhosh leads the team with passion and strategic vision.',
      image: '/santhosh.jpg',
    },
    {
      id: 2,
      name: 'Ruchitha Reddy',
      position: 'HR Manager',
      description: 'Dedicated HR professional managing talent acquisition, employee relations, and organizational development. Ruchitha ensures our team has the support and resources needed to deliver exceptional results for our clients.',
      image: '/ruchitha.jpg',
    },
  ]

  return (
    <div className="w-full pb-16 bg-black">
      <section className="relative h-[600px] mb-12 overflow-hidden -mt-16">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Our Team - Katyani Media"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Meet the Talented Professionals Behind Your Success
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-300 mb-4">
            Dedicated to Your Marketing Excellence
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Our team consists of experienced professionals who are passionate about delivering exceptional results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black border border-white rounded-lg overflow-hidden hover:border-white/80 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-300 mb-1 group-hover:text-primary-400 transition-colors duration-300">{member.name}</h3>
                <p className="text-primary-400 text-sm mb-3 group-hover:text-primary-300 transition-colors duration-300">{member.position}</p>
                <p className="text-white text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
