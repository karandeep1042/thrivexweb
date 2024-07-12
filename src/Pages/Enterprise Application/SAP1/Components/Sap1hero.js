import React from 'react'
import img1 from '../../../../Resources/SAP/SAP1hero.png'

export default function Sap1hero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>SAP S/4HANA </p>
                <p style={{ fontSize: '1.7rem', marginTop: '4vh' }}>The intelligent ERP for real-time business – transact, analyze, predict.</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Overview</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            SAP S/4HANA, powered by the SAP HANA in-memory database, supports real-time business transactions and data analysis. This next-generation ERP solution drives SAP's digital transformation strategy, enabling businesses to enhance flexibility and adaptability to changing conditions, embodying SAP's vision of the intelligent enterprise. <br /><br />
                            At THRIVEX Technologies, we guide you through the transition to S/4HANA, empowering your organization to fully embrace SAP's intelligent enterprise vision. We achieve this by integrating cutting-edge digital technologies and advanced analytics with your SAP S/4HANA solution, maximizing your business's agility and effectiveness.
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
