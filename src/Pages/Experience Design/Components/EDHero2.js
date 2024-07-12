import React from 'react'
import img1 from '../../../Resources/DONE - What We do - Our Services - Experience Design/Image2.png'

export default function EDHero2() {
    return (
        <>
            <div className="edheromaincontainer">
                <div className="edherosection1">
                    <div className="edheroheader">
                        Unleash the Power of Experience Design: Engage, Delight, and Drive Business Success
                    </div>
                    <div className="edheroservices">
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Enhanced User Engagement:</span> Create user-centric designs that engage and delight.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Improved Usability: </span>Ensure intuitive and accessible interfaces.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Competitive Advantage: </span>Stand out in the market with unique and innovative customer experiences.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Increased Customer Satisfaction: </span>Foster lasting connections through seamless experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="edherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
