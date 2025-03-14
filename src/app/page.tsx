import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import { Portfolio } from '@/utils/interface'

export default async function Home() {
  const portfolio = (await import('@/infos.json')).default

  const { 
    social_handles, 
    about, 
    skills, 
    services, 
    projects, 
    email 
  } = portfolio as Portfolio

  return (
    <main className='relative'>
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} />
      <Skills skills={skills} />
      <Services services={services} />
      <Projects projects={projects} />
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  )
}
