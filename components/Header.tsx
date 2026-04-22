'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const activeRef = dropdownRefs.current[activeDropdown]
        if (activeRef && !activeRef.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
    }

    if (activeDropdown) {
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside)
      }, 50)

      return () => {
        clearTimeout(timeoutId)
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [activeDropdown])

  const navItems = [
    {
      label: 'Home',
      href: '/',
      hasDropdown: false,
    },
    {
      label: 'About',
      href: '/about',
      hasDropdown: false,
    },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', href: '/services' },
        { label: 'Bus Advertising', href: '/services/bus-advertising' },
        { label: 'Cycle Advertising', href: '/services/cycle-advertising' },
        { label: 'Radio Ads', href: '/services/radio-ads' },
        { label: 'Television Ads', href: '/services/television-ads' },
        { label: 'Metro Advertising', href: '/services/metro-advertising' },
        { label: 'Corporate Events', href: '/services/corporate-events' },
        { label: 'Gate Board', href: '/services/gate-board' },
        { label: 'Pamphlet Distribution', href: '/services/pamphlet-distribution' },
        { label: 'Look Walker', href: '/services/look-walker' },
        { label: 'RWA Activities', href: '/services/rwa-activities' },
        { label: 'Political Campaign', href: '/services/political-campaign' },
      ],
    },
    {
      label: 'Portfolio',
      href: '/portfolio',
      hasDropdown: false,
    },
    {
      label: 'Team',
      href: '/team',
      hasDropdown: false,
    },
    {
      label: 'Blog',
      href: '/blog',
      hasDropdown: false,
    },
    {
      label: 'Contact',
      href: '/contact',
      hasDropdown: false,
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-black transition-all duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Katyani Media"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Deloitte style */}
          <div className="hidden lg:flex items-center" style={{ gap: '8px' }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={(el) => {
                  if (item.hasDropdown) {
                    dropdownRefs.current[item.label] = el
                  }
                }}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center"
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#ffffff',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0065ff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <FiChevronDown
                        className="ml-1"
                        style={{
                          transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                        size={14}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-0"
                        style={{
                          width: '240px',
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '4px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          padding: '8px 0',
                          zIndex: 50,
                        }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block"
                            style={{
                              padding: '10px 16px',
                              fontSize: '14px',
                              fontWeight: 400,
                              color: '#1a1a1a',
                              transition: 'background-color 0.15s ease, color 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f3f4f6'
                              e.currentTarget.style.color = '#0065ff'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = '#1a1a1a'
                            }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block"
                    style={{
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#ffffff',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#0065ff'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff'
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions - Deloitte style */}
          <div className="hidden lg:flex items-center" style={{ gap: '16px' }}>
            <button
              type="button"
              className="flex items-center"
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                fontWeight: 400,
                color: '#ffffff',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0065ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff'
              }}
            >
              <span>GLOBAL - EN</span>
            </button>
            <Link
              href="/contact"
              className="inline-block"
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#ffffff',
                backgroundColor: '#0065ff',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0052cc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0065ff'
              }}
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            style={{ color: '#ffffff' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="lg:hidden border-t"
            style={{
              borderColor: '#333333',
              paddingTop: '8px',
              paddingBottom: '8px',
            }}
          >
            <div className="flex flex-col" style={{ gap: '2px' }}>
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between"
                        style={{
                          padding: '10px 16px',
                          fontSize: '14px',
                          fontWeight: 400,
                          color: '#ffffff',
                          transition: 'background-color 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#333333'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent'
                        }}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          style={{
                            transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                          }}
                          size={16}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div style={{ paddingLeft: '16px', marginTop: '2px' }}>
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block"
                              style={{
                                padding: '8px 16px',
                                fontSize: '14px',
                                fontWeight: 400,
                                color: '#cccccc',
                                transition: 'background-color 0.15s ease, color 0.15s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#333333'
                                e.currentTarget.style.color = '#0065ff'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                e.currentTarget.style.color = '#cccccc'
                              }}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block"
                      style={{
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#ffffff',
                        transition: 'background-color 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#333333'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div
                style={{
                  paddingTop: '8px',
                  marginTop: '8px',
                  borderTop: '1px solid #333333',
                }}
              >
                <Link
                  href="/contact"
                  className="block w-full text-center"
                  style={{
                    padding: '10px 24px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#ffffff',
                    backgroundColor: '#0065ff',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0052cc'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0065ff'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
