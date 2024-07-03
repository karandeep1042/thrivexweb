import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>AI & ML Services</p>
            </div>
            <div className="dtsheromaincontainer">

                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Unlock the full potential of your data, elevate automation, and reimagine business possibilities with our advanced analytics solutions.</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            The first step toward transformation begins with investing in the right technology. We harness the power of artificial intelligence and machine learning to revolutionize your business operations and enhance productivity. Our comprehensive approach to AI & ML solutions integrates human expertise with cutting-edge technology to deliver optimal results. By staying ahead of the curve and embracing emerging technologies, we enable your business to scale the impact of AI across all operations, leading to faster decisions, sustainable capabilities, and increased efficiency. <br /><br />
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
