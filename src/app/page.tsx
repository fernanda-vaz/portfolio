import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import { Portfotio } from '@/utils/interface'

export default async function Home() {
  const portfolio = await (await import('@/infos.json')).default

  const { about, social_handles, skills, projects, services } =
    portfolio as Portfotio

  return (
    <main className='relative'>
      <Header social={social_handles} />
      <Hero about={about} social={social_handles} />
      <Projects projects={projects} />
      <Services services={services} />
      <About about={about} />
      <Skills skills={skills} />
      <Contact social={social_handles} />
      <Footer />
    </main>
  )
}
