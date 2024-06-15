import React from 'react'
import img1 from '../../../../Resources/Data and Analytics/bihero.png'

export default function BuisnessIntelligenceHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Business Intelligence Services </p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p>BI Solutions Tailored to Your Needs</p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today’s ever-changing market landscape, staying ahead of the curve and leveraging consumer behavior trends are paramount. To transform rich data sources into meaningful narratives, a reliable partner is indispensable. You need BI solutions to derive precise insights and swiftly make strategic and tactical decisions. <br /><br />
                            As a leading provider of business intelligence services, THRIVEX brings extensive expertise in cutting-edge technologies and unparalleled service provision. We empower your business to revolutionize its thinking and operations. Implement data visualization tools to craft compelling narratives, discover innovative ways to engage with your customers, and consistently deliver enhanced experiences. Evolve alongside your customers while maximizing ROI every step of the way.

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
