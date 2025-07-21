import React from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaLinkedin, FaGithub, FaArrowUpRightFromSquare, FaLocationDot, FaArrowLeft } from 'react-icons/fa6';
import Image from 'next/image';

const Resume: React.FC = () => {
  return (
    <div className="w-full max-w-[700px] bg-white rounded-[18px] shadow-[0_8px_32px_rgba(44,62,80,0.12)] px-8 pt-9 pb-6 mx-auto my-8 md:my-12">
      {/* Back Link */}
      <a href="/" className="flex items-center gap-2 mb-4 text-blue-600 hover:text-blue-800 font-medium">
        <FaArrowLeft /> Back to Home
      </a>
      <div className="flex items-center border-b-2 border-[#e3f0ff] pb-6 mb-7 bg-none max-[800px]:flex-col max-[800px]:items-start max-[800px]:pb-4">
        <Image src="/ChatGPT Image Apr 5, 2025, 07_56_20 PM (1).png" alt="Faizyab Hussain" width={210} height={210} className="w-[210px] h-[210px] rounded-full border-4 border-[#007efc] shadow-[0_2px_12px_rgba(0,126,252,0.08)] mr-7 ml-0 mt-0 max-[800px]:mb-3 max-[800px]:mr-0" />
        <div className="flex-1 text-left flex flex-col gap-2">
          <div className="mb-1.5">
            <h1 className="text-[2.3rem] text-[#007efc] font-extrabold mb-2 tracking-[0.5px] leading-tight max-[500px]:text-[1.3rem]">Faizyab Hussain</h1>
            <h2 className="text-[1.15rem] text-[#444b5a] font-medium mt-2 tracking-[0.2px] leading-[1.2] opacity-85 max-[500px]:text-[1rem]">Web Developer, Vibe Coder & Designer</h2>
          </div>
          <div className="flex flex-col gap-2 mt-2 max-[800px]:gap-2 max-[500px]:gap-1">
            <span className="flex items-center gap-2 text-base text-[#444]">
              <FaPhone className="text-[1.1em] min-w-[18px] text-center text-[#218c53]" />
              <a href="tel:+923352811970" className="text-[#218c53] hover:text-[#16643a] font-medium transition-colors">(+92) 335-2811-970</a>
            </span>
            <span className="flex items-center gap-2 text-base text-[#444]">
              <FaEnvelope className="text-[1.1em] min-w-[18px] text-center text-[#8e44ad]" />
              <a href="mailto:syedfaizyabhussain07@gmail.com" className="text-[#8e44ad] hover:text-[#5e3370] font-medium transition-colors">syedfaizyabhussain07@gmail.com</a>
            </span>
            <span className="flex flex-row gap-4 items-center max-[800px]:flex-col max-[800px]:items-start max-[800px]:gap-2">
              <span className="flex items-center gap-2">
                <FaGlobe className="text-[#007efc]" />
                <a href="https://faizyab-hussain07.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#007efc] hover:text-[#005bb5] font-medium transition-colors">Portfolio</a>
              </span>
              <span className="flex items-center gap-2">
                <FaLinkedin className="text-[#0A66C2]" />
                <a href="https://linkedin.com/in/faizyabhussain" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:text-[#084a86] font-medium transition-colors">LinkedIn</a>
              </span>
              <span className="flex items-center gap-2">
                <FaGithub className="text-[#333]" />
                <a href="https://github.com/Faizyabhussain07" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-black font-medium transition-colors">GitHub</a>
              </span>
            </span>
            <span className="flex items-center gap-2 text-base text-[#444]">
              <FaLocationDot className="text-[1.1em] min-w-[18px] text-center" /> Karachi, Pakistan
            </span>
          </div>
        </div>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Professional Summary</h2>
        <p className="text-base text-[#333] mt-1 ml-0 leading-[1.6]">Passionate Frontend Developer & Web Designer with 1 year of experience building modern, responsive websites and web applications. Skilled in React.js, Next.js, JavaScript, HTML, CSS, and UI/UX design. Adept at creating intuitive user experiences and delivering high-quality, scalable solutions. Strong problem-solving skills and a commitment to continuous learning.</p>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Skills</h2>
        <ul className="list-disc pl-5 text-base text-[#333] mt-1 ml-0 leading-[1.6]">
          <li><strong>Frontend:</strong> React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Shadcn-ui</li>
          <li><strong>Backend:</strong> Node.js, Python, Supabase, Clerk, Firebase, API Integration</li>
          <li><strong>DevOps/Cloud:</strong> Vercel, Netlify, Docker, AWS, Git</li>
          <li><strong>Design:</strong> Figma, Wireframe, Prototyping, UI/UX Design</li>
          <li><strong>Other:</strong> Time Management, Project Management, Technical Writing, Problem Solving, Team Collaboration</li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Experience</h2>
        <h3 className="text-[1.05rem] text-[#2c3e50] font-semibold mb-1 max-[500px]:text-[0.95rem]">Frontend Developer & Web Designer</h3>
        <p className="text-base text-[#333] mt-1 ml-0 leading-[1.6]">Self-employed | 2024–Present</p>
        <ul className="list-disc pl-5 text-base text-[#333] mt-1 ml-0 leading-[1.6]">
          <li>Developed modern, responsive websites for clients using React.js, Next.js, and modern CSS frameworks.</li>
          <li>Delivered custom web solutions, e-commerce platforms, and portfolio sites tailored to client needs.</li>
          <li>Improved user experience and performance for multiple projects through best practices and optimization.</li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Projects</h2>
        <ul className="list-disc pl-5 text-base text-[#333] mt-1 ml-0 leading-[1.6]">
          <li><strong>Advanced Tic Tac Toe:</strong> A feature-rich, real-time multiplayer Tic Tac Toe game with advanced functionalities. Includes user authentication, profile management with avatars and win statistics, AI opponent with multiple difficulty levels, online matchmaking, global chat, match history, and spectator mode. The app delivers a seamless, interactive gaming experience with sound effects and responsive design.
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://github.com/Faizyabhussain07/Advanced-Tic_Tac_Toi-Game" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://faizyabhussain07.github.io/Advanced-Tic_Tac_Toi-Game/" title="Live Demo" target="_blank" rel="noopener noreferrer"><FaArrowUpRightFromSquare /></a>
          </li>
          <li><strong>College Website:</strong> A comprehensive, interactive, and dynamic web app for college management. It enables real-time communication between teachers and students through built-in chat, allowing students to ask questions and get instant help. The portal manages admissions, assignments, marksheets, results, and more—all in one place. It features an event calendar, faculty directory, and secure access for both students and staff, making academic and administrative processes seamless and efficient.
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://github.com/Faizyabhussain07/College-website" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://faizyabhussain07.github.io/College-website/" title="Live Demo" target="_blank" rel="noopener noreferrer"><FaArrowUpRightFromSquare /></a>
          </li>
          <li><strong>Parking Management:</strong> A robust web-based dashboard for managing residential parking and resident information. Features include adding, editing, and deleting resident and vehicle details, profile photo uploads, soft-delete and recovery of records, and real-time data updates. The system streamlines parking allocation, enhances security, and simplifies administrative tasks for residential communities.
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://github.com/Faizyabhussain07/Parking_Managment_System" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://faizyabhussain07.github.io/Parking_Managment_System/" title="Live Demo" target="_blank" rel="noopener noreferrer"><FaArrowUpRightFromSquare /></a>
          </li>
          <li><strong>Quran Diniyat Quiz:</strong> An interactive and dynamic web application designed to enhance learning of Quran and Diniyat. The platform collects user details, offers a timed quiz with instant feedback, score breakdown, and a review mode for better understanding. It is user-friendly, mobile responsive, and encourages self-assessment and improvement in Islamic studies.
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://github.com/Faizyabhussain07/Quran-Diniyat_Quiz--Part_2" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className="inline-flex items-center justify-center bg-[#f2f8ff] rounded-full w-8 h-8 ml-1.5 mr-0.5 text-[#007efc] text-[1.1rem] border-none shadow-[0_1px_4px_rgba(0,126,252,0.07)] transition hover:bg-[#007efc] hover:text-white hover:shadow-[0_2px_8px_rgba(0,126,252,0.13)] no-underline" href="https://faizyabhussain07.github.io/Quran-Diniyat_Quiz--Part_2/" title="Live Demo" target="_blank" rel="noopener noreferrer"><FaArrowUpRightFromSquare /></a>
          </li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Education</h2>
        <ul className="list-disc pl-5 text-base text-[#333] mt-1 ml-0 leading-[1.6]">
          <li>Modern Web & App Development [1 Year Diploma] – SMIT, (2024–Present)</li>
          <li>Computer Science – Sirajud-dullah Govt. Degree College[M] (2024–Present)</li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">Certifications</h2>
        <ul className="list-disc pl-5 text-base text-[#333] mt-1 ml-0 leading-[1.6]">
          <li>Introduction to Programming – SMIT (2024), Scored 90%</li>
        </ul>
      </div>
      <div className="mb-7">
        <h2 className="text-[1.18rem] text-[#007efc] border-b-2 border-[#e3f0ff] pb-1 mb-3 font-semibold tracking-[0.5px] max-[500px]:text-[1rem]">References</h2>
        <p className="text-base text-[#333] mt-1 ml-0 leading-[1.6]">Available on request.</p>
      </div>
      <footer className="text-center text-[0.95rem] text-[#888] mt-8 border-t border-[#e3f0ff] pt-3">
        <p>Faizyab Hussain | Phone: (+92) 335-2811-970 | Email: syedfaizyabhussain07@gmail.com</p>
      </footer>
    </div>
  );
};

export default Resume; 