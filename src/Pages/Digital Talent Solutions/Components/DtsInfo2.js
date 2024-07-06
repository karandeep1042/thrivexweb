import React from 'react'
import img1 from '../../../Resources/dtsinfo.jpg'

export default function DtsInfo2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Benefits of Partnering with us:
                    </div>
                    <div className="aboutherosection1infodescription">
                        <ul>
                            <li><b>Faster Time to Hire:</b> Reduce days (or even weeks) off your recruitment process.</li>
                            <li><b>Reduced Costs:</b> Eliminate the need for expensive, in-house talent acquisition teams.</li>
                            <li><b>Improved Quality of Hire:</b> Access a wider pool of top-tier talent and find the perfect fit.</li>
                            <li><b>Enhanced Team Culture:</b> Integrate talent with the right attitude and drive for a cohesive work environment.</li>
                            <li><b>Focus on Your Core Business:</b> Free up valuable time and resources to focus on core business strategies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
