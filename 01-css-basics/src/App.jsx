import { useState } from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function App() {
  return (
    <div className='layout'>
      <Container>
        <div className='left-line'></div>
        <div className='right-line'></div>
        <Navbar />
        <Hero />
      </Container> 
    </div>
  )
}

export default App
