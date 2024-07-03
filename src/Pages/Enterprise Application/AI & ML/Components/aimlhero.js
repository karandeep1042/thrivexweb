import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/aihero.jpg'

export default function Aimlhero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>AI&ML Services  </p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Advanced Analytics Solutions</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            Embark on a transformative journey for your business and customers by unlocking the full potential of your data, elevating automation, and reimagining business possibilities with THRIVEX's advanced analytics solutions. <br /><br />
                            The first step towards transformation begins with investing in the right technology. At THRIVEX, we believe in harnessing the power of artificial intelligence and machine learning to revolutionize your business operations and enhance productivity. Our comprehensive approach to AI & ML solutions integrates human expertise with cutting-edge technology to deliver optimal results. By staying ahead of the curve and embracing emerging technologies, we enable your business to scale the impact of AI across all operations, leading to faster decisions, sustainable capabilities, and increased efficiency. Now is the perfect moment to invest in AI & ML to future-proof your business. <br /><br />
                            Explore our wide range of AI and ML services designed to elevate your productivity to new heights. Benefit from our industry-leading practices that allow you to harness emerging technologies through seamless end-to-end integration and collaboration between humans and machines. <br /><br />
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
