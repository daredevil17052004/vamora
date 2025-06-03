import { useState } from 'react'
import { motion } from 'framer-motion'
import NavigationBar from './pages/NavigationBar'
import HeroSection from './pages/HeroSection'
import UniversalLoveSection from './pages/Universal'
import HowTiWorksSection from './pages/How'
import Values from './pages/Values'
import Discover from './pages/Discover'
import Play from './pages/Play'
import Footer from './pages/Footer'

function App() {

  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
        <NavigationBar />
      </header>

      {/* Main Content with top padding to account for fixed navbar */}
      <main className='pt-16'>
        <section className='w-full'>
          <HeroSection />
        </section>

        <section className='w-full'>
          <UniversalLoveSection />
        </section>

        <section className='w-full'>
          <HowTiWorksSection />
        </section>

        <section className='w-full'>
          <Values />
        </section>

        <section className='w-full'>
          <Discover />
        </section>

        <section className='w-full'>
          <Play />
        </section>
      </main>

      <footer className='w-full'>
        <Footer />
      </footer>
    </div>
  )
}

export default App