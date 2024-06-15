import React from 'react'
import '../../../css/Digital Talent Solutions/Dtshero.css'
import img1 from '../../../Resources/dtshero.jpg'

export default function DtsHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Next Gen - Digital Talent Solutions</p>
            </div>
            <div className="dtsheromaincontainer">

                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>We create human connections to deliver meaningful impact </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            Finding the ideal fit for your team shouldn't hold you down in the quick-paced world of technology. Our team helps streamline your talent acquisition process to quickly and efficiently connect you with premier tech professionals. Together, we’ll help find the right talent, so you can accelerate business outcomes and stay ahead of what’s next. <br /><br />
                            We’re not just well-versed in technology—we’re deeply embedded in it. <br /><br />
                            For us it’s more about understanding your business goals and your culture than job descriptions, and digging into what makes an ideal fit for your organization. Whether you need support for a fast-track initiative or some structure for your strategy, we’re here to make it happen for you. <br /><br />
                            As providers of digital talent solutions, we aim to positively impact business and professional communities. <br/><br/>
                            We’d be honoured to be your trusted and uncommon partner on this journey.
                        </div>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
