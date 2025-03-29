'use client'

import { SocialHandle } from '@/utils/interface'
import { SectionHeading, TextReveal } from './ui/Typography'
import { SlideIn, Transition } from './ui/Transitions'
import Link from 'next/link'
import { ArrowUpRight } from './ui/Icons'
import EmailModal from './EmailModal'

interface ContactProps {
  social: SocialHandle[]
}

const Contact = ({ social }: ContactProps) => {
  return (
    <section id='contact' className='relative overflow-hidden'>
      <span className='blob absolute bottom-10 left-10 right-10 w-1/3 h-5/6 blur-[100px] rotate-90 -z-10 opacity-50' />

      <div className='container mx-auto px-4 py-12'>
        <SectionHeading className='text-center mt-10'>
          <SlideIn className='text-fontColor-900/40'>Entre em</SlideIn>
          <br />
          <SlideIn>
            contato<span className='text-darkPurple-400'>.</span>
          </SlideIn>
        </SectionHeading>

        <Transition>
          <p className='text-center max-w-2xl mx-auto px-4'>
            Focada em{' '}
            <span className='text-darkPurple-400 font-bold'>
              Desenvolvimento Front-end
            </span>
            . <br />
            Vamos conversar sobre seu projeto?
          </p>
        </Transition>

        <div className='flex flex-wrap justify-center gap-4 p-4 md:p-8'>
          <EmailModal />

          {social.map((link) =>
            link.enabled ? (
              <Transition key={link.id}>
                <Link
                  href={link.url}
                  className='flex gap-1 border border-darkPurple-900/85 rounded-full p-3'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <TextReveal>{link.platform}</TextReveal>
                  <ArrowUpRight />
                </Link>
              </Transition>
            ) : null
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
