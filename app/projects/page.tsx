import Image from 'next/image'
import { Github, Eye } from 'lucide-react'

const projects = [
  {
    title: 'Advanced Tic Tac Toe',
    description: 'A feature-rich game interface offering user profiles, avatars, AI opponent, match history, online matchmaking, chat, and more.',
    image: '/screencapture-faizyabhussain07-github-io-Advanced-Tic-Tac-Toi-Game-2025-06-13-19_30_14.png',
    liveUrl: 'https://faizyabhussain07.github.io/Advanced-Tic_Tac_Toi-Game/',
    githubUrl: 'https://github.com/faizyabhussain07/Advanced-Tic_Tac_Toi-Game',
  },
  {
    title: 'College Website',
    description: 'A multipage academic portal with sections for Home, About, Academics, Admissions, Faculty, and Contact.',
    image: '/collegepage - Copy.PNG',
    liveUrl: 'https://faizyabhussain07.github.io/College-website/',
    githubUrl: 'https://github.com/faizyabhussain07/College-website',
  },
  {
    title: 'Parking Management',
    description: 'A CRUD dashboard to manage residential parking and residents, with profile photo upload, edit/delete, and soft-deleted data.',
    image: '/screencapture-faizyabhussain07-github-io-Parking-Managment-System-2025-06-13-21_59_30.png',
    liveUrl: 'https://faizyabhussain07.github.io/Parking_Managment_System/',
    githubUrl: 'https://github.com/faizyabhussain07/Parking_Managment_System',
  },
  {
    title: 'Quran Diniyat Quiz',
    description: 'An interactive quiz platform with user details, timed 30-question quiz, score breakdown, and review mode.',
    image: '/screencapture-faizyabhussain07-github-io-Quran-Diniyat-Quiz-Part-2-2025-06-13-22_01_41.png',
    liveUrl: 'https://faizyabhussain07.github.io/Quran-Diniyat_Quiz--Part_2/',
    githubUrl: 'https://github.com/faizyabhussain07/Quran-Diniyat_Quiz--Part_2',
  },
  {
    title: 'Apple Website Clone',
    description: 'A fully responsive Apple-style storefront with a sleek navbar, banners, product sections, and legal footer.',
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

export default function ProjectsPage() {
  return (
    <section className="py-20 min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-blue-400">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={project.title} className="bg-slate-800 rounded-xl shadow p-6 flex flex-col">
              <div className="h-40 w-full bg-slate-700 rounded mb-4 flex items-center justify-center overflow-hidden">
                <Image src={project.image} alt={project.title} width={320} height={160} className="object-contain h-full w-full" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-slate-300 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex space-x-2 mt-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-slate-700 text-slate-200 rounded hover:bg-blue-700 transition-all text-sm font-medium"><Github size={16} className="mr-1" /> GitHub</a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all text-sm font-medium"><Eye size={16} className="mr-1" /> Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 