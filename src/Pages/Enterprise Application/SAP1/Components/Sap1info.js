import React from 'react'
import img1 from '../../../../Resources/SAP/SAP1info.webp'

export default function Sap1info() {
  return (
    <>
      <div className="homeinfomaincontainer">
        <div className="aboutherosection2">
          <img src={img1} alt="" />
        </div>
        <div className="homeinfosection1">
          <div className="homeinfoheader" style={{ color: '#0eaae3' }}>
            Why opt for SAP S/4HANA?
          </div>
          <div className="homeinfodescription" style={{ margin: '1vh 0vw' }}>
            <p>
              SAP S/4HANA introduces a fresh approach to operations. Embrace the potential of this intelligent ERP, engineered to simplify and automate business workflows, empowering your company to advance in digital innovation. Its primary advantages encompass:
            </p>
          </div>
          <div className="homeinfolists">
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Latest-Generation ERP</p>
              </div>
              <div className="dtsinfolistedescription">
                Designed for enhanced user-friendliness, featuring a modern and intuitive interface.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Simplified Core</p>
              </div>
              <div className="dtsinfolistedescription">
                This approach allows swift adoption of the latest technological advancements without extensive system overhauls. It utilizes cloud-compatible extensions and minimizes customization.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Modular and Scalable Solution</p>
              </div>
              <div className="dtsinfolistedescription">
                Choose between deploying the entire suite or selecting specific modules as required.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>In-Memory SAP HANA Technology Platform</p>
              </div>
              <div className="dtsinfolistedescription">
                Leverage a single, high-performance in-memory database for faster, real-time access to information, expediting decision-making.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Improved User Experience</p>
              </div>
              <div className="dtsinfolistedescription">
                SAP FIORI enables the creation and customization of visually appealing and intuitive apps, standardizing user interactions with the system.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Continuous Innovation</p>
              </div>
              <div className="dtsinfolistedescription">
                SAP S/4HANA integrates cutting-edge technologies like artificial intelligence, machine learning, and robotic process automation (RPA) for optimized operations, including IoT processes.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Enhanced Connectivity</p>
              </div>
              <div className="dtsinfolistedescription">
                Facilitate real-time connections between company resources and external devices through business networks.
              </div>
            </div>
            <div className="dtsinfolist">
              <div className="dtsinfolistheader">
                <i class="fa-solid fa-check"></i>
                <p>Adherence to Best Practices</p>
              </div>
              <div className="dtsinfolistedescription">
                Benefit from preconfigured, industry-leading processes for efficient operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
