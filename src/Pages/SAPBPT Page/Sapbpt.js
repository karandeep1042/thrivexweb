import React from 'react'
import Navbar from '../Home Page/Components/Navbar'
import Footer from '../Home Page/Components/Footer'
import SapbptHero from './Components/SapbptHero'
import SapbptInfo from './Components/SapbptInfo'
import SapbtpHero2 from './Components/SapbtpHero2'
import SapbtpCards1 from './Components/SapbtpCards1'
import SapbtpCards2 from './Components/SapbtpCards2'
import ContactPage from '../Contact Page/ContactPage'
import SapbtpInfo2 from './Components/SapbtpInfo2'

export default function Sapbpt() {
    return (
        <>
            <Navbar />
            <SapbptHero />
            <SapbtpCards1 />
            <SapbptInfo />
            <SapbtpHero2 />
            <SapbtpInfo2 />
            {/* <SapbtpCards2/> */}
            <ContactPage head1="Ready to Explore BTP for your " head2="Organization?" desc="Contact us today to start your BTP journey." />
            <Footer />
        </>
    )
}
