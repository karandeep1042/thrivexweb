import React from 'react'
import '../../../css/Home Page/HomeSection2.css'
import { Link } from 'react-router-dom'

export default function HomeSection2() {
    return (
        <>
            <div className="homepagesection2maincontainer">
                <div className="homepagesection2mainheader">
                    <p>Welcome to THRIVEX: Your Digital Transformation Catalyst</p>
                </div>
                <div className="homepagesection2description">
                    <p>THRIVEX is more than just a partner; we're your catalyst for digital transformation in the ever-evolving business and technology landscape. We leverage the power of experience design, data and AI to unlock the full potential of your organization. Our passionate team of experts collaborates with you to extract actionable insights from your data, crafting innovative solutions that streamline operations, elevate customer experiences, and ultimately propel data-driven business growth.</p>
                </div>
                <div className="homepagesection2buttoncontainer">
                    <Link to='/about' className="homepagesection2whowearebtn">
                        <p>Who we are</p><i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}
