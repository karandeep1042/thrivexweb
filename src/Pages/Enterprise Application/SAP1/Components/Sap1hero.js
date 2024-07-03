import React from 'react'
import img1 from '../../../../Resources/SAP/SAP1hero.png'

export default function Sap1hero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>SAP S/4HANA </p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Facilitating S/4HANA adoption for intelligent enterprises.</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            At THRIVEX, we're here to help you navigate the transition to S/4HANA adoption, empowering your organization to fully embrace SAP's vision of an intelligent enterprise. This involves integrating solutions with cutting-edge digital technologies and advanced analytics to enhance your business's agility and effectiveness. <br /><br />
                            SAP S/4HANA, powered by the SAP HANA in-memory database, supports real-time business transactions and data analysis. It plays a key role in SAP's digital transformation strategy, enabling businesses to enhance flexibility and adaptability to changing conditions. This approach defines what SAP calls the intelligent enterprise.
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
