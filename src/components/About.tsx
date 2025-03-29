'use client'

import { About as IAbout } from '@/utils/interface'
import { Transition } from './ui/Transitions'
import { easeInOut, motion } from 'motion/react'
import Link from 'next/link'
import { TextReveal } from './ui/Typography'
import { Download } from './ui/Icons'
import Image from 'next/image'

interface AboutProps {
  about: IAbout
}

const About = ({ about }: AboutProps) => {
  return (
    <section
      id='about'
      className='grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative font-mono md:mx-auto'
    >
      <div>
        <motion.h3
          className='md:text-7xl text-4xl font-bold overflow-hidden uppercase pb-8 text-darkPurple-900'
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          exit={{ opacity: 0, x: -200 }}
        >
          sobre mim
        </motion.h3>

        <Transition
          viewport={{ once: true }}
          className='md:text-4xl tracking-tighter whitespace-break-spaces text-darkPurple-900'
        >
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            exit={{ opacity: 0, y: -200 }}
          >
            {about.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            exit={{ opacity: 0, x: 200 }}
          >
            <Link
              href={
                'https://drive.google.com/file/d/1dNBAK6I9Fw5hucUGtaIvXgF4FK3k-i_3/view?usp=drive_link'
              }
              target='_blank'
              className='px-5 py-3 rounded-full border w-fit my-4 bg-darkPurple-500 text-fontColor-50 text-lg flex items-center gap-2 group mt-10'
            >
              <TextReveal>Download CV</TextReveal>
              <Download />
            </Link>
          </motion.div>
        </Transition>
      </div>

      <div className='relative'>
        <div className='sticky top-6'>
          <Transition>
            <Image
              src={about.avatar.url}
              alt={about.name}
              width={300}
              height={300}
              className='rounded-xl max-md:aspect-square object-cover border border-neonGreen-400'
            />
          </Transition>
        </div>
      </div>
    </section>
  )
}

export default About
