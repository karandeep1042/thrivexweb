import React from 'react'
import img1 from '../../../../Resources/Product Engineering/modernizationinfo.jpg'

export default function Modernizationinfo() {
    return (
        <>
            <div className="homeinfomaincontainer">
                <div className="aboutherosection2">
                    <img src={img1} alt="" />
                </div>
                <div className="homeinfosection1">
                    <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
                        Approach to Enterprise Application Modernization
                    </div>
                    <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
                        <p>
                            When your technology hinders your business goals, it's time for an update! <br /><br />
                            We identify gaps and revamp your business by initiating legacy system migration, streamlining operations, which helps you drive your business growth. We assess your current landscape and build robust architecture frameworks. Our team of architects, software engineers, and developers is ready to convert your vision into reality.
                        </p>
                    </div>
                    <div className="homeinfolists">
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Technology Assessment</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Conduct a thorough technology assessment to gain insights into your digital infrastructure and develop a roadmap for revitalizing existing applications.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Focused Mobility</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Utilize workplace modernization strategies to foster collaboration and enable enterprise mobility, enhancing productivity and connectivity.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Minimal Disruption Migration</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Migrate applications to a hybrid cloud environment while minimizing disruptions to existing business operations, ensuring seamless transition and continuity.
                            </div>
                        </div>
                        <div className="dtsinfolist">
                            <div className="dtsinfolistheader">
                                <i class="fa-solid fa-check"></i>
                                <p>Increased Efficiency</p>
                            </div>
                            <div className="dtsinfolistedescription">
                                Enhance the functionality of applications to boost scalability and ease of maintenance, driving efficiency gains across your organization.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
