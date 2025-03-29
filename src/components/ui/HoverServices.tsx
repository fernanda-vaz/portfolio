'use client'

import { motion, useMotionValue } from 'motion/react'
import Link from 'next/link'
import { useRef } from 'react'
import { TextReveal } from './Typography'

interface HoverImageProps {
  heading: string
  subheading: string
}

export const HoverServices = ({ heading, subheading }: HoverImageProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const MotionLink = motion.create(Link)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  return (
    <MotionLink
      href={'#contact'}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial='initial'
      whileHover='whileHover'
      className='group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-white/5'
    >
      <div>
        <div className='flex items-center justify-between'>
          <h4 className='relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-neutral-500 transition-colors duration-500 group-hover:text-darkPurple-500 md:text-6xl tracking-tighter mb-4'>
            {heading}
          </h4>
        </div>
        <p className='relative z-10 block md:text-base text-sm text-darkPurple-500/80 md:text-fontColor-900/10 transition-colors duration-500 group-hover:text-darkPurple-500 pt-2'>
          {subheading}
        </p>
      </div>

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className='z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden'
      >
        <div className='border border-darkPurple-500 rounded-full py-2 text-darkPurple-500 p-4'>
          <TextReveal>Vamos conversar!</TextReveal>
        </div>
      </motion.div>
    </MotionLink>
  )
}
