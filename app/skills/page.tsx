import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaFigma, FaNodeJs 
} from 'react-icons/fa';
import { FaClover } from 'react-icons/fa6';
import { RiSupabaseFill } from 'react-icons/ri';
import { 
  SiClerk, SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel, SiAdobephotoshop, SiAdobexd, SiMongodb 
} from 'react-icons/si';
import {icons } from 'lucide-react';

type Skill = {
  name: string;
  icon?: React.ComponentType<any>;
};

const skillGroups: { group: string; skills: Skill[] }[] = [
  {
    group: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    group: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', icon: FaGithub },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: FaFigma },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: RiSupabaseFill },
      { name: 'Clerk', icon: SiClerk },
      
    ]
  },
  {
    group: 'Other Skills',
    skills: [
      { name: 'UI/UX Design' },
      { name: 'Responsive Design' },
      { name: 'Web Animation' },
      { name: 'API Integration' },
      { name: 'Performance Optimization' },
      { name: 'Testing & Debugging' },
    ]
  }
]

export default function SkillsPage() {
  return (
    <section className="py-20 min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-blue-400">My Skills & Tools</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map(group => (
            <div key={group.group}>
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">{group.group}</h2>
              <ul className="space-y-3">
                {group.skills.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 text-lg">
                    {skill.icon && <span className="text-2xl text-blue-400"><skill.icon /></span>}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 