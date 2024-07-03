import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function AboutInfo2() {
    return (
        <>
            <div className="aboutheromaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Purpose
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our purpose is simple: to help businesses navigate the ever-evolving digital landscape and achieve their full potential. We believe that technology is a powerful tool for growth and innovation, and we're here to guide you on your digital journey.
                        </p>
                    </div>
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Mission
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            Our mission is to be your trusted partner in digital transformation. We achieve this by:
                            <ul style={{ marginLeft: '1.5vw' }}>
                                <li>Understanding your unique needs and challenges.</li>
                                <li>Developing customized solutions that drive measurable results.</li>
                                <li>Delivering exceptional service and support every step of the way.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Vision
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            We envision a future where businesses of all sizes can leverage the power of technology to thrive. We are committed to being at the forefront of innovation, helping our clients stay ahead of the curve.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
