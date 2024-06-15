import React from 'react'
import img1 from '../../../../Resources/Product Engineering/SWdevhero.jpg'

export default function SWdevHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Product Engineering – Software Development</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Our software product development services span from modernizing architectures to leveraging AI in development. </p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today's dynamic business environment, mere digital presence is inadequate. Success entails continuously evolving software that grows alongside you and your users. <br /><br />
                            Our experienced technical leaders are ready to translate your vision into a comprehensive architectural framework. We provide a dedicated team of specialist engineers, architects, and software developers who utilize the latest technologies and agile practices. Together, we address your key business challenges, delivering solutions that are intuitive, adaptable, and easily maintainable
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
