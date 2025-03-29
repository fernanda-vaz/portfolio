'use client'

import { Project } from '@/utils/interface'
import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from './ui/Icons'
import { TextReveal } from './ui/Typography'
import Image from 'next/image'

const ProjectCard = ({ title, image, subtitle }: Project) => {
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      layout
      className='relative rounded-xl md:rounded-3xl overflow-hidden aspect-square bg-darkPurple-400/30 md:px-4'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
          <p className='text-sm md:text-xl font-semibold max-md:opacity-0 text-darkPurple-900'>
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
            className='absolute text-fontColor-900'
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

export default ProjectCard
