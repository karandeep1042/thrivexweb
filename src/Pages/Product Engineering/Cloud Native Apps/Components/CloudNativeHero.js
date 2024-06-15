import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'

export default function CloudNativeHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Cloud Native</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Modernize Your Business with Cloud-Native Application Development

                            </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today's fast-paced market, businesses must quickly adapt to stay competitive. However, the rapid advancement of cloud technology and the shortage of specialized skills make this a challenge. THRIVEX offers comprehensive solutions to help you build cloud-native applications using microservices architecture, enabling agile, cost-effective, and scalable development.
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
