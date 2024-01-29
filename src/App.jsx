import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GetStarted from './components/GetStarted'
import BrandShine from './components/BrandShine'

const App = () => {
  return (
    <div>
      <HeroSection />
      <GetStarted />
      <BrandShine />
    </div>
  )
}

export default App