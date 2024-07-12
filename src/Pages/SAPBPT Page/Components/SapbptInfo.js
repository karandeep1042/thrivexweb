import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function SapbptInfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Services
                        <p style={{ fontSize: '1.7rem', marginTop: '4vh' }}>Bring Innovation & Drive Agility with One Unified Platform </p>
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We help businesses achieve digital transformation through SAP BTP, a comprehensive platform combining database management, application development, analytics, and intelligent technologies. Our SAP BTP services offer agile integration, robust solutions, and expert guidance to optimize operations, enhance data management, and accelerate innovation. By leveraging SAP BTP's capabilities, businesses can unlock data insights, streamline processes, and extend SAP applications, driving business value and continuous improvement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
