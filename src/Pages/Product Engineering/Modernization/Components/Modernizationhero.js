import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'

export default function Modernizationhero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Modernization</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>Stay ahead of dynamic user demands and volatile market trends by modernizing your legacy systems and, prepare your business for future transformations</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            Don't let costly, sluggish, and isolated architectures hold you back. <br /><br />
                            Our legacy application modernization services help clients eliminate unnecessary operational costs and empower your workforce to focus on strategic and transformative projects. Our team assists you in transitioning your applications to newer, more cost-effective, comprehensive, and efficient technology platforms. Our capabilities include code migration, cloud application modernization, and the use of microservices for updating legacy software.
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
