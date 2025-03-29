'use client'

import { About, SocialHandle } from '@/utils/interface'
import { SlideIn, Transition } from './ui/Transitions'
import Image from 'next/image'
import Link from 'next/link'
import { TextReveal } from './ui/Typography'
import { ArrowUpRight } from './ui/Icons'
import { motion } from 'framer-motion'

interface HeroProps {
  about: About
  social: SocialHandle[]
}

const Hero = ({ about, social }: HeroProps) => {
  const MotionLink = motion(Link)

  return (
    <section className='min-h-dvh w-dvw overflow-hidden relative flex items-center justify-center font-sans px-4 md:px-8 py-12 md:py-24'>
      <Transition>
        <span className='blob size-1/2 absolute top-20 left-20 blur-[100px] -z-10' />
      </Transition>

      <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 md:gap-32 text-darkPurple-900'>
        <div className='flex flex-col gap-4 w-full md:w-auto'>
          <div className='flex flex-col gap-2 text-center md:text-start'>
            <p className='text-lg'>
              <SlideIn>{`Olá! Sou ${about.name},`}</SlideIn>
            </p>
            <h1 className='text-4xl md:text-5xl font-bold overflow-hidden'>
              <SlideIn>Desenvolvedora</SlideIn>
              <br />
              <SlideIn>
                <span className='text-darkPurple-400'>Front-end</span>.
              </SlideIn>
            </h1>
            <Transition>
              <p className='mb-4 md:mb-6 text-center mx-20 md:mx-0'>
                {about.subtitle}
              </p>
            </Transition>
          </div>

          <div className='flex flex-col md:flex-row gap-8 items-center justify-between'>
            <Transition>
              <Link
                href={'#contact'}
                className='w-[200px] h-14 shrink-0 bg-darkPurple-500 shadow-md rounded-xl flex justify-center items-center cursor-pointer text-fontColor-50 hover:opacity-95 transition-colors duration-300 font-semibold gap-2'
              >
                <TextReveal>Vamos conversar</TextReveal>
                <ArrowUpRight />
              </Link>
            </Transition>

            <div className='flex gap-4'>
              {social.map((link, i) => {
                const { url, id, platform } = link
                return (
                  <MotionLink
                    key={id}
                    href={url}
                    target='_blank'
                    custom={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className='hover:opacity-75 transition-opacity duration-300'
                  >
                    <Image
                      src={link.image.url}
                      alt={`Imagem de ${platform}`}
                      width={48}
                      height={48}
                      className='hover:opacity-75 transition-colors duration-300'
                    />
                  </MotionLink>
                )
              })}
            </div>
          </div>
        </div>

        <Transition>
          <Image
            src={about.avatar.url}
            alt={about.name}
            width={320}
            height={320}
            className='rounded-full object-cover size-48 md:size-80 border-2 border-darkPurple-400 mb-8 md:mb-0'
            priority
          />
        </Transition>
      </div>
    </section>
  )
}

export default Hero
