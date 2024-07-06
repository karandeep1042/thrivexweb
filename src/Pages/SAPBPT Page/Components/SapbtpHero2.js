import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbtpHero2() {
    return (
        <>
            <div className="dtsheromaincontainer">

                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>The Platform for Flexibility and Speed </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In the digital era, continual innovation and adaptation are crucial. Companies generate vast amounts of data, a valuable resource with significant business potential. SAP BTP leverages this potential, allowing for flexible adaptation to new demands and accelerating innovation. The platform offers a variety of services and tools for integration, application development, automation, artificial intelligence, data, and analytics within a unified environment.
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
