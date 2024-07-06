import React from 'react'
import img1 from '../../../Resources/DONE - What We do - Our Services - Experience Design/Image2.png'
import '../../../css/Experience Design/EDHero.css'

export default function EDHero() {
    return (
        <>
            <div className="aboutheroheader" >
                <p>Services - Experience Design</p>
            </div>
            <div className="edheromaincontainer">
                <div className="edherosection1">
                    <div className="edheroheader">
                        Enhance user engagement and drive business success by transforming your digital products with our User Experience (UX) design services
                    </div>
                    <div className="edherodesc">
                        In today's landscape, the distinctions between physical, digital, and service design are blurring. Crafting a seamless customer experience across these realms is now imperative for maintaining competitiveness. To fulfill this requirement, we offer a comprehensive array of UX design services, addressing all touchpoints and needs. From user research to product design (encompassing software, tangible, and phygital solutions), and service design, we blend impactful design thinking with our premier creative skills to drive enhanced business outcomes through meaningful customer experience design. <br /><br />
                        Our Experience Design Services include :
                    </div>
                    <div className="edheroservices">
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>UX Research :</span> Dive deep into product usage, analysing client offerings and customer behaviour to pinpoint areas for enhancement.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Interaction Design : </span>Craft tailored interactions to meet user needs, ensuring a seamless brand experience.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Design Strategy : </span>Strike the right balance between aesthetics and business objectives, aligning with brand persona for impactful designs.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Service Design : </span>Optimize touchpoints by breaking down service processes, delivering customized experiences for customer satisfaction.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Data Visualisation : </span>Optimize touchpoints by breaking down service processes, delivering customized experiences for customer satisfaction.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Visual Design : </span>Elevate digital product appeal and usability, guiding customers through a unique brand narrative.</p>
                        </div>
                        <div className="edheroservice">
                            <i class="fa-solid fa-check"></i>
                            <p><span>Customer Experience : </span>Shape every aspect of the customer journey with customer-centric designs, fostering lasting connections from awareness to retention</p>
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
