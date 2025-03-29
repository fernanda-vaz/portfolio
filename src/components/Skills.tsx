import { Skill } from '@/utils/interface'
import { ParallaxText } from './ui/ParallaxText'


interface SkillsProps {
  skills: Skill[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id='skills'>
      <ParallaxText baseVelocity={-5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill.id}
              className='md:text-7xl text-xl font-semibold font-sans uppercase text-fontColor-900/30 tracking-tight'
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>

      <ParallaxText baseVelocity={5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill.id}
              className='md:text-7xl text-xl font-semibold font-sans uppercase text-fontColor-900/30 tracking-tight'
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>

      <ParallaxText baseVelocity={-5}>
        {skills.map((skill) =>
          skill.enabled ? (
            <span
              key={skill.id}
              className='md:text-7xl text-xl font-semibold font-sans uppercase text-fontColor-900/30 tracking-tight'
            >
              {skill.name} •
            </span>
          ) : null
        )}
      </ParallaxText>
    </section>
  )
}

export default Skills
