import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'

export default function CloudNativeInfo() {
    return (
        <>
            <div className="dtsheromaincontainer">
                <div className="aboutherosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Our Approach
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            At THRIVEX, we specialize in developing new applications and modernizing legacy systems with cloud-native architectures. We employ serverless computing, microservices, container technologies (Docker/Kubernetes), and continuous integration/continuous deployment (CI/CD) to ensure scalable and maintainable software.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <p id='homeinfolistsheader' style={{ fontSize: '2rem', color: '#0eaae3' }}>Key Benefits :</p>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Transform Your Products</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Convert on-premise products into advanced multi-tenant SaaS platforms with our expert engineering.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Accelerated Releases: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Achieve faster, more consistent, and higher quality releases through our CI/CD accelerator.

                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Seamless Legacy Transition:</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Gradually transition from monolithic applications with minimal disruption using our cloud-native accelerator.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
            </div>
            {/* <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    
                </div>
            </div> */}

        </>
    )
}
