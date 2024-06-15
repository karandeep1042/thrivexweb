import React from 'react'
import img1 from '../../../Resources/dtshero2.jpg'

export default function DtsHero2() {
  return (
    <>
      <div className="dtsheromaincontainer">
        <div className="aboutherosection1">
          <div className="ahs1info">
            <div className="aboutherosection1infoheader" style={{ color: '#0eaae3' }}>
              <p>Industry-Specific Expertise</p>
            </div>
            <div className="aboutherosection1infodescription">
              Our experience spans a wide range of industries, providing specialized digital talent solutions for: <br /><br />
              •	Banking and Financial Services <br />
              •	Insurance <br />
              •	Healthcare <br />
              •	Life Sciences <br />
              •	Technology <br />
              •	Media <br />
              •	Telecommunications <br />
              •	Consumer Goods <br />
              •	Retail <br /><br />
              We understand the unique challenges of each industry and bring in technology talent that meets those specific needs.
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
