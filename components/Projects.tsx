"use client"

import { motion } from 'framer-motion'
import { Github, Eye } from 'lucide-react'

const projects = [
  {
    title: 'Advanced Tic Tac Toe',
    description: 'A feature-rich game interface offering user profiles with avatars and win-stats. AI opponent, match history, online real-time matchmaking with lobby and friends, spectators, global chat, sound effects, and comprehensive profile management.',
    image: '/screencapture-faizyabhussain07-github-io-Advanced-Tic-Tac-Toi-Game-2025-06-13-19_30_14.png',
    liveUrl: 'https://faizyabhussain07.github.io/Advanced-Tic_Tac_Toi-Game/',
    githubUrl: 'https://github.com/faizyabhussain07/Advanced-Tic_Tac_Toi-Game',
  },
  {
    title: 'College Website',
    description: 'A multipage academic portal with sections for Home, About, Academics, Admissions, Faculty, and Contact. Features: principal message, event calendar, faculty listing, admission FAQs, navigation, and highlights campus life.',
    image: '/collegepage - Copy.PNG',
    liveUrl: 'https://faizyabhussain07.github.io/College-website/',
    githubUrl: 'https://github.com/faizyabhussain07/College-website',
  },
  {
    title: 'Parking Management',
    description: 'A straightforward CRUD dashboard to manage residential parking and residents. Features: car and resident details, profile photo upload, edit/delete entries, and actions & soft-deleted data for recovery.',
    image: '/screencapture-faizyabhussain07-github-io-Parking-Managment-System-2025-06-13-21_59_30.png',
    liveUrl: 'https://faizyabhussain07.github.io/Parking_Managment_System/',
    githubUrl: 'https://github.com/faizyabhussain07/Parking_Managment_System',
  },
  {
    title: 'Quran Diniyat Quiz',
    description: 'An interactive quiz platform that collects basic user details, presents a timed 30-question quiz with score breakdown and review mode for better learning.',
    image: '/screencapture-faizyabhussain07-github-io-Quran-Diniyat-Quiz-Part-2-2025-06-13-22_01_41.png',
    liveUrl: 'https://faizyabhussain07.github.io/Quran-Diniyat_Quiz--Part_2/',
    githubUrl: 'https://github.com/faizyabhussain07/Quran-Diniyat_Quiz--Part_2',
  },
  {
    title: 'Apple Website Clone',
    description: 'A fully responsive Apple-style storefront with a sleek navbar, full-width promotional banner, product sections, and detailed legal footer mirroring Apple’s design language.',
    image: '/screencapture-faizyabhussain07-github-io-apple-clone-website-2025-06-13-20_56_10.png',
    liveUrl: 'https://faizyabhussain07.github.io/Apple-web-clone/',
    githubUrl: 'https://github.com/faizyabhussain07/Apple-web-clone',
  },
  {
    title: 'Sylani Website Clone',
    description: 'A clean, donation-centric site mirroring a charitable NGO’s features: event banners, donation forms, gallery, and contact details.',
    image: '/screencapture-faizyabhussain07-github-io-Sylaniclone-website-2025-06-13-20_56_10.png',
    liveUrl: 'https://faizyabhussain07.github.io/Sylani-web-clone/',
    githubUrl: 'https://github.com/faizyabhussain07/Sylani-web-clone',
  },
  {
    title: 'OLX Website Clone',
    description: 'A clone of OLX website with similar UI and features.',
    image: '/screencapture-faizyabhussain07-github-io-olxclone-website-2025-06-13-20_56_10.png',
    liveUrl: 'https://faizyabhussain07.github.io/OLX-Clone-website/',
    githubUrl: 'https://github.com/faizyabhussain07/OLX-Clone-website',
  },
  {
    title: 'Noon Website Clone',
    description: 'A clone of Noon website with similar UI and features.',
    image: '/screencapture-faizyabhussain07-github-io-noon-clone-website-2025-06-13-20_56_10.png',
    liveUrl: 'https://faizyabhussain07.github.io/Noon-clone-website/',
    githubUrl: 'https://github.com/faizyabhussain07/Noon-clone-website',
  },
  {
    title: 'Blocktopia Website Clone',
    description: 'A clone of Blocktopia website with similar UI and features.',
    image: '/screencapture-faizyabhussain07-github-io-blocktopiaclone-website-2025-06-13-20_56_10.png',
    liveUrl: 'https://faizyabhussain07.github.io/bock-topia-clone-website/',
    githubUrl: 'https://github.com/faizyabhussain07/bock-topia-clone-website',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-[#f7fafc] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 flex flex-col"
            >
              <div className="h-40 w-full bg-slate-100 dark:bg-slate-700 rounded mb-4 flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title} className="object-contain h-full w-full" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-200">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex space-x-2 mt-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded hover:bg-blue-100 dark:hover:bg-blue-700 transition-all text-sm font-medium"><Github size={16} className="mr-1" /> GitHub Repo</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm font-medium"><Eye size={16} className="mr-1" /> Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 