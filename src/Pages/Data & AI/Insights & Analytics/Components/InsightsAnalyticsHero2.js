import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function InsightsAnalyticsHero2() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Unlocking Business Success: Key Benefits of Data-Driven Insights
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Unlocking Business Success: Key Benefits of Data-Driven Insights</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Improve operational efficiency by optimizing processes based on data-driven decisions</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Enhance customer satisfaction and loyalty through personalized insights</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Mitigate risks with proactive identification and resolution of issues</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Gain competitive advantage by staying ahead of market trends and consumer behaviour</p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Increase agility and responsiveness to market changes with real-time data analytics</p>
                            </div>
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
