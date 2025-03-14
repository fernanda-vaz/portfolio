'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { OpacityTransition, Transition } from './ui/Transitions'

interface PageLoadProps {
  setHideLoader: (value: boolean) => void
}

const Loader = ({ setHideLoader }: PageLoadProps) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2)
      } else {
        clearInterval(count)
      }
    }, 25)

    return () => {
      clearInterval(count)
    }
  }, [counter])

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 2.5, duration: 1, type: 'tween' }}
      onAnimationComplete={() => setHideLoader(false)}
      className='fixed top-0 left-0 z-[9999] w-full h-full bg-darkPurple-900'
    >
      <div className='p-4 md:p-10 flex flex-col md:justify-between max-md:gap-8 w-full h-full'>
        <Transition transition={{ delay: 0.2 }}>
          <span className='font-semibold text-fontColor-50/40'>
            Fernanda Vaz | Portfólio
          </span>
        </Transition>

        <div className='flex flex-col max-md:justify-between max-md:h-full'>
          <Transition transition={{ delay: 0.4 }}>
            <div className='text-2xl md:text-4xl w-4/5 md:w-3/5'>
              <OpacityTransition>
                  Crio interfaces modernas, interativas e de alto desempenho.
              </OpacityTransition>
            </div>
          </Transition>
          <div className='flex justify-between items-end'>
            <span className='text-fontColor-50/30'>Loading...</span>
            <motion.span className='md:text-9xl text-7xl font-semibold font-mono md:font-bold'>
              {counter}%
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
