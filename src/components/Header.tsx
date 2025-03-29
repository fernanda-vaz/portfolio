'use client'

import { SocialHandle } from '@/utils/interface'
import { useMediaQuery } from '@/utils/useMediaQuery'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight } from './ui/Icons'
import { Transition } from './ui/Transitions'
import Image from 'next/image'
import { TextReveal } from './ui/Typography'

const navLinks = [
  { title: 'Início', href: '/' },
  { title: 'Projetos', href: '#projects' },
  { title: 'Sobre', href: '#about' },
  { title: 'Contato', href: '#contact' },
]

function MenuButton({
  isActive,
  toggleMenu,
}: {
  isActive: boolean
  toggleMenu: () => void
}) {
  return (
    <div className='md:hidden absolute top-4 right-4 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer'>
      <motion.div
        className='relative w-full h-full'
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className='bg-darkPurple-400 h-full w-full grid place-items-center text-darkPurple-900'
          onClick={toggleMenu}
        >
          <TextReveal className='font-sans font-medium text-fontColor-50'>
            Menu
          </TextReveal>
        </motion.div>
        <motion.div
          className='bg-darkPurple-900 text-fontColor-50 h-full grid place-items-center'
          onClick={toggleMenu}
        >
          <TextReveal className='font-sans font-medium'>Close</TextReveal>
        </motion.div>
      </motion.div>
    </div>
  )
}

function DesktopNav() {
  return (
    <nav className='flex gap-4 '>
      {navLinks.map((link, i) => (
        <Link
          key={`desktop_${i}`}
          href={link.href}
          className='text-darkPurple-900 hover:text-neonGreen-400 transition-colors duration-300 font-bold'
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

interface HeaderProps {
  social: SocialHandle[]
}

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
  },
}

const perspective = {
  initial: { y: 50 },
  enter: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
  },
}

const Header = ({ social }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const MotionLink = motion.create(Link)

  const variants = {
    open: {
      clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : '24px'})`,
      transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      clipPath: `inset(5% 12% 93% 85% round ${isMobile ? 0 : '24px'})`,
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: 'tween',
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <>
      <header className='hidden md:flex top-0 w-full z-50 sticky border-b border-fontColor-900/30 shadow-sm'>
        
        <div className='container mx-auto px-8 py-4 flex justify-between items-center'>
          
          <Link href='/' className='flex items-center gap-4'>
            <Image
              src={
                'https://raw.githubusercontent.com/fernanda-vaz/portfolio-assets/main/icons/logo.svg'
              }
              alt='Logo Fernanda Vaz'
              width={60}
              height={60}
            />
          </Link>

          <DesktopNav />
        </div>
      </header>

      {/* Header para Mobile */}
      <motion.header className='md:hidden fixed top-0 right-0 z-50'>
        <Transition className='fixed top-0 left-6 z-30'>
          <Link href={'/'} className='flex items-center mt-4'>
            <Image
              src={
                'https://raw.githubusercontent.com/fernanda-vaz/portfolio-assets/main/icons/logo.svg'
              }
              alt='Logo Fernanda Vaz'
              width={36}
              height={36}
            />
          </Link>
        </Transition>

        {/* Menu Mobile */}
        <motion.div
          initial={false}
          animate={isActive ? 'open' : 'closed'}
          variants={variants}
          className='absolute top-0 right-0 w-dvw h-dvh bg-darkPurple-400'
        >
          {isActive && (
            <nav className='flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]'>
              <div className='flex gap-2 flex-col'>
                {navLinks.map((link, i) => {
                  const { title, href } = link
                  return (
                    <div key={`b_${i}`} onClick={() => setIsActive(false)}>
                      <Link
                        href={href}
                        className='flex flex-wrap overflow-hidden font-epilogue-sans'
                      >
                        <motion.div
                          variants={perspective}
                          custom={i}
                          initial='initial'
                          animate='enter'
                          whileHover='whileHover'
                          whileTap='whileHover'
                          exit='exit'
                          className='text-5xl text-darkPurple-900 flex items-center justify-between font-sans'
                        >
                          <motion.span
                            variants={{
                              initial: { x: -20 },
                              whileHover: { x: 0 },
                            }}
                          >
                            <ArrowUpRight />
                          </motion.span>
                          <motion.span
                            variants={{
                              initial: { x: 0 },
                              whileHover: { x: 20 },
                            }}
                          >
                            {title}
                          </motion.span>
                        </motion.div>
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div className='flex flex-wrap'>
                {social.map((link, i) => {
                  const { platform, id, url } = link
                  return (
                    <MotionLink
                      href={url}
                      target='_blank'
                      className='w-1/2 mt-1 text-darkPurple-900'
                      variants={slideIn}
                      custom={i}
                      initial='initial'
                      animate='enter'
                      exit='exit'
                      key={id}
                    >
                      <TextReveal>{platform}</TextReveal>
                    </MotionLink>
                  )
                })}
              </div>
            </nav>
          )}
        </motion.div>

        <MenuButton
          isActive={isActive}
          toggleMenu={() => setIsActive(!isActive)}
        />
      </motion.header>
    </>
  )
}

export default Header
