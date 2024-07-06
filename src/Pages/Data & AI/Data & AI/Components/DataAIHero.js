import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function DataAIHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Data & AI</p>
                <p style={{fontSize:'1.7rem',marginTop:'4vh'}}>Leverage the power of data & AI to drive decisions, enhance business efficiencies, and gain a competitive edge</p>
            </div>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="ahs1info">
                        <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>

                        </div>
                        <div className="aboutherosection1infodescription">
                            In the pursuit of staying ahead in the competitive landscape, companies are increasingly focused on effectively harnessing their data to avoid falling behind emerging competitors entering their industries. The urgency has been amplified by geopolitical tensions and the global pandemic, with digitization, data utilization, and advancements in AI/ML emerging as top strategic priorities across all sectors.<br /><br />
                            As a trusted partner offering end-to-end solutions in data and AI, we empower our clients to unearth fresh opportunities, develop resilient data strategies, and build solutions that transform raw data—regardless of its complexity—into actionable insights and knowledge. Our approach not only automates processes and cultivates personalized experiences but also enhances decision-making capabilities, ultimately creating sustainable competitive advantages.<br /><br />
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
