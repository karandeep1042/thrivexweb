import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizatiohero.jpg'

export default function CloudNativeInfo2() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Cloud-Native Development Services
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            <span style={{color:'#0eaae3',fontWeight:'600'}}>Harness the Power of the Cloud for Superior Business Results. </span>
                            Cloud-native development promotes rapid software delivery, efficient resource utilization, and alignment with business objectives. THRIVEX uses containerization, microservices, and DevOps practices to transform your operations and development processes.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <p id='homeinfolistsheader' style={{ fontSize: '2rem', color: '#0eaae3'}}>Core Components of Cloud-Native Architecture:</p>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Microservices Architecture : </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Develop applications as collections of small, independently deployable services managed by dedicated teams.

                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Containerization: </p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Use containers to isolate microservices, ensuring high accessibility, scalability, and portability across environments.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Cloud Infrastructure:</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Utilize storage, virtualization, and orchestration tools to support cloud-native computing.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>DevOps Culture:</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Integrate development and operations teams for rapid, consistent software development and deployment.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
