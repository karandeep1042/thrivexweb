import React from 'react'
import img1 from '../../../Resources/dtshero.jpg'

export default function Aboutinfo3() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Who We Are
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            THRIVEX is a digitally native firm specializing in digital transformation services and consulting. We offer a wide range of solutions, including:
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Data & Analytics Solutions
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Unlocking the power of data & AI to make smarter, data-driven decisions.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Experience Design:
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Crafting intuitive, engaging user experiences that drive results.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Enterprise Applications:
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Implementing & supporting enterprise grade applications to streamline your operations.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Product & Platform Engineering:
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Building & Integrating innovative software products and platforms to propel your business forward.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>
                                    Digital Talent Solutions:
                                </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Connecting you with the top talent needed to thrive in the digital age.
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
