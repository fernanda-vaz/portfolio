'use client'

import Link from 'next/link'
import { Transition } from './ui/Transitions'

const Footer = () => {
  return (
    <footer className='w-full px-4 py-4 text-sm'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2'>
        <Transition>
          <div className='text-center md:text-left'>
            &copy; {new Date().getFullYear()} | Todos os direitos reservados.
          </div>
        </Transition>

        <Transition>
          <p className='text-center md:text-right'>
            desenvolvido por @
            <Link
              href={'https://www.linkedin.com/in/vaz-fernanda/'}
              className='text-darkPurple-400 font-bold'
              target='_blank'
              rel='noopener noreferrer'
            >
              Fernanda Vaz
            </Link>
          </p>
        </Transition>
      </div>
    </footer>
  )
}

export default Footer
