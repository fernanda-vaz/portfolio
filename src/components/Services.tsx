'use client'

import { Service } from '@/utils/interface'
import { SectionHeading, TextReveal } from './ui/Typography'
import { SlideIn, Transition } from './ui/Transitions'
import { HoverServices } from './ui/HoverServices'
import Link from 'next/link'

interface ServiceProps {
  services: Service[]
}

const Services = ({ services }: ServiceProps) => {
  return (
    <section className='px-2 py-20 relative text-darkPurple-900' id='services'>
      <span className='blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 opacity-50'/>
      
      <SectionHeading className='md:pl-16 overflow-hidden tracking-tighter'>
        <SlideIn className='text-fontColor-900/50'>Como posso</SlideIn>
        <br />
        <SlideIn>te ajudar<span className='text-darkPurple-400'>.</span></SlideIn>
      </SectionHeading>

      <div className='mx-auto pt-10'>
        {services.map((service) => (
          <Transition key={service.id}>
            <HoverServices heading={service.name} subheading={service.desc} />
          </Transition>
        ))}
      </div>

      <Transition className='flex items-center py-10 md:hidden'>
        <Link
            href={'#contact'}
            className='p-4 rounded-full border border-darkPurple-500/50'
        >
            <TextReveal>Vamos conversar!</TextReveal>
        </Link>
      </Transition>
    </section>
  )
}

export default Services
