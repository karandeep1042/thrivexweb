import React from 'react'
import '../../../../css/Data & AI/DataAICards2.css'
import img1 from '../../../../Resources/Data & AI/Microsoft_logo_(2012).svg.webp'
import img2 from '../../../../Resources/Data & AI/Google_Cloud_logo.svg.png'
import img3 from '../../../../Resources/Data & AI/Snowflake_Logo.svg.png'
import img4 from '../../../../Resources/Data & AI/databricks-logo.png'
import img5 from '../../../../Resources/Data & AI/Qlik_Logo.svg.png'
import img6 from '../../../../Resources/Data & AI/640px-Tableau_Logo.png'
import img7 from '../../../../Resources/Data & AI/power-bi_logo.png'
import img8 from '../../../../Resources/Data & AI/SAP_2011_logo.svg.png'
import img9 from '../../../../Resources/Data & AI/logo-btp.png'

export default function DataAICards2() {

    const cardinfo = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

    return (
        <>
            <div className="dataaicards2maincontainer">
                <div className="dataaicards2maincontainerheader">
                    Technologies & Platforms : We work with
                </div>
                <div className="dataaicards2maincontainercards">
                    {cardinfo.map((item, index) => (
                        <div className="dataaicards2maincontainercard">
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
