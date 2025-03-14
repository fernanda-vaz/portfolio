'use client'

import { Project } from '@/utils/interface'
import { SectionHeading, TextReveal } from './ui/Typography'
import { useEffect, useState } from 'react'
import { SlideIn, Transition } from './ui/Transitions'
import Filters from './filters'
import { AnimatePresence, motion } from 'motion/react'
import { useVariants } from '@/utils/hooks'
import { ArrowUpRight } from './ui/Icons'
import ProjectDialog from './ProjectDialog'
import Image from 'next/image'

interface ProjectsProps {
  projects: Project[]
}

const Card = ({ title, image, subtitle }: Project) => {
  const [hover, setHover] = useState(false)
  const { setVariant } = useVariants()

  const mouseEnter = () => {
    setHover(true)
    setVariant('PROJECT')
  }

  const mouseLeave = () => {
    setHover(false)
    setVariant('DEFAULT')
  }

  return (
    <motion.div
      layout
      className='relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-darkPurple-400/30 md:px-4'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className='absolute top-2 right-2 w-full h-full flex justify-end md:hidden'>
        <div className='bg-white size-8 rounded-full text-darkPurple-900 grid place-items-center'>
          <ArrowUpRight />
        </div>
      </div>
      <div className='md:py-8 relative'>
        <motion.div
          animate={{ y: hover ? -10 : 0 }}
          className='flex justify-between items-center max-md:hidden'
        >
          <p className='text-sm md:text-xl font-semibold max-md:opacity-0'>
            {title}
          </p>
          <button className='flex gap-2 items-center justify-center max-md:px-4'>
            <TextReveal className='max-md:text-sm'>Visitar</TextReveal>
            <span className='bg-darkPurple-900 text-fontColor-50/80 rounded-full p-1'>
              <ArrowUpRight />
            </span>
          </button>
        </motion.div>
        <div className='overflow-hidden max-md:hidden'>
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0 }}
            className='absolute text-fontColor-50/50'
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      <Image
        src={image.url}
        alt={title}
        width={500}
        height={500}
        className='object-cover h-full w-full object-center rounded-xl md:rounded-t-3xl'
      />
    </motion.div>
  )
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [filterValue, setFilterValue] = useState('')
  const [showMore, setShowMore] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const numProjectToShow = 6

  const applyFilters = (data: Project[], filterValues: string) => {
    if (!filterValue || filterValues === 'all') {
      return data
    }

    return data.filter((project) =>
      project.techStack.some((tech) => filterValues === tech.trim())
    )
  }

  useEffect(() => {
    const filtered = applyFilters(projects, filterValue)
    setFilteredProjects(filtered)
  }, [filterValue, projects])

  return (
    <section id='projects' className='md:p-8 p-4 mt-10 relative'>
      <SectionHeading className='md:pl-12'>
        <SlideIn className='text-fontColor-50/40'>Alguns</SlideIn> <br />
        <SlideIn>projetos</SlideIn>
      </SectionHeading>
      <Filters
        projects={projects}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <motion.div className='grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 relative'>
        {filteredProjects
          .slice(0, showMore ? filteredProjects.length : numProjectToShow)
          .map((project, index) => (
            <Transition
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              key={project.id}
              layoutId={project.id}
              onClick={() => {
                setSelectedProject(project)
              }}
            >
              <Card {...project} />
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
        {filteredProjects.length > numProjectToShow && (
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
