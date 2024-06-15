import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import DtsHero from './Components/DtsHero'
import DtsInfo from './Components/DtsInfo'
import ContactPage from '../Contact Page/ContactPage'
import DtsHero2 from './Components/DtsHero2'

export default function DigitalTalentSolutions() {
  return (
    <>
      <Navbar/>
      <DtsHero/>
      <DtsInfo/>
      <DtsHero2/>
      <ContactPage/>
      <Footer/>
    </>
  )
}
