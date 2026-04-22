import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t-2 border-primary-800 text-white w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content - Mega Menu Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Katyani Media"
                width={200}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm mb-6 text-white/80 leading-relaxed max-w-md">
              Katyani Media is a trusted offline marketing partner based in Hyderabad, delivering impactful street, society, and local campaigns across Telangana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/katyani-media/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="Facebook">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="Twitter">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300" aria-label="Instagram">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-primary-300 font-bold text-base mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column - Mega Menu Style */}
          <div>
            <h4 className="text-primary-300 font-bold text-base mb-6 uppercase tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/bus-advertising" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Bus Advertising</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cycle-advertising" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Cycle Advertising</span>
                </Link>
              </li>
              <li>
                <Link href="/services/radio-ads" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Radio Ads</span>
                </Link>
              </li>
              <li>
                <Link href="/services/television-ads" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Television Ads</span>
                </Link>
              </li>
              <li>
                <Link href="/services/metro-advertising" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Metro Advertising</span>
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-events" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Corporate Events</span>
                </Link>
              </li>
              <li>
                <Link href="/services/gate-board" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Gate Board</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* More Services Column */}
          <div>
            <h4 className="text-primary-300 font-bold text-base mb-6 uppercase tracking-wide">More Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/pamphlet-distribution" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Pamphlet Distribution</span>
                </Link>
              </li>
              <li>
                <Link href="/services/look-walker" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Look Walker</span>
                </Link>
              </li>
              <li>
                <Link href="/services/rwa-activities" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>RWA Activities</span>
                </Link>
              </li>
              <li>
                <Link href="/services/political-campaign" className="text-white/80 hover:text-primary-400 transition-colors flex items-center group text-sm">
                  <FiArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Political Campaign</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-primary-800/50 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-primary-400" size={20} />
              </div>
              <div>
                <h5 className="text-primary-300 font-semibold mb-1 text-sm uppercase">Address</h5>
                <p className="text-white/80 text-sm leading-relaxed">T-Hub 2.0, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500032</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-primary-400" size={20} />
              </div>
              <div>
                <h5 className="text-primary-300 font-semibold mb-1 text-sm uppercase">Phone</h5>
                <a href="tel:+919390809997" className="text-white/80 hover:text-primary-400 transition-colors text-sm">
                  +91-9390809997
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                <FiMail className="text-primary-400" size={20} />
              </div>
              <div>
                <h5 className="text-primary-300 font-semibold mb-1 text-sm uppercase">Email</h5>
                <a href="mailto:info@katyanimedia.com" className="text-white/80 hover:text-primary-400 transition-colors text-sm">
                  info@katyanimedia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t-2 border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/80">&copy; {currentYear} Katyani Media. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/60">Developed by <span className="text-primary-400">octaleads Pvt Ltd.</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

