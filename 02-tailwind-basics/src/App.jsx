import { useState } from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <div className='flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]'>
      
      <div className='max-w-5xl mx-auto absolute inset-0 left-0 h-full w-full pointer-events-none'>
        <div className='absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent'></div>
        <div className='absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent'></div>
      </div>

      <Container>
        <Navbar />
        <Hero />
      </Container>

      <div className='relative w-full'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent'></div>
        <img src={"/hero-ui.webp"} alt="Banner Image" width={1000} className='max-w-4xl mx-auto mt-5 rounded-lg shadow-lg border border-neutral-400/50 mask-b-from-0% to-100%' />
      </div>

    </div>
  )
}

export default App
