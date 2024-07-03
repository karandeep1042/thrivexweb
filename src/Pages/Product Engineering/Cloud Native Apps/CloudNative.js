import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import CloudNativeHero from './Components/CloudNativeHero'
import CloudNativeInfo from './Components/CloudNativeInfo'
import CloudNativeCards from './Components/CloudNativeCards'
import CloudNativeInfo2 from './Components/CloudNativeInfo2'
import CloudNativeHero2 from './Components/CloudNativeHero2'
import SWdevhead from '../Software Development/Components/SWdevhead'
import ContactPage from '../../Contact Page/ContactPage'
import AllEngineeringServices from '../Software Development/Components/AllEngineeringServices'

export default function CloudNative() {
  return (
    <>
      <Navbar/>
      <CloudNativeHero/>
      <CloudNativeInfo/>
      <CloudNativeCards/>
      <CloudNativeInfo2/>
      <CloudNativeHero2/>
      <SWdevhead/>
      <AllEngineeringServices name="Cloud Native Apps"/>
      <ContactPage/>
      <Footer/>
    </>
  )
}
