import React from 'react'
import img1 from '../../../../Resources/SAP/SAPcard1.webp'
import img2 from '../../../../Resources/SAP/SAPcard2.webp'
import img3 from '../../../../Resources/SAP/SAPcard3.png'
import img4 from '../../../../Resources/SAP/SAPcard4.png'
import img5 from '../../../../Resources/SAP/SAPcard5.png'

export default function Sap1hanacards() {
    const cultureData = [
        {
            img: img1,
            title: 'Lead to Cash (L2C)',
            description: 'The Lead to Cash (L2C) solutions offered by SAP offer a full range of integrated tools specifically designed to manage lead generation, sales, invoicing, and collections activities. These technologies are designed to maximize revenue, improve client lifecycle management, and streamline sales operations. They offer total control over the whole process from client acquisition to revenue generation, integrating smoothly with other systems like inventory and financial administration. As a result, SAP streamlines the lead-to-cash procedure, guaranteeing effectiveness and providing insightful data on sales operations.'
        },
        {
            img: img2,
            title: 'Design to Operate (D2O)',
            description: 'Design to Operate (D2O) from SAP provides integrated capabilities for supply chain, operations management, product design, and production planning, covering the entire product lifecycle. Through the use of cutting-edge technology like AI and IoT, these solutions improve productivity, profitability, and quality. D2O promotes product design and manufacturing agility, inventory optimization, lead time reduction, prompt delivery, and consistent quality assurance, all of which enhance customer satisfaction as well as align with sustainability goals.'
        },
        {
            img: img3,
            title: 'Source to Pay (S2P)',
            description: 'SAPs Source-to-Pay (S2P) solutions digitize the entire procurement process, spanning from need identification to payment. These solutions are designed to enhance efficiency, productivity, and transparency by automating repetitive tasks and improving inventory management. Additionally, SAPs S2P facilitates better collaboration with suppliers, consolidates purchases to enhance performance, conducts spend analysis, and ultimately drives business value.'
        },
        {
            img: img4,
            title: 'Recruit-to-Retire (R2R)',
            description: 'SAPs Recruit-to-Retire (R2R) solutions oversee the complete employee lifecycle, from recruitment to retirement. These solutions facilitate recruitment processes, streamline onboarding, manage performance, support skills development, administer compensation and benefits, and facilitate succession planning. Furthermore, they ensure smooth integration across different SAP modules, thereby enhancing workforce management, payroll, and retirement planning, which includes managing travel and expense reports.'
        },
        {
            img: img5,
            title: 'Record to Report (R2R)',
            description: 'SAPs Record-to-Report (R2R) solutions effectively manage the full spectrum of financial transactions, from inception to reporting. These tools streamline tasks like general ledger accounting, accounts receivable and payable, asset management, financial analysis, and reporting. R2R solutions deliver real-time visibility into financial data, facilitating better decision-making and regulatory adherence, while also reducing inaccuracies and expediting financial closing procedures.'
        },
    ]

    return (
        <>
            <div className="careerculturemaincontainer">
                <div className="careerculturechildcontainer">
                    <div className="careercultureheader">
                        <p>S/4 HANA enabled business <span>processes </span></p>
                    </div>
                    <div className="careerculturecards">
                        {cultureData.map((item, index) => (
                            <div className="careerculturecard">
                                <div className="careerculturecardimg">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="careerculturecardinfo">
                                    <div className="careeerculturecardtitle">
                                        {item.title}
                                    </div>
                                    <div className="careeerculturecarddescription">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
