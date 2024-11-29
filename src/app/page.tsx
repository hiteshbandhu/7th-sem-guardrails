import React from 'react'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'  
import Why from '@/components/Why'  
import How from '@/components/How'  
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'  
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Why />
      <How />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer  />
    </>
  )
}

export default page