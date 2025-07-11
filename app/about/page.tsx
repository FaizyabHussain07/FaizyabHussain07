import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="py-20 min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="flex-shrink-0">
            <Image src="/ChatGPT Image Apr 5, 2025, 07_56_20 PM (1).png" alt="Faizyab Hussain" width={180} height={180} className="rounded-full border-4 border-blue-400 shadow-lg" />
            
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 text-blue-400">Faizyab Hussain</h1>
            <h2 className="text-xl font-semibold mb-4">Frontend Developer & Web Designer</h2>
            <p className="text-lg mb-4">I’m a passionate frontend developer with 1+ year of experience creating modern, responsive websites and applications. I specialize in HTML, CSS, JavaScript, and Bootstrap, with a strong focus on intuitive user experiences and clean, maintainable code.</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-800/40 px-3 py-1 rounded-full text-sm">Karachi, Pakistan</span>
              <span className="bg-blue-800/40 px-3 py-1 rounded-full text-sm">syedfaizyabhussain07@gmail.com</span>
              <span className="bg-blue-800/40 px-3 py-1 rounded-full text-sm">+92 3352811970</span>
              <span className="bg-blue-800/40 px-3 py-1 rounded-full text-sm">github.com/Faizyabhussain07</span>
              <span className="bg-blue-800/40 px-3 py-1 rounded-full text-sm">linkedin.com/in/faizyabhussain</span>
              
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Education & Training</h3>
          <ul className="space-y-3 border-l-4 border-blue-400 pl-6">
            <li>
              <span className="font-semibold">Modern Web & App Development</span> – Saylani Mass IT Training (2024–Present)
            </li>
            <li>
              <span className="font-semibold">Intro to Programming</span> – Saylani Mass IT Training (2024)
            </li>
            <li>
              <span className="font-semibold">Computer Science</span> – Govt. Degree College (2024–Present)
            </li>
          </ul>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Experience</h3>
          <div className="bg-slate-800 rounded-lg p-6 shadow">
            <div className="font-semibold mb-2">Frontend Developer & Web Designer</div>
            <div className="text-sm mb-2">Self-employed (2023–Present)</div>
            <p className="text-slate-300">I combine technical expertise with creative design thinking, always learning new technologies and techniques to stay at the forefront of web development. My approach is to deliver real business value through beautiful, functional, and accessible web solutions.</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Highlights</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="bg-blue-800/40 rounded-lg p-4">Built and launched 6+ real-world projects</li>
            <li className="bg-blue-800/40 rounded-lg p-4">Skilled in both design and development</li>
            <li className="bg-blue-800/40 rounded-lg p-4">Strong focus on user experience and accessibility</li>
            <li className="bg-blue-800/40 rounded-lg p-4">Continuous learner, always exploring new tech</li>
          </ul>
        </div>
      </div>
    </section>
  )
} 