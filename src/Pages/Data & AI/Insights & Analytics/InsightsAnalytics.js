import React from 'react'
import Navbar from '../../Home Page/Components/Navbar'
import Footer from '../../Home Page/Components/Footer'
import InsightsAnalyticsHero from './Components/InsightsAnalyticsHero'
import InsightsAnalyticsCards from './Components/InsightsAnalyticsCards'
import InsightsAnalyticsInfo from './Components/InsightsAnalyticsInfo'
import InsightsAnalyticsHero2 from './Components/InsightsAnalyticsHero2'
import DataAICards2 from '../Data & AI/Components/DataAICards2'
import DataAIContactForm from '../Data & AI/Components/DataAIContactForm'
import RelatedTopics from './Components/RelatedTopics'
import ContactPage from '../../Contact Page/ContactPage'

export default function InsightsAnalytics() {
    return (
        <>
            <Navbar />
            <InsightsAnalyticsHero />
            <InsightsAnalyticsCards />
            <InsightsAnalyticsInfo />
            <InsightsAnalyticsHero2 />
            <DataAICards2 />
            <ContactPage />
            <Footer />
        </>
    )
}
