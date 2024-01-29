import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GetStarted from './components/GetStarted'
import BrandShine from './components/BrandShine'
import BuyDomain from './components/BuyDomain'
import Faq from './components/Faq'

const App = () => {
  return (
    <div>
      <HeroSection />
      <GetStarted />
      <BrandShine />
      <BuyDomain />
      <Faq />
    </div>
  )
}

export default App