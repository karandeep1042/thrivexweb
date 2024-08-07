import React from 'react'
import img1 from '../../../Resources/DONE - What We do - Our Services - Experience Design/Image4.png'
import '../../../css/Experience Design/EDInfo.css'
export default function EDInfo() {
    return (
        <>
            <div className="edinfomaincontainer">
                <div className="edherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="edherosection1">
                    <div className="edinfosec2header">
                        Our Approach
                    </div>
                    <div className="edinfodec2desc">
                        We transform imaginative ideas into remarkable products and services through our iterative UX design consulting. Our expert team leverages cutting-edge methods and UX principles to create solutions that are not just functional, but also beautiful and emotionally resonant.
                        <br /><br />
                        <span>Our Experience Design Steps:</span>
                    </div>
                    <div className="edinfolists">
                        <div className="edinfolist">
                            <i class="fa-solid fa-check"></i>
                            <div className="edinfolistdesc">
                                <p> Research : </p>
                                <ul>
                                    <li>Conduct rigorous market analysis and UX audits.</li>
                                    <li>Perform secondary and primary research, including ethnographic studies and interviews.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="edinfolist">
                            <i class="fa-solid fa-check"></i>
                            <div className="edinfolistdesc">
                                <p> Model : </p>
                                <ul>
                                    <li>Map personas and their journeys through the system.</li>
                                    <li>Develop comprehensive blueprints for touchpoints and digital features.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="edinfolist">
                            <i class="fa-solid fa-check"></i>
                            <div className="edinfolistdesc">
                                <p>Identify : </p>
                                <ul>
                                    <li>Synthesizing research findings to identify problems and opportunities</li>
                                    <li>Generating ideations and potential solutions, progressing to prototypes</li>
                                </ul>
                            </div>
                        </div>
                        <div className="edinfolist">
                            <i class="fa-solid fa-check"></i>
                            <div className="edinfolistdesc">
                                <p> Prototype : </p>
                                <ul>
                                    <li>Developing visual representations such as sketches, wireframes, and prototypes</li>
                                    <li>Assessing effectiveness, usability, and impact through various formats</li>
                                </ul>
                            </div>
                        </div>
                        <div className="edinfolist">
                            <i class="fa-solid fa-check"></i>
                            <div className="edinfolistdesc">
                                <p> Test : </p>
                                <ul>
                                    <li>Conducting usability, heuristics, and preference testing</li>
                                    <li>Iteratively testing solutions with users, stakeholders, and the market</li>
                                </ul>
                            </div>
                        </div>
                        <div className="edinfolist">
                            <label style={{ fontSize: '1.1rem' }}>Our iterative methodology enables us to translate innovative concepts into exceptional products and services, setting the standard for excellence in UX design.</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
