import React from 'react'
import img1 from '../../../New Resources/Experience Design/EDHero-removebg-preview.png'
import '../../../New css/Experience Design/EDNewHero.css'
export default function EDNewHero() {
    return (
        <>
            <div className="ednewheromaincontainer">
                <div className="ednewherodiv1">
                    <div className="ednewherodiv1child">
                        <div className="ednewheroheader">
                            <p>Experience Design</p>
                            <p className='ednewheroheader2'>Transform your digital products with engaging and user-centric experiences.</p>
                        </div>
                        <div className="ednewherodescription">
                            Today's successful businesses create experiences that seamlessly blend physical, digital, and service design. We help you achieve this by offering UX design across all touchpoints. From user research to crafting software, physical products, and even hybrid solutions, we combine design thinking with our creative expertise. This approach ensures a meaningful customer experience that drives real business results.
                        </div>
                    </div>
                </div>
                <div className="ednewherodiv2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
