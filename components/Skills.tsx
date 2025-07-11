"use client"

import { motion } from 'framer-motion'
import { Code, Palette, Database, Smartphone, Cloud, Zap } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind/Bootstrap CSS', level: 85 },
        { name: 'Shadcn-ui', level: 80 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 60 },
        { name: 'Supabase', level: 75 },
        { name: 'Clerk', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'third-party APIs', level: 90 },
      ]
    },
    {
      icon: Zap,
      title: 'AI & No Code Tool',
      skills: [
        { name: 'lovable', level: 75 },
        { name: 'Bolt', level: 70 },
        { name: 'V0', level: 80 },
        { name: 'Cursor', level: 70 },
        { name: 'same', level: 80 },
        { name: 'rocket', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Wire Frame', level: 85 },
        { name: 'Prototype', level: 85 },
        { name: 'Responsive Design', level: 85 },
        { name: 'UI/UX Design', level: 85 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Vercel', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Netlify', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
      ]
    },
    {
      icon: Zap,
      title: 'Other Skills',
      skills: [
        { name: 'Time Management', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Technical Writing', level: 75 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'Next.js', 'Supabase', 'JavaScript', 'Node.js', 'Python',
              'Firebase', 'Shadcn-ui', 'MongoDB', 'Docker', 'AWS', 'Git',
              'Tailwind CSS', 'Figma', 'Framer/Web-flow', 'Prisma', 'Clerk', 'Zustand',
              'API', 'resend', 'Payload', 'appwrite', 'Vercel', 'Netlify'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['AI', 'React.js', 'Next.js', 'JavaScript','Tailwind CSS'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full text-primary-600 dark:text-primary-400 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 