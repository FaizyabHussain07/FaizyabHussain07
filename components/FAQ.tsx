"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: "The timeline depends on the complexity of your project. A basic website typically takes 1-2 weeks, while more complex projects can take 3-6 weeks. I'll provide you with a detailed timeline during our initial consultation."
  },
  {
    question: 'Do you provide website maintenance services?',
    answer: "Yes! I offer ongoing maintenance packages that include regular updates, security patches, performance monitoring, and content updates. This ensures your website stays secure, fast, and up-to-date."
  },
  {
    question: 'Can you help with SEO optimization?',
    answer: "Absolutely! I implement SEO best practices during development and offer ongoing SEO services to improve your search engine rankings. This includes keyword optimization, content strategy, and performance improvements."
  },
  {
    question: 'What technologies do you use?',
    answer: "I use modern, industry-standard technologies including React, Next.js, Node.js, and various databases. I choose the best technology stack based on your specific project requirements and goals."
  },
  {
    question: 'Do you provide hosting and domain setup?',
    answer: "Yes, I can help you set up hosting and domain registration. I recommend reliable hosting providers and handle the technical setup to ensure your website is fast and secure."
  },
  {
    question: 'Can you redesign an existing website?',
    answer: "Of course! I can redesign and modernize your existing website while preserving your content and improving the user experience. I'll analyze your current site and provide recommendations for improvements."
  },
  {
    question: 'Do you provide training for content management?',
    answer: "Yes! I provide comprehensive training on how to manage your website content, including how to update text, images, and other content. I also create detailed documentation for your reference."
  },
  {
    question: 'What if I need changes after the website is launched?',
    answer: "I offer post-launch support and can make changes and improvements as needed. I'm committed to ensuring your website continues to meet your business needs and goals."
  },
  {
    question: 'Do you work with international clients?',
    answer: "Yes! I work with clients from around the world. I'm experienced in handling different time zones and can accommodate various communication preferences to ensure smooth collaboration."
  },
  {
    question: "What's included in your pricing?",
    answer: "My pricing includes design, development, testing, deployment, and basic training. I'm transparent about costs and will provide a detailed breakdown of what's included in your specific project."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Got questions? I've got answers. Here are some common questions about my services and process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm here to help! Feel free to reach out with any questions about your project, my services, or the development process.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 