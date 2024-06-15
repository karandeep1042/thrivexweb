import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/dshero.jpg'

export default function DataServicesHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Data Services</p>
            </div>
            <div className="dtsheromaincontainer">

                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Enhance your relevance through personalized data solutions provided by THRIVEX </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                        THRIVEX offers tailored data solutions to unlock insights and drive superior outcomes. <br /><br />
                        Our services encompass big data analytics, cloud data warehousing, visualization, and management, providing a comprehensive approach to data utilization. With THRIVEX, businesses gain real-time access to diverse data sources, enabling informed, data-driven decisions with ease.
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
