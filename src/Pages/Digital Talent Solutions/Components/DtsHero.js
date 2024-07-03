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
                            <p>Building Your Dream Tech Team - Faster & Smarter</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today's rapidly evolving digital landscape, finding the perfect talent to propel your business forward can be a challenge. At Thrivex Technologies, we go beyond traditional recruitment, creating human connections that deliver meaningful impact. Our team of experts streamlines your talent acquisition process, connecting you with premier tech professionals swiftly and efficiently.<br /><br />
                        </div>
                    </div>
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>We're More Than Tech Experts, We're Deeply Invested</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            We understand that technology is the lifeblood of your business. But it's not just about resumes and skill sets. Our focus goes beyond job descriptions. We take the time to understand your unique business goals and company culture. We dig deeper to find the ideal fit, someone who thrives within your environment and contributes significantly to your success.<br /><br />
                            Our mission at Thrivex is to foster positive change in both businesses and professional communities. We believe in the power of authentic connections and aim to be your uncommon partner on this journey. We are honored to help you build a winning team that propels your business forward.
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
