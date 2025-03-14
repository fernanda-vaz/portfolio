'use client'

import { motion } from 'motion/react'

import { About as IAbout } from '../utils/interface'
import { Transition } from './ui/Transitions'
import { easeInOut } from 'motion'
import { TextReveal } from './ui/Typography'
import { Download } from './ui/Icons'
import Link from 'next/link'
import Image from 'next/image'

// interface TimelineCardProps {
//   timeline: Timeline
//   activeIndex: number
//   setActiveIndex: Dispatch<SetStateAction<number>>
//   index: number
// }

// const TimelineCard = ({
//   timeline,
//   activeIndex,
//   setActiveIndex,
//   index,
// }: TimelineCardProps) => (
//   <section id='about' className='border-b border-neonGreen-400/20 py-4'>
//     <div
//       className='flex items-center justify-between gap-4 cursor-pointer select-none'
//       onClick={() => setActiveIndex(index)}
//     >
//       <span>0{index + 1}</span>
//       <span className='text-xl md:text-3xl font-bold flex-1'>
//         {timeline.jobTitle}
//       </span>
//       <div className='relative size-6 flex items-center justify-center'>
//         <span className='bg-neonGreen-400 w-4 md:w-6 h-0.5 absolute' />
//         <motion.span
//           initial={{ rotate: 90 }}
//           animate={{
//             rotate: activeIndex === index ? 0 : 90,
//           }}
//           className='absolute bg-neonGreen-400 w-4 md:w-6 h-0.5 rotate-90'
//         />
//       </div>
//     </div>
//     <motion.div
//       initial={{
//         height: activeIndex === index ? '100%' : 0,
//       }}
//       animate={{
//         height: activeIndex === index ? '100%' : 0,
//       }}
//       className='overflow-hidden'
//     >
//       <p className='text-foreground/60 py-4 max-md:text-sm'>
//         {timeline.summary}
//       </p>
//       <div className='flex justify-between items-center pb-3 text-foreground/80'>
//         <div className='max-md:text-sm'>
//           <span>{timeline.company_name}</span>
//           <span>{timeline.jobLocation}</span>
//         </div>
//         <div className='max-md:text-xs'>
//           <span className='italic'>
//             {formatDate(timeline.startDate).month +
//               ', ' +
//               formatDate(timeline.startDate).year}
//           </span>
//           {' - '}
//           <span className='italic'>
//             {formatDate(timeline.endDate).month +
//               ', ' +
//               formatDate(timeline.endDate).year}
//           </span>
//         </div>
//       </div>
//       <ul className='list-disc list-inside'>
//         {timeline.bulletPoints.map((point, index) => (
//           <li key={index} className='text-foreground/80 max-md:text-sm'>
//             {point}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   </section>
// )

interface AboutProps {
  about: IAbout
}

const About = ({ about }: AboutProps) => {
  return (
    <section
      id='about'
      className='grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative font-ibm md:mx-auto'
    >
      <div>
        <motion.h3
          className='md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8 '
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          exit={{ opacity: 0, x: -200 }}
        >
          SOBRE MIM
        </motion.h3>
        <Transition
          viewport={{ once: true }}
          className='md:text-4xl tracking-tighter whitespace-break-spaces'
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
              className='px-5 py-3 rounded-full border w-fit my-4 border-fontColor-50/50 flex items-center gap-2 group'
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
              width={400}
              height={400}
              alt={about.name}
              className='rounded-xl max-md:aspect-square object-cover'
            />
          </Transition>
        </div>
      </div>
    </section>
  )
}

export default About
