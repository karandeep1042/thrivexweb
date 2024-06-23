import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import Modernizationhero from './Components/Modernizationhero'
import Modernizationinfo from './Components/Modernizationinfo'
import Modernizationcards from './Components/Modernizationcards'
import SWdevhead from '../Software Development/Components/SWdevhead'
import ContactPage from '../../Contact Page/ContactPage'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'

export default function Modernization() {
  return (
    <>
      <Navbar/>
      <Modernizationhero/>
      <Modernizationcards/>
      <Modernizationinfo/>
      <SWdevhead/>
      <AllEngineeringServices name="Modernization"/>
      <ContactPage/>
      <Footer/>
    </>
  )
}
