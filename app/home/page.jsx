import React from 'react'
import NavBar from './_components/NavBar'
import HeroSection from './_components/HeroSection'
import DirectorsMessage from './_components/DirectorsMessage'
import Testimonials from './_components/Testimonials'
import Footer from './_components/Footer'
import AboutSection from './_components/AboutSection'

const page = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <DirectorsMessage/>
        <Testimonials />
        <AboutSection />
        <Footer />
    </div>
  )
}

export default page