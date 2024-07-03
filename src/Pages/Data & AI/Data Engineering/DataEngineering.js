import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import DataEngineeringHero from './Components/DataEngineeringHero'
import DataEngineeringInfo from './Components/DataEngineeringInfo'
import Footer from '../../Home Page/Components/Footer'
import DataEngineeringHero2 from './Components/DataEngineeringHero2'
import DataEngineeringInfo2 from './Components/DataEngineeringInfo2'
import DataEngineeringHero3 from './Components/DataEngineeringHero3'
import DataAIContactForm from '../Data & AI/Components/DataAIContactForm'
import RelatedTopics from '../Insights & Analytics/Components/RelatedTopics'
import ContactPage from '../../Contact Page/ContactPage'

export default function DataEngineering() {
    return (
        <>
            <Navbar />
            <DataEngineeringHero />
            <DataEngineeringInfo />
            <DataEngineeringHero2 />
            <DataEngineeringInfo2 />
            <DataEngineeringHero3 />
            <ContactPage />
            <Footer />
        </>
    )
}
