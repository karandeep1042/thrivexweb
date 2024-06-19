import React from 'react'
import '../../../../css/Data & AI/DataAICards2.css'
import img1 from '../../../../Resources/Data & AI/Microsoft_logo_(2012).svg.webp'

export default function DataAICards2() {

    const cardinfo = []

  return (
    <>
        <div className="dataaicards2maincontainer">
            <div className="dataaicards2maincontainerheader">
                Technologies & Platforms
            </div>
            <div className="dataaicards2maincontainercards">
                <div className="dataaicards2maincontainercard">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
