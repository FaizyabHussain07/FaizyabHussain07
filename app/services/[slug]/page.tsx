import { notFound } from 'next/navigation'
import Link from 'next/link'

const services = [
  {
    slug: 'custom-web-development',
    title: 'Custom Web Development',
    full: 'I build tailor-made websites from scratch, ensuring every detail matches your business needs. From landing pages to complex web apps, I deliver robust, scalable, and maintainable solutions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Bootstrap'],
    projects: ['Advanced Tic Tac Toe', 'College Website', 'Parking Management'],
  },
  {
    slug: 'web-design',
    title: 'Web Design',
    full: 'Modern, responsive web design focused on user experience and aesthetics. I create visually appealing layouts that work seamlessly across all devices.',
    technologies: ['Figma', 'Adobe XD', 'CSS3', 'Tailwind CSS'],
    projects: ['Apple Website Clone', 'Portfolio & Personal Websites'],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    full: 'I develop interactive, high-performance UIs using modern frameworks like React and Next.js. My code is clean, modular, and optimized for speed.',
    technologies: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
    projects: ['Advanced Tic Tac Toe', 'Apple Website Clone'],
  },
  {
    slug: 'website-redesign-updates',
    title: 'Website Redesign & Updates',
    full: 'Give your old website a fresh look! I modernize outdated sites, improve UI/UX, and add new features to keep your business ahead.',
    technologies: ['React', 'Next.js', 'CSS3', 'Bootstrap'],
    projects: ['College Website', 'Portfolio & Personal Websites'],
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    full: 'Ongoing updates, security patches, bug fixes, and content changes to keep your site running smoothly and securely.',
    technologies: ['All web technologies'],
    projects: ['Parking Management', 'College Website'],
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    full: 'High-converting landing pages for products, events, or marketing campaigns. Designed for maximum impact and conversion.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    projects: ['Apple Website Clone', 'Noon Website Clone'],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    full: 'Online stores with secure payments, product management, and order tracking. I build scalable e-commerce solutions tailored to your needs.',
    technologies: ['React', 'Next.js', 'Stripe', 'Node.js'],
    projects: ['Noon Website Clone'],
  },
  {
    slug: 'portfolio-personal-websites',
    title: 'Portfolio & Personal Websites',
    full: 'Beautiful, professional portfolios for individuals, freelancers, and creatives. Showcase your work and skills with style.',
    technologies: ['React', 'Next.js', 'CSS3', 'Tailwind CSS'],
    projects: ['Portfolio & Personal Websites'],
  },
  {
    slug: 'saas-web-apps',
    title: 'SaaS & Web Apps',
    full: 'Scalable SaaS platforms and custom web applications for startups and businesses. From MVP to full product, I can help.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    projects: ['Parking Management'],
  },
  {
    slug: 'clone-websites',
    title: 'Clone Websites',
    full: 'Replicating popular website layouts (Apple, OLX, Noon, etc.) for learning or business needs. Pixel-perfect and fully responsive.',
    technologies: ['React', 'Next.js', 'CSS3', 'Tailwind CSS'],
    projects: ['Apple Website Clone', 'OLX Website Clone', 'Noon Website Clone', 'Sylani Website Clone'],
  },
  {
    slug: 'performance-optimization',
    title: 'Performance Optimization',
    full: 'Speed improvements, SEO enhancements, and best practices for better rankings and user experience.',
    technologies: ['Lighthouse', 'React', 'Next.js', 'SEO tools'],
    projects: ['All projects'],
  },
  {
    slug: 'bug-testing-fixes',
    title: 'Bug Testing & Fixes',
    full: 'Comprehensive testing, debugging, and troubleshooting for existing websites. I ensure your site is error-free and reliable.',
    technologies: ['Jest', 'Cypress', 'Browser DevTools'],
    projects: ['All projects'],
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    full: 'Connecting your site to third-party services (payment gateways, social logins, etc.). Seamless integration for added functionality.',
    technologies: ['REST APIs', 'GraphQL', 'JavaScript', 'Node.js'],
    projects: ['Parking Management', 'Noon Website Clone'],
  },
  {
    slug: 'consultation-training',
    title: 'Consultation & Training',
    full: 'Guidance on web strategy, technology choices, and hands-on training for teams or individuals. Let’s grow together!',
    technologies: ['All web technologies'],
    projects: [],
  },
]

const projectsData: Record<string, { url: string; link: string }> = {
  'Advanced Tic Tac Toe': {
    url: '/screencapture-faizyabhussain07-github-io-Advanced-Tic-Tac-Toi-Game-2025-06-13-19_30_14.png',
    link: 'https://faizyabhussain07.github.io/Advanced-Tic_Tac_Toi-Game/',
  },
  'College Website': {
    url: '/collegepage - Copy.PNG',
    link: 'https://faizyabhussain07.github.io/College-website/',
  },
  'Parking Management': {
    url: '/screencapture-faizyabhussain07-github-io-Parking-Managment-System-2025-06-13-21_59_30.png',
    link: 'https://faizyabhussain07.github.io/Parking_Managment_System/',
  },
  'Apple Website Clone': {
    url: '/screencapture-faizyabhussain07-github-io-apple-clone-website-2025-06-13-20_56_10.png',
    link: 'https://faizyabhussain07.github.io/Apple-web-clone/',
  },
  'Noon Website Clone': {
    url: '/screencapture-faizyabhussain07-github-io-noon-clone-website-2025-06-13-20_56_10.png',
    link: '#',
  },
  'OLX Website Clone': {
    url: '/screencapture-faizyabhussain07-github-io-olxclone-website-2025-06-13-20_56_10.png',
    link: '#',
  },
  'Sylani Website Clone': {
    url: '/screencapture-faizyabhussain07-github-io-Sylaniclone-website-2025-06-13-20_56_10.png',
    link: 'https://faizyabhussain07.github.io/Sylani-web-clone/',
  },
  'Portfolio & Personal Websites': {
    url: '/ChatGPT Image Apr 5, 2025, 07_56_20 PM (1).png',
    link: '/',
  },
  'Blocktopia Website Clone': {
    url: '/screencapture-faizyabhussain07-github-io-blocktopiaclone-website-2025-06-13-20_56_10.png',
    link: '#',
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <section className="py-20 bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">{service.title}</h1>
        <p className="mb-8 text-lg text-slate-300">{service.full}</p>
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Technologies Used</h2>
        <ul className="mb-8 flex flex-wrap gap-2">
          {service.technologies.map(tech => (
            <li key={tech} className="px-3 py-1 bg-blue-800 text-blue-200 rounded-full text-sm">{tech}</li>
          ))}
        </ul>
        {service.projects.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {service.projects.map(proj => (
                <a key={proj} href={projectsData[proj]?.link || '#'} target="_blank" rel="noopener noreferrer" className="block p-4 bg-slate-800 rounded-lg shadow hover:shadow-lg transition-all border border-slate-700">
                  <img src={projectsData[proj]?.url} alt={proj} className="h-32 w-full object-contain mb-2 rounded" />
                  <div className="font-semibold text-blue-300">{proj}</div>
                </a>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link href="/services" className="inline-block px-6 py-3 bg-slate-800 text-blue-300 rounded hover:bg-blue-800 border border-blue-700 transition">← Back to Services</Link>
          <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">Request This Service</Link>
        </div>
      </div>
    </section>
  )
} 