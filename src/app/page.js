import { Hero,Nav,About,Projects,Experience,Contact} from '@/components'

export default function Home() {
  return (
    <main className='bg-dark'>
      <Hero />
      <Nav />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
     </main>
  )
}
