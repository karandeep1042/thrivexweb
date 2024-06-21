import React from 'react'
import img1 from '../../../../Resources/dtshero.jpg'

export default function AIMLInfo2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Unlocking Business Potential: Key Benefits of AI & ML Services
                    </div>
                    <div className="homeinfolists" >
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Identify trends, extract insights, and optimize strategic planning with advanced data analytics.
                                </p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Target audiences effectively, increase ROI, and drive sales through personalized marketing campaigns.
                                </p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Tailor user experiences to boost customer satisfaction and engagement.
                                </p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Streamline processes, increase efficiency, and reduce operational costs through task automation.
                                </p>
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p style={{ fontSize: '1.4rem' }}>Improve customer support with AI-driven chatbots and virtual assistants.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
