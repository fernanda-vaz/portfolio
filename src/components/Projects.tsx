'use client'

import { Project } from '@/utils/interface'
import { useState } from 'react'
import { SectionHeading, TextReveal } from './ui/Typography'
import { SlideIn, Transition } from './ui/Transitions'
import { AnimatePresence, motion } from 'motion/react'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const [showMore, setShowMore] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const numProjectToShow = 6

  return (
    <section id='projects' className='md:p-8 p-4 mt-10 relative text-darkPurple-900'>
      <SectionHeading className='md:pl-12'>
        <SlideIn className='text-fontColor-900/50'>Alguns</SlideIn>
        <br />
        <SlideIn>
          projetos <span className='text-darkPurple-400'>.</span>
        </SlideIn>
      </SectionHeading>

      <motion.div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 relative'>
        {projects
          .slice(0, showMore ? projects.length : numProjectToShow)
          .map((project, i) => (
            <Transition
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard {...project} />
            </Transition>
          ))}

        <AnimatePresence>
          {selectedProject && (
            <div className='rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col'>
              <ProjectDialog
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className='grid place-items-center py-8'>
        {projects.length > numProjectToShow && (
          <button
            className='flex items-center justify-center gap-4 py-3 px-6 rounded-full border mt-6 group relative overflow-hidden cursor-pointer' 
            onClick={() => setShowMore(!showMore)}
        >
            <TextReveal>{showMore ? 'Ver menos' : 'Ver mais'}</TextReveal>
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
