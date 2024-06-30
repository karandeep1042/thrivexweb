import React from 'react'
import img1 from '../../../../Resources/Product Engineering/SWdevhero.jpg'

export default function IntegrationHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Enterprise Integration</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Empower Your Enterprise with Seamless Integration Solutions</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In the digital age, businesses need seamless integration between their various systems to truly benefit from advanced technologies. This includes both internal systems (like ERP and CRM) and external ones (like partner platforms). As companies strive to deliver real-time experiences across different touchpoints (mobile app, website, etc.), these integrations become more complex.
                            <br /><br />
                            The ultimate goal, regardless of whether you're connecting internal systems or external ones, is to achieve high availability, scalability, and reliability. As businesses move from traditional to modern digital integration methods, efficiency, security, improved customer experience, and better performance become even more crucial. Our Enterprise Integration services help navigate this shift, ensuring all your functional needs are met while adding significant business value.
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
