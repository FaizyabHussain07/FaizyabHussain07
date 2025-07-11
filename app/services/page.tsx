import Link from 'next/link'
import { FaCode, FaPaintBrush, FaCogs, FaRedo, FaWrench, FaFileAlt, FaShoppingCart, FaUserTie, FaCloud, FaClone, FaRocket, FaBug, FaPlug, FaChalkboardTeacher } from 'react-icons/fa'

const services = [
  { slug: 'custom-web-development', title: 'Custom Web Development', short: 'Tailor-made websites built from scratch to fit your unique business needs.', icon: FaCode },
  { slug: 'web-design', title: 'Web Design', short: 'Modern, responsive design for all devices, focusing on user experience and aesthetics.', icon: FaPaintBrush },
  { slug: 'frontend-development', title: 'Frontend Development', short: 'Interactive UIs with modern frameworks (React, Next.js, etc.) for fast, dynamic websites.', icon: FaCogs },
  { slug: 'website-redesign-updates', title: 'Website Redesign & Updates', short: 'Modernizing outdated sites, improving UI/UX, and adding new features.', icon: FaRedo },
  { slug: 'website-maintenance', title: 'Website Maintenance', short: 'Ongoing updates, security patches, bug fixes, and content changes to keep your site running smoothly.', icon: FaWrench },
  { slug: 'landing-pages', title: 'Landing Pages', short: 'High-converting landing pages for products, events, or marketing campaigns.', icon: FaFileAlt },
  { slug: 'ecommerce-development', title: 'E-commerce Development', short: 'Online stores with secure payments, product management, and order tracking.', icon: FaShoppingCart },
  { slug: 'portfolio-personal-websites', title: 'Portfolio & Personal Websites', short: 'Beautiful, professional portfolios for individuals, freelancers, and creatives.', icon: FaUserTie },
  { slug: 'saas-web-apps', title: 'SaaS & Web Apps', short: 'Scalable SaaS platforms and custom web applications for startups and businesses.', icon: FaCloud },
  { slug: 'clone-websites', title: 'Clone Websites', short: 'Replicating popular website layouts (Apple, OLX, Noon, etc.) for learning or business needs.', icon: FaClone },
  { slug: 'performance-optimization', title: 'Performance Optimization', short: 'Speed improvements, SEO enhancements, and best practices for better rankings and user experience.', icon: FaRocket },
  { slug: 'bug-testing-fixes', title: 'Bug Testing & Fixes', short: 'Comprehensive testing, debugging, and troubleshooting for existing websites.', icon: FaBug },
  { slug: 'api-integration', title: 'API Integration', short: 'Connecting your site to third-party services (payment gateways, social logins, etc.).', icon: FaPlug },
  { slug: 'consultation-training', title: 'Consultation & Training', short: 'Guidance on web strategy, technology choices, and hands-on training for teams or individuals.', icon: FaChalkboardTeacher },
]

export default function ServicesPage() {
  return (
    <section className="py-20 bg-slate-900 text-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-blue-400">My Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(service => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="block p-6 bg-slate-800 rounded-lg shadow hover:shadow-lg transition-all border border-slate-700">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl text-blue-400"><service.icon /></span>
                <h2 className="text-xl font-semibold text-blue-300">{service.title}</h2>
              </div>
              <p className="text-slate-300">{service.short}</p>
              <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                Learn more →
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 