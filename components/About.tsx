"use client"

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Bio */}
          <div className=" space-y-4">
            <h3 className="text-xl font-semibold mb-2">Bio</h3>
            <p className="text-slate-700 dark:text-slate-300 text-base">
              I'm a passionate frontend developer with 1 year of experience creating modern, responsive websites and applications. I specialize in HTML, CSS, JavaScript, and Bootstrap, with a strong focus on creating intuitive user experiences.<br /><br />
              My approach combines technical expertise with creative design thinking. I'm constantly learning new technologies and techniques to stay at the forefront of web development.
            </p>  
          </div>
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <ul className="text-slate-700 dark:text-slate-300 text-base space-y-2">
              <li><span className="font-semibold">Modern Web & App Development</span> – Saylani Mass IT Training (2024–Present)</li>
              <li><span className="font-semibold">Intro to Programming</span> – Saylani Mass IT Training (2024)</li>
              <li><span className="font-semibold">Computer Science</span> – Govt. Degree College (2024–Present)</li>
            </ul>
            
          </div>
          
          <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2 ">Experience</h3>
              <p className="text-slate-700 dark:text-slate-300 text-base">Frontend Developer & Web Designer – Self-employed (2024–Present)</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About 