'use client'

import { Project } from '@/utils/interface'
import { Dispatch, SetStateAction } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Github, XMark } from './ui/Icons'
import Image from 'next/image'
import Link from 'next/link'

interface DialogProps {
  selectedProject: Project
  setSelectedProject: Dispatch<SetStateAction<Project | null>>
}

const ProjectDialog = ({
  selectedProject,
  setSelectedProject,
}: DialogProps) => {
  return (
    <motion.div
      layoutId={selectedProject.id}
      className='fixed inset-0 z-50 grid place-items-center'
      onClick={(e) => e.target === e.currentTarget && setSelectedProject(null)}
    >
      <div className=' w-11/12 md:w-1/2 h-4/5 md:h-[90%] overflow-hidden rounded-xl bg-fontColor-50'>
        <div className='relative'>
          <button
            className='absolute top-4 right-4 bg-darkPurple-900 size-8 rounded-full border-neonGreen-400/40 grid place-items-center text-fontColor-50'
            onClick={() => setSelectedProject(null)}
          >
            <XMark />
          </button>
          <Image
            src={selectedProject.image.url}
            alt={selectedProject.title}
            width={100}
            height={100}
            className='w-full h-full aspect-video object-cover object-center'
          />

          <div className='p-3'>
            <div className='flex items-center justify-between'>
              <h3 className='text-4xl font-bold'>{selectedProject.title}</h3>
              <div className='flex items-center gap-4'>
                <Link href={selectedProject.githuburl} target='_blank'>
                  <Github />
                </Link>

                <Link href={selectedProject.liveurl} target='_blank'>
                  <ExternalLink />
                </Link>
              </div>
            </div>

            <div className='flex py-3 items-center gap-4'>
              {selectedProject.techStack.map((tech, i) => (
                <span
                  key={i}
                  className='border px-2 py-1 border-neonGreen-400 rounded-2xl text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className='text-fontColor-900'>
              {selectedProject.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDialog
