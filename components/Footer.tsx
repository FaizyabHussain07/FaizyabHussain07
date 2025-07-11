"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/faizyabhussain', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Faizyabhussain07', label: 'GitHub' },
    { icon: Phone, href: 'https://wa.me/923352811970', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:syedfaizyabhussain07@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-3">
               Faizyab Hussain
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Frontend Developer & Web Designer passionate about building responsive, user-friendly websites. Let's build something great together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} />
                <span>syedfaizyabhussain07@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} />
                <span>+92 3352811970</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Linkedin size={16} />
                <span>faizyabhussain</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Github size={16} />
                <span>Faizyabhussain07</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Faizyab Hussain. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 