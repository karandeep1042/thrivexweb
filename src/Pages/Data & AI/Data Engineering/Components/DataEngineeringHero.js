import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataEngineeringHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Data Engineering</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Enable superior data infrastructure to unlock strategic insights, drive data-driven decisions, and achieve outstanding results.
                            </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                        Transform your data into actionable business solutions through our robust suite of data management services. From big data analytics to data engineering and cloud data services, we provide tailored solutions to address your unique business needs. Our approach integrates cutting-edge technology and industry best practices to ensure your data infrastructure is not just efficient but transformative. <br />
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
