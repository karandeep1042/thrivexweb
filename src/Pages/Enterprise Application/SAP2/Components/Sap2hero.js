import React from 'react'
import img1 from '../../../../Resources/SAP/SAP2hero2.jpg'

export default function Sap2hero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>SAP Technology Services </p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>SAP Technology Services</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            Following the S/4HANA Revolution, we're entering a new era where companies can significantly enhance their business performance. This is achievable by integrating analytics with intelligent technologies, leveraging the capabilities and resources offered by the SAP Business Technology Platform (BTP).
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
