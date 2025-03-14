'use client'

import { About } from '@/utils/interface'
import { SlideIn, Transition } from './ui/Transitions'
import LoaderWrapper from './LoaderWrapper'
import Link from 'next/link'
import { TextReveal } from './ui/Typography'
import { ArrowUpRight } from './ui/Icons'

interface HeroProps {
  about: About
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className='h-dvh w-dvw overflow-hidden relative'>
      <Transition>
        <span className='blob size-1/2 absolute top-20 left-0 blur-[100px]' />
      </Transition>
      <LoaderWrapper>
        <div className='relative h-full w-full'>
          <div className='flex items-center justify-center flex-col h-full pb-10'>
            <Transition>
              <img
                src={about.avatar.url}
                alt={about.name}
                className='rounded-full size-28 object-cover'
              />
            </Transition>
            <div className='py-6 flex items-center flex-col'>
              <h2 className='md:text-7xl text-5xl font-bold overflow-hidden font-epi text-center'>
                <SlideIn>Olá! Sou <span className='text-neonGreen-400'>{about.name}</span></SlideIn>
              </h2>
              <h1 className='md:text-5xl text-3xl overflow-hidden font-epi text-center'>
                <SlideIn>{about.title}<span className='text-neonGreen-400'>.</span></SlideIn>
              </h1>
            </div>
            {/* <Transition viewport={{ once: true }} className='w-full'>
              <p className='opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2'>
                {about.subTitle.split(' ').map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition> */}
            <Transition viewport={{ once: true }}>
              <Link
                href={'#contact'}
                className='px-5 py-3 rounded-full border border-fontColor-50/50 flex items-center gap-2 group'
              >
                <TextReveal>Vamos conversar</TextReveal>
                <ArrowUpRight />
              </Link>
            </Transition>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  )
}

export default Hero
