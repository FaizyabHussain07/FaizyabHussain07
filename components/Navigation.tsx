"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-400">Faizyab Hussain</Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className="text-slate-200 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 rounded-lg mt-2 border border-slate-800">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ x: 5 }}>
                <Link
                  href={item.href}
                  className="text-slate-200 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation 