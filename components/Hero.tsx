"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone, Download } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)

  const texts = [
    'Full Stack Developer',
    'Vibe Coder',
    'Web Designer',
    'Problem Solver'
  ]

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [displayText])

  const tick = () => {
    let fullText = texts[currentText]
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1)

    setDisplayText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(2000)
      setIsDeleting(true)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setCurrentText(prev => (prev + 1) % texts.length)
      setDelta(500)
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Faizyabhussain07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/faizyabhussain', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:syedfaizyabhussain07@gmail.com', label: 'Email' },
    { icon: Phone, href: 'https://wa.me/923352811970', label: 'WhatsApp' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#eaf6ff] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Hi, I'm <span className="text-blue-600">Faizyab Hussain</span>
          </motion.h1>
          <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-4">
            <span className="text-blue-600">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            I create beautiful, responsive websites that help businesses achieve their goals. With a passion for clean code and intuitive design, I bring ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition-all duration-300"
            >
              Hire Me
            </motion.a>
            <motion.a
              href="/resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-amber-500 text-white font-semibold rounded shadow hover:bg-amber-600 transition-all duration-300"
            >
              Resume View
            </motion.a>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center">
            <img src="/ChatGPT Image Apr 5, 2025, 07_56_20 PM (1).png" alt="Faizyab Hussain" className=" w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 