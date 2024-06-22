import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function InsightsAnalyticsHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Insights & Analytics</p>
                <p style={{fontSize:'1.7rem',marginTop:'4vh'}}>Unlock the full potential of your data by transforming it into actionable insights through impactful visualizations and effective data storytelling</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
                            <p></p>
                        </div>
                        <div className="aboutherosection1infodescription">
                            In today’s ever-changing market landscape, staying ahead and leveraging consumer behavior trends is paramount. To transform rich data sources into meaningful narratives, a reliable partner is essential. BI solutions are needed to derive precise insights and swiftly make strategic and tactical decisions.<br /><br />
                            As a leading provider of business intelligence services, we offer extensive expertise in cutting-edge technologies and exceptional service. We empower your business to revolutionize its thinking and operations. Implement data visualization tools to craft impactful narratives, discover innovative ways to engage with your customers, and consistently deliver enhanced experiences. Evolve alongside your customers while maximizing ROI every step of the way. <br /><br />
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
