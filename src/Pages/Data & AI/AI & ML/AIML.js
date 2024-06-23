import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import AIMLHero from './Components/AIMLHero'
import Footer from '../../Home Page/Components/Footer'
import AIMLHero2 from './Components/AIMLHero2'
import AIMLInfo from './Components/AIMLInfo'
import AIMLInfo2 from './Components/AIMLInfo2'
import DataAICards2 from '../Data & AI/Components/DataAICards2'
import DataAIContactForm from '../Data & AI/Components/DataAIContactForm'
import RelatedTopics from '../Insights & Analytics/Components/RelatedTopics'
import ContactPage from '../../Contact Page/ContactPage'

export default function AIML() {
    return (
        <>
            <Navbar />
            <AIMLHero />
            <AIMLHero2 />
            <AIMLInfo />
            <AIMLInfo2 />
            <DataAICards2 />
            <ContactPage />
            <Footer />
        </>
    )
}
