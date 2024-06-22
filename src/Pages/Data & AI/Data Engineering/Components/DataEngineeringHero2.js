import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringHero2() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Big Data Analytics</p>
                        </div>
                        
                    </div>
                    <div className="homeinfolists" style={{marginTop:'2vh'}}>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p style={{fontSize:'1.5rem'}}>Establish Your Foundation</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{fontSize:'1.35rem'}}>
                                Maximize the value of your data with our expert data engineering services. We specialize in managing and optimizing data to tailor bespoke solutions that align with your business goals. From data architecture design to implementation, ensure your data is organized, relevant, and reliable to tackle business challenges with confidence. Our expertise spans data modernization, data platform optimization, master data management, and robust data governance frameworks.
                            </div>
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
