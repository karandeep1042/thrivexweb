import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1" style={{gap:'10vh'}}>
                    <div className="homeinfoheader" style={{ color: '#0eaae3', fontSize: '2.3rem' }}>
                        Establish Your Foundation: Leverage Our Data Services
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',textAlign:'left'}}>
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p style={{fontSize: '1.8rem',color:'#0eaae3',fontWeight:'500' }}>Data Engineering</p>
                                <p style={{ display:'flex', fontSize: '1.5rem' }}>Data Foundation: Establishing Your Data Strategy</p>
                            </div>
                            <div className="dtsinfolistedescription" style={{ fontSize: '1.35rem' }}>
                                Maximize the value of your data with our expert data engineering services. We specialize in managing and optimizing data to tailor bespoke solutions that align with your business goals. From data architecture design to implementation, ensure your data is organized, relevant, and reliable to tackle business challenges with confidence. Our expertise spans data modernization, data platform optimization, master data management, and robust data governance frameworks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
